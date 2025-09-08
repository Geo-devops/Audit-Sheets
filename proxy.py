from flask import Flask, jsonify
import requests

app = Flask(__name__)

GOOGLE_SCRIPT_URL = 'https://script.google.com/a/macros/bold.com/s/AKfycbyAZOQ7DgZHTrtyI-1GeWjI7xDvY4hTgdxOSUlae16nyY602sv0WEyz7OdfmIQvxuw_/exec'  # Replace with real URL

@app.route('/proxy-data')
def proxy_data():
    try:
        response = requests.get(GOOGLE_SCRIPT_URL)
        response.raise_for_status()
        return jsonify(response.json()), 200, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=3000)
