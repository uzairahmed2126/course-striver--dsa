// function setZeroses(arr) {
//   let result = [];
//   let index;
//   for (let i = 0; i < arr.length; i++) {
//     let zero = [];
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i].includes(0)) {
//         zero.push(0);
//         index = arr[i].indexOf(0);
//       } if(arr[i].includes(0)) {
//         let a = arr[i][index];
//         a = 0;
//         zero.push(a);
//       }
//     }
//     result.push(zero);
//   }
//   return result;
// }
// function setZeroses(matrix) {
//   let n = matrix.length;
//   let index = [];
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (matrix[i].includes(0)) {
//         // index = matrix[i].indexOf(0);
//         index.push(i, j);
//         matrix[i][j] = 0;
//       }
//     }
//     matrix[i].map((item, ind) => {
//       if (item[index[ind]]) {
//         item[index[ind]] = 0;
//       }
//     });
//   }
//   return matrix;
// }
// const matrix = [
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1],
// ]; //Output: [[1,0,1],[0,0,0],[1,0,1]]

// function setZeroses(matrix) {
//   let n = matrix.length;
//   let finalIndex = [];
//   for (let i = 0; i < n; i++) {
//     let isFalse = false;
//     for (let j = 0; j < n; j++) {
//       if (matrix[i][j] !== 0) {
//         matrix[i][j] = -1;
//         finalIndex.push(i, j);
//         // finalIndex.push(i,j);
//       }
//     }
//     // for (let j = 0; j < n; j++) {
//     //   if (isFalse) {
//     //     matrix[i][j] = 0;
//     //   }
//     // }
//   }
//   return matrix;
// }
// function setZeroses(matrix) {
//   let index = [];
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i].includes(0) && matrix[i][j] === 0) {
//         index.push(j);
//       }
//       if (matrix[i].includes(0)) {
//         matrix[i][j] = 0;
//       }
//     }
//   }
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       for (let k = 0; k < index.length; k++) {
//         matrix[i][index[k]] = 0;
//       }
//     }
//   }
//   return matrix;
// }
const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
function setZeroses(arr) {
  for (let i = 0; i < arr.length; i++) {
    let index = -1;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        // index = j;
        arr[i][j] = -1;
      }
    }
    // for (let k = 0; k < index; k++) {
    //   arr[i][k] = 0;
    // }
    // if (index >= 0) {
    //   console.log(index)
    //   arr[i][index] = 0;
    // }
  }
  // for(let i =0 ;i<arr.length;i++) {
  //   for(let j = 0;j<arr[i].length;j++) {
  //     // if(arr[i][j]===-1) {
  //       arr[i][j]=0
  //     // }
  //   }
  // }
  return arr;
}
//   let index = -1;
// function setZeroses(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i].includes(0) && arr[i][j] === 0) {
//         // index.push(j);
//         index = j;
//       }
//       if (arr[i].includes(0)) {
//         arr[i][j] = 0;
//       }
//     }
//     for (let j = 0; j < index; j++) {
//       arr[i][index] = 0;
//     }
//   }
//   return arr;
// }
// const matrix = [
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1],
// ]; //Output: [[1,0,1],[0,0,0],[1,0,1]]
function setZeroses(matrix) {
  let index = -1;
  for (let i = 0; i < matrix.length; i++) {
    // matrix[i].indexOf()
    // if (matrix[i].includes(0)) {
    //   matrix[i][i] = 0;
    // }
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i].includes(0)) {
        matrix[i][j] = 0;
      }
    }
    // return index;
  }
  return matrix;
}
console.log(setZeroses(matrix));
