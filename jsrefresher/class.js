class Human {
  species = "Homo Sapiens";
  printSpecies = () => {
    console.log(`I am a ${this.species}`);
  };
}

class Male extends Human {
  gender = "Male";
  printGender = ()=> {
    console.log(`Gender is ${this.gender}`);
  }
}

let person1 = new Male();
person1.printSpecies();
person1.printGender();
