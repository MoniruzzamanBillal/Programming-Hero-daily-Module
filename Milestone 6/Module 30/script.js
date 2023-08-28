const a = [2, 4, 6, 8, 10];

// console.log(...a);

let maxArray = Math.max(...a);

// console.log(maxArray);

const arr1 = [1, 3, 5, 7, 9];

const arr2 = [...arr1];

// console.log(arr2);

const arr3 = [...arr1, ...a];

// console.log(arr3);

const obj1 = [
  { name: "ab", id: 22, dept: "cse" },
  { name: "cd", id: 23, dept: "cse" },
  { name: "ef", id: 24, dept: "cse" },
];

// console.log(obj1);

const createdObj = obj1.map((ele, ind) => ele.name);

// console.log(createdObj);

const arr4 = [1, 2, 3, 4, 5];

const sum1 = arr4.reduce((prev, current) => prev + current, 0);

console.log(sum1);

function min(nums) {
  return Math.min(...nums);
}
console.log(min([1, 3, 2]));

const nums = [1, 2, 3, 4, 5];
let output = nums.filter((n) => n % 2);
console.log(output);
