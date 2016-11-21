
function validate(form) {
	validateFname(form);
	validateLname(form);
	validateID(form);
	validateAge(form);
	validateAddress(form);
	validatePass(form);
	validateConfirmPass(form);
}


function validateFname(form) {
	var input = form.fname.value;
	if (input.length >= 1 && input.length <= 15) {
		return true;
	} else {
		alert("First Name should be between 1 and 15 charcters");
		return false;
	}
}

function validateLname(form) {
	var input = form.lname.value;
	if (input.length >= 1 && input.length <= 15) {
		return true;
	} else {
		alert("Last Name should be between 1 and 15 charcters");
		return false;
	}
}

function validateID(form) {
	var input = form.egn.value;
	if (input%1 != 0) {
		alert("ID should not contain alphabet characters");
		return false;
	}
	if (input.length != 10) {
		alert("ID should be with 10 numbers");
		return false;
	} else {
		return true;
	}
}

function validateAge(form) {
	var input = form.age.value;
	if (input%1 != 0) {
		alert("Age should not contain alphabet characters");
		return false;
	}
	if (input >= 18 && input <= 118) {
		return true;
	} else {
		alert("Age should be between 18 and 118");
		return false;
	}
}

function validateAddress(form) {
	var input = form.adres.value;
	var regex = /[^a-zA-Z0-9\-\/]/;
	if (regex.test(input)) {
		alert("Address should contain only alphanumerics");
		return false;
	}
	if (input.length >= 1 && input.length <= 100) {
		return true;
	} else {
		alert("Address should contain characters between 1 to 100");
	}
}

function validatePass(form) {
	var input = form.pass.value;
	var regex = /[^a-zA-Z0-9\-\/]/;
	if (regex.test(input)) {
		alert("Password should contain only alphanumerics");
		return false;
	}
	if (input.length >= 6 && input.length <= 18) {
		return true;
	} else {
		alert("Password should contain characters between 6 to 18");
	}
}

function validateConfirmPass(form) {
	var pass = form.pass.value;
	var confirmPass = form.confirmpass.value;
	if (pass == confirmPass) {
		return true;
	} else {
		alert("Password does not match");
		return false;
	}
}