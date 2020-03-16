from flask import Flask, request 

app = Flask(__name__) 

@app.route('/')
def query_example():
  return 'Hello'

if __name__ == '__main__':
  app.run(debug=True, port=5000)