var dotRegex = /[.]/;
var operationRegex = /[*/+-]/;
var calculation = "";

function enterValue(value) {
    display.value += value;
    calculation += value; 
}

function clearLast() {
	display.value = display.value.slice(0, display.value.length-1);
}

function clearDisplay() {
	display.value = "";
	calculation = "";
}

function getSum() {
	display.value = eval(calculation);
}

function setDot() {
	if (!dotRegex.test(display.value)) {
		display.value += ".";
		calculation += ".";
	}
}

function addOperand(operand) {
	var lastOperation = calculation.slice(calculation.length-1);
	if (!operationRegex.test(lastOperation)) {
		calculation += operand;
		display.value = "";
		return;
	}
	var subExpression = calculation.slice(0, calculation.length-1);
	calculation = subExpression + operand;
	display.value = "";
}