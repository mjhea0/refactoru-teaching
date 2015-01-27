$(function() {


    function getName (obj) {
        return obj.name;
    }

    console.log(getName({ name: 'Luisa', age: 25 }));


    function totalLetters (arr) {
        return arr.join("").length;
    }

    console.log(totalLetters(['javascript', 'is', 'awesome']));
    console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']));


    function keyValue (str1, str2) {
        var newObject = {};
        newObject[str1] = str2;
        return newObject;
    }

    console.log(keyValue('city', 'Denver'));


    function negativeIndex (arr, index) {
        // var reversedArray = arr.reverse();
        // var newIndex = -index - 1;
        // return reversedArray[newIndex];
        return arr[index + arr.length];
    }

    console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));
    console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1));


    function removeM (str) {
        var splitString = str.split("");
        var newArray = [];
        for (var i = 0; i < splitString.length; i++) {
            if (splitString[i].toLowerCase() !== 'm') {
                newArray.push(splitString[i]);
            }
        }
        return newArray.join("");
    }

    console.log(removeM('family'));
    console.log(removeM('memory'));


    function printObject (obj) {
        for(var i in obj) {
            console.log(i + ' is ' + obj[i]);
        }
    }

    printObject({ a: 10, b: 20, c: 30 });
    printObject({ firstName: 'pork', lastName: 'chops' });


    function vowels (str) {
        var theVowels = ['a', 'e', 'i', 'o', 'u'];
        return str.split('').filter(function(letter) {
            if(theVowels.indexOf(letter) >= 0 ) {
                return true;
            }
        });
    }

    console.log(vowels('alabama'));
    console.log(vowels('What lets in youth?'));


    function twins (arr) {
        if (arr.length % 2 !== 0) {
            return false;
        } else {
            while(arr.length > 0) {
                var element = arr.shift();
                if(element !== arr[0]) {
                    return false;
                }
                arr.shift();
            }
            return true;

        }
    }

    console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));
    console.log(twins(['a', 'a', 'b', 'z']));
    console.log(twins(['a', 'a', 'b']));
    console.log(twins(['a', 'a', 'b', undefined]));


    function or (arr) {
        if (arr.length === 0) {
            return false;
        } else {
            if(arr.indexOf(true) >= 0) {
                return true;
            } else {
                return false;
            }
        }
    }

    console.log(or([false, false, true, false]));
    console.log(or([false, false, false]));
    console.log(or([]));


    function unique (arr) {
        var uniqueArray = [];
        arr.forEach(function(item) {
            if(uniqueArray.indexOf(item) === -1) {
                uniqueArray.push(item);
            }
        });
        return uniqueArray;
    }

    console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']));
    console.log(unique(['todd', 'avery', 'maria', 'avery']));

});
