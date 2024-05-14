let mang1 = [1, 2, "a", 6, 7];
let mang2 = ["b", "hai"];
let viTriChen = 2;
function chenMang(arr1, arr2, viTri) {
  arr1.splice(viTri, 0, ...arr2);
  return arr1;
}

let arr = chenMang(mang1, mang2, viTriChen);
console.log(arr);
