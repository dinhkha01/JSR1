let student = [
  { id: 1, number: 25 },
  { id: 2, number: 30 },
  { id: 3, number: 50 },
  { id: 4, number: 80 },
  { id: 5, number: 29 },
];
let studen = student.map((cls) => {
  if (cls.number < 30) {
    return { ...cls, number: cls.number + 10 };
  } else if (cls.number > 40) {
    return { ...cls, number: cls.number - 10 };
  } else {
    return { ...cls };
  }
});
console.log(studen);
