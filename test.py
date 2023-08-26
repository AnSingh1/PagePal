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

chapters = {}
chapters_div = soup.find_all(class_="landing-page__umbrella__section__list")

#getting the links for the full book
fullBookLink = chapters_div[1].find('a').get('href')


chapters["Entire book"] = fullBookLink


#getting the links for the chapters
indiv_chapters = chapters_div[0].find_all(class_="landing-page__umbrella__link")

for i in indiv_chapters:
    chapters[i.text.strip()] = i.get('href')

print(chapters)

