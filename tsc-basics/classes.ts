interface UserInterface{
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}

class User implements UserInterface {
    name: string;
    email: string;
    age:number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User Created: '+ this.name);
    }

    register(){
        console.log(this.name + ' is now Registered ')
    }

    payInvoice() {
        console.log(this.name + ' paid invoice')
    }
}


class Member extends User{
    id: number;

    constructor(id:number,name: string, email: string, age: number) {
        super(name,email,age);
        this.id = id;
    }

    payInvoice(){
        super.payInvoice();
    }
}

let mike = new Member(1,'Mike Tyson','mikey@gmail.com',57);
mike.payInvoice();

//let john = new User('John Doe','jdoe@gmail.com',23);
//john.register();



