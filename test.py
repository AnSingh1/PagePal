import re
import requests
from bs4 import BeautifulSoup


#gets the link and book name from the first search result

search_query = "19"

url = f'https://www.sparknotes.com/search?q={search_query}'

response = requests.get(url)
html_content = response.content

soup = BeautifulSoup(html_content, 'html.parser')

search_results = soup.find(class_="search-result-block top-result lit-search-icon")

link = search_results.find('a').get('href')
name = search_results.find('h3').text.strip().rsplit(' ', 2)[0]

print(link)
print(name)


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

print(chapters)

