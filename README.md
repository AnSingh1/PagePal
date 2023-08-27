# PagePal ![](/client/public/logo.svg)

PagePal is a web app that aims to help people understand what they are reading by quizzing them the book's content. No student wants to read something they'll instantly forget, so PagePal gives the power of AI to assess the user. PagePal is simple to use! Just go on the website, search for your book and chapter, and a multiple choice quiz is generated for you to test your understanding. Using GPT-3, PagePal will generate relevant questions relating to a book and its respective chapter. It uses a custom webscraper to get summaries of the book which means that even new books are automatically entered into the PagePal database.

<br>

## Why did we make PagePal?

We, developers of PagePal, share a passion for reading and yet feel as though schools, especially in earlier years, don't teach students to read effectively. This results in students adopting poor reading habits, where they utilize online summaries, analysis, and more, instead of simply reading the book themselves and effectively trying to understand it. As a result, PagePal aims to help people develop effective reading habits by quizzing them on the book by individual chapters. 

<br>

## Technologies

- [Vite](https://vitejs.dev/) - Bundler
- [React.js](https://react.dev) - JS Framework
- [Tailwind CSS](https://tailwindcss.com) - CSS Framework
- [Flask](https://flask.palletsprojects.com/en/2.3.x/) - Backend
- [OpenAI GPT-3](https://openai.com/blog/openai-api) - AI
- [Beautiful Soup](https://pypi.org/project/beautifulsoup4/) - Web Scraper

<br>

## PagePal local setup
1. Clone the repository using `git clone https://github.com/AnSingh1/Lexily.git`
2. CD to the directory
3. Have python installed
4. Run `pip install -r requirements.txt` to install all of the necessary packages
5. Put your OpenAI API in the .env file
6. Run app.py

PagePal was developed in 3 days for [TechOptimum Hacks 2023](https://hacks.techoptimum.org/).
<br>
View our submission on [Devpost](https://devpost.com/software/PagePal).
