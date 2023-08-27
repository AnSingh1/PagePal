import os
from flask import Flask, render_template, request, jsonify, send_from_directory
from bs4 import BeautifulSoup
import requests
import json
import re
import openai
import dotenv

dotenv.load_dotenv()

app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serveReactApp(path):
    print(path)
    if path.startswith('api/') or path.startswith('static/'):
        return app.send_static_file(path)
    
    # Use the correct MIME types for JavaScript and CSS files
    if path.endswith('.js'):
        return send_from_directory('templates', path, mimetype='application/javascript')
    elif path.endswith('.css'):
        return send_from_directory('templates', path, mimetype='text/css')
    elif path.endswith('.svg'):
        return send_from_directory('templates', path, mimetype='image/svg+xml')
    
    else:
        print("Queued website")
        return send_from_directory('templates/', 'index.html')


@app.route('/initialize', methods = ["POST"])
def initialize():
    data = request.form
    input = data['input']

    #gets the link and book name from the first search result
    search_query = input

    url = f'https://www.sparknotes.com/search?q={search_query}'

    print(f"searching for {search_query}...")

    response = requests.get(url)
    html_content = response.content

    print(f'grabbing search results...')

    soup = BeautifulSoup(html_content, 'html.parser')

    search_results = soup.find(class_="search-result-block top-result lit-search-icon")

    if search_results == None:
        print("no results")
        return jsonify({})

    link = search_results.find('a').get('href')
    name = search_results.find('h3').text.strip().rsplit(' ', 2)[0]

    print(f'name found: {name}')

    #now needs to get the chapters

    url = f'https://www.sparknotes.com{link}'

    print('searching for chapters...')

    response = requests.get(url)
    html_content = response.content

    soup = BeautifulSoup(html_content, 'html.parser')

    chapters = {}
    chapters["Entire book"] = link + "summary/"


    #getting the links for the chapters
    indiv_chapters = soup.find_all(class_="landing-page__umbrella__link")

    pattern = r'/section(\d+)/$'

    for div in indiv_chapters:
        if re.search(pattern, div.get('href')):
            chapters[div.text.strip()] = div.get('href')

    print('chapters found')

    info = {
        "name": name,
        "link": link,
        "chapters": chapters,
    }

    return jsonify(info)


#generation part
print('trying openai key...')
openai.api_key = os.environ.get('API_KEY')
print('openai key works')

#input format
"""
{
name: {name},
link: {link},
chapter: {chapter},
chapterlink: {link of chapter},

}
"""

@app.route('/generate', methods = ["POST"])
def generate():
    print('pulling data...')
    data = request.form
    name = data['name']
    link = data['link']
    chapter = data['chapter']
    chapterlink = data['chapterLink']
    print(f'data received for {name}, {chapter}:)')

    #get the chapter text
    print('getting book content...')
    url = f"https://www.sparknotes.com{chapterlink}"
    response = requests.get(url)
    html_content = response.content
    print('content received')
    

    soup = BeautifulSoup(html_content, 'html.parser')

    try:
        summarydiv = soup.find(class_='mainTextContent main-container')

        paragraphs = summarydiv.find_all('p')

        content = ""
        for paragraph in paragraphs:
            content += re.sub(r'\s+', ' ', paragraph.text) + '\n'
        print('content formatted via 1')
    except: 
        try:
            summarydiv = soup.find(class_="studyGuideText")
            paragraphs = summarydiv.find_all('p')
            content = ""
            for paragraph in paragraphs:
                content+=re.sub(r'\s+', ' ', paragraph.text) + '\n'
            print('content formatted via 2')

        except:
            return jsonify({"error": "no summary found"})

    with open('instruction.txt', 'r') as file:
        instruction = file.read()

    summaryPrompt = f"""
The user is reading the book {name}, {chapter}. You are to generate 10 questions based off of the summary below.
Summary:
{content}    
    """
    
    messages = [{"role": "system", "content": instruction}, {"role": "system", "content": summaryPrompt}]

    
    print("generating questions...")
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=messages
        )
        result = response["choices"][0]["message"]["content"]

        print(result)
        questions_data = json.loads(result, strict=False)

        return jsonify(questions_data)
    except Exception as e:
        print(e)
    
    print('responses generated')


if __name__ == "__main__":
    app.run(debug=True)
