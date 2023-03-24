import sys
import flask

app = flask.Flask(__name__)

@app.route("/repeat/")
def repeat():
    # this route repeats the sent text back to demonstrate some of how flask works
    text = flask.request.get_json()["text"]

    if text is None:
        return "Error: body type is not application/json or no attribute 'text' was attached", 400

    print("hello from the /repeat/ route\n", file=sys.stderr)
    return text, 200

@app.route("/generate-text/single/")
def generate_text_single():
    # accepts a single line of text (i.e. one text bubble from the user) and returns the generated text from your model
    return "", 200

@app.route("/generate-text/all/")
def generate_text_all():
    # accepts the entire conversation thus far (i.e. all text bubbles from both user and generator) and returns the generated text
    # use this route if you want the entire context of your conversation to be considered,
    # but you may need to change the logic of your text generation
    return "", 200