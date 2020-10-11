interface UserInterface{
    name:string;
    email:string
    age:number
    getAge()
    payInvoice()
}

class User implements UserInterface{
     name:string;
     email:string;
     age:number;

    constructor(name:string,email:string,age:number){
        this.name=name;
        this.email=email;
        this.age=age;

        console.log("User created: "+this.name)
    }

    getAge(){
        console.log(this.age)
    }
    payInvoice(){
        console.log(this.name+" paid their invoice")
    }
}

/*
let kyle=new User("Kyle Hawkins","kylehawkins123@gmail.com",20);

kyle.getAge()
*/


class Member extends User{
    id:number;
    constructor(id:number,name:string,email:string,age:number){
        super(name,email,age)
        this.id=id
    }

    payInvoice(){
        super.payInvoice()
    }
}

let kyle:User=new Member(4, 'Kyle Hawkins','hakwinskyle@gmail.com',20);


kyle.payInvoice()