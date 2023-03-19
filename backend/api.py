import sys
import flask

app = flask.Flask(__name__)

@app.route("/")
def hello_world():
    print("hello world", file=sys.stderr)
    return "hello world", 200