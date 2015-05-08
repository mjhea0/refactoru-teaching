var fs = require('fs'),
    input = process.argv[2],
    output = process.argv[3];


fs.readFile(input, 'utf8', function(err, data){
  if (err) {
    return console.log('yikes!');
  }
  // output array
  var json = [];
  // output object
  var obj = {};
  // create array for each line
  var newlineArray = data.split('\n');
  // get titles
  var titles = newlineArray.shift().split(',');
  while(newlineArray.length > 0) {
    // grab each line as an array
    var arr = newlineArray.shift().split(',');
    for(var i = 0; i < arr.length; i++) {
      obj[titles[i]] = arr[i];
    }
    json.push(JSON.stringify(obj)+'\n');
  }
  fs.writeFile(output, json, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('input.csv > output.csv');
  });
});
