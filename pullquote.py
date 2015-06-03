import os
from flask import Flask, request, render_template
import logging
try:
    # The typical way to import flask-cors
    from flask.ext.cors import cross_origin
except ImportError:
    # Path hack allows examples to be run without installation.
    import os
    parentdir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.sys.path.insert(0, parentdir)

    from flask.ext.cors import cross_origin

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/puller/')
@cross_origin()
def puller():
	quote = request.args['quote']
	name = request.args['name']
	title = request.args['title']
	size = request.args['size']
	return render_template('quote.html', quote=quote, name=name, title=title, size=size)


if __name__ == "__main__":
	app.debug = True
	app.run()