const sq_test = -4;

var isSquare = function (n) {
    return n >= 0 && !Math.sqrt(n).toString().includes(".");
};
