// 0 100 200 300 400 500

console.log("0 100 200 300 400 500")

for (i = 0; i <= 500; i=i+100) {
  console.log(i)
}

console.log("")

// 1 2 4 8 16 32 64

console.log("1 2 4 8 16 32 64")

for (i = 1; i <= 64; i=i+i) {
  console.log(i)
}

console.log("")

// 1 1 1 2 2 2 3 3 3

console.log("1 1 1 2 2 2 3 3 3")

// for (i = 1; i <= 3; i++) {
//   console.log(i)
//   console.log(i)
//   console.log(i)
// }

for(var i = 1; i <= 3; i++) {
  for(var b = 0; b < 3; b++) {
    console.log(i);
  }
}

console.log("")

// 0 2 4 6 8 10

console.log("0 2 4 6 8 10")

for (i = 0; i <= 10; i=i+2) {
  console.log(i)
}

console.log("")

// 3 6 9 12 15

console.log("3 6 9 12 15")

for (i = 3; i <= 15; i=i+3) {
  console.log(i)
}

console.log("")

// 9 8 7 6 5 4 3 2 1 0

console.log("9 8 7 6 5 4 3 2 1 0")

for (i = 9; i >= 0; i--) {
  console.log(i)
}

console.log("")

// 0 1 2 3 0 1 2 3 0 1 2 3

console.log("0 1 2 3 0 1 2 3 0 1 2 3")

for(var i = 0; i < 3; i++) {
  for(var b = 0; b < 4; b++) {
    console.log(b);
  }
}