"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
let person1 = {
    name: "abc",
    age: 42,
    isStudent: true,
    address: {
        street: "abcd",
        city: "city",
        country: "country"
    }
};
let person2 = {
    name: "xyz",
    age: 67,
    isStudent: false,
    address: {
        street: "abcd",
        city: "city",
        country: "country"
    }
};
const peopleArr = [person1, person2];
const peopleArr1 = [person1, person2];
console.log(person1);
(0, index_1.getPizzaDetail)(2);
