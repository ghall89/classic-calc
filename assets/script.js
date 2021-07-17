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
	display.value = '';
	if (operator == '=') {
		display.value = eval(formula.join(''));
		formula = [];
	} else {
		formula.push(operator);
		eval(formula.join(''));
	}
	console.log(`You clicked ${operator}`);
};

const calculateArr = document.body.addEventListener('click', e => {
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
			displayArr.push(e.target.id);
			display.value = displayArr.join('');
		}
	}
});
