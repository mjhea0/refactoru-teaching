$(function() {

    console.log('test!'); // sanity check

    $('.container').append(createClock());
    runClock();

    function createClock() {

        // define elements
        var outerShell = $('<div class="outer-shell"></div>');
        var innerShell = $('<div class="inner-shell"></div>');
        var clockLabels = $('<div class="labels"><div class="labels-am">AM</div>'+
            '<div class="labels-pm">PM</div><div class="labels-auto">Auto</div></div>');
        var clockScreen = $('<div class="screen"></div>');
        var clockRadio = $('<div class="radio"></div>');
        var frequenciesAm = $('<div class="frequencies">AM<span class="space"></span>53 60 70 90 110 140 170</div>');
        var frequenciesPm = $('<div class="frequencies">PM<span class="space"></span>88 92 96 102 106 108</div>');

        // combine elements
        innerShell.appendTo(outerShell);
        clockLabels.appendTo(innerShell);
        clockScreen.appendTo(innerShell);
        frequenciesAm.appendTo(clockRadio);
        frequenciesPm.appendTo(clockRadio);
        clockRadio.appendTo(outerShell);

        return outerShell;
    }


    function runClock(event) {

        // Clear the clock display
        $('.clock-text').remove();

        // Clear the am/pm indicator
        $('.label-indicator').remove();

        // get the current time
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();

        var pm = false;

        // convert the time to 12-hour time format
        if(hours > 12) {
            hours -= - 12;
            pm = true;
        }

        // Set am or pm
        if(pm) {
            $('.labels-pm').append('<span class="label-indicator"></span>');
        } else {
            $('.labels-am').append('<span class="label-indicator"></span>');
        }

        // Set the clock time
        $('.screen').append('<span class="clock-text">' + hours + ':' + minutes + '</span>');

    }

});