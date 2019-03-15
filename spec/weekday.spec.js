import { dayName } from "../src/weekday-calc.js";

describe ("weekdays", function() {
  // it('should be a "Wed Mar 13 2019"', function(){
  //   const date = new Date(2019, 9, 12);
  //   const num = 5;
  //   expect(date.toString()).toEqual("Sat Oct 12 2019 00:00:00 GMT-0700 (Pacific Daylight Time)");
  // });

  it('should return the day of the week', function(){
    const input = dayName(2019, 2, 13);
    expect(input).toEqual("Wednesday");
  });

  it('should return "enter a number" error', function(){
    const input = (parseInt("asfaf"));
    expect(input).toEqual(NaN);
  });
});
