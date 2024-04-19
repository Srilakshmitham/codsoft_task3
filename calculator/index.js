let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
let isEvaluated = false;

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

        if (buttonText === '=') {
            try {
                
                let result = eval(screenValue);
                screen.value = Math.round(result * 100) / 100; 
                screenValue = screen.value; 
                isEvaluated = true; 
            } catch (error) {
                screen.value = 'Error';
                isEvaluated = false; 
            }
        } else if (buttonText === 'C') {
            screenValue = '';
            screen.value = '0'; 
            isEvaluated = false; 
        } else if (buttonText === 'DEL') {
            




            screenValue = screenValue.slice(0, -1);
            screen.value = screenValue || '0';
            isEvaluated = false; 
        } else if (['+', '-', '*', '/'].includes(buttonText)) {
            if (isEvaluated) {
    
                screenValue = screen.value + buttonText;
                screen.value = screenValue;
                isEvaluated = false; 
            } else {


                screenValue += buttonText;

                screen.value = screenValue;
            }
        } else {
            





            if (isEvaluated) {
                screenValue = buttonText;
                screen.value = screenValue;
                isEvaluated = false; 
            } else {
                screenValue += buttonText;
                screen.value = screenValue;
            }
        }
    });
});
