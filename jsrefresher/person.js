const Person = {
    name:"Mufil ahman",
    age:21,
    displayNormal: function(){
        console.log(`Name : ${this.name} Age : ${this.age}`);
    },
    displayArrow: ()=>{
        console.log(`Name : ${this.name} Age : ${this.age+5}`);
    }
}

module.exports = Person