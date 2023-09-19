/*Array is Data structure
ประกอบด้วยข้อมูลหลายๆข้อมูลที่เป็นข้อมูลประเภทเดียวกัน

Array เอามาใช้กับ ภาษาโปรแกรม ในเรื่องของตัวแปร(Variable)
*/

let x = 10;
const Y = 20;
let data1 = [10, 20, 30, 40];
let data2 = ["Hi", "Hey", "Hoo"];

console.log(x);
x = 100;
console.log(x);
console.log(Y);

console.log(data1[2]);
console.log(data2[1]);
data2[1] = "hello";
console.log(data2[1]);
console.log(data2);
data2.push("wow");
console.log(data2);
data2.pop();
data2.pop();
console.log(data2);
//----------------------------------
let data3 = [10, 20, "AAA", 50.55];
console.log(`Data 3 มีทั้งหมด ${data3.length}`);
console.log(data3[2]);
