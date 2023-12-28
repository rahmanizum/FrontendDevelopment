class Human{
    constructor(){
        this.species  = 'Homo Sapiens';
    }
    printSpecies(){
        console.log(`I am a ${this.species}`);
    }
}

class Male extends Human{
    constructor(name){
        super()
        this.name = name
        this.gender = 'Male'
    }
    printGender(){
        console.log(`Gender is ${this.gender}`);
    }
}

let person1 = new Male("Mufil");
person1.printSpecies(); 
person1.printGender();
