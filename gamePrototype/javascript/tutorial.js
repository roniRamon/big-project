// initialize mouse over tooltips 
$( document ).ready(function() { 
	 $( document ).tooltip({
	      position: {
	        my: "center bottom-20",
	        at: "center top"
	      }
	  });

	// demo of the fight situatuin
	$( "#demo-select1, #demo-select2, #demo-select3, #demo-select4" ).click(function() {
		var demoUpdatedText1 = '<h3>Say, you had enough strength, you fight the enemy and you win!' +
		' You find a lollipop in his pocket. You have an option to keep it or ignore it. Click any option, ' +
		'but then check you backpack.</h3>'

  		$("#demoHeader").html(demoUpdatedText1);
  		// remove extra choices
  		$("#demo-select3").empty();
		$("#demo-select4").empty();
		// add new text to input labels
  		$("#demo-label1").text('Keep the item');
  		$("#demo-label2").text('Ignore the item and move on');


  			// demo of selecting an item
		  	$( "#demo-select1, #demo-select2").click(function() {
		  		$("#demoItem").html('Lollipop');
		  		$("#backpack").html('');

		  		var demoUpdatedText2 = "<h3>By clicking 'Keep the item' you will collect useful items in your backpack " +
		  		"(you still have 5 free spots, the lollipop is a little gift to cheer you up!). " +
		  		"<br>You will begin your game in the city and will return there to change the game area. " +
		  		"When you complete all three areas, you can go to the Python's nest" +
		  		" and trade penguins for a final battle</h3>"

		  		$("#demoHeader").replaceWith(demoUpdatedText2);
		  		$("#demo-select1").empty()
				$("#demo-select2").empty();

				// add 'Im ready to go to the city' button
				 var goToCityButton = "<a href='#city-page' class='ui-btn ui-shadow ui-btn-inline ui-icon-arrow-d ui-corner-all ui-btn-icon-left'>I'm ready to go to the City!</a>";
				$("#demo-select1").append(goToCityButton);
		  	});
  	});
 });

// disable mouse over tooltips if the page is not tutorial
$(document).on("pagecontainerbeforeshow",function(event, ui) {
    var activePage = ui.toPage;
	// var activePage = $('body').pagecontainer('getActivePage');
    var activePageId = activePage[0].id;
    if(activePageId !== "tutorial-page") {
 	   $( "#set-description, #user-points, #quit-game, #open-backpack, #hints-btn, #penguins").tooltip({
  			disabled: true
		});
	    // remove demo item from the backpack before beginning the game
  		$("#demoItem").hide();
	} else if (activePageId == "tutorial-page") {
		$( "#set-description, #user-points, #quit-game, #open-backpack, #hints-btn, #penguins").tooltip({
  			disabled: false
		});
		// show demo item on tutorial page
		$("#demoItem").show();
	}
  });
