// Without args

Function.prototype.myBind = function (ctx) {
    return () => this.apply(ctx);
}

// With args

Function.prototype.myBind = function (ctx, ...bindArgs) {
    return (...callArgs) => {
        return this.apply(ctx, bindArgs.concat(callArgs));
    };
};

class Lamp {
    constructor() {
        this.name = "a lamp";
    }
}

const turnOn = function() {
    console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn();

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn();
myBoundTurnOn();


class Cat {
    constructor(name) {
        this.name = name;
    }

    meow() {
        console.log(`${this.name} says meow!`);
    }
}

const curie = new Cat("Curie");
setTimeout(curie.meow.myBind(curie), 1000);