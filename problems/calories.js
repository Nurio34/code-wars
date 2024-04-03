const calories_test = {
    exceed: "soup_fruit",
    short: "salad_fruit",
    equal: "soup_salad",
};

function calories(obj) {
    let { exceed, short, equal } = obj;

    exceed = exceed.split("_");
    short = short.split("_");
    equal = equal.split("_");

    const most = exceed.filter((food) => equal.includes(food))[0];
    const less = short.filter((food) => equal.includes(food))[0];
    const normal = exceed.filter((food) => !equal.includes(food))[0];

    return less + " < " + normal + " < " + most;
}

// console.log(calories(calories_test));
