// export function dayName(year, month, day) {
//
//   const date = new Date(year, month, day);
//
//   const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   const newDayTwo = weekDays[date.getDay()];
//   return newDayTwo;
// }


// export function leapYear(year) {
//   if (year % 400 === 0) {
//     return true;
//   }
//   else if (year % 4 === 0 && year % 100 !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// export function gross {
//   let date = new Date;
//   let birthday = new Date(year, month, day);
// }


class Birthday {
  constructor (year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  earthAge() {
    let date = new Date;
    return date.getFullYear() - 1990;
  }

}
export function calc(bYear, bMonth, bDay) {
let earth = new Birthday(bYear, bMonth, bDay);
return earth.earthAge();

}
