import { getPizzaDetail } from "./index"

type Address = {
    street: string,
    city: string, 
    country: string
}

type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    address: Address
}

let person1: Person = {
    name: "abc",
    age: 42,
    isStudent: true,
    address: {
        street: "abcd",
        city: "city",
        country: "country"
    }
}

let person2: Person = {
    name: "xyz",
    age: 67,
    isStudent: false,
    address: {
        street: "abcd",
        city: "city",
        country: "country"
    }
}

const peopleArr: Person[] = [person1, person2]
const peopleArr1: Array<Person> = [person1, person2]


console.log(person1)
getPizzaDetail(2)