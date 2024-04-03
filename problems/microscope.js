const microscope_test = {
    lens1: "Zoom x5",
    lens2: "Zoom *40",
    object: "12.5/1000 mm",
};

function microscope(obj) {
    const { lens1, lens2, object } = obj;

    const zoom1 = parseInt(lens1.split(" ")[1].slice(1));
    const zoom2 = parseInt(lens2.split(" ")[1].slice(1));

    function convert(object) {
        const measure = object.split(" ")[1];
        let num = object.split(" ")[0].split("/");
        num = +num[0] / +num[1];

        if (measure === "cm") {
            num = num * 10;
        } else if (measure === "dm") {
            num = num * 100;
        } else if (measure === "m") {
            num = num * 1000;
        }

        return num;
    }

    const num = convert(object);

    return num * zoom1 * zoom2 + " mm";
}

// console.log(microscope(microscope_test));
