class Animal {
    private name : String;
    private age : Number;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    public move(meters: Number): void {
        console.log(this.name + " moved " + meters + "meters.");
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
