$(function() {

  console.log("ready!");

  $("#middle-button").on('click', function() {

    var html = "<div class='popup'><div class='close'>X</div><h1>Button<br>click!!!</h1></div>";

    $("#popup").append(html);

    $(".close").on('click', function() {
      $("#popup").remove();
    });

  });

});



