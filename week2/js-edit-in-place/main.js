$(function() {

  $('.editable').on('click', function() {

    // grab current state of old textArea box
    var currentState = $(this)

    // create editable textArea box
    var textArea = $('<textarea class="editable-text-box"></textarea>')

    // add editable box to the DOM
    currentState.after(textArea)

    // hide old textArea box
    currentState.hide()

    // add text to textArea box
    textArea.val(currentState.text())

    // update when focus is lost
    textArea.on('blur', function() {
      // hide editable textArea Box
      textArea.hide()
      // show old textArea box
      currentState.show()
      // update state of old textArea box
      currentState.text(textArea.val())
    })

  });

});