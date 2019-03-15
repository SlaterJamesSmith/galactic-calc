import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { dayName } from '../src/weekday-calc.js';
import { leapYear } from '../src/weekday-calc.js';

// import { translate, translate2 } from './translator.js';

$(document).ready(function(){
  $("form#date").submit(function(event){
    event.preventDefault();
    let month = ($('#month').val() - 1);
    let day = $('#day').val();
    let year = $('#year').val();



    if (isNaN(year) || isNaN(month) || isNaN(day)) {
      $(".result").text("Please enter number values only");

    }
    else if (month > 11 || month < 0 || day > 31 || day < 1) {
      $(".result").text("Enter a valid date");
    }
    else if (leapYear(year) === true && month === 1 && (day < 0 || day > 29)) {
      $(".result").text("Enter a valid date (February only has 29 days in your chosen year)");
    }
    else if (leapYear(year) !== true && month === 1 && (day < 0 || day > 28)) {
      $(".result").text("Enter a valid date (February only has 28 days in your chosen year)");
    }
    else if (month === 3 && day > 30 || month === 5 && day > 30 || month === 8 && day > 30 || month === 10 && day > 30) {
      $(".result").text("Enter a valid date (Your chosen month only is only 30 days long)");
    } else {
      $(".result").text(dayName(year, month, day));
    }



  });
});
// export function dayName(day) {
//   const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   // let newDay = weekDays[day.getDay()];
//   let newDayTwo = weekDays[day]
//   return newDayTwo;
// }
