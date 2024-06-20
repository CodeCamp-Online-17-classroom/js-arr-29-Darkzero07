// ให้สร้าง array result จาก array ที่กำหนด โดยใช้ arr.map(fn)

const array = [1, 2, 30, 400];
const array2 = array.map(item => item * 2);
console.log(array2);
// result: [2, 4, 60, 800"]

const array = [1, 2, 3, 4];
const array2 = array.map(item => item.toString())
console.log(array2);
// result: ["1", "2", "3", "4"]

const array = [1, '1', 2, {}];
const array2 = array.map(item => typeof(item))
console.log(array2)
// result: ["number", "string", "number", "object"]
