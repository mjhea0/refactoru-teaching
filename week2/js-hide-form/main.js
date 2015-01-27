// // hide
// $('.hide-btn').hide();

// $(function() {

//   // handle form submission
//   $('.submit-btn').on('click', function(event) {

//     // prevent form submit
//     event.preventDefault();

//     // grab input values
//     var name = $('.name-input').val();
//     var city = $('.city-input').val();
//     var state = $('.state-input').val();

//     // append values to the dom
//     $('.profile-name').html(name);
//     $('.profile-city').html(city);
//     $('.profile-state').html(state);

//   });

//   // show form
//   $('.show-btn').on('click', function() {
//     // make form visible
//     $('form').toggleClass('profile-form');
//     // hide show form button
//     $(this).hide();
//     // show hide form button
//     $('.hide-btn').show();
//   });

//   // hide form
//   $('.hide-btn').on('click', function() {
//     // make form invisible
//     $('form').toggleClass('profile-form');
//     // hide hide form button
//     $(this).hide();
//     // show show form button
//     $('.show-btn').show();
//   });

// });



// ------- bonus --------- //

// hide
$('.hide-btn').hide();

$(function() {

  // handle form submission
  $('form').on('change', function(event) {

    // prevent form submit
    event.preventDefault();

    // grab input values
    var name = $('.name-input').val();
    var city = $('.city-input').val();
    var state = $('.state-input').val();

    // append values to the dom
    $('.profile-name').html(name);
    $('.profile-city').html(city);
    $('.profile-state').html(state);

  });

  // show form
  $('.show-btn').on('click', function() {
    // make form visible
    $('form').toggleClass('profile-form');
    // grab current values, add to form inputs
    $('.name-input').val($('.profile-name').text());
    $('.city-input').val($('.profile-city').text());
    $('.state-input').val($('.profile-state').text());
    // hide show form button
    $(this).hide();
    // show hide form button
    $('.hide-btn').show();
  });

  // hide form
  $('.hide-btn').on('click', function() {
    // make form invisible
    $('form').toggleClass('profile-form');
    // hide hide form button
    $(this).hide();
    // show show form button
    $('.show-btn').show();
  });

});