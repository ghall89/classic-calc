const display = document.querySelector('#display');
let displayArr = [];
let formula = [];
let keyPressed = false;

const handleOperator = operator => {
	if (displayArr.length > 0) {
		formula.push(displayArr.join(''));
	} else {
		formula.pop();
	}
	displayArr = [];
	if (operator === '=') {
		if (formula.length <= 2) {
			return;
		}
		const result = eval(formula.join(''));
		display.innerText = result;
		displayArr = [];
		formula = [];
	} else {
		formula.push(operator);
	}
};

const handleInput = input => {
	console.log(input);

	switch (input) {
		case 'C':
			formula = [];
			displayArr = [];
			display.innerText = '0';
			break;
		case '=':
		case '+':
		case '-':
		case '*':
		case '/':
			handleOperator(input);
			break;
		default:
			if (displayArr.includes('.') && input === '.') {
				return;
			} else if (input === '.' && displayArr.length === 0) {
				displayArr.push('0');
			}
			displayArr.push(input);
			display.innerText = displayArr.join('');
			break;
	}
};

document.body.addEventListener('click', e => {
	if (e.target.tagName === 'BUTTON') {
		handleInput(e.target.innerText);
	}
});

document.addEventListener('keydown', e => {
	if (!keyPressed) {
		switch (e.key) {
			case '1':
			case '3':
			case '2':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
			case '0':
			case '=':
			case '+':
			case '-':
			case '*':
			case '/':
				handleInput(e.key);
				break;
			case 'Backspace':
				handleInput('C');
				break;
			case 'Enter':
				handleInput('=');
				break;
			default:
				break;
		}
		keyPressed = true;
	}
});

document.addEventListener('keyup', e => {
	keyPressed = false;
});
