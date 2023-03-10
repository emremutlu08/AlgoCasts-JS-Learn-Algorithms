// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunkedArray = [];
  let index = 0;

  while (index < array.length) {
    chunkedArray.push(array.slice(index, index + size));
    index += size;
  }

  return chunkedArray;
}

module.exports = chunk;

// function chunk(array, size) {
//   let chunkedArray = [];
//   let newArr = [...array];

//   array.forEach((el, i, arr) => {
//     if ((i + 1) % size === 0) {
//       chunkedArray.push(newArr.splice(0, size));
//     }

//     if (newArr.length !== 0 && newArr.length < size) {
//       chunkedArray.push(newArr.splice(0, newArr.length));
//     }
//   });

//   return chunkedArray;
// }

// function chunk(array, size) {
//   let chunkedArray = [];

//   for (let el of array) {
//     let last = chunkedArray[chunkedArray.length - 1];

//     if (!last || last.length === size) {
//       chunkedArray.push([el]);
//     } else {
//       last.push(el);
//     }
//   }

//   return chunkedArray;
// }
