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
		if (e.target.id == '=') {
			handleOperator(e.target.id);
		} else if (e.target.id == '+') {
			handleOperator(e.target.id);
		} else if (e.target.id == '-') {
			handleOperator(e.target.id);
		} else if (e.target.id == '*') {
			handleOperator(e.target.id);
		} else if (e.target.id == '/') {
			handleOperator(e.target.id);
		} else {
			// prevent more than one decimal point
			if (displayArr.includes('.') && e.target.id == '.') {
				return;
			}
			displayArr.push(e.target.id);
			display.value = displayArr.join('');
		}
	}
});
