import os
from flask import Flask, request, render_template


app = Flask(__name__)
cors = CORS(app)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/puller/')
@cross_origin()
def puller():
	print("HELLOOOOOO!!!!")
	print(request.args)
	quote = request.args['quote']
	name = request.args['name']
	title = request.args['title']
	size = request.args['size']
	return render_template('quote.html', quote=quote, name=name, title=title, size=size)


if __name__ == "__main__":
	app.debug = True
	app.run()