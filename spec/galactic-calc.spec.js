import { Birthday } from "../src/galactic-calc.js";

describe ("Birthday", function() {
  // it('should be a "Wed Mar 13 2019"', function(){
  //   const date = new Date(2019, 9, 12);
  //   const num = 5;
  //   expect(date.toString()).toEqual("Sat Oct 12 2019 00:00:00 GMT-0700 (Pacific Daylight Time)");
  // });

  it('Application returns user’s current age', function(){
    const birthday = new Birthday;
    const input = 29;
    // const input = (2019, 2, 13);
    expect(input).toEqual("29");
  });

  it('should return current age divided by .24', function(){
    // const input = (parseInt("asfaf"));
    // expect(input).toEqual(NaN);
  });

  it('should return current age divided by .62', function(){
    // const input = (parseInt("asfaf"));
    // expect(input).toEqual(NaN);
  });

  it('should return current age divided by 1.88', function(){
    // const input = (parseInt("asfaf"));
    // expect(input).toEqual(NaN);
  });

  it('should return current age divided by 11.86', function(){
    // const input = (parseInt("asfaf"));
    // expect(input).toEqual(NaN);
  });

  it('should return user’s life expectancy divided by .24', function(){
    // const input = (parseInt("asfaf"));
    // expect(input).toEqual(NaN);
  });

  it('should return user’s life expectancy divided by .62', function(){
    // const input = (parseInt("asfaf"));
    // expect(input).toEqual(NaN);
  });

  it('should return user’s life expectancy divided by 1.88', function(){
    // const input = (parseInt("asfaf"));
    // expect(input).toEqual(NaN);
  });

  it('should return user’s life expectancy divided by 11.86', function(){
    // const input = (parseInt("asfaf"));
    // expect(input).toEqual(NaN);
  });

});
