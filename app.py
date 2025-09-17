from flask import Flask, jsonify, render_template
from flask_cors import CORS
import periodictable
from periodictable import elements

symbol_to_name = {el.symbol: el.name for el in elements if el.symbol}

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/element/<symbol>')
def get_element(symbol):
    name = symbol_to_name.get(symbol)
    if not name:
        return jsonify({"error": f"Element '{symbol}' not found"}), 404
    try:
        elem = getattr(periodictable, name.lower())
        data = {
            "name": elem.name,
            "symbol": elem.symbol,
            "number": elem.number,
            "mass": elem.mass,
            "density": elem.density,
            "boiling_point": elem.boiling_point,
            "melting_point": elem.melting_point
        }
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)