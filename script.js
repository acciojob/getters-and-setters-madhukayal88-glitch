class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(age) {
    this._age = age;
  }

  // Adding a getter for age as well, as it's usually 
  // expected when a setter is present
  get age() {
    return this._age;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// To ensure it works with the Cypress tests and external files:
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;