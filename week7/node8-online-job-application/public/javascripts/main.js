$(document).on('ready', function() {

  $('.delete').on('click', function() {
    console.log('button clicked!');
    var userID = $(this).attr('data-id');
    console.log(userID);
    $.ajax({
      type: 'post',
      url: '/delete',
      data: {userID: userID},
      success: function() {
        console.log('deleted!');
      }
    });
  });

});