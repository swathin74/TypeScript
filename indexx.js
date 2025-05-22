"use strict";
const menu = [
    { name: "A", price: 9 },
    { name: "B", price: 10 },
    { name: "C", price: 12 },
    { name: "D", price: 15 }
];
let cashInRegister = 100;
const orderQueue = [];
let nextOrderId = 1;
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizza => pizza.name === pizzaName);
    if (!selectedPizza) {
        console.log("Pizza not found");
        return;
    }
    cashInRegister += selectedPizza.price;
    const newOrder = {
        pizza: selectedPizza,
        status: "ordered",
        id: nextOrderId++
    };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    const order = orderQueue.find(o => o.id === orderId);
    if (!order) {
        console.log("Order not found");
        return;
    }
    order.status = "completed";
    return order;
}
addNewPizza({ name: "S", price: 13 });
addNewPizza({ name: "V", price: 15 });
addNewPizza({ name: "M", price: 17 });
placeOrder("S");
completeOrder(1);
console.log(menu);
console.log(orderQueue);
console.log("Cash in Register:", cashInRegister);
