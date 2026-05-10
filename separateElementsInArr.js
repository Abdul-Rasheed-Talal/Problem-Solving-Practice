let arr = [10,15,30,"c","e",75,40,"q",61,23]

let intResult = []
let strResult = []
for ( value of arr){
    if(typeof(value)=="number"){
        intResult.push(value)
    }
    else{
        strResult.push(value)
    }
}

console.log(intResult);
console.log(strResult);
