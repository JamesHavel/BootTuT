$(document).ready(function() {

  //$('h1').css('border', '4px solid red');

  //$('h1').fadeOut(1000).fadeIn(1000);

  //$('h1').attr('class'));

  //$('img').attr('src, 'img2.jpg');

  //$('img').fadeOut(500, function(){
  //  $(this).attr('src', 'img2.jpg').fadeIn(500);
  //});

  //$('h1').hasClass('lead'));

  //$('h1').addClass('blue').removeClass('lead');

  //$('h1').fadeOut(1000, function(){
  //  $(this).addClass('blue').removeClass('lead').fadeIn(1000);
  //})

  //$('h1').text('Hey you nerds');

  //$('h1').fadeOut(1000, function(){
  //  $(this).addClass('blue').removeClass('lead');
  //  $(this).text('You guys are nerds').fadeIn(1000);
  //})

  //$('h1')html('Heytherebuddy<em>diawhdoawh</em>');

  //$('input').val('yo dude!');

  //$('h1').click(function(){
  //  $(this).toggleClass('blue');
  //};

  //$('html').keypress(function(){
  //  $(this).toggleClass('blue');
  //}))

  //$( "button" ).toggleClass(function() {
  //  $('h1').fadeOut(1000)
  //    .delay(1000)
  //    .queue(function(next) {
  //      $(this).addClass('blue');
  //        next();
  //      })
  //      .fadeIn(1000);

  //$( "button" ).click(function() {
  //  $( "p" ).toggle( "fast" );
  //});

  //$("button").click(function() {
  //  $("p").toggleClass("selected");
  //});

  $("button").click(function(){
    $("h1, h2, p").fadeOut(300)
      .delay(300)
      .queue(function(next) {
        $(this).toggleClass("blue");
          next();
        })
        .fadeIn(300);
  });

});
