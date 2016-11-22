var regex = /[*/+-]/;

function enterValue(value) {
    display.value += value;
}

function clearLast() {
	display.value = display.value.substring(0, display.value.length-1);
}

function clearDisplay() {
	display.value = "";
}

function getSum() {
	var sum = eval(display.value);
	display.value = sum;
}

function setDot() {
	if (!display.value.includes(".")) {
		display.value += ".";
	}
}

function addOperand(operand) {
	var lastChar = display.value.slice(display.value.length-1);
	if (!regex.test(lastChar)) {
		display.value += operand;
	}
}