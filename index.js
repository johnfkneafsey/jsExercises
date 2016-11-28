function yearOfBirth(age) {
	var yearOfBirth = 2016 - age;
	return yearOfBirth;
}

function whoAmI (name, age) {
	var yob = yearOfBirth(age);
	console.log("'" + "Hi, my name is " + name + " and I'm " + age + " years old" + "'")
	console.log("I was born in " + yob + ".")
}



whoAmI("Alex", 29);