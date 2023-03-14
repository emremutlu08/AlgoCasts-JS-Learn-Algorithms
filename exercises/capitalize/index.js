// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

// function capitalize(str) {
//   const words = [];

//   for (let word of str.split(" ")) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return words.join(" ");
// }

// function capitalize(str) {
//   // Let split the string by its spaces
//   const strArray = str.split(" ");
//   // We have something like this:
//   // strArray = ["hello,", "world!", "i", "am", "a", "programmer"];

//   // Then get the first letter of each element of array
//   // Firstly mapping the array
//   const capitalizeString = strArray
//     .map((element) => {
//       let splittedElement = element.split("");
//       const uppercaseFirstCharOfElement = splittedElement[0].toUpperCase();
//       splittedElement[0] = uppercaseFirstCharOfElement;

//       const capitalizedElement = splittedElement.join("");

//       return capitalizedElement;
//     })
//     .join(" ");

//   return capitalizeString;
// }

module.exports = capitalize;
