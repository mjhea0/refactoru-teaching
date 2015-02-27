$(function() {

  $('#languageTo').prop("disabled", true);
  $('#languageFrom').change(function() {
    $('#languageTo').prop("disabled", false);
  });

  // translate a word
  $('#translate-btn').click(function(e) {

    e.preventDefault();

    var wordFrom = $('#languageFrom option:selected').attr('data-language');
    var wordTo = $('#languageTo option:selected').attr('data-language');
    var word = $('#translateWord').val();
    var wordObject = {
      text: word,
      from: wordFrom,
      to: wordTo,
    };

    $.post('/translate', wordObject, function(data) {
      if (data.errorCode) {
        $('#translated-word').html('<h3>Sorry. No results could be found.</h3>');
      } else {
      $('#translated-word').html('<h3><em>'+capitalize(word)+
        '</em> translates to <em>'+data.translation+'</em>.</h3>');
      }
    });

  });

});

function capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}