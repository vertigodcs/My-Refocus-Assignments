const calculator = require("./javascript_function.js");

test("Check if add function is working ", ()=>{
    expect(calculator.add(70,170)).toBe(240);
});

test("Check if subtract function is working ", ()=>{
    expect(calculator.subtract(170,170)).toBe(0);
});

test("Check if multiply function is working ", ()=>{
    expect(calculator.multiply(70,10)).toBe(700);
});

test("Check if divide function is working ", ()=>{
    expect(calculator.divide(70,10)).toBe(7);
});