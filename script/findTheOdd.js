function findOdd(A) {
    let Arr = A;
    let checkedArr = [];
    let firstInt = Arr[0];
    let solution;
    findOddMiddle();

    function findOddMiddle() {
        A.forEach((int) => {
            if (int == firstInt) {
                checkedArr.push(int);
            }
        });

        if (checkedArr.length % 2 !== 1) {
            Arr = Arr.filter((int) => int !== firstInt);
            checkedArr = [];
            firstInt = Arr[0];
            findOddMiddle();
        } else {
            solution = firstInt;
        }
    }

    return solution;
}

// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
