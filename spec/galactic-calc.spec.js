import { calcEarth } from "../src/galactic-calc.js";
import { calcMerc } from "../src/galactic-calc.js";
import { calcVen } from "../src/galactic-calc.js";
import { calcMars } from "../src/galactic-calc.js";
import { calcJup } from "../src/galactic-calc.js";

describe ("Birthday", function() {

  it('should return user’s current age', function(){
    const output = calcEarth(1989, 10, 22);
    expect(output).toEqual(29);
  });

  it('should return user’s current age divided by .24', function(){
    const output2 = calcMerc(1989, 10, 22);
    expect(output2).toEqual(122);
  });

  it('should return current age divided by .62', function(){
    const output = calcVen(1989, 10, 22);
    expect(output).toEqual(47);
  });

  it('should return current age divided by 1.88', function(){
    const output = calcMars(1989, 10, 22);
    expect(output).toEqual(15);
  });

  it('should return current age divided by 11.86', function(){
    const output = calcJup(1989, 10, 22);
    expect(output).toEqual(2);
  });

//   it('should return current age divided by 11.86', function(){
//     // const input = (parseInt("asfaf"));
//     // expect(input).toEqual(NaN);
//   });
//
//   it('should return user’s life expectancy divided by .24', function(){
//     // const input = (parseInt("asfaf"));
//     expect(input).toEqual(75 / .24);
//   });
//
//   it('should return user’s life expectancy divided by .62', function(){
//     // const input = (parseInt("asfaf"));
//     expect(input).toEqual(75 / .62);
//   });
//
//   it('should return user’s life expectancy divided by 1.88', function(){
//     // const input = (parseInt("asfaf"));
//     expect(input).toEqual(75 / 1.88);
//   });
//
//   it('should return user’s life expectancy divided by 11.86', function(){
//     // const input = (parseInt("asfaf"));
//     expect(input).toEqual(75 / 11.86);
//   });
//
});
