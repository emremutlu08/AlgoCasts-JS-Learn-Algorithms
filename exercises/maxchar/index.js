// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxCharVal = "";

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  console.log(charMap, "charMap");
  return maxChar;
}

// function maxChar(str) {
//   const chars = {};
//   for (let char of str) {
//     if (!chars[char]) {
//       chars[char] = 1;
//     } else {
//       chars[char]++;
//     }
//   }
//   return chars;
// }

// function maxChar(str) {
//   // Check how many times a char repeat
//   if (str.length === 1) return str;
//   const strArr = str.split("");
//   let countedObj = {};
//   strArr.reduce((prev, curr, index) => {
//     if (countedObj[prev]) countedObj[prev]++;
//     else countedObj[prev] = 1;
//     if (strArr.length - 1 === index) {
//       if (countedObj[curr]) countedObj[curr]++;
//       else countedObj[curr] = 1;
//     }
//     return curr;
//   });

//   return Object.entries(countedObj).sort((a, b) => b[1] - a[1])?.[0]?.[0];
// }

module.exports = maxChar;
