// Input:
let numRows = 5;
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// function generate(numRows) {
//   let finalResult = [];
//   let sum = 0;
//   for (let i = 0; i < numRows; i++) {
//     let result = [];
//     for (let j = 0; j < i + 1; j++) {
//       if (j === 0) {
//         result.push(1);
//       } else {
//         let current = i;
//         result.push(1);
//       }
//     }
//     finalResult.push(result);
//   }
//   for (let i = 0; i<finalResult.length; i++) {
//     for (let j = 0; j < i + 1; j++) {
//       if (finalResult[i][0] === 1 && finalResult[i][finalResult.length - 1]) {
//         return finalResult[i];
//       }
//     }
//   }
//   return finalResult;
// }

//[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
function add(row, col) {
  let val = row + col;
  return val;
}
function generate(numRows) {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    let temp = [1];
    for (let j = 1; j < i; j++) {
      let val = add(result[i - 1][j - 1], result[i - 1][j]);
      temp.push(val);
    }
    if (i > 0) {
      temp.push(1);
    }
    result.push(temp);
  }
  return result;
}

// function generate(numRows) {
//   let triangle = [];
//   for (let row = 0; row < numRows; row++) {
//     let newRow = [1];
//     for (let col = 1; col < row; col++) {
//       let value = triangle[row - 1][col - 1] + triangle[row - 1][col];
//       newRow.push(value);
//     }
//     if (row > 0) {
//       newRow.push(1);
//     }
//     triangle.push(newRow);
//   }
//   return triangle;
// }
// function generate(numRows) {
//   let triangle = [];
//   for (let i = 0; i < numRows; i++) {
//     let newRow = [1];
//     for (let j = 1; j < i; j++) {
//       let val = triangle[i - 1][j - 1] + triangle[i - 1][j];
//       newRow.push(val);
//     }
//     if (i > 0) {
//       newRow.push(1);
//     }
//     triangle.push(newRow);
//   }
//   return triangle;
// }
function generate(numRows) {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    let newRow = [1];
    for (let j = 1; j < i; j++) {
      let val = result[i-1][j-1]+result[i-1][j];
      newRow.push(val);
    }
    if (i > 0) {
      newRow.push(1);
    }
    result.push(newRow);
  }
  return result;
}
console.log(generate(numRows));
