from flask import Flask, request, jsonify
import os
import weather
import routes

app = Flask(__name__)

@app.route('/api/getRoutes')
def getRoutes():
  fromParam = request.args.get('from')
  toParam = request.args.get('to')

  if not fromParam:
      error = {
        "error":"'From' query parameter unspecified"
      }
      return jsonify(error), 400
  if not toParam:
      error = {
      "error":"'To' query parameter unspecified"
      }
      return jsonify(error), 400

  global response
  response = routes.getRoutes(fromParam, toParam)
  return jsonify(response)

@app.route('/api/getWeather')
def getWeather():
    longitude = request.args.get('lon')
    latitude = request.args.get('lat')

    if not longitude:
        error = {
            "error":"'lon' query parameter unspecified"
        }
        return jsonify(error), 400
    if not latitude:
        error = {
            "error":"'lat' query parameter unspecified"
        }
        return jsonify(error), 400

    global weather
    weather = weather.get(latitude, longitude)
    return jsonify(weather)

if __name__ == '__main__':
  port = int(os.environ.get("PORT",5000))
  app.run(debug=True, port=port)
