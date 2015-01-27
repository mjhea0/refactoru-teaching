var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

firstLoop(animals);
secondLoop(animals);
thirdLoop(animals);
fourthLoop(animals);
fifthLoop(animals);


function firstLoop(arr) {
    // rat
    // cat
    // butterfly
    // marmot
    // ocelot
    console.log("\nrat cat butterfly marmot ocelot");
    for(var i=0; i<arr.length; i++) {
        console.log(arr[i]);
    }
}

function secondLoop(arr) {
    // rat
    // cat
    // butterfly
    // marmot
    console.log("\nrat cat butterfly marmot");
    for(var i=0; i<arr.length-1; i++) {
        console.log(arr[i]);
    }
}

function thirdLoop(arr) {
    // rat
    // butterfly
    // ocelot
    console.log("\nrat butterfly ocelot");
    for(var i=0; i<arr.length; i+=2) {
        console.log(arr[i]);
    }
}

function fourthLoop(arr) {
    // ocelot
    // marmot
    // butterfly
    // cat
    // rat
    console.log("\nocelot marmot butterfly cat rat");
    var arrReversed = arr.reverse();
    for(var i=0; i<arr.length; i++) {
        console.log(arrReversed[i]);
    }
}

function fifthLoop(arr) {
    // rat
    // cat
    // cat
    // butterfly
    // butterfly
    // marmot
    // marmot
    // ocelot
    console.log("\nrat cat cat butterfly butterfly marmot marmot ocelot");
    for(var i = 0; i < arr.length; i++) {
        if(i === 0 || i === arr.length - 1) {
            console.log( arr[i] );
        } else {
            for(var b = 0; b < 2; b++) {
                console.log( arr[i] );
            }
        }
    }
}