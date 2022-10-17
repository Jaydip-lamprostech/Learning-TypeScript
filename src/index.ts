let age: number = 20;

if (age < 50) age += 10;

console.log(age);

// bestpractice is to use return type of the function
// and use "noImplicitReturns": true commented

function calculatedTax(income: number, taxYear = 2022): number {
  //   let x;
  // if "noUnusedLocals": true will commented then it will give no error
  if (taxYear < 2022) return income * 1.2;

  //if we use "taxYear?: number" in the function params then we have two options
  // 1. if ((taxYear || 2022) < 2022) return income * 1.2;
  // 2. or we can give a default value in function params like this
  // "function calculatedTax(income: number, taxYear = 2022):number"

  if (income < 50_000) return income * 1.2;
  return income * 1.3;
}

// calculatedTax(10_000,2022,2);
//  we can not do that in ts it will give error

calculatedTax(10_000, 2022);

// ##################################

// ******* OBJECTS *********

// #####################################

// let employee = { id: 1 };
// employee.name = "jd"

let employee: { id: number; name: string } = { id: 1, name: "" };
// let employee: { id: number; name?: string } = { id: 1};
// we can do like above but we shouldn't

// if we want to use readonly properties then
// let employee: { readonly id: number; name: string } = { id: 1, name: "" };
// after this we can not change id
// employee.id ="patel" => gives error

// function as a object property

// let employee2: {
//   id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// type alias

// build custom type

type Employee = {
  id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee2: Employee = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};

// Union Types

function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10Kg");
