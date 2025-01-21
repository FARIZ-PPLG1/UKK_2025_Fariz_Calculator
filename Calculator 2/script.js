class Calculator {
    constructor(inputElement, buttonElements) {
        this.input = inputElement;
        this.buttons = buttonElements;
        this.string = "";
        this.init();
    }

    init() {
        this.buttons.forEach((button) => {
            button.addEventListener("click", (e) => this.handleButtonClick(e));
        });
    }

    handleButtonClick(e) {
        const value = e.target.innerHTML;

        if (value === "=") {
            this.evaluateExpression();
        } else if (value === "AC") {
            this.clearInput();
        } else if (value === "DEL") {
            this.deleteLastCharacter();
        } else if (value === "÷") {
            this.appendToInput("/");
        } else if (value === "x") {
            this.appendToInput("*");
        } else {
            this.appendToInput(value);
        }
    }

    evaluateExpression() {
        try {
            this.string = eval(this.string);
            this.input.value = this.string;
        } catch (error) {
            this.input.value = "Error";
            this.string = ""; // Reset string on error
        }
    }

    clearInput() {
        this.string = "";
        this.input.value = this.string;
    }

    deleteLastCharacter() {
        this.string = this.string.substring(0, this.string.length - 1);
        this.input.value = this.string;
    }

    appendToInput(value) {
        this.string += value;
        this.input.value = this.string;
    }
}

// Usage
let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let calculator = new Calculator(input, buttons);