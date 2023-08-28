const arr = [1, 3, 5, 7, 9];

console.log(arr);

arr.splice(2, 0, 4);

console.log(arr);

arr.splice(4, 0, 6);

console.log(arr);

arr.splice(1, 0, 2);
console.log(arr);

arr.splice(7, 0, 8);
console.log(arr);

arr.splice(9, 0, 10);
console.log(arr);

let a = 6;

if (a >= 2) {
  console.log("first");
}

if (a <= 8) {
  console.log("small");
}
