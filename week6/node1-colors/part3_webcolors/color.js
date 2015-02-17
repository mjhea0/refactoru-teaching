var request = require('request'),
    _ = require('underscore'),
    userInput = process.argv[2].toLowerCase();

console.log(checkUserColor(userInput));

function checkUserColor(color){
  var test = '';
  request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json',
    function (error, response, colors) {
    if (!error && response.statusCode == 200) {
      var colorsJson = JSON.parse(colors);
      var rgb = _.findWhere(colorsJson, {name: colors}).rgb; // doesn't work
      test += _.values(rgb).join(' ');
    }
  });
  return test;
}