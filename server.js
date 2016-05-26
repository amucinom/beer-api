var express = require('express'),
	app = express(),
	router = require('./routes'),
	morgan = require('morgan'),
	port = process.env.PORT || 8000;

app.use(morgan('dev'));

app.use('/api', router);

app
	.use(express.static('./public'))
	.get('', function (req, res) {
		res.sendFile( __dirname + '/public/main.html' );
	})
	.listen(port);
