// Parent class: Animal
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make sound
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Child class: Cat
class Cat extends Animal {
  // Cat-specific method
  purr() {
    console.log("purr");
  }
}

// Child class: Dog
class Dog extends Animal {
  // Dog-specific method
  bark() {
    console.log("woof");
  }
}

// Example usage:
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr();      // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark();      // Output: woof

