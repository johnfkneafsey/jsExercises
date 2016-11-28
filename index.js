function yearOfBirth(age) {
	if (age < 0) {
		throw new Error("Age can not be negative");
	}
	return 2016 - age;
}


function whoAmI (name, age) {
	if (typeof name !== "string" || typeof age !== "number") {
		console.error("Arguments not valid")
	}

	else {
	var yob = yearOfBirth(age);
	console.log("'" + "Hi, my name is " + name + " and I'm " + age + " years old" + "'")
	console.log("I was born in " + yob + ".")
	}
}

whoAmI("Chris", -5);
