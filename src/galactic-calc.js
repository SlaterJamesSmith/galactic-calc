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
    const date = new Date;
    const userYear = (date.getFullYear() - 1) - this.year;
    const userMonth = ((date.getMonth() + 1) - this.month);
    const userDay = date.getDate() - this.day;
    if (userMonth > 0) {
      return userYear + 1;
    }
    else if (userMonth < 0) {
      return userYear;
    }
    else if (userMonth === 0) {
      if (userDay >= 0) {
        return userYear + 1;
      } else {
        return userYear;
      }


    }

  }

}

export function calc(bYear, bMonth, bDay) {
  const earth = new Birthday(bYear, bMonth, bDay);
  return earth.earthAge();

}
