// function merge(intervals) {
//   // intervals.sort((a, b) => a - b);
//   // return intervals;
//   for (let i = 0; i < intervals.length; i++) {
//     let start = intervals[i][0];
//     let end = intervals[i][1];
//     for (let j = 0; j < intervals[i].length; j++) {
//       if (intervals[i][j+1] < intervals[i][1]) {
//         [intervals[0][1], intervals[i][0]] = [intervals[0][0], intervals[1][1]];
//         //   [intervals[i][1], intervals[i][0]] = [intervals[i][0], intervals[i][1]];
//       } else {
//         return "";
//       }
//     }
//   }
//   return intervals;
// }
// function merge(arr) {
//   let a = [];
//   for (let i = 0; i < arr.length; i++) {
//     a.push(
//       arr[i].reduce((acc, cur) => {
//         if (arr[i][0] < cur && arr[i][1] > cur) {
//           acc.push(arr[i][0], cur);
//         }
//         return acc;
//       }, [])
//     );
//   }
//   return a;
// }

// function merge(intervals) {
//   intervals.sort((a, b) => a[0] - b[0]);
//   const result = [];
//   let i = 0;
//   while (i < intervals.length) {
//     let first = intervals[i][0];
//     let last = intervals[i][1];
//     for (let j = i + 1; j < intervals[i].length; j++) {
//       if (last >= intervals[j][0]) {
//         if (last <= intervals[j][1]) {
//           last = intervals[j][1];
//         }
//         i = j;
//       }
//     }
//     result.push([first, last]);
//     i++;
//   }
//   return result;
// }
function merge(intervals) {
  for(let i = 0;i<intervals.length;i++) {
    let interval = intervals[i];
    for(let j=0;j<interval.length;j++) {
      if(interval[i][j]>interval[i+1][j]) {
        
      }
    }
  }
}
console.log(
  merge([
    [1, 3],
    [2, 6],
    [23, 1],
    [8, 10],
    [15, 18],
  ])
);
// console.log(
//   merge([
//     [1, 4],
//     [4, 5],
//   ])
// );
console.log(
  merge([
    [1, 4],
    [2, 3],
  ])
);
