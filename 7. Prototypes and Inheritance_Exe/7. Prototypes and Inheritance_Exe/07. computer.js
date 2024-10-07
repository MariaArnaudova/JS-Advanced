function computers() {
    class Keyboard {

        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (this.constructor == Computer) {
                throw new Error("Abstract classes can't be instanciated.")
            }

            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            
            this.weight = weight;
            this.color = color;
            this._battery = new Battery(manufacturer, expectedLife);
        }

        get battery() {
            return this._Battery;
        }

        set battery(value) {
            this._battery = value;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace );
            this._keyboard = new Keyboard(manufacturer, responseTime);
            this._monitor = new Monitor(manufacturer, width, height);
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            this._keyboard = value;
        }

        get monitor() {
            return this.Monitor;
        }

        set monitor(value) {
            this.monitor = value;
        }
    }

    return {
        Keyboard,
        Battery,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let classes = computers();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
console.log(battery);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(laptop);

