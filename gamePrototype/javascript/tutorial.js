// initialize mouse over tooltips 
$( document ).ready(function() { 
	$( document ).tooltip();

	// demo of the fight situatuin
	$( "#demo-select1" ).click(function() {
		var demoUpdatedText1 = '<p>Say, you had enough strength and you beat the enemy!' +
		' You find a lollipop in his pocket. You have an option to keep it or ignore it. Click "Keep the item" ' +
		'and then check you backpack.</p>'

  		$("#demoHeader").html(demoUpdatedText1);
  		// remove extra choices
  		$("#demo-select3").empty();
		$("#demo-select4").empty();
		// add new text to input labels
  		$("#demo-label1").text('Keep the item');
  		$("#demo-label2").text('Ignore the item and move on');


  			// demo of selecting an item
		  	$( "#demo-select1" ).click(function() {
		  		$("#demoItem").html('Lollipop');
		  		$("#backpack").html('');

		  		var demoUpdatedText2 = "<p>This is how you choose to put a new item in your backpack " +
		  		"(you still have 5 free spots, the lollipop is a little gift to cheer you up!). " +
		  		"<br>You will begin your game in the city and will return there to change the game area. " +
		  		"When you complete all three areas, you can go to the Python's nest" +
		  		" and trade penguins for a final battle</p>"

		  		$("#demoHeader").replaceWith(demoUpdatedText2);
		  		$("#demo-select1").empty()
				$("#demo-select2").empty();

				// add 'Im ready to go to the city' button
				 var goToCityButton = "<a href='#city-page' class='ui-btn ui-shadow ui-btn-inline ui-icon-arrow-d ui-btn-icon-left'>I'm ready to go to the City!</a>";
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
	} else if (activePageId == "tutorial-page") {
		$( "#set-description, #user-points, #quit-game, #open-backpack, #hints-btn, #penguins").tooltip({
  			disabled: false
		});
	}
  });
