from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import weather
import routes

app = Flask(__name__)
CORS(app)


@app.route('/healthz')
def healthz():
    return "ok"


@app.route('/api/getRoutes')
def get_routes():
    from_param = request.args.get('from')
    to_param = request.args.get('to')

    if not from_param:
        error = {
            "error": "'From' query parameter unspecified"
        }
        return jsonify(error), 400

    if not to_param:
        error = {
            "error": "'To' query parameter unspecified"
        }
        return jsonify(error), 400

    global response
    response = routes.get_routes(from_param, to_param)

    return jsonify(response)


@app.route('/api/getWeather')
def get_weather():
    longitude = request.args.get('lon')
    latitude = request.args.get('lat')

    if not longitude:
        error = {
            "error": "'lon' query parameter unspecified"
        }
        return jsonify(error), 400
    if not latitude:
        error = {
            "error": "'lat' query parameter unspecified"
        }
        return jsonify(error), 400

    global weather
    weather_response = weather.get(latitude, longitude)

    return jsonify(weather_response)


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", debug=True, port=port)
