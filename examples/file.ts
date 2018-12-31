class Animal {
    constructor(public name) { }
    move(meters: Number): void {
        console.log(this.name + " moved " + meters + "m.");
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

var sam = new Snake("Sammy the Python")
var tom: Animal = new Horse("Tommy the Palomino")

sam.move()
tom.move(34)
