"use strict";
var _a;
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
function calculatedTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    if (income < 50000)
        return income * 1.2;
    return income * 1.3;
}
calculatedTax(10000, 2022);
let employee = { id: 1, name: "" };
let employee2 = {
    id: 1,
    name: "",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10Kg");
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
greet(null);
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthdate: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthdate);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthdate) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log("jd");
//# sourceMappingURL=index.js.map