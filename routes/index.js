var express = require('express');
var router = express.Router();

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