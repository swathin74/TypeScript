"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPizzaDetail = getPizzaDetail;
const menu = [
    { id: 1, name: "A", price: 9 },
    { id: 2, name: "B", price: 10 },
    { id: 3, name: "C", price: 12 },
    { id: 4, name: "D", price: 15 }
];
let cashInRegister = 100;
const orderQueue = [];
let nextOrderId = 1;
let pizzaId = 1;
const a = "swathi;";
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
function getPizzaDetail(identifier) {
    if (typeof identifier === "string") {
        const pizzaDetailByName = menu.find(pizza => pizza.name === identifier);
        if (!pizzaDetailByName) {
            console.log("Pizza not found by name");
        }
        else
            console.log(pizzaDetailByName);
    }
    else {
        const pizzaDetailById = menu.find(pizza => pizza.id === identifier);
        if (!pizzaDetailById)
            console.log("Pizza not found by Id");
        else
            console.log(pizzaDetailById);
    }
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
function updatePizza(id, updates) {
    const findPizzaId = menu.find(i => i.id === id);
    if (!findPizzaId) {
        return "not found";
    }
    return Object.assign(findPizzaId, updates);
}
function getLastItem(array) {
    return array[array.length - 1];
}
addNewPizza({ id: 5, name: "S", price: 13 });
addNewPizza({ id: 6, name: "V", price: 15 });
addNewPizza({ id: 7, name: "M", price: 17 });
placeOrder("S");
completeOrder(1);
getPizzaDetail(100);
console.log(menu);
console.log(orderQueue);
console.log("Cash in Register:", cashInRegister);
console.log(updatePizza(1, { name: 'M' }));
console.log(getLastItem(menu));
