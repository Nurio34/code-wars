const test_1 = [
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11],
];

snail = function (array) {
    const SnailArr = [];

    const Recrusion = () => {
        let process = false;
        const Mapped = array.map((subArr, ind) => {
            if (ind == 0) {
                return subArr.map((num) => num);
            } else if (ind > 0 && ind < array.length - 1) {
                return subArr[subArr.length - 1];
            } else {
                process = true;
                const copySubArr = [...subArr].reverse();
                return copySubArr;
            }
        });
        if (process) {
            const arr = array
                .map((subbArr, ind) => {
                    if (ind > 0 && ind < array.length - 1) {
                        return subbArr[0];
                    }
                })
                .filter((item) => item != undefined)
                .reverse();
            Mapped.push(arr);
        }
        SnailArr.push(Mapped.flat());
        array = array.splice(1, array.length - 2).map((subArr) => {
            return subArr.filter((num, ind) => {
                return ind > 0 && ind < subArr.length - 1;
            });
        });

        if (array.length) {
            Recrusion();
        }
    };

    Recrusion();
    return SnailArr.flat();
};

console.log(snail(test_1));
