let obj ={
    num1: 100, 
    num2:50,
    sum:150,
    difference:50,
    product:500,
    quotient: 20
};

function showData(obj){
    console.log("===========================");
    console.log(`First Number: ${obj.num1}`);
    console.log(`Second Number: ${obj.num2}`);
    console.log(`The sum is: ${obj.sum}`);
    console.log(`The difference is: ${obj.difference}`);
    console.log(`The product is: ${obj.product}`);
    console.log(`The quotient is: ${obj.quotient}`);
}

const myFunction = {
 add : function (num1, num2){
    return num1 + num2;
},
subtract: function (num1, num2){
    return num1 - num2;
},
multiply: function (num1, num2){
    return num1 * num2;
},
divide: function (num1, num2){
    return num1 / num2;
}
};

function newSetOfNumber(num1, num2){
    obj.num1 = num1;
    obj.num2 = num2;
    obj.sum = myFunction.add(num1,num2);
    obj.difference = myFunction.subtract(num1,num2);
    obj.product = myFunction.multiply(num1,num2);
    obj.quotient = myFunction.divide(num1,num2);
}
showData(obj);
newSetOfNumber(200, 10);
showData(obj);
newSetOfNumber(500, 20);
showData(obj);



//Manual Testing 
console.log(myFunction.add(1,2));
console.log(myFunction.subtract(1,2));
console.log(myFunction.multiply(1,2));
console.log(myFunction.divide(1,2));

module.exports = myFunction;

