let mathcalcCurrentValue = '0';
let mathcalcPreviousValue = '';
let mathcalcOperator = '';
let mathcalcShouldReset = false;

function mathcalcUpdateDisplay() {
    const display = document.getElementById('mathcalc-display');
    if (display) {
        if (mathcalcOperator && mathcalcPreviousValue) {
            if (mathcalcShouldReset) {
                display.textContent = mathcalcPreviousValue + ' ' + mathcalcGetOperatorSymbol(mathcalcOperator);
            } else {
                display.textContent = mathcalcPreviousValue + ' ' + mathcalcGetOperatorSymbol(mathcalcOperator) + ' ' + mathcalcCurrentValue;
            }
        } else {
            display.textContent = mathcalcCurrentValue;
        }
    }
}

function mathcalcGetOperatorSymbol(operator) {
    switch (operator) {
        case '+':
            return '+';
        case '-':
            return '-';
        case '*':
            return '×';
        case '/':
            return '/';
        default:
            return operator;
    }
}

function mathcalcClearError() {
    const errorElement = document.getElementById('mathcalc-error');
    if (errorElement) {
        errorElement.classList.remove('show');
        errorElement.textContent = '';
    }
}

function mathcalcShowError(message) {
    const errorElement = document.getElementById('mathcalc-error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function mathcalcSetButtonLoading(button, isLoading) {
    if (isLoading) {
        button.classList.add('loading');
        button.disabled = true;
    } else {
        button.classList.remove('loading');
        button.disabled = false;
    }
}

// ito yung function para magprocess ng input ng user parang  mag checheck lang kung tama ba yung ininput ng user
function mathcalcProcessInput(value) {
    mathcalcClearError();
    
    if (mathcalcShouldReset) {
        mathcalcCurrentValue = '0';
        mathcalcShouldReset = false;
    }
    
    if (value === '.') {
        if (mathcalcCurrentValue.includes('.')) {
            return;
        }
        if (mathcalcCurrentValue === '0') {
            mathcalcCurrentValue = '0.';
        } else {
            mathcalcCurrentValue += '.';
        }
    } else {
        if (mathcalcCurrentValue === '0') {
            mathcalcCurrentValue = value;
        } else {
            mathcalcCurrentValue += value;
        }
    }
    
    mathcalcUpdateDisplay();
}

// dito yung function para mag set ng operator 
function mathcalcSetOperator(operator) {
    mathcalcClearError();
    
    if (mathcalcPreviousValue && mathcalcOperator && !mathcalcShouldReset) {
        mathcalcPerformCalculation();
    } else {
        mathcalcPreviousValue = mathcalcCurrentValue;
    }
    
    mathcalcOperator = operator;
    mathcalcShouldReset = true;
    mathcalcUpdateDisplay();
}

// dito yung function para mag perform ng calculation  
function mathcalcPerformCalculation() {
    if (!mathcalcPreviousValue || !mathcalcOperator) {
        return;
    }
    
    const prev = parseFloat(mathcalcPreviousValue);
    const current = parseFloat(mathcalcCurrentValue);
    
    if (isNaN(prev) || isNaN(current)) {
        mathcalcShowError('invalid calculation');
        mathcalcResetCalculator();
        return;
    }
    
    let result;
    
    switch (mathcalcOperator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                mathcalcShowError('cannot divide by zero');
                mathcalcResetCalculator();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    
    result = Math.round(result * 100000000) / 100000000;
    mathcalcCurrentValue = result.toString();
    mathcalcPreviousValue = '';
    mathcalcOperator = '';
    mathcalcShouldReset = true;
    mathcalcUpdateDisplay();
}

// dito yung function para mag reset ng calculator, mag rereset lang yung laman ng calculator
function mathcalcResetCalculator() {
    mathcalcCurrentValue = '0';
    mathcalcPreviousValue = '';
    mathcalcOperator = '';
    mathcalcShouldReset = false;
    mathcalcUpdateDisplay();
    mathcalcClearError();
}

function mathcalcHandleNumberClick(event) {
    const button = event.currentTarget;
    const number = button.getAttribute('data-number');
    
    mathcalcSetButtonLoading(button, true);
    
    setTimeout(function() {
        mathcalcProcessInput(number);
        mathcalcSetButtonLoading(button, false);
    }, 150);
}

function mathcalcHandleOperatorClick(event) {
    const button = event.currentTarget;
    const operator = button.getAttribute('data-operator');
    
    mathcalcSetButtonLoading(button, true);
    
    setTimeout(function() {
        mathcalcSetOperator(operator);
        mathcalcSetButtonLoading(button, false);
    }, 150);
}

function mathcalcHandleEqualsClick(event) {
    const button = event.currentTarget;
    
    mathcalcSetButtonLoading(button, true);
    
    setTimeout(function() {
        mathcalcPerformCalculation();
        mathcalcSetButtonLoading(button, false);
    }, 200);
}

function mathcalcHandleClearClick(event) {
    const button = event.currentTarget;
    
    mathcalcSetButtonLoading(button, true);
    
    setTimeout(function() {
        mathcalcResetCalculator();
        mathcalcSetButtonLoading(button, false);
    }, 150);
}


function mathcalcSetupEventListeners() {
    const numberButtons = document.querySelectorAll('.mathcalc-btn-number');
    const operatorButtons = document.querySelectorAll('.mathcalc-btn-operator');
    const equalsButton = document.getElementById('mathcalc-equals');
    const clearButton = document.getElementById('mathcalc-clear');
    
    numberButtons.forEach(function(button) {
        button.addEventListener('click', mathcalcHandleNumberClick);
    });
    
    operatorButtons.forEach(function(button) {
        button.addEventListener('click', mathcalcHandleOperatorClick);
    });
    
    if (equalsButton) {
        equalsButton.addEventListener('click', mathcalcHandleEqualsClick);
    }
    
    if (clearButton) {
        clearButton.addEventListener('click', mathcalcHandleClearClick);
    }
}

mathcalcSetupEventListeners();
mathcalcUpdateDisplay();
