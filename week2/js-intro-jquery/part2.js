$(function() {

  console.log("ready!");

  $("p").on( "mouseover", function() {
    $(this).css("color", "pink");
  });

  $("h1").on( "mouseover", function() {
    $(this).append("!");
  });

  $("a").on( "click", function() {
    if (!confirm("Are you sure you want to follow that link?")) {
      $(this).remove()
      return false;
    }
  });

});



