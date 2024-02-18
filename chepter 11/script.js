const student = {
    name: "dkahir",
    salary: 5055020,

    printmarkes: function () {
        console.log("salary was retur ", this.salary);
    }
}

/// prototype iyts by default special property its apne apme object che

/// any  object is by default object propertry genaratore like this

const employeee = {
    calculate() {
        console.log("calsculate the sa;lary");

    },
    cslcluate2: function () {

    }
}

const karanarjun = {
    salary: 1515515
}

const karanarjun2 = {
    salary: 1515515
}

const karanarjun3 = {
    salary: 1515515
}

const karanarjun4 = {
    salary: 1515515
}

// karanarjun__proto__employeee
karanarjun.__proto__ = employeee;
karanarjun2.__proto__ = employeee;
karanarjun3.__proto__ = employeee;
console.log(karanarjun);


/// if any object and prototype have same funtion that time its self object have funtion work 
/// creating cobstrucctor 

class Toyotocar {

    constructor() {
        console.log("initilize constructor")
    }
    start() {
        console.log("start")

    }
    stop() {
        console.log("stop")
    }

    setbrand(brand) {
        this.newbrand = brand;
    }
}
// for this. each obejct individual object 


/// object created 

let newcardobj = new Toyotocar();  /// constrctor invoked
newcardobj.setbrand("ddhdhhdhhdh");

console.log(newcardobj);
console.log(newcardobj.start())

let carlexus = new Toyotocar(); /// construtorinvoeked by automatoic in javascritp




class PArent {

    hello() {
        console.log("hello")
    }
}


class Child extends PArent {

}

let childobj = new Child();
console.log(childobj);



class Person {

    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log("eat")
    }

    sleeep() {
        console.log("sleeep")
    }

}

class Engineer extends Person {

    constructor(brandh) {
        console.log("enter child constuctor");
        super(brandh);///to invoke parent class    
        this.brandh - brandh;
        console.log("exit child consturctor")
    }


    work() {
        super.eat();
        super.sleeep();
        console.log("eng work ")
    }

}


let dk = new Engineer("dharmesh");

console.log(dk);
dk.work();
dk.eat();


/// practise question

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        console.log("user are call")
    };


    viewData() {
        console.log("view dtaaa")
    }
}


let std1 = new User("dharmesh", "dk@gmail.com");
let std2 = new User("hemali", "hemali@gmail.com");

console.log(std1);
console.log(std2);

class Admiin extends User {

    constructor(name, email) {
        super(name, email);
        this.name;
        this.email;

    }
    editData() {
        console.log("")
    }
}

let admin1 = new Admiin("admin", "dkadmin");
console.log(admin1); 