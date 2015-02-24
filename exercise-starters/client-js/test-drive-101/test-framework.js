/*****************************************
 * The Faily Tiny Unit Testing Library
 *****************************************/

var assert = function(a,b) {
if(a !== b) {
    console.error('FAIL: Expected', a, 'to equal', b);
  }
   else {
    console.log('PASS:', a, 'equals', b);
  }
};

// The Second Smallest Unit Testing Library... to support array comparison
// Prints FAIL if the two given arrays do not have the same contents.
var assertArraysEqual = function(a,b) {

	if(!a || a.length === undefined) {
		console.error('FAIL: Expected first argument to assertArraysEqual to be an array. Instead received:', a);
	}
	else if(!b || b.length === undefined) {
		console.error('FAIL: Expected second argument to assertArraysEqual to be an array. Instead received:', b);
	}
	else if(a.length !== b.length) {
		console.error('FAIL: Array', a, '(length: ' + a.length + 
			') expected to be the same length as', b, '(length: ' + b.length + ')');
	}
	else {
		var pass = true;
		for(var i=0; i<a.length; i++) {
			if(a[i] !== b[i]) {
				pass = false;
				break;
			}
		}
		if(pass) {
			console.log('PASS:', a, 'equals', b);
		}
		else {
			console.error('FAIL: Expected (arrays) ', a, 'to equal', b);
		}
	}
};