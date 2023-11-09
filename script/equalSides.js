


function findEvenIndex(arr)
{
    if( arr[0] !== 0 && arr.reduce( (res,num)=>res+num,0) === 0 ) return -1  

  else {
    let n = -1
    return check(n)

    function check(num) {
        const checkArr = arr.filter((item,index)=> index <= num)
        const comparedArr = arr.filter((item,index)=> index > num+1)

        if( checkArr.reduce((res,num)=>res+num,0) === comparedArr.reduce((res,num)=>res+num,0) ) return n+1

        else {
            if(n < arr.length - 2) {
                n++
                return check(n)
            } 

            return -1
        }
    }
  }
}


// console.log(findEvenIndex(test4));