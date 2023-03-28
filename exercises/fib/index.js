// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {}; // Boş bir nesne tanımlanır, önbelleği temsil eder.
  return function (...args) {
    // Memoize edilmiş fonksiyon döndürülür.
    if (cache[args]) {
      // Eğer sonuç önbellekte bulunursa,
      return cache[args]; // Önbellekten sonucu döndür.
    }

    const result = fn(...args); // Aksi halde, orijinal fonksiyon çağrılır.
    cache[args] = result; // Sonucu önbelleğe kaydet.

    return result; // Sonuçları döndürür.
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

// function fib(n) {
//   // Start from 0 and 1
//   // Add prev two elements

//   const fibonacci = [0, 1];

//   while (fibonacci.length - 1 < n) {
//     fibonacci.push(
//       fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
//     );
//   }

//   return fibonacci[n];
// }

module.exports = fib;
