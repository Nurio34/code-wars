
function tribonacci(signature,n){
    if(n <= 3) return signature.filter((item,index)=> index < n)
    else{
    while(signature.length < n) {
            const arrToReduce = signature.filter((item,index) => index > signature.length - 4)
            signature.push(arrToReduce.reduce((result,num)=>result+num,0))
        }
    
    
        return signature
    }
}



//   console.log(tribonacci(test4[0],test4[1]));