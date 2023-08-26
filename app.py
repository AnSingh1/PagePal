from flask import Flask, render_template, request, jsonify, send_from_directory
from bs4 import BeautifulSoup
import requests
import json
import re
import openai
import dotenv

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


@app.route('/intiailize', methods = ["POST"])
def initialize():
    data = request.form
    input = data['input']

    #gets the link and book name from the first search result
    search_query = input

    url = f'https://www.sparknotes.com/search?q={search_query}'

    response = requests.get(url)
    html_content = response.content

    soup = BeautifulSoup(html_content, 'html.parser')

    search_results = soup.find(class_="search-result-block top-result lit-search-icon")

    if search_results == None:
        print("Broken")
        return
    link = search_results.find('a').get('href')
    name = search_results.find('h3').text.strip().rsplit(' ', 2)[0]


    #now needs to get the chapters

    url = f'https://www.sparknotes.com{link}'

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


    info = {
        "name": name,
        "link": link,
        "chapters": chapters,
    }

    return jsonify(info)



@app.route('/generate', methods = ["POST"])
def generate():
    pass

if __name__ == "__main__":
    app.run(debug=True)
