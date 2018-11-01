var express = require('express');
var router = express.Router();

var db = require('./queries');

/*
*https://mherman.org/blog/designing-a-restful-api-with-node-and-postgres/
* code sample reference
*/

router.get('/api/puppies', db.getAllPuppies);
router.get('/api/puppies/:ids', db.getSinglePuppy);
router.post('/api/puppies', db.createPuppy);
router.put('/api/puppies/:id', db.updatePuppy);
router.delete('/api/puppies/:id', db.removePuppy);


const check = function(arg,callback){
		if(typeof arg !== 'number'){
			return callback('Not a num');
		}
		callback (null,'number');
	}

	check("2019",function(err,data){
		if(err){
			console.log(err);
		}else{
			console.log(data);
		}
	});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', 
  	{ title: 'Voting Eligibility'});
});

/* GET home page. */
router.get('/puppies', function(req, res, next) {
    res.render('puppies',
        { title: 'Puppy Record insert'});
});

//Contact us page 
router.get('/contact', function(req, res, next) {
  res.render('contact', 
  	{ title: 'New application',
  	   name:'Shanthi',
  	   age:'25' });
});


/* Checking vote eligibility*/
router.post('/check/eligibility', function(req, res, next) {

	var dob_year= req.body.year;

	// Return today's date and time
	var currentTime = new Date();

	// returns the month (from 0 to 11)
	var month = currentTime.getMonth() + 1 ;

	// returns the day of the month (from 1 to 31)
	var day = currentTime.getDate();

	// returns the year (four digits)
	var currentYear = currentTime.getFullYear();

	console.log(currentYear);

	var difference = currentYear-dob_year;


	console.log(difference);

	if( difference>= 18){
		res.send({ 
  			flag: true
  		});
	} else{
		res.send({ 
  			flag: false
  		});
	}
});

module.exports = router;
