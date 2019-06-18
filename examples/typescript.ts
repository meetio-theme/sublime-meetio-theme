export default class Animal {
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

        for (let i = 0; i < this.age; i++) {
            console.log('Counter:' + i);
        }
    }

    public move(meters: Number): any {
        if (typeof meters === "number") {
            console.log(this.name + " moved " + meters + "meters.");
        }
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

interface Pizza {
  name: string;
  toppings: string[];
}

class PizzaMaker {
  static create(event: Pizza) {
    return { name: event.name, toppings: event.toppings };
  }
}

const sam = new Snake("Sammy the Python", 20);
const tom: Animal = new Horse("Tommy the Palomino", 10);

sam.move()
tom.move(34)
