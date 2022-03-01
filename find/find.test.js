const assert = require("assert");
const find = require("./index.js");

const fruits = ["Apple", "Orange", "Strawberry", "Watermelon", "Banana"];
const evens = [2, 4, 6, 8, 10];

assert.equal(find(fruits, "Orange"), "Orange");
assert.equal(find(fruits, "Pumpkin"), undefined);

assert.equal(find(fruits, ""), undefined);
assert.equal(find(evens, 8), 8);

assert.equal(find(evens, "2"), undefined);
assert.equal(find(evens, 9), undefined);
