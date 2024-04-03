const compounds_test = [
    {
        compound: ["water", "water", "water", "coffe"],
        price: 9,
    },
    {
        compound: ["water", "coffe", "coffe", "coffe"],
        price: 15,
    },
    {
        compound: ["milk", "milk", "milk", "coffe"],
        price: 12,
    },
];

function compounds(ARRAY) {
    let Global_Components = [];

    ARRAY.forEach((object) => compund_FN(object));

    function compund_FN(object) {
        const components = {};

        object.compound.forEach((compound) => {
            if (!components[compound]) {
                components[compound] = 1;
            } else {
                components[compound] = components[compound] + 1;
            }
            components.price = object.price;
        });

        Global_Components.push(components);
    }

    const Pair = Global_Components.forEach((object, ind) => {
        console.log(Object.keys(object));
    });

    console.log(Pair);
}

console.log(compounds(compounds_test));
