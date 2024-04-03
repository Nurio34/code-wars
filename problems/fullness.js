const fullness_test = { empty: 280, full: 400, half: 355 };

function fullness(obj) {
    const { empty, full, half } = obj;
    const water = full - empty;
    const fullness = half - empty;

    return fullness / water;
}

// console.log(fullness(fullness_test));
