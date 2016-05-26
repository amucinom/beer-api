var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	connection = mongoose.connection,
	db = require('./config/db')
	router = express.Router();
var Beer = require('./app/models/beer');

// Use mongoose for mongodb integration
mongoose.connect(db.url);
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {
	console.log('Mongoose connected!');
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded( { extended: true } ));

router.use(function (req, res, next) {
	console.log('Stuff is happening...');
	next();
});

router
	.get('/', function (req, res) {
		res.json(
			{ message: 'welcome to the beer api' }
		);
	});

router
	.route('/beers')
	.post(function (req, res) {

		Beer.create({
            name : req.body.name,
            location: req.body.location,
			abv: req.body.abv
        }, function(err, beer) {
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

router
	.route('/beers/:beer_id')
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

module.exports = router;
