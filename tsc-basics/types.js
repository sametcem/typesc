//console.log('Hello from ts');
// tsc types.ts on CMD
var myString;
var myNum;
var myBool;
var myVar;
/*
let strArr: string[];
let numArr: number[];
let boolArr: boolean[];
*/
var strArr;
var numArr;
var boolArr;
var strNumTuple;
myString = 'HELLO CEM' + ' ' + 'How are you doing?';
myString = 'HELLO CEM'.slice(0, 3);
myNum = 22;
myBool = true;
strArr = ['Hello', 'World'];
numArr = [12, 54, 21];
boolArr = [true, false, true];
strNumTuple = ['Hello', 4];
var myVoid = null; // void can be null and undefined types
var myNull = null;
var myUndefiend = undefined;
console.log(myVoid);

//console.log(...strArr); ES6 spread operator