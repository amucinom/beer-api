var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	db = mongoose.connection,
	router = express.Router(),
	port = process.env.PORT || 8000;
var Beer = require('./app/models/beer');

// Use mongoose for mongodb integration
mongoose.connect('mongodb://localhost/test');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log('Mongoose connected!');
});

// configure app to use bodyParser to get
// data from POST
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());


// REGISTER ROUTES
// ======================================================
app.use('/api', router);

router.use(function (req, res, next) {
	console.log('Stuff is happening...');
	next();
});

// test main route
router
	.get('/', function (req, res) {
		res.json(
			{ message: 'welcome to the beer api' }
		);
	});


// Make Routes
// =======================================================

router.route('/beers')
	// create new beer. localhost:8000/api/beers
	.post(function (req, res) {
		var beer = new Beer();
		beer.name = req.body.name;
		console.log('name of beer: ' + beer.name);
		beer.save(function(err) {
			if (err) {
				res.send(err);
			}
			res.json( { message: 'Beer created!' } );
		});
	})
	// get all beers
	.get(function (req, res) {
		Beer.find(function(err, bears) {
			if (err) {
				res.send(err);
			}
			res.json(bears);
		});
	});

router.route('/beers/:beer_id')
	// finds a beer by its id
	.get(function(req, res) {
		Beer.findById(req.params.beer_id, function(err, beer) {
			if (err) {
				res.send(err);
			}
			res.json(beer);
		});
	})
	// updates a beer's info
	.put( function(req, res) {
		Beer.findById(req.params.beer_id, function(err, beer) {
			if (err) {
				res.send(err);
			}
			beer.name = req.body.name;

			// save beer
			beer.save(function(err) {
				if (err) {
					res.send(err);
				}
				res.json({ message: 'Beer has been updated!' });
			});
		});
	})
	.delete( function(req, res) {
		Beer.remove({
			_id: req.params.beer_id
		}, function(err, beer) {
			if (err) {
				res.send(err);
			}
			res.json({ message: 'Successfully deleted beer!'} );
		});
	});

// START SERVER
// =======================================================
app
	.use(express.static('./public'))
	.get('/', function (req, res) {
		res.sendFile( __dirname + '/public/main.html' );
	})
	.listen(port);
