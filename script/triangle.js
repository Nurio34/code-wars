const triangle = () => {
    let ind = 0;

    for (let i = 1; i <= 3; i++) {
        ind = i + 1;
        console.log("*".repeat(i));
    }

    return "*".repeat(ind);
};
