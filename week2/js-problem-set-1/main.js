$(function() {

    function letterCapitalize(str) {
        return str.replace(/(?:^| )(\w)/g, function (match) {
            return match.toUpperCase();
        });
    }

    console.log(letterCapitalize("test test"));


    function wordCount(str) {
        splitArray = str.split(" ");
        return splitArray.length;
    }

    console.log(wordCount("this is a test"));


    function primeTime (number) {
            if(number <= 1) {
                return false;
            } else {
                for(var i = 3; i < number; i++) {
                    if(number % i === 0) {
                        return false;
                    }
                }
            }
            return true;
    }

    console.log(primeTime(1));
    console.log(primeTime(2));
    console.log(primeTime(7));
    console.log(primeTime(14));
    console.log(primeTime(139));

});


