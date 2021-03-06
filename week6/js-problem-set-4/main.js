// *** helpers *** //

function isNumber(num) {
  return !isNaN(parseInt(num));
}

function isLetter(val){
  if (!val) {
    return false;
  }
  var char = val.toLowerCase().charCodeAt(0);
  return (char >= 97 && char <= 122);
}


// *** add numbers ** ///

function addNumbers(str) {
  var numbers = [];
  strArray = str.split('');
  while(strArray.length > 0) {
    var currentElement = strArray.shift();
    if(isNumber(currentElement)) {
      var tempNum = currentElement;
      while(isNumber(strArray[0])) {
        tempNum += strArray.shift();
      }
      numbers.push(tempNum);
    }
  }
  var sum = 0;
  for(var i = 0; i < numbers.length; i++) {
    sum += +numbers[i];
  }
  return sum;
}

console.log(addNumbers("88Hello 3World!"));
console.log(addNumbers("55Hello"));
console.log(addNumbers("5Hello 5"));


// *** longest word ** ///

function longestWord(str) {
  // create an array
  var words = str.split(" ");
  // grab first word
  var theLongestWord = words.shift();
  // compare with a for loop
  for(var i = 0; i < words.length; i++) {
    if(words[i].length > theLongestWord.length) {
      theLongestWord = words[i];
    }
  }
  return theLongestWord;
}

console.log(longestWord('one two three'));
console.log(longestWord('.one three'));
console.log(longestWord('one two'));


// *** average string numbers *** //

function averageStringNumbers(str) {
  var letterCounter = 0;
  var numberSum = 0;
  for(var i = 0; i < str.length; i++) {
    if(isNumber(str[i])) {
      numberSum += parseInt(str[i]);
    } else if (isLetter(str[i])) {
      letterCounter += 1;
    }
  }
  return Math.round(numberSum/letterCounter);
}

console.log(averageStringNumbers('Hello6 9World 2, Nic8e D7ay!'));