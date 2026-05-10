// First non repeating character 

let str = "abdulrasheed"
let arr = str.split("")
for (let ch of arr){
    let count = 0;
    for (let c of arr) {
        if(ch==c){
            count++
        }
    }
    if(count==1){
        console.log(ch)
        break;
    }
}


// console.log(arr)




