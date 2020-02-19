//console.log('Hello from ts');
// tsc types.ts on CMD

let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

/*
let strArr: string[];
let numArr: number[];
let boolArr: boolean[];
*/

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;


let strNumTuple: [string,number]


myString = 'HELLO CEM'+ ' '+ 'How are you doing?';
myString = 'HELLO CEM'.slice(0,3);
myNum = 22;
myBool = true;
strArr = ['Hello','World'];
numArr = [12,54,21];
boolArr = [true,false,true];


strNumTuple = ['Hello', 4]

let myVoid: void = null; // void can be null and undefined types
let myNull: null = null;
let myUndefiend: undefined = undefined;


console.log(myVoid);
