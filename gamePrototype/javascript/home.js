// ACCORDION MENU SETTINGS
  $( document ).ready(function() { 

    $( "#mypanel" ).panel();

      $( "#col2" ).collapsible({
        disabled: true
      });
      $( "#col3" ).collapsible({
        disabled: true
      });
      $( "#col4" ).collapsible({
        disabled: true
      });

	  //disable textinput so cant be changed	  
   $( "#health-points" ).textinput({
  	disabled: true
   });
  
   $( "#strength-points" ).textinput({
  	disabled: true
   });
  
   $( "#smart-points" ).textinput({
  	disabled: true
   });

  
   $( "#money" ).textinput({
  	disabled: true
   });

    // when user sets the name, release lower accordion section
    $("#next1").click(function() {
      if ($("#name").val() !== '') {
          $( "#col2" ).collapsible( "expand" );
           $( "#col1" ).collapsible("enable" );
      } else {
        alert('Please enter a name!');
      }
    });
// when user sets the character, release lower accordion section
    $("#next2").click(function() {
        $( "#col3" ).collapsible( "expand" );
        $( "#col2" ).collapsible("enable" );
        $( "#col3" ).collapsible("enable" );
    });
	  
// when user sets the goal, release lower accordion section
    $("#next3").click(function() {
        $( "#col4" ).collapsible( "expand" );
        $( "#col4" ).collapsible("enable" );
    });

	 // when user clicks in input with numbers, select the content
  	$("input[type='number']").on("click", function () {
     		$(this).select();
 	 });

    //if the letter is not digit then display error and don't type anything   
  $("#health").keypress(function (e) {
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        $("#errmsg").html("Digits Only").show().fadeOut("slow");
               return false;
    }
   });
	
  
  
  //if the letter is not digit then display error and don't type anything   
  $("#strength").keypress(function (e) {
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        $("#errmsg1").html("Digits Only").show().fadeOut("slow");
               return false;
    }
   });
    
  //if the letter is not digit then display error and don't type anything   
  $("#intelligence").keypress(function (e) {
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        $("#errmsg2").html("Digits Only").show().fadeOut("slow");
               return false;
    }
   });


    // when user is ready with the steps:
    $("#ready").click(function() {
	  if ($("#health").val() == "" || $("#health").val() == null)
		  $("#health").val(1);
		
	  if ($("#strength").val() == "" || $("#strength").val() == null)
		  $("#strength").val(1);
		
	 if ($("#intelligence").val() == "" || $("#intelligence").val() == null)
		  $("#intelligence").val(1);
		  
      if(parseInt($("#health").val()) + parseInt($("#strength").val()) + parseInt($("#intelligence").val()) > 100)
      {
        alert("You have 100 points. Distribute them accordingly"); 
		$( "#begin" ).disable(true);  
      }
      else {
        // enable the start button
	  $( "#begin" ).removeAttr('disabled').removeClass( 'ui-state-disabled' );
      };

      // replace the introduction text with the chosen options
	  var userName = $("#name").val();
      var selectedChar = $("#select-choice-0 option:selected" ).text();
      var selectedGoal = $("#select-choice-1 option:selected" ).text();

      $("#welcome").html("Get ready, " + userName + "!");

      var introText = "Your character is: " + selectedChar + "<br>Your goal is: " + selectedGoal + 
      "<br>Your initial points are:" +
      "<br>Health: " + $("#health").val() +
      "<br>Strength: " + $("#strength").val() +
      "<br>Intelligence: " + $("#intelligence").val() +
      "<br>Initial money: 500 coins" +
      "<br>GOOD LUCK!";
      // set the new text
      $("#intro-text").html(introText); 

      // set the character and goal on the GAME PAGE
      $("#set-char").html(selectedChar.toUpperCase());
      $("#set-goal").html(selectedGoal.toUpperCase());
      $("#set-name").html(userName.toUpperCase());

      // set the initial points on the GAME PAGE
      $("#health-points").val($("#health").val());
      $("#strength-points").val($("#strength").val());
      $("#smart-points").val($("#intelligence").val());
  });
    // reset points in input fields
    $("#reset").click(function() {
      $("#health").val('0');
      $("#strength").val('0');
      $("#intelligence").val('0');
    });

    // initialize the external header#2
    $( "#header2" ).toolbar();
	  
	  $("#quit-game").click(function() {
		  	window.location.replace('#home-page');
	  		location.reload(true);
	  });
	  
	 $("#restart").click(function() {
       		 window.location.replace('#home-page');
       		 location.reload(true);
   	 });	  
});



 // hide external header if the page has internal header
  $(document).on("pagecontainerbeforeshow",function(event, ui) {
    var activePage = ui.toPage;
    if(activePage.find("div[data-role=header]").length > 0 ) {
        $("#header2").hide();
    } else {
        $("#header2").show();
    }
  });


 
