import { Utils as util } from './utils/index.js';

class Animal {
    private name : String;
    private age : Number;
    private options : Object;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.options = {
            age: this.age,
            name: this.name,
        }
    }

    public move(meters: Number): any {
        console.log(this.name + " moved " + meters + "meters.");
        return meters;
    }
}

class Snake extends Animal {
    public move(): void {
        console.log("Slithering...");
        super.move(5);
    }
}

class Horse extends Animal {
    public move(): void {
        console.log("Galloping...");
        super.move(45);
    }
}

const sam = new Snake("Sammy the Python", 20);
const tom: Animal = new Horse("Tommy the Palomino", 10);

sam.move()
tom.move(34)
