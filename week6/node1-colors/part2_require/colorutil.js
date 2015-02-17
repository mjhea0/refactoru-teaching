function luminosity(red, green, blue) {
  return  0.2126*red + 0.7152*green + 0.0722*blue;
}

function darken(red, green, blue) {
  var result = [red * 0.8, green * 0.8, blue * 0.8];
  return result.join(' ');
}

module.exports = {
  luminosity: luminosity,
  darken: darken
};
