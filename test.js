let arr = [1, 2, 3, 4, 5, 0, 0, 0, 0, 0];
let arr2 = [];
//forEach:duyệt qua mảng
arr.forEach(() => {
  arr2.push(Math.floor(Math.random() * 100));
});
console.log(arr2);

arr2.forEach((Number) => {
  console.log(Number);
});

//map: lập lại độ dài của mảng
arr2 = arr.map(() => Math.floor(Math.random() * 100));
console.log("arr2:", arr2);

//filter: lọc phần tử đúng điều kiện (lộc mảng)
let arr3 = arr2.filter((num) => num % 3 == 0);
console.log(arr3);

// reduce: bài toán tính toán  (,0 bắt đầu từ số 0)
let sum = arr2.reduce((temp, num) => temp + num, 0);
console.log(sum);
let multi = arr2.reduce((temp, num) => temp * num, 1);
console.log(multi);
// find: tìm giá trị đầu tiên (tìm kiếm 1)// find:tìm kiếm giá trị findindex: tìm kiếm chỉ mục
let chia = arr2.find((num) => num % 5 == 0);
console.log(chia);
let chia1 = arr2.findIndex((num) => num % 5 == 0);

console.log(chia1);
