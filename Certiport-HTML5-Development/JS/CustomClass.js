class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    printInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  let person1 = new Person('John', 30);

  person1.printInfo();
  