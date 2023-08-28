console.log("first");

console.log("array slice");
const arr1 = [2, 4, 6, 8, 10];
const cutArr = arr1.slice(1, 4);
console.log(arr1);
console.log(cutArr);

console.log(" ");
console.log("array splice");
const newArr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(newArr);
const sliceArr = newArr.splice(2, 3, 22, 33, 44);
console.log(sliceArr);
console.log(newArr);

console.log(" ");
console.log("array unique");

const a3 = [2, 4, 6, 2, 7, 9];
console.log(a3);

const na3 = [];

for (let i = 0; i < a3.length; i++) {
  const ele = a3[i];

  if (!na3.includes(ele)) {
    na3.push(ele);
  }
}

console.log(na3);

const str = "hello";

console.log(str.length);

var student = { name: "Yo Mama", age: 17 };

delete student.age;

console.log(student);
