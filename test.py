import requests
from bs4 import BeautifulSoup

search_query = "harry potter 4"

url = f'https://www.sparknotes.com/search?q={search_query}'

response = requests.get(url)
html_content = response.content

soup = BeautifulSoup(html_content, 'html.parser')

search_results = soup.find(class_="search-result-block top-result lit-search-icon")

link = search_results.find('a').get('href')
name = search_results.find('h3').text.strip()

print(link)
print(name)

#with open('html.txt', 'w', encoding='utf-8') as file:
#    file.write(html_content.decode('utf-8'))
