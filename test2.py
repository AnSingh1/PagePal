#getting the chapter summary from a link

import re
import requests
from bs4 import BeautifulSoup

chapter = "Chapters 1 & 2"
chapterlink = "/lit/harrypotter5/summary"

#start here


url = f"https://www.sparknotes.com{chapterlink}"

response = requests.get(url)
html_content = response.content

soup = BeautifulSoup(html_content, 'html.parser')
summarydiv = soup.find(class_='mainTextContent main-container')

paragraphs = summarydiv.find_all('p')

text = ""
for paragraph in paragraphs:
    text += re.sub(r'\s+', ' ', paragraph.text) + '\n'
print(text)
