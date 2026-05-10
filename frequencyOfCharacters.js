//calculate how many times a character repeat in a string

let str = "Abdulrasheed Talal";
let newStr = str.toLowerCase();
let arr = newStr.split("");
let obj = {};
for (let i of arr) {
  let count = 0;
  
  for (let ch of arr) {
    if (i == ch) {
      count++;
    } 
  }
  if(i!=" "){
    obj[i]=count
  }
}
console.log(obj);

