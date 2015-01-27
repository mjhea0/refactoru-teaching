var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

firstLoop(students);
secondLoop(students);
thirdLoop(students);
fourthLoop(students);
fifthLoop(students);


function firstLoop(arr) {
    // Liz
    // Meghan
    // Trent
    // Chelsea
    // Amir
    console.log("\nLiz Meghan Trent Chelsea Amir");
    // for(var i=0; i<arr.length; i++) {
    //     console.log(arr[i].name);
    // }
    arr.forEach(function(item) {
        console.log(item.name);
    });
}

function secondLoop(arr) {
    // 25
    // 27
    // 32
    // 24
    // 18
    console.log("\n25 27 32 24 18");
    // for(var i=0; i<arr.length; i++) {
    //     console.log(arr[i].age);
    // }
    arr.forEach(function(item) {
        console.log(item.age);
    });
}

function thirdLoop(arr) {
    // Liz, Boulder
    // Meghan, Denver
    // Trent, Boulder
    // Chelsea, Boulder
    // Amir, Denver
    console.log("\nLiz, Boulder Meghan, Denver Trent, Boulder Chelsea, Boulder Amir, Denver");
    // for(var i=0; i<arr.length; i++) {
    //     console.log(arr[i].name +', '+ arr[i].city);
    // }
    arr.forEach(function(item) {
        console.log(item.name +', '+ item.city);
    });
}

function fourthLoop(arr) {
    // Liz is from Boulder
    // Trent is from Boulder
    // Chelsea is from Boulder
    console.log("\nLiz is from Boulder Trent is from Boulder Chelsea is from Boulder");
    // for(var i=0; i<arr.length; i++) {
    //     if (arr[i].city === 'Boulder') {
    //         console.log(arr[i].name +' is from '+ arr[i].city);
    //     }
    // }
    arr.forEach(function(item) {
        if (item.city === 'Boulder') {
            console.log(item.name +' is from '+ item.city);
        }
    });
}

function fifthLoop(arr) {
    // Meghan is older than 25
    // Trent is older than 25
    console.log("\nMeghan is older than 25 Trent is older than 25");
    // for(var i=0; i<arr.length; i++) {
    //     if (arr[i].age > 25) {
    //         console.log(arr[i].name +' is older than 25');
    //     }
    // }
    arr.forEach(function(item) {
        if (item.age > 25) {
            console.log(item.name +' is older than 25');
        }
    });
}
