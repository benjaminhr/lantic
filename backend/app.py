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
    "routes":[]
  }
  return jsonify(routes)

if __name__ == '__main__':
  port = int(os.environ.get("PORT",5000))
  app.run(debug=True, port=port)
