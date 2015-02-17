var fs = require('fs'),
    input = process.argv[2],
    output = process.argv[3],
    csvFile = fs.readFileSync(input, 'utf-8');


function convertCSVtoJSON(csvFile) {
  // output array
  var json = [];
  // output object
  var obj = {};
  // create array for each line
  var newlineArray = csvFile.split('\n');
  // get titles
  var titles = newlineArray.shift().split(',');
  //
  while(newlineArray.length > 0) {
    // grab each line as an array
    var arr = newlineArray.shift().split(',');
    //
    for(var i = 0; i < arr.length; i++) {
      obj[titles[i]] = arr[i];
    }
    json.push(JSON.stringify(obj)+'\n');
  }
  return json;
}


fs.writeFileSync(output, convertCSVtoJSON(csvFile));