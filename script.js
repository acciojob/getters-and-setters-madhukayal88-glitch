class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Getter for age
    get age() {
        return this._age;
    }

    // Setter for age
    set age(age) {
        this._age = age;
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name, age);
    }

    study() {
        console.log(this.name + " is studying");
    }
}

class Teacher extends Person {
    constructor(name, age) {
        super(name, age);
    }

    teach() {
        console.log(this.name + " is teaching");
    }
}

module.exports = { Person, Student, Teacher };
