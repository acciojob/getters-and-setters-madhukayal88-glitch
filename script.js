class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // getter for name
    get name() {
        return this._name;
    }

    // setter for name
    set name(name) {
        this._name = name;
    }

    // getter for age
    get age() {
        return this._age;
    }

    // setter for age
    set age(age) {
        this._age = age;
    }
}

class Student extends Person {
    study() {
        console.log(this.name + " is studying");
    }
}

class Teacher extends Person {
    teach() {
        console.log(this.name + " is teaching");
    }
}
