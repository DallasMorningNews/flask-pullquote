import os
from flask import Flask, request, render_template

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/dmn/quote/')
def dmn_quote():
    return render_template('dmn_quote.html')


@app.route('/dmn/big-number/')
def dmn_number():
    return render_template('dmn_number.html')

@app.route('/quote/puller/')
def quote_puller():
    quote = request.args['quote']
    name = request.args['name']
    title = request.args['title']
    size = request.args['size']
    return render_template('quote.html', quote=quote, name=name, title=title, size=size)


@app.route('/number/puller/')
def number_puller():
    num = request.args['num']
    numSize = request.args['numSize']
    numContext = request.args['numContext']
    txtSize = request.args['txtSize']
    source = request.args['source']
    sourceContext = request.args['sourceContext']
    return render_template('number.html', num=num, numSize=numSize, numContext=numContext, txtSize=txtSize, source=source, sourceContext=sourceContext)



if __name__ == "__main__":
	app.debug = True
	app.run()