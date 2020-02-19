function getSome(num1:number,num2:number):number {
    return num1 + num2;
}

//console.log(getSome(1,42))

let mySum = function(num1:any,num2:any):number{
    if(typeof num1 == 'string'){
        num1 = parseInt(num1);
    }

    if(typeof num2 == 'string'){
        num2 = parseInt(num2);
    }
    return num1 + num2;
}


//console.log(mySum('33','41'));

function getName(firstname:string, lastName?:string):string {

    if(lastName == undefined) {
        return firstname;
    }

    return firstname + ' ' + lastName;
}

//console.log(getName('John'));

function myVoid():void {
    return;
}