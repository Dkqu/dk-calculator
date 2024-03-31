const numbers = ['1','2','3','4','5','6','7','8','9','0']
const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '%': (a, b) => a % b
  };

const applyCalculation = (a, operator, b) => {
    const opFunction = operators[operator]; //Store function into opFunction
    return opFunction(a, b); //Pass values a and b to operator function. Return result;
}

document.addEventListener('DOMContentLoaded', (event) => {
    // Select all elements with the class 'button'
    const buttons = document.querySelectorAll('.button');
  
    // Add a click event listener to each button
    buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        // Record the button text
        const buttonText = event.target.textContent;
        console.log('Button pressed:', buttonText);
        switch (buttonText) {
            case "C": 
                document.getElementById('display-text').textContent = '0';
                break;
            case "1":
                document.getElementById('display-text').textContent = '1';
                break;
        }
        // You can also perform other actions here based on the button pressed
      });
    });
  });