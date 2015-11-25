// initialize mouse over tooltips
$( document ).ready(function() { 
	$( document ).tooltip();
 });

// disable mouse over tooltips if the page is not tutorial
$(document).on("pagecontainerbeforeshow",function(event, ui) {
    var activePage = ui.toPage;
	// var activePage = $('body').pagecontainer('getActivePage');
    var activePageId = activePage[0].id;
    if(activePageId !== "tutorial-page") {
 	   $( "#user-points, #quit-game, #open-backpack, #hints-btn, #penguins").tooltip({
  			disabled: true
		});
	} else if (activePageId == "tutorial-page") {
		$( "#user-points, #quit-game, #open-backpack, #hints-btn, #penguins").tooltip({
  			disabled: false
		});
	}
  });
