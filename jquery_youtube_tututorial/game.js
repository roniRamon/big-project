//Been to variables
beentocorridor = true;
// 
//Item variable
sword = false;
//
//Current room
currentroom = 'n_corridor';
//

$(document).ready(function() {

  $('#console').hide().fadeIn(3000);

  $('form').submit(function() {
    var input = $('#command_line').val();
    var check = false;

    function check() {
      check = true;
    }

    //help
    if(input == 'help') {
      $('#message_help').clone().hide().insertBefore('#placeholder').fadeIn(1000);
      check();
    }
    //

    //take commands
    if(input == 'take sword' && currentroom == 'n_corridor') {
      $('<p>You picked up a sword.</p>').insertBefore('#placeholder').fadeIn(1000);
      check();
    }
    else if(input == 'take sword' && currentroom != 'n_corridor') {
      $('<p>The sword is not here!</p>').hide().insertBefore('#placeholder').fadeIn(1000);
      check();
    }
    //

    //goto room
    if(input == 'go west' && currentroom == 'n_corridor') {
      currentroom = 'w_corridor';
      $('<p>You are now in the west corridor.</p>').hide().insertBefore('#placeholder').fadeIn(1000);
      check();
    }
    else if(input == 'go west' && currentroom != 'n_corridor') {
      $('<p>You can\'t go that way!</p>').hide().insertBefore('#placeholder').fadeIn(1000);
      check();
    }

    if(input == 'go east' && currentroom == 'w_corridor') {
      currentroom = 'n_corridor';
      $('<p>You are back at the north corridor.</p>').hide().insertBefore('#placeholder').fadeIn(1000);
      check();
    }
    else if(input == 'go east' && currentroom != 'w_corridor') {
      $('<p>You can\'t go that way!</p>').hide().insertBefore('#placeholder').fadeIn(1000);
      check();
    }

    //don't understand
    else {
      $('<p>I do not understand ' + input + '.</p>').hide().insertBefore('#placeholder').fadeIn(1000);
    }
    //

    //reset text box
    $('#command_line').val('');
    //

  });
});
