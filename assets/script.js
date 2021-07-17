const display = document.querySelector('#display');
let displayArr = [];
let formula = [];

const handleOperator = operator => {
	// stop function if display is blank or formula is incomplete
	if (!display.value) {
		return;
	}

	formula.push(display.value);
	displayArr = [];
	if (operator == '=') {
		display.value = eval(formula.join(''));
		formula = [];
	} else {
		formula.push(operator);
		eval(formula.join(''));
	}
};

document.body.addEventListener('click', e => {
	if (e.target.tagName === 'BUTTON') {
		switch (e.target.id) {
			case '=':
			case '+':
			case '-':
			case '*':
			case '/':
				handleOperator(e.target.id);
				break;
			default:
				if (displayArr.includes('.') && e.target.id === '.') {
					return;
				} else if (e.target.id === '.' && displayArr.length === 0) {
					displayArr.push('0');
				}
				displayArr.push(e.target.id);
				display.value = displayArr.join('');
				break;
		}
	}
});
