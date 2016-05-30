var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	connection = mongoose.connection,
	db = require('./config/db'),
	router = express.Router();
var Beer = require('./config/beer');

// Use mongoose for mongodb integration
mongoose.connect(db.url);
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {
	console.log('Mongoose connected!');
});

router
	.use(bodyParser.json())
	.use(bodyParser.urlencoded( { extended: true } ))
	.route('/beers')
	// get all beers
	.get(function (req, res) {
		Beer.find(function(err, beers) {
			if (err) {
				res.send(err);
			}
			res.json(beers);
		});
	})
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
