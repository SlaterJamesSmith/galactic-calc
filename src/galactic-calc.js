export function calcEarth(bYear, bMonth, bDay) {
  const earth = new Birthday(bYear, bMonth, bDay);
  return earth.earthAge();
}

export function calcMerc(dYear, dMonth, dDay) {
  const merc = new Birthday(dYear, dMonth, dDay);
  return merc.mercuryAge();
}

export function calcVen(dYear, dMonth, dDay) {
  const ven = new Birthday(dYear, dMonth, dDay);
  return ven.venusAge();
}

export function calcMars(dYear, dMonth, dDay) {
  const mars = new Birthday(dYear, dMonth, dDay);
  return mars.marsAge();
}

export function calcJup(Year, Month, Day) {
  const jupiter = new Birthday(Year, Month, Day);
  return jupiter.jupiterAge();
}

export function calcEx(year, month, day, expectancy) {
  const expect = new Birthday(year, month, day);
  return expect.lifeEx(expectancy);
}


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

  trueAge() {
    const date = new Date;
    const userYear = ((date.getFullYear() - 1) - this.year);
    const userMonth = ((12 + date.getMonth() - this.month)/12);
    const userDay = this.day/365.25 - date.getDate()/365.25;
    const decAge = userYear + userMonth + userDay;
    return decAge;
  }

  mercuryAge() {
    const age = this.trueAge()
    // const date = new Date;
    // const userYear = ((date.getFullYear() - 1) - this.year);
    // const userMonth = ((12 + date.getMonth() - this.month)/12);
    // const userDay = this.day/365.25 - date.getDate()/365.25;
    // const decAge = userYear + userMonth + userDay;
    return Math.floor(age/.24);
  }
  venusAge() {
    const age = this.trueAge()
    return Math.floor(age/.62);
  }
  marsAge() {
    const age = this.trueAge()
    return Math.floor(age/1.88);
  }
  jupiterAge() {
    const age = this.trueAge()
    return Math.floor(age/11.86);
  }

  lifeEx(lifeEx) {
    const age = this.trueAge()
    const earthEx = Math.floor(lifeEx - this.trueAge());
    const mercEx = Math.floor(lifeEx/.24 - this.mercuryAge());
    const venEx = Math.floor(lifeEx/.62 - this.venusAge());
    const marsEx = Math.floor(lifeEx/1.88 - this.marsAge());
    const jupEx = Math.floor(lifeEx/11.86 - this.jupiterAge());
    if (lifeEx < age) {

      return `You have exceeded your life expectancy by ${earthEx * -1} Earth years, ${mercEx * -1} Mercury years, ${venEx * -1} Venus years, ${marsEx * -1} Mars years, and ${jupEx * -1} Jupiter years...`

    } else {

    return `You have ${earthEx} years left to live on Earth, ${mercEx} years left to live on Mercury, ${venEx} years left to live on Venus, ${marsEx} years left to live on Mars, and ${jupEx} years left to live on Jupiter...`
    }


  }




}
