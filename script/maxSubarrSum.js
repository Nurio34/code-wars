// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array
//  or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole 
// array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid 
// sublist/subarray.

var maxSequence = function(arr){
    newArr = []
    let sum = 0
    func()
    //Func starts here
    function func() {
        if(arr.length > 3) {
            arr.forEach((num,i)=>{
                if(i<4) newArr.push(num)

            })
            let newSum = 0
            newArr.forEach(num=> {
                newSum+=num    
                if(newSum>sum) sum = newSum
            })
            newArr = []
            arr.shift()
            func()
        }
    }
    
    if(sum<0) return 0
    return `sum : ${sum}`
}

// console.log(maxSequence([-1,-2,-3,-4,-5]))
// [-1,-2,-3,-4,-5]
// [-2, 1, -3, 4, -1, 2, 1, -5, 4]