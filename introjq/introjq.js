// Click on IMAGE will hide .6sec and show again
$('img').click(function() {
    $('main').hide(900).delay(600).show(1200);
});

$('#num1 p').click(function() {
    $('#num1 img').slideToggle(700);
});

let div = $('#num2').first();
div.contextmenu(function() {
  div.toggleClass("contextmenu");
});

$('#num3 p').click(function() {
  $('#num3 p').fadeOut( "slow", function() {
    // Animation complete.
  });
});

$('#num4 img').hover(function() {
  $('#num4 img').fadeOut( "slow", function() {
    // Animation complete.
  });
  $( "#num4 img" ).fadeIn( "slow", function() {
    // Animation complete
  });
});
