
                            // constructor
// A constructor is a special method used for creating and initializing objects of a class.

// In JavaScript (and other OOP languages), the constructor automatically runs when you create a new object using the new keyword.


                            // encapsulation
// ✅ Bundling related data (properties) and methods together into one unit (usually a class)
// 🔒 Restricting direct access to some of the object's internal state



class Teacher {
    #salary

    constructor(name="Unknow",dept="Computer Scince",subject="Javascript",salary){
        this.#salary=salary;
        this.name=name;
        this.dept=dept;
        this.subject=subject;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Department: ${this.dept}`);
        console.log(`Subject: ${this.subject}`);
        console.log(`Salary: $${this.#salary}`);
    }

    changeDept(newDept){
        this.dept=newDept;
    }

    getSalary(){
        console.log(`Salary: $${this.#salary}`)
        return this.#salary
    }
    setSalary(newSalary){
        if(newSalary>0){
            this.#salary=newSalary
            console.log(`Salary: $${this.#salary}`)
        }else{
            console.log("Invalid salary");
        }
    }

}



const t1=new Teacher("ASif", "JavaScript", 55000)


// t1.displayInfo()
// t1.getSalary()
// t1.changeDept("Computer Application")
// t1.displayInfo()
// t1.setSalary()


                                // Abstraction

// Abstraction means hiding complex internal details and showing only the necessary features of an object.

// In simpler terms:

// You use an object/method without knowing how it works inside.

// You focus on what it does, not how it does it.

    
class Employe{
#Salary

    constructor(name,dept,subject,salary){
        this.name=name;
        this.dept=dept;
        this.subject=subject;
        this.#Salary=salary;
    }

    // Abstracted public method
    getProfile(){
       console.log(`Name: ${this.name}`);
        console.log(`Department: ${this.dept}`);
        console.log(`Subject: ${this.subject}`);
        console.log(`Salary: $${this.#Salary}`);
    }


    // Internal logic hidden
    calculateBonus(){
      let ss=this.#Salary*0.1
        console.log("Bonus",ss)
    }

}

const e1=new Employe("Asif","frontend","backend",20000)

// Using abstraction: we don’t care how bonus is calculated

// e1.getProfile()
// e1.calculateBonus()



                            // Inheritance 


// Imagine you have a general class Person, and you want to create a Teacher.

// Person has common properties: name, age

// Teacher adds new things: subject, salary

// Instead of rewriting everything, Teacher inherits from Person.



class Student{
    
    constructor (name,age){
        this.name=name;
        this.age=age;
        
    }

   getPeople(){
    console.log(`my name is ${this.name} and i am student or my age ${this.age},`)
   }
}

class Sir extends Student {

    #income

    constructor(name,age,subject,income){
        super(name,age)
        this.subject=subject;
        this.#income=income;
    }

    getTeacher(){
        console.log(`my name is ${this.name} and i am tech ${this.subject} ,`)
    }

    getSalary(){
        console.log(`my Salary ${this.#income}`)
    }

    getAge(){
         console.log(`my age ${this.age}`)
    }
}


let p1=new Student("Asif" , 24);
let s1= new Sir("alice",30,"Math",20000);


// p1.getPeople()
s1.getTeacher()
s1.getSalary()
s1.getAge()