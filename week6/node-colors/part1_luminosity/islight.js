var red = process.argv[2],
    green = process.argv[3],
    blue = process.argv[4];

function luminosity(red, green, blue) {
  return  0.2126*red + 0.7152*green + 0.0722*blue;
}

function lightOrDark() {
  if(luminosity(red, green, blue) > 155 ) {
    return 'light';
  } else {
    return 'dark';
  }
}

console.log(lightOrDark());