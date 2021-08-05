const display = document.querySelector('#display');
let displayArr = [];
let formula = [];
let keyPressed = false;
let resultDisplayed = false;
let keyId = '';

const handleButtonChange = (input, color, textColor) => {
	const button = document.getElementById(input);
	button.style.backgroundColor = color;
	button.style.color = textColor;
};

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
		resultDisplayed = true;
		display.innerText = result;
		displayArr = [result];
		formula = [];
	} else {
		formula.push(operator);
	}
};

const handleInput = input => {
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
			if (resultDisplayed) {
				displayArr = [];
				display.innerText = '0';
				resultDisplayed = false;
			}
			if (displayArr.includes('.') && input === '.') {
				return;
			} else if (input === '.' && displayArr.length === 0) {
				displayArr.push('0');
			}
			displayArr.push(input);
			display.innerText = displayArr.join('');
			break;
	}
	if (input != '=') {
		resultDisplayed = false;
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
			case '.':
				keyPressed = true;
				keyId = e.key;
				handleInput(e.key);
				handleButtonChange(keyId, 'black', 'white');

				break;
			case 'Backspace':
				keyPressed = true;
				handleInput('C');
				keyId = 'c';
				handleButtonChange(keyId, 'black', 'white');

				break;
			case 'Enter':
				keyPressed = true;
				handleInput('=');
				keyId = '=';
				handleButtonChange(keyId, 'black', 'white');

				break;
			default:
				break;
		}
	}
});

document.addEventListener('keyup', e => {
	keyPressed = false;
	handleButtonChange(keyId, 'white', 'black');
});
