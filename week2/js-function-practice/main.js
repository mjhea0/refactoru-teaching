console.log('\ntripleFive')

function tripleFive() {
    for (var i = 0; i < 3; i++) {
        console.log("five")
    };
};

tripleFive()


console.log('\nlastLetter')

function lastLetter(str) {
    index = str.length - 1
    console.log(str[index])
};

lastLetter("michael")
lastLetter("javascript")


console.log('\nsquare')

function square(num) {
    console.log(num * num)
};

square(3)
square(5)


console.log('\nnegate')

function negate(num) {
    console.log(num * -1)
};

negate(5)
negate(-8)


console.log('\ntoArray')

function toArray(num1, num2, num3) {
    var numberArray = []
    numberArray.push(num1, num2, num3)
    console.log(numberArray)
};

toArray(1, 4, 5)
toArray(8, 9, 10)


console.log('\nstartsWithA')

function startsWithA(str) {
    if (str[0].toUpperCase() === 'A') {
        console.log(true)
    } else {
        console.log(false)
    };
};

startsWithA('aardvark')
startsWithA('beer')


console.log('\nexcite')

function excite(str) {
    console.log(str + '!!!')
};

excite('yes')
excite('go')


console.log('\nsun')

function sun(str) {
    if (str.toUpperCase().indexOf('SUN') >= 0) {
        console.log(true)
    } else {
        console.log(false)
    };
};

sun('sundries')
sun('asunder')
sun('catapult')


console.log('\ntiny')

function tiny(num) {
    if (num > 0 && num < 1) {
        console.log(true)
    } else {
        console.log(false)
    };
};

tiny(0.3)
tiny(14)
tiny(-5)


console.log('\ngetSeconds')

var getSeconds = function(str) {
    var time = str.split(":");
    var seconds = 0;

    // Get the seconds
    seconds += Number(time.pop());

    // Convert minutes to seconds
    if(time.length > 0) {
        seconds += Number(time.pop()) * 60;
    }

    // convert hours to seconds
    if(time.length > 0) {
        seconds += Number(time.pop()) * 120;
    }

    // Return the seconds
    console.log(seconds);
}

getSeconds('01:30')
getSeconds('10:25')

