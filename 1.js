// let obj = {
//   name: "JS",
//   greet() {
//     return `Hello ${this.name}`;
//   }
// };

// // console.log(obj.greet)
// let fn = obj.greet;
// console.log(fn());
// console.log(fn);

// console.log(typeof NaN);
// console.log(isNaN("hello"));
// console.log(Number.isNaN("hello"));

// const obj = {
//   a: 1,
//   b: function () {
//     return this.a;
//   },
//   c: () => this.a
// };

// console.log(obj.b());
// console.log(obj.c());

const obj = {
  a: 10,
  getA: function () {
    return this.a;
  }
};
let x = obj.getA
// const fn = obj.getA.bind({ a: 20 });
console.log(obj.getA());
// console.log(x);
console.log(x());

console.log("Shivam")