from flask import Flask, request
import os

app = Flask(__name__)

@app.route('/')
def query_example():
  return 'Hello'

if __name__ == '__main__':

  port = int(os.environ.get("PORT",5000))
  app.run(debug=True, port=port)
