 // Initial array of villains
	var villains = ['Loki', 'Green Goblin', 'Abomination', 'Apocolypse', 'Doomsday', 'The Joker', 'Harley Quinn', 'Red Skull', 'Mystique', 'Poison Ivy'];

	 
	function displayVillainInfo(){
	
	var superv = $(this).data('superv');
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + superv + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {

            	 var results = response.data;

            for (var i = 0; i < results.length; i++) {
            	 	var villainDiv = $('<div>');

                    var p = $('<p>').text("Rating: " + results[i].rating);


                    //--------------------------------
                }

            });
   

	// Generic function for displaying movie data 
	function renderButtons(){ 

		// Deletes the movies prior to adding new movies (this is necessary otherwise you will have repeat buttons)
		$('#buttonsView').empty();

		// Loops through the array of movies
		for (var i = 0; i < movies.length; i++){

			// Then dynamicaly generates buttons for each movie in the array

			// Note the jQUery syntax here... 
		    var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    a.addClass('movie'); // Added a class 
		    a.attr('data-name', movies[i]); // Added a data-attribute
		    a.text(movies[i]); // Provided the initial button text
		    $('#buttonsView').append(a); // Added the button to the HTML
		}
	}

	// ========================================================

	// This function handles events where one button is clicked
	$('#addSuper').on('click', function(){

		// This line of code will grab the input from the textbox
		var superv = $('#movie-input').val().trim();

		// The movie from the textbox is then added to our array
		movies.push(movie);
		
		// Our array then runs which handles the processing of our movie array
		renderButtons();

		// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
		return false;
	})
 $('#supervillain').on('click', function(){

 	 var state = $(this).attr('data-state');

 	 if ( state == 'still'){
                $(this).attr('src', $(this).data('animate'));
                $(this).attr('data-state', 'animate');
            }else{
                $(this).attr('src', $(this).data('still'));
                $(this).attr('data-state', 'still');
            }
     });

 // This calls the renderButtons() function
	renderButtons();