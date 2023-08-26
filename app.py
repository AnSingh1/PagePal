from flask import Flask, render_template, request, jsonify, send_from_directory
from bs4 import BeautifulSoup
import json

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
def login():
    data = request.form
    name = data['name']




    chapters = []

    info = {
        "name": name,
        "chapters": chapters,
    }

    return jsonify(info)


if __name__ == "__main__":
    app.run(debug=True)
