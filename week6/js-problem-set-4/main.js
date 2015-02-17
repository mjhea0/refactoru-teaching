// *** helpers *** //

function isNumber(num) {
  return !isNaN(parseInt(num));
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