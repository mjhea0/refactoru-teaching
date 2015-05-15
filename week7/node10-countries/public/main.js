$(document).on('ready', function() {

  $('#load-countries').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      url: '/countries',
      type: 'get',
      success: function(results) {
        var el = $('<ul>');
        for (var i = 0; i < results.length; i++) {
          el.append('<li>'+ results[i].name);
        }
        $('#main').append(el);
      }
    });
  });

  $('#search').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      url: '/search',
      type: 'post',
      data: { country: $('#search-country').val() },
      success: function(results) {
        $('ul').empty();
        for (var i = 0; i < results.length; i++) {
          $('ul').append('<li>' + results[i].name);
        }
      }
    });
  });

});