var regex = /^[1-9]([0-9]{1,9})?(\.[1-9]{1,5})?$/;

function validateNum(num, output) {
	if (!regex.test(num)) {
		output.innerHTML = "Number is not correct !";
		return;
	}
	output.innerHTML = "Number is correct !";
}