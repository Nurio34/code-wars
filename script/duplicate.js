
function duplicateEncode(word){
    
    const arr = []

    word.toLowerCase().split("").forEach(ch => word.indexOf(ch) === word.lastIndexOf(ch) ? arr.push("(") : arr.push(")"))
   
    return arr.join("")
}


//   console.log(duplicateEncode(test2));