function palindrome(str) {
  if(str === str.split('').reverse().join('')) {
    return true;
  }
  return false;
}

console.log(palindrome("racecar"));
console.log(palindrome("dad"));
console.log(palindrome("refactor"));


console.log("");

function dashInsert(num) {
  var str = '';
  numStr = String(num);
  for(var i = 0; i < numStr.length; i++) {
    if(i === numStr.length - 1) {
      str += numStr[i];
      break;
    }
    str += numStr[i];
    if(numStr[i] % 2 !== 0 && numStr[i + 1] % 2 !== 0) {
      str += '-';
    }
  }
  return str;
}

console.log(dashInsert(454793));