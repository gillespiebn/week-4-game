var randomNumber;
var won = 0;
var lost = 0;
var score = 0;

// this functong starts and restarts the game
	//generates new random numbers
	//resets score
var reset = function() {

	$('.crystalGems').empty();

	//array of images for each crystal gem

	var images = 
				['assets/images/steven.jpg',
				 'assets/images/garnet.jpg',
				 'assets/images/pearl.jpg',
				 'assets/images/amethyst.jpg'];

	//generates random number between 19 and 120 in div with product class

	randomNumber = Math.floor(Math.random() * 101) + 19;

	$('.product').html(randomNumber);

	//for loop creates gems with random numbers between 1 and 12

	for(var i = 0; i < 4; i++){

		var random = Math.floor(Math.random() * 11) + 1;
		
		//creates a div with class crystal and attribute of random number

		var crystal = $('<div>');
			crystal.attr({
				"class": "crystal",
				"data-random": random
			});

			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"background-size":"cover"

			});

		$(".crystalGems").append(crystal);

	}

	$('.score').html(score);
	
}

reset();


$(document).on('click', '.crystal', function () {

	var num = parseInt($(this).attr('data-random'));

	score += num;


	$('.score').html(score);

	console.log(score);
	

		if (score > randomNumber){

			lost++;

			$('.lost').html(lost);

			score = 0;

			reset();

		}
		else if (score === randomNumber) {

			won++;

			$('.won').html(won);

			score = 0;

			reset();
			
	}

});


