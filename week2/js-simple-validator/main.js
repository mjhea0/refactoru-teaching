var word = prompt('Please enter a word.');
alert('You entered: ' + word + '.' +
      '\nThere are ' + word.length + ' characters in the word.' +
      '\nThe third chracter is ' + word[2] + '.' +
      '\nLowercase: ' + word.toLowerCase() + '.' +
      '\nUppercase: ' + word.toUpperCase() + '.' +
      '\nExample: I like ' + word + '.' +
      '\nSubword: ' + word.substring(2,4) + '.'
);
