$(function() {

    function firstReverse(str){
        return str.split("").reverse().join("");
    }

    console.log(firstReverse("dog"));


    function swapCase(str) {
        var characterArray = str.split('');
        var newArray = [];
        characterArray.forEach(function(letter) {
            if (letter === letter.toUpperCase()) {
                newArray.push(letter.toLowerCase());
            } else {
                newArray.push(letter.toUpperCase());
            }
        });
        return newArray.join('');
    }

    console.log(swapCase("dog"));
    console.log(swapCase("DoG"));


    function letterCount(str) {
        return str.split(' ').sort(function(firstWord, secondWord) {
            return firstWord.length - secondWord.length;
        })[0];
    }

    console.log(letterCount("Today, is the greatest day ever!"));

});


