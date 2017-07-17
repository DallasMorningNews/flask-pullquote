import os
from flask import Flask, request, render_template

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/dmn/quote/')
def dmn_quote():
    property = 'dallasnews'
    return render_template('dmn_quote.html', property=property)


@app.route('/dmn/big-number/')
def dmn_number():
    return render_template('dmn_number.html')


@app.route('/dmn/cameo/')
def dmn_cameo():
    return render_template('dmn_cameo.html')


@app.route('/aldia/quote/')
def aldia_quote():
    property = 'aldia'
    return render_template('dmn_quote.html', property=property)


@app.route('/guidelive/quote/')
def guidelive_quote():
    property = 'guidelive'
    return render_template('dmn_quote.html', property=property)


@app.route('/sportsday/quote/')
def sportsday_quote():
    property = 'sportsday'
    return render_template('dmn_quote.html', property=property)


@app.route('/neighborsgo/quote/')
def neighborsgo_quote():
    property = 'neighborsgo'
    return render_template('dmn_quote.html', property=property)


@app.route('/quote/puller/')
def quote_puller():
    quote = request.args['quote']
    name = request.args['name']
    title = request.args['title']
    size = request.args['size']
    property = request.args['property']
    return render_template('quote.html', quote=quote, name=name, title=title, size=size, property=property)


@app.route('/number/puller/')
def number_puller():
    num = request.args['num']
    numSize = request.args['numSize']
    numContext = request.args['numContext']
    txtSize = request.args['txtSize']
    source = request.args['source']
    sourceContext = request.args['sourceContext']
    return render_template('number.html', num=num, numSize=numSize, numContext=numContext, txtSize=txtSize, source=source, sourceContext=sourceContext)


@app.route('/cameo/puller/')
def cameo_puller():
    quote = request.args['quote']
    name = request.args['name']
    title = request.args['title']
    size = request.args['size']
    img = request.args['cameo']
    return render_template('cameo.html', quote=quote, name=name, title=title, size=size, img=img)


if __name__ == "__main__":
    app.debug = True
    app.run()
