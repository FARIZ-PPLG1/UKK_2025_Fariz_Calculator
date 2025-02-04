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
        } else if (value === "%") {
            this.appendToInput(value); // Append % as a string
        } else {
            this.appendToInput(value);
        }
    }

    evaluateExpression() {
        try {
            // Replace percentage strings with their decimal equivalents
            const modifiedString = this.string.replace(/(\d+)%/g, (match, p1) => {
                return `(${p1} / 100)`; // Convert percentage to decimal
            });
            this.string = eval(modifiedString);
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