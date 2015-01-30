$(function() {     


  //** globals */
  var months = ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var month = ["month", "alternative"]
  var single_day = 86400000;
  var single_week = single_day * 7;
  var offset = -3; // render X amount of weeks before current date

  function calculateDay(someDate, offsetInDays) {
    var offset = offsetInDays * single_day;
    return new Date(someDate.getTime() + offset);
  }

  function renderFutureWeek(numWeeksAhead) {
    var now = new Date();
    var someWeeksFromNow = new Date(now.getTime() + (single_week * numWeeksAhead));
    return renderWeek(someWeeksFromNow);
  }

  function renderWeek(someDate) {
    var currentMonth = someDate.getMonth();
    var currentDayOfWeek = someDate.getDay();
    var currentDate = someDate.getDate();
    var week = [];
    for(var i = 0; i < 7; i++) {
      var difference = i - currentDayOfWeek;
      var anotherDay = calculateDay(someDate, difference);
      week[i] = anotherDay; 
    }
    return generateWeekAsHtmlRow(week);
  }

  function generateWeekAsHtmlRow(weekArray){
    var html = "<tr>";
    for(var i = 0; i < 7; i++) {
      var date = weekArray[i];
      var css_class = determineMonthBackgroundColor(date);
      html += '<td class="' + css_class + '">';
      html += '<h4>' + createDate(date) + '</h4>';
      html += '<br><center><div class="editable">Click to enter an appointment</div><center></td>';
    }
    return html;
  }

  function determineMonthBackgroundColor(aDate) {
    var someMonth = aDate.getMonth();
    var someDayOfWeek = aDate.getDay();
    var someDate = aDate.getDate();
    var now = new Date();
    if(someMonth == now.getMonth() && someDayOfWeek == now.getDay() && someDate == now.getDate()) return "today";
    return month[aDate.getMonth() % 2];
  }

  function createDate(date) {
    var formattedDate = "";
    if(date.getDate() == 1) formattedDate += months[date.getMonth()] + " "; // month
    formattedDate += date.getDate(); // day
    if(date.getDate() == 1 && date.getMonth() == 0) formattedDate += ", " + date.getFullYear(); // year
    return formattedDate;
  }

  function renderMoreWeeks(numWeeks) {
    for(var i = 0; i < numWeeks; i++) {
      $("#calendar").append(renderFutureWeek(offset));
        offset++;
    }
  }

  $(window).scroll(function() {
    if($(document).height() - 60 < $(document).scrollTop() + $(window).height()) {
      renderMoreWeeks(10); // render 10 more times
      
    }
  });


  renderMoreWeeks(10); // render 10 weeks to start	


});