console.log("TASK 1");

function returnFirstArgument(arg) {
    return arg;
}
var x = 50;
console.log(returnFirstArgument(x));

function bindFunction(fn, arg) {
    console.log(fn(arg));
}
bindFunction(returnFirstArgument,15);

console.log("TASK 2");
function forEach(Arr, fn) {
    for (var i = 0; i < fn.length; i++) {
        Arr = fn[i];
        console.log(Arr);
    }
}

array = [1,2,3,4,5];
var test;
forEach(test, array);

console.log("TASK 3");
var object = {
    "height" : "172",
    "weight" :"72",
    "country" : "Belarus"
};

function deleteProperty(obj, prop) {
    delete obj[prop];
}
console.log("before: ", object);
deleteProperty(object, "height");
console.log("after: ", object);

square = {
    set: function(obj, prop, value) {
        if (!Number.isInteger(value)) {
            throw new TypeError('The value is not an integer');
        } else {
            value = value * value;
        }
        obj[prop] = value;
        return true;
    }
};

function createProxy(obj) {
    return new Proxy(obj, square);
}

obj = createProxy(object);

obj.num1 = 20;
console.log(obj.num1);

obj.num2 = 10;
console.log(obj.num2);