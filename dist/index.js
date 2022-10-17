"use strict";
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
//# sourceMappingURL=index.js.map