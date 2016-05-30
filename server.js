var express = require('express'),
	app = express(),
	router = require('./routes'),
	morgan = require('morgan'),
	port = process.env.PORT || 8000;

app.use(morgan('dev'));

// app.use('/api', router);

app
	.use(express.static('./client'))
	.use('/api', router)
	.get('/', function (req, res) {
		res.sendFile('client/index.html', {"root": "."} );
	})
	.listen(port, function() {
		console.log('Brewing on locahost:' + port);
	});
