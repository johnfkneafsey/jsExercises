/*function jediName(firstName,lastName) {
	return lastName.slice(0,2) + firstName.slice(0,3);
}
jediName("John", "Kneafsey");*/

/*function beyond(num) {
	if (num === Infinity || num ===-Infinity) {
		console.log('And beyond');
	} 
	else if (num > 0) {
		console.log('To infinity');
	}
	else if (num < 0) {
		console.log('To negative infinity');
	}
	else {
		console.log('Staying home');
	}
}

beyond(0);*/




function decode (string) {
	var code = "";
	var decodeArray = string.split(" ")
	console.log(decodeArray);
	for (var i = 0; i < decodeArray.length; i++) {
		if (decodeArray[i][0] === "a") {
			code += decodeArray[i].slice(1,2);
		}
		else if (decodeArray[i][0] === "b") {
			code += decodeArray[i].slice(2,3);
		}
		else if (decodeArray[i][0] === "c") {
			code += decodeArray[i].slice(3,4);
		}
		else if (decodeArray[i][0] === "d") {
			code += decodeArray[i].slice(4,5);
		}
		else {
			code += " ";
		}
	}
	return code;

}
decode("craft block argon meter bells brown croon droop")