class Animal {
    constructor(species, lifespan) {
        this.species = species;
        this.lifespan = lifespan;
    }

    animalLifespan() {
        console.log(`This animal has lifespan of ${this.lifespan}.`);
    }

    displayInfo() {
        console.log(`This is a ${this.species} of breed ${this.breed}.`);
    }
}

class Dog extends Animal {
    constructor(species, lifespan, breed) {
        super(species, lifespan);
        this.breed = breed;
    }

   dogInfo() {
            console.log("The Golden Retriever is a very friendly dog.");
    }
}

const animalInfo = new Animal("animal", "10 to 15 years");
const dog = new Dog("Dog", "10 to 12 years", "Golden Retriever");

dog.displayInfo(); 
dog.dogInfo(); 
dog.animalLifespan(); 

