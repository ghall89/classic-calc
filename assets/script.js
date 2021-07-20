const display = document.querySelector('#display');
let displayArr = [];
let formula = [];

const handleOperator = operator => {
	// stop function if display is blank or formula is incomplete
	// if (!display.innerText) {
	// 	return;
	// }

	formula.push(display.innerText);
	displayArr = [];
	if (operator === '=') {
		display.innerText = eval(formula.join(''));
		formula = [];
	} else {
		formula.push(operator);
	}
};

document.body.addEventListener('click', e => {
	if (e.target.tagName === 'BUTTON') {
		switch (e.target.innerText) {
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
				handleOperator(e.target.innerText);
				break;
			default:
				if (displayArr.includes('.') && e.target.innerText === '.') {
					return;
				} else if (e.target.innerText === '.' && displayArr.length === 0) {
					displayArr.push('0');
				}
				displayArr.push(e.target.innerText);
				display.innerText = displayArr.join('');
				break;
		}
	}
});
