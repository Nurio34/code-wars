// In this example you have to validate if a user input string is alphanumeric. The given string 
// is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

function alphanumeric(string){

    const value = string.trim()

    if(!value || value.split(" ").length > 1 || 
    value.includes("_") || value.includes("!") || value.includes("&") || value.includes("(")
    || value.includes(")")
    ) return false
    return true

    //** BEST ANSWER */
    //todo:  let alphanumeric = string => /^[a-z\d]+$/i.test(string);//
    //** */
}

//   console.log(alphanumeric("qsoyfCC6lunFS3!RHNnzij"));