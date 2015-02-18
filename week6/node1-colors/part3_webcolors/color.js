var request = require('request'),
    _ = require('underscore'),
    userInput = process.argv[2].toLowerCase();



checkUserColor(userInput);

function checkUserColor(color){
  request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json',
    function (error, response, colors) {
      if (!error && response.statusCode == 200) {
        var colorsJson = JSON.parse(colors);
        var getObject = _.find(colorsJson, function(obj) {
          return obj.name.toLowerCase() === color;
        });
        console.log(getObject.rgb.r+" "+getObject.rgb.g+" "+getObject.rgb.b);
      }
  });
}