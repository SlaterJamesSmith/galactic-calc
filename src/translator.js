// export function translate(strIn) {
//   var letters = /[A-Za-z]/g;
//   var vowels = /[aeiouAEIOU]/g;
//   var strWords = strIn.split(" ");
//   var result = "";
//   for (var i = 0; i < strWords.length; i++) {
//     if (strWords[i].split("")[0].match(letters)) {
//       if (strWords[i].split("")[0].match(vowels)) {
//         if (strWords[i].split("").length == 1) {
//           result += strWords[i] + "ay";
//         } else {
//           result += strWords[i] + "way";
//         }
//       } else {
//         if (!(strWords[i].match(vowels))) {
//           result += strWords[i] + "ay";
//         } else {
//           var strSplit = strWords[i].split("");
//           for (var j = 0; j < strSplit.length; j++) {
//             var letter = strSplit.shift();
//             strSplit.push(letter);
//             if (letter == "q" || letter == "Q") {
//               if (strSplit[0] == "u" || strSplit[0] == "U") {
//                 letter = strSplit.shift();
//                 strSplit.push(letter);
//               }
//             }
//             if (strSplit[0].match(vowels)) {
//               result += strSplit.join("") + "ay";
//               break;
//             }
//           }
//         }
//       }
//     } else {
//       result += strWords[i];
//     }
//     if (i != (strWords.length - 1)) {
//       result += " ";
//     }
//   }
//   return result;
// }

// export function translate2(strIn) {
//   var numCon = 0;
//   var vows = ["a","e","i","o","u","A","E","I","O","U"];
//   var result = "";
//   var strWords = strIn.split(" ");
//   var strSplit;
//   var char;
//   for (var i = 0; i < strWords.length; i++) {
//     strSplit = strWords[i].split("");
//
//     if ((vows.includes(strSplit[0])? true : false) && (strSplit.length == 1)) {
//       strSplit.push("ay");
//       result += strSplit.join("");
//     } else if (vows.includes(strSplit[0])? true : false) {
//       strSplit.push("way");
//       result += strSplit.join("");
//     } else if ("bcdfghjklmnpqrstvwxyz".includes(strSplit[0])? true : false) {
//       for (var j = 0; j < strSplit.length; j++) {
//         if (vows.includes(strSplit[j])? true : false) {
//           if ((strSplit[j] == "U" || strSplit[j] == "u") && (strSplit[j-1] == "Q" || strSplit[j-1] == "q")) {
//             void(0);
//           } else {
//             break;
//           }
//         }
//         numCon++;
//       }
//       for (var k = 0; k < numCon; k++) {
//         char = strSplit.shift();
//         strSplit.push(char);
//       }
//       numCon = 0;
//       strSplit.push("ay");
//       result += strSplit.join("");
//     } else {
//       result += strSplit.join("");
//     }
//     if (i != (strWords.length - 1)) {
//       result += " ";
//     }
//   }
//   return result;
// }
