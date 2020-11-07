// TODO: Write code to define and export the Employee class

//inside of this fle - you will create a class then constructor 
//you will code 4 new methods (based on the needs in the Employee.test.js file)
//you will also grab data needed - based on the Employee.test.js file 

//first create class
class Employee {
    //create constructor
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //begin to create the methods mentioned

    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }

    // printInfo() {
    //     // console.log(`This vehicle has ${this.numberOfWheels} wheels`);
    //     console.log(`This employee has an id of ${this.id}`);
    //   }
}

    module.exports = Employee;






