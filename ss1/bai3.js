let arr = [1, 2, "z", true, -1, -3];

let arr1 = arr.filter((num) => typeof num === "number" && num > 0);
console.log(arr1);
