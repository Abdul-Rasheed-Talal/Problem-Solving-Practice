let str = "Programming"
let newStr = str.split(" ")
// console.log(newStr)
let newVar = ""
for (let i =0 ; i<newStr.length ;i++){
    
    if(newStr[i].length > newVar.length){
        newVar=newStr[i]
    }
}
console.log(newVar)

