// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = "") {
  if (row === n) return;

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;

  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid(n, row, level + add);
}

// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = "";

//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }

//     console.log(level);
//   }
// }

// function pyramid(n) {
//   // column length = n + (n - 1)
//   // row length = n

//   const rowLength = n;
//   const columnLength = n + (n - 1);
//   const halfColumnLength = Math.floor(columnLength / 2);

//   for (let i = 0; i < rowLength; i++) {
//     let text = "";
//     for (let k = 0; k < columnLength; k++) {
//       text += "#";
//     }
//     console.log(fixTheSizeOfChars(text, i, halfColumnLength));
//   }
// }

// function fixTheSizeOfChars(chars, index, middlePosition) {
//   return chars
//     .split("")
//     .map((el, position) => {
//       if (
//         middlePosition + index < position ||
//         middlePosition - index > position
//       ) {
//         return " ";
//       }
//       return el;
//     })
//     .join("");
// }

module.exports = pyramid;
