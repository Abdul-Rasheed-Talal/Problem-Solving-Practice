let arr = [10,15,30,75,40,61,23]

let result = []

for ( let i = 0 ; i<arr.length ; i++){
    if(arr[i]>40){
        result.push(arr[i])
    }
}

console.log(result);
