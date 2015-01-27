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
    for(var i=0; i<animals.length-1; i++) {
        console.log(animals[i]);
    }
}

function thirdLoop(arr) {
    // rat
    // butterfly
    // ocelot
    console.log("\nrat butterfly ocelot");
    for(var i=0; i<animals.length; i+=2) {
        console.log(animals[i]);
    }
}

function fourthLoop(arr) {
    // ocelot
    // marmot
    // butterfly
    // cat
    // rat
    console.log("\nocelot marmot butterfly cat rat");
    var animalsReversed = animals.reverse();
    for(var i=0; i<animals.length; i++) {
        console.log(animalsReversed[i]);
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
    for(var i = 0; i < animals.length; i++) {
        if(i === 0 || i === animals.length - 1) {
            console.log( animals[i] );
        } else {
            for(var b = 0; b < 2; b++) {
                console.log( animals[i] );
            }
        }
    }
}