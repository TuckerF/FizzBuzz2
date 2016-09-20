$(document).ready(function(){
	var userNumber = parseInt(prompt("Please enter a number."));

	document.write("Your Number is " + userNumber + "!" + "<br>" + "<br>");
		
	for(var numbers = 1; numbers <= userNumber; numbers++){
		if (numbers % 15 == 0)
			document.write("FizzBuzz" + "<br>" + "<br>");
		else if (numbers % 3 == 0)
			document.write("Fizz" + "<br>" + "<br>");
		else if (numbers % 5 == 0)
			document.write("Buzz" + "<br>" + "<br>");
		else
			document.write(numbers + "<br>" + "<br>");

	};
});