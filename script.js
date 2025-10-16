// Base Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Cat subclass
class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

// Dog subclass
class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// ✅ Make classes accessible to Cypress (attach to window)
window.Animal = Animal;
window.Cat = Cat;
window.Dog = Dog;
