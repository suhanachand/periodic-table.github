from flask import Flask, jsonify, render_template
from flask_cors import CORS
import periodictable

app = Flask(__name__)
CORS(app)

# Build a mapping symbol -> element object for quick lookups
symbol_to_elem = {el.symbol: el for el in periodictable.elements if el.symbol}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/element/<symbol>')
def get_element(symbol):
    # symbols from the client might be capitalized properly, enforce exact match:
    elem = symbol_to_elem.get(symbol)
    if not elem:
        return jsonify({"error": f"Element '{symbol}' not found"}), 404

    # Some properties are None; normalize to null in JSON (Python None -> JSON null)
    try:
        data = {
            "name": elem.name,
            "symbol": elem.symbol,
            "number": elem.number,
            # mass may be a tuple or object; ensure we return a float when possible
            "mass": float(elem.mass) if elem.mass is not None else None,
            "density": float(elem.density) if getattr(elem, "density", None) is not None else None,
            "boiling_point": float(elem.boiling_point) if getattr(elem, "boiling_point", None) is not None else None,
            "melting_point": float(elem.melting_point) if getattr(elem, "melting_point", None) is not None else None,
        }
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    # debug=True only during development
    app.run(host='0.0.0.0', port=5000, debug=True)
