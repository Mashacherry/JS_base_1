// 2. Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.
// let basket = {

// }

let basket = {
    products: [{
            name: 'Винишко',
            price: 250,
            quantity: 2
        },
        {
            name: 'Виски',
            price: 500,
            quantity: 4
        },
        {
            name: 'Coka Cola',
            price: 90,
            quantity: 3
        }
    ]

}

function countBasketPrice(basket) {
    var summ = 0;
    basket.products.forEach(product => {
        summ += product.price * product.quantity;
    });
    return summ;
};
console.log(countBasketPrice(basket));