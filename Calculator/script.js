class Calculator {
    constructor() {
        this.display = document.getElementById("display");
    }

    appendValue(value) {
        this.display.value += value;
    }

    clearDisplay() {
        this.display.value = "";
    }

    calculate() {
        try {
            this.display.value = eval(this.display.value);
        } catch {
            this.display.value = "Error";
        }
    }
}

// Create an instance of the Calculator class
const calculator = new Calculator();