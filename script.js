class Ninja {
    constructor(name){
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log(`${this.name}: ${this.health} HP, ${this.speed} SPD, ${this.strength} STR`)
    }
    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();