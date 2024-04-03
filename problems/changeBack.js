const changeBack_products = [
    {
        chocolate: { price: 0.99, amount: 5 },
    },
    {
        milk: { price: 1.1, amount: 1 },
    },
    {
        bread: { price: 1.25, amount: 3 },
    },
];
const changeBack_money = 10;

function changeBack(products, money) {
    const total = products.reduce((sum, product) => {
        return (
            sum +
            Object.values(product)[0].price * Object.values(product)[0].amount
        );
    }, 0);

    return (money - total).toFixed(2);
}
// console.log(changeBack(changeBack_products, changeBack_money));
