// You are given an different-length array of integers, in which all of them are the same, except for one same number.

// Complete the method which accepts such an array, and returns that same different number.

// The input array will always be valid! (different-length >= 3)

// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


function stray(numbers) {
    
    const same = []
    const different = []

        numbers.forEach(num=> {

            if(different.includes(num)) {
                same.push(num)
                return
            }

            different.push(num)
            
        })

        different.filter(num=> {

            if(num != same[0]) different.unshift(num)
        })

    return different[0]
}

// console.log(stray([17, 17, 3, 17, 17, 17, 17]));