// Base Person class
class Person {
  constructor(name, age) {
    this._name = name;  // use underscore for private-like convention
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
  set age(newAge) {
    this._age = newAge;
  }
}

// Student subclass
class Student extends Person {
  constructor(name, age) {
    super(name, age); // call parent constructor
  }

  study() {
    console.log(`${this.name} is studying`);
  }
}

// Teacher subclass
class Teacher extends Person {
  constructor(name, age) {
    super(name, age); // call parent constructor
  }

  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// --- Example Usage ---
// Person
const person = new Person("John", 25);
console.log(person.name);   // John
person.age = 30;
console.log(person.age);    // 30

// Student
const student = new Student("Alice", 22);
student.study();            // Alice is studying

// Teacher
const teacher = new Teacher("Bob", 40);
teacher.teach();            // Bob is teaching