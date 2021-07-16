const display = document.querySelector('#display');
let displayArr = [];
let formula = [];

const handleOperator = operator => {
	formula.push(displayArr.join(''));
	displayArr = [];
	if (operator == '=') {
		console.log(formula);
	} else {
		formula.push(operator);
		console.log(formula);
	}
	display.value = displayArr.join('');
	console.log(`You clicked ${operator}`);
};

const calculateArr = document.body.addEventListener('click', e => {
	console.log(e.target.tagName);
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
