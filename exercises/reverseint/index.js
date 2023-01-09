// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const numberSign = Math.sign(n);
  let newNumber = n * numberSign;

  const numberAsString = String(newNumber);
  const numberAsArray = numberAsString.split("");

  // if the last elements of number as array is equal "0", remove it, until you find different number
  const reversedNumberArray = numberAsArray.reverse();
  let numberArray = [...reversedNumberArray];

  for (let i = 0; i < numberArray.length; i++) {
    if (reversedNumberArray[i] === "0") {
      numberArray = [...reversedNumberArray];
    } else {
      break;
    }
  }

  const resultNumber = parseInt(numberArray.join(""));

  return resultNumber * numberSign;
}

module.exports = reverseInt;
