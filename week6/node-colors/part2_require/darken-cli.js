var colorutil = require('./colorutil.js');

var red = process.argv[2],
    green = process.argv[3],
    blue = process.argv[4];

console.log(colorutil.darken(red, green, blue));