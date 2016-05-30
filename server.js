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
	.get('*', function (req, res) {
		if (!req) {
			res.redirect('/beers');
		}
		res.sendFile('client/main.html', {"root": "."} );
	})
	.listen(port, function() {
		console.log('Brewing on locahost:' + port);
	});
