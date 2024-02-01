
const number =  39998852222210 // expected 50122222388999

function nextBigger(num){
    
    let numArr = num.toString().split("").reverse() // 456321
    let initialIndex = 0
        
    function Recrusion(index) {
        const compNum = +numArr[index]
            
        let changeNumArr = []
        let changeNum = null
        let changeNumIndexArr = []
        let changeNumIndex = null
        let newNumArr = []

        let arrToSort = []
        let arrStatic = []

        numArr.forEach((num,ind)=>{

            if(ind>index && compNum>+num) {
                changeNumArr.push(+num)
                changeNum = changeNumArr[0]

                changeNumIndexArr.push(+ind)
                changeNumIndex = changeNumIndexArr[0]

                newNumArr = numArr.map((num,ind)=>{
                    if(ind === index) return num = changeNum
                    else if(ind === changeNumIndex) return num = compNum
                    else  return +num
                })  
 
            }

            else {
                initialIndex ++
                if(initialIndex < numArr.length) Recrusion(initialIndex)
            }

            
        })

        for(let i=0; i<changeNumIndex; i++) {
            arrToSort.push(newNumArr[i])
        }
        for(let i=changeNumIndex; i<newNumArr.length; i++) {
            arrStatic.push(newNumArr[i])
        }
        
        arrToSort = arrToSort.sort()
        arrStatic = arrStatic.reverse()
        newNumArr = arrStatic.concat(arrToSort)

        console.log(arrStatic);

        return +newNumArr.join("")
    }

    return Recrusion(initialIndex)
  }

  console.log(nextBigger(number));