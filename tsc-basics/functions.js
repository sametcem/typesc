function getSome(num1, num2) {
    return num1 + num2;
}
//console.log(getSome(1,42))
var mySum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
//console.log(mySum('33','41'));
function getName(firstname, lastName) {
    if (lastName == undefined) {
        return firstname;
    }
    return firstname + ' ' + lastName;
}
//console.log(getName('John'));
function myVoid() {
    return;
}
