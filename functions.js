function getSum(num1, num2) {
    return num1 + num2;
}
//console.log(getSum(1,2));
var mySum = function (num1, num2) {
    if (typeof num1 == "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 == "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
//console.log(mySum("1","3"))
function getName(first, last) {
    if (last == undefined) {
        return first;
    }
    return first + " " + last;
}
//console.log(getName("Kyle"))
function myVoid() {
}
