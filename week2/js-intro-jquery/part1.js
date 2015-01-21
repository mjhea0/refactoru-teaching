$(function() {

  console.log("ready!");

  $("#console-btn").click(function() {
    console.log("message to the console")
  });

  $("#text-btn").click(function() {
    var response = "random text";
    $("#text-response").append(response);
  });

  $("#header-btn").click(function() {
    var response = "<h1>header</h1>";
    $("#header-response").append(response);
  });

  $("#list-btn").click(function() {
    var response = "<ol><li>item one</li><li>item two</li><li>item three</li></ol>";
    $("#list-response").append(response);
  });

});