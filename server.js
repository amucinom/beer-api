var express = require('express'),
	app = express(),
	proxy = require('http-proxy'),
	router = require('./routes'),
	morgan = require('morgan'),
	port = process.env.PORT || 8000,
	apiForwardingUrl = 'http://api.brewerydb.com/v2/',
	apiProxy = proxy.createProxyServer();

app.use(morgan('dev'));

app
	.use(express.static('./client'))
	.use('/api', router)
	.get('*', function (req, res) {
		res.sendFile('client/index.html', {"root": "."} );
	})
	.listen(port, function() {
		console.log('Brewing on locahost:' + port);
	});
