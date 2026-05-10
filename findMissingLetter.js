function findMissingLetter(arr) {
  let str = arr.join('').toLowerCase();

  for ( let i = 0 ; i < str.length-1  ; i++){
    // console.log(str.charCodeAt(i)+1)
    // console.log(str.charCodeAt(i+1))
    if(str.charCodeAt(i+1) - str.charCodeAt(i)>1){
        return String.fromCharCode(str.charCodeAt(i) + 1);
  }
  
 
}
return undefined
}

console.log(findMissingLetter(["a","b","c","e"])); // Output: "d"
console.log(findMissingLetter(["a","b","c","d"])); // Output: undefined







console.log(findMissingLetter(['a','b','c','d','f']))     // 'e'
console.log(findMissingLetter(['X','Y','Z']))                 // 'Y'
console.log(findMissingLetter(['M','N','P','Q']))         // 'O'