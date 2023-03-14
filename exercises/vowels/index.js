// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // Regex
  const matches = str.match(/[aeiou]/gi) || [];

  return matches.length;
}

// function vowels(str) {
//     let count = 0;
//     const checker = ["a", "e", "i", "o", "u"];

//     for (let char of str.toLowerCase()) {
//       if (checker.includes(char)) {
//         count++;
//       }
//     }

//     return count;
//   }

// function vowels(str) {
//   let vowelCount = 0;

//   // Convert all string to lowerCase
//   str = str.toLowerCase();

//   str.split("").forEach((el) => {
//     if (isCharVowel(el)) vowelCount++;
//   });

//   return vowelCount;
// }

// function isCharVowel(char) {
//   // Vowels are the characters 'a', 'e', 'i', 'o', and 'u'.
//   return (
//     char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
//   ); // Boolean
// }

module.exports = vowels;
