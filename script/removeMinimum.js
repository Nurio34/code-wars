
const test1  = [5, 3, 2, 1, 4]
const test2 = [2, 2, 1, 2, 1]

function removeSmallest(numbers) {
    
    // En düşük sayıyı tespit et
    let min = 1
    
        numbers.forEach(num=> {
            if(min < num) return
            else min = num
        })
    
    // min'i arrayden çıkar //! birden fazla aynı min sayısından varsa, sadece ilkini çıkar
    const arr = numbers.filter(num=>{
        num !== min
        break;
    })


    return arr
  }


  console.log(removeSmallest(test2));