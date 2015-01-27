$(function() {

    console.log('test!'); // sanity check

    // on image click ...
    $(document).on('click', function(event) {

        // find first marker, clone, add to dom
        $('.marker-container')
            .clone()
            .removeClass('inactive')
            .appendTo('#map-container')
            .css({'top': (event.pageY - 32), 'left': (event.pageX - 12)});

        // create note
        var note = '<div class="note">'+
            '<textarea class="from-control note-input" rows="3" cols="20">Add a note...</textarea>'+
            '</div>';

        // add note to dom
        $(note).appendTo('#map-container').css({'top': (event.pageY - 32), 'left': (event.pageX + 15)});

        console.log("X: " + event.pageX + ", Y: " + event.pageY);

        // focus on note
        $('.note-input').focus();

        // hide note
        $('.note-input').blur(function(){
            $(this).addClass('inactive');
        });

    });

    // on marker hoover, show note
    $(document).on('mouseenter', '.map-marker', function(){
        var placedNote = $(this).find('.note-input');
        console.log(placedNote);
        $(placedNote).removeClass('.inactive');
        $('.map-marker').on('mouseleave',function(){
            $(this).find('.note-input').addClass('inactive');
        });
    });

    // on marker click
    $(document).on('click', '.map-marker', function(event) {
        $(this).remove();
        // only remove that one marker
        event.stopPropagation();
    });

});