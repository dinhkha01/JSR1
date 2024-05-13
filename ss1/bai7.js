// function findMaxLessThanOrEqual(array, target) {

//   let filteredNumbers = array.filter((number) => number <= target);

//   // Tìm số lớn nhất trong mảng đã lọc
//   if (filteredNumbers.length > 0) {
//     let maxNumber = Math.max(...filteredNumbers);
//     return maxNumber;
//   } else {
//     return null; // Trả về null nếu không có số nào thỏa mãn
//   }
// }

// // Ví dụ sử dụng hàm:
// let arr = [3, 7, 4, 2, 8, 6];
// let num = 5;
// let maxNumber = findMaxLessThanOrEqual(arr, num);

// if (maxNumber !== null) {
//   console.log(`Số lớn nhất nhỏ hơn hoặc bằng ${num} là: ${maxNumber}`);
// } else {
//   console.log(`Không có số nào thỏa mãn điều kiện.`);
// }

let arr = [3, 7, 4, 2, 8, 6];
let num = 5;

function timSolon(arr, num) {
  arrMaxNum = arr.filter((number) => number <= num);
  if (arrMaxNum.length > 0) {
    let max = Math.max(...arrMaxNum);
    return max;
  } else {
    return null;
  }
}
let max = timSolon(arr, num);

if (max !== null) {
  alert(`số lớn nhất và nhỏ hơn hoặc bằng số truyền vào là : ${max}`);
} else {
  alert(` Không có số nào`);
}
