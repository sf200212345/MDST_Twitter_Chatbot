import sys
import flask
import flask_cors

app = flask.Flask(__name__)
flask_cors.CORS(app)

# this is route to access the user interface
@app.route("/")
def main():
    return flask.render_template("index.html"), 200

@app.route("/repeat/", methods=["POST"])
def repeat():
    # this route repeats the sent text back to demonstrate some of how flask works
    text = flask.request.get_json()["text"]

    if text is None:
        return "Error: body type is not application/json or no attribute 'text' was attached", 400

    print("hello from the /repeat/ route\n", file=sys.stderr)
    return flask.jsonify({"g_text": text}), 200

@app.route("/single/", methods=["POST"])
def generate_text_single():
    # accepts a single line of text (i.e. one text bubble from the user) and returns the generated text from your model
    return flask.jsonify({"g_text": "hello from single"}), 200

@app.route("/all/", methods=["POST"])
def generate_text_all():
    # accepts the entire conversation thus far (i.e. all text bubbles from both user and generator) and returns the generated text
    # entire conversation thus far is an array of strings
    # use this route if you want the entire context of your conversation to be considered,
    # but you may need to change the logic of your text generation
    return flask.jsonify({"g_text": "hello from all"}), 200