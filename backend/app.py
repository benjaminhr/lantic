from flask import Flask, request, jsonify
import os

app = Flask(__name__)

@app.route('/api/getRoute')
def getRoute():
  fromParam = request.args.get('from')
  toParam = request.args.get('to')
  print(fromParam,toParam)
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
  routes = {
    "routes":[] # filled with all the routes from fromParam to toParam
  }
  return jsonify(routes)

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
    weather = {
        "status": "", # general weather classifcation e.g 'sunny','rainy','cloudy'
        "temp": "36.5", # Degrees celsius
        "windSpeed": "8", # Km/h
        "windDirection": "S", # values range from N,S,E,W
    }
    return jsonify(weather)

if __name__ == '__main__':
  port = int(os.environ.get("PORT",5000))
  app.run(debug=True, port=port)
