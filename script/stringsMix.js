function mix(s1, s2) {
    s1 = s1.match(/[a-z]/g);
    s2 = s2.match(/[a-z]/g);

    const createArray = (arr) => {
        const unique_arrArr = [];

        arr.forEach((ch) => {
            if (!unique_arrArr.includes(ch)) unique_arrArr.push(ch);
        });

        const arrArr = [];

        unique_arrArr.forEach((ch) => arrArr.push([ch]));

        arr.forEach((ch) => {
            arrArr.forEach((subArr) => {
                if (subArr.includes(ch)) subArr.push(ch);
            });
        });

        arrArr.forEach((subArr) => (subArr.length = subArr.length - 1));

        const filtered_arrArr = arrArr.filter((subArr) => subArr.length > 1);

        return filtered_arrArr;
    };

    const s1Arr = createArray(s1);
    const s2Arr = createArray(s2);
    const mixedArr = [];

    const mixArrs = (arr1, arr2) => {
        arr1.forEach((subArr1) => {
            arr2.forEach((subArr2) => {
                if (subArr2.includes(subArr1[0])) {
                    if (subArr1.length > subArr2.length) {
                        mixedArr.push(`1:${subArr1.join("")}/`);
                    } else if (subArr1.length < subArr2.length) {
                        mixedArr.push(`2:${subArr2.join("")}/`);
                    } else {
                        mixedArr.push(`=:${subArr1.join("")}/`);
                    }
                }
            });
        });
        arr2.forEach((subArr2) => {
            arr1.forEach((subArr1) => {
                if (subArr1.includes(subArr2[0])) {
                    if (subArr2.length > subArr1.length) {
                        mixedArr.push(`2:${subArr2.join("")}/`);
                    } else if (subArr2.length < subArr1.length) {
                        mixedArr.push(`1:${subArr1.join("")}/`);
                    } else {
                        mixedArr.push(`=:${subArr2.join("")}/`);
                    }
                }
            });
        });
    };

    mixArrs(s1Arr, s2Arr);
    const reducedArr = [];

    mixedArr.forEach((str) => {
        if (!reducedArr.includes(str)) reducedArr.push(str);
    });

    return reducedArr;
}

const str1 = "Are they here";
const str2 = "yes, they are here";

// expected "2:eeeee/2:yy/=:hh/=:rr"
