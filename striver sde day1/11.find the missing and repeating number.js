// function missingAndRepeating(arr) {
//   let missingNum = -1;
//   let repeatingNum = -1;
//   // let unique = new Set();
//   // for (const num of arr) {
//   //   if (unique.has(num)) {
//   //     return num;
//   //   }
//   //   unique.add(num);
//   // }
//   // // let max = Math.max(...arr);
//   // arr.sort((a, b) => a - b);
//   // for (let i = 0; i < arr.length; i++) {
//   //   if (arr[i] === i) {
//   //     missingNum = i;
//   //   }
//   // }
//   // return [unique,missingNum];

//   let result = [];
//   for (let i = 1; i <= arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] === i) {
//         // count++;
//         result.push(count++);
//       }
//     }
//   }
//   for (let i = 0; i < result.length; i++) {
//     if (result[i] === 2) {
//       repeatingNum = arr[i];
//     }
//   }
//   return result;

//   // return [repeatingNum, missingNum];
// }
// function missingAndRepeating(arr) {
//   arr.sort();
//   let repeatingNum = -1;
//   let missingNum = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       repeatingNum = arr[i];
//     }
//     if (arr[i] !== i + 1) {
//       missingNum = i + 1;
//     }
//   }
//   return [repeatingNum, missingNum];
// }

// function missingAndRepeating(arr) {
// let missingNum = -1;
// let repeatingNum = -1;
// let unique = new Set();
// for (let i = 1; i <= arr.length; i++) {
//   if (unique.has(arr[i - 1])) {
//     repeatingNum = arr[i - 1];
//   }
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] !== i) {
//       missingNum = i;
//     }
//   }
//   unique.add(arr[i - 1]);
// }
// return [repeatingNum, missingNum - 1];
// }

// function missingAndRepeating(A) {
//   let newArr = [];
//   let repeatNum = -1;
//   let missNum = -1; 
// }
// console.log(missingAndRepeating([4, 3, 6, 2, 1, 1]));
// console.log(missingAndRepeating([3, 1, 2, 5, 3]));

