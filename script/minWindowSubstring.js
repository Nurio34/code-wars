
// FIND THE PART THAT INCLUDES ALL CHARS IN STHE SECOND ARRAY

function MinWindowSubstring(strArr) { 

    const firstArr = strArr[0].split("")
    const secondArr = strArr[1].split("")
    const parameter = firstArr.length - secondArr.length + 1
    let controlArr = ""
    let part
    let solution

        for(let i=1;i<=parameter;i++) {
            let count = 0

            part = firstArr.join("").slice(0,secondArr.length)

            controlArr = part.split("")

                secondArr.forEach(char=>{

                    if(controlArr.includes(char)){
                        count++
                        if(count == secondArr.length) {
                            if(controlArr.sort().join("") == secondArr.sort().join("")) {
                                solution = part
                                
                            }
                        }
                    }

                })

                if(count < secondArr.length) {
                    firstArr.shift()
                }
        }

        return solution
  }
//   console.log(MinWindowSubstring(["aabdccdbcacd", "cbcdc"]));

//! Doesnt solve all problems
