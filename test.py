import requests
from bs4 import BeautifulSoup


#gets the link and book name from the first search result

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


#now needs to get the chapters

url = f'https://www.sparknotes.com{link}'

response = requests.get(url)
html_content = response.content

soup = BeautifulSoup(html_content, 'html.parser')

chapters_div = soup.find(class_="landing-page__umbrella__section__list")


indiv_chapters = chapters_div.find_all(class_="landing-page__umbrella__link")

for i in indiv_chapters:
    print(i.text.strip())