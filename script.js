// Base Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a sound
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Cat class extending Animal
class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

// Dog class extending Animal
class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// Example test code (you can comment out these lines if not needed)
const myCat = new Cat("Siamese");
myCat.makeSound(); // The Siamese makes a sound
myCat.purr();      // purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // The Golden Retriever makes a sound
myDog.bark();      // woof

