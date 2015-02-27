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

  // start a quiz
  // $('#selectQuiz').on('change', function() {
  //   var quizArr;
  //   selectedQuiz = $('#selectQuiz option:selected').attr('data-lang');
  //   quizArr = createWordsObj(words);
  //   $('#quiz').empty();
  //   $('#quiz').append('<h2>Please wait while your quiz is loading</h2>');
  //   $.post('/displayQuiz', {objArr: quizArr}, function(data) {
  //     var i, _i, _len;
  //     $('#quiz').empty();
  //     for (_i = 0, _len = data.length; _i < _len; _i++) {
  //       i = data[_i];
  //       $('#quiz').append('<li class="list-group-item">' + i['translation'] + '<input class="answer-input" type="text" placeholder="Enter Answer"></li>');
  //     }
  //     $('#quiz li').each(function(j) {
  //       $(this).attr('data-eng', quizArr[j]['text']);
  //     });
  //   });
  // });

});

function capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}