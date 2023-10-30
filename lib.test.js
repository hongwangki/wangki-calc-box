const { test, expect } = require("@jest/globals");
const lib = require("./lib");
test("avg([3, 5, 7]) should be 5", () => { //avg test
expect(lib.avg([3, 5, 7])).toBe(5);
});
test("avg([-5, 5]) should be 0", () => { //avg test
expect(lib.avg([-5, 5])).toBe(0);
});
test("fact 5! should be 120", () => { //fact test
    expect(lib.fact(5)).toBe(120);
    });
test("prime 7 should be true", () => { //prime test
    expect(lib.prime(5)).toBe(true);
    });    