// import { translate } from './../src/translator.js';
//
//
//
// describe('translate', function() {
//
//   it('should return a word untranslated if it does not begin with a letter', function() {
//     var output = translate("4asdf");
//     expect(output).toEqual("4asdf");
//   });
//
//   it('should add "ay" to the end of single-character words that are vowels', function() {
//     var output = translate("I");
//     expect(output).toEqual("Iay");
//   });
//
//   it('should add "way" to the end of multi-character words that are vowels', function() {
//     var output = translate("Island");
//     expect(output).toEqual("Islandway");
//   });
//
//   it('should add "ay" to the end of words made entirely of consonants', function() {
//     var output = translate("d");
//     expect(output).toEqual("day");
//   });
//
//   it('should move all characters up until a vowel to the end of words starting with consonants, and add "ay" to the end', function() {
//     var output = translate("cat");
//     expect(output).toEqual("atcay");
//   });
//
//   it('should treat "u" as a consonant, if following a "q"', function() {
//     var output = translate("queen");
//     expect(output).toEqual("eenquay");
//   });
//
//   it('should translate multiple words with the above rules, adding spaces between them, unless it is the last word', function() {
//     var output = translate("I am a cat");
//     expect(output).toEqual("Iay amway aay atcay");
//   });
//
// });
