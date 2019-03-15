

export function dayName(year, month, day) {

  const date = new Date(year, month, day);

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const newDayTwo = weekDays[date.getDay()];
  return newDayTwo;
}


export function leapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  else if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else {
    return false;
  }
}
