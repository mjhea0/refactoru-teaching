function chunk(array,size) {
  var mid = (array.length/size), chunks = [], start = 0;
  for(var i=0; i<size; i++) {
    var last = Math.floor(start+mid);
    if (array.length%size <= i) last = last-1;
    chunks.push(array.slice(start,Math.floor(last+1)));
    start = Math.floor(last+1);
  }
  return chunks;
}

var input = [1,2,3,4,5,6,7,8,9,10];

console.log(chunk(input, 2)); // should return [[1,2,3,4,5],[6,7,8,9,10]]
console.log(chunk(input, 3)); // should return [[1,2,3,4],[5,6,7],[8,9,10]]
console.log(chunk(input, 7)); // should return [[1,2],[3,4],[5,6],[7],[8],[9],[10]]



/////////////////////////////////////////////////////////////////////
////         Example - chunk([1,2,3,4,5,6,7,8,9,10], 3)         ////
///////////////////////////////////////////////////////////////////

/// variables
// mid = 3.3333333333333335, chunks = [], start = 0

/// first iteration
// i = 0, 0 < 3, 0
// last = 3
// 10%3 = 1 => FALSE => last = 3
// array.slice(0,4) = [1, 2, 3, 4] => FIRST CHUNK !
// start = 4

/// second iteration
// i = 1, 1 < 3, 1
// last = 7
// 10%3 = 1 => FALSE => last = 7
// array.slice(4,8) = [5, 6, 7] => SECOND CHUNK !!
// start = 8

/// third iteration
// i = 2, 2 < 3, 2
// last = 10
// 10%3 = 1 => FALSE => last = 10
// array.slice(8,11) = [8, 9, 10] => THIRD CHUNK !!!
// start = 11

//// [[1,2,3,4],[5,6,7],[8,9,10]]