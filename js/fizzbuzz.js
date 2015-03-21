$(document).ready(function() {
	console.log("Document is ready");

	// Runs the number up to the limit
	for (var number = 1; number<=100; number++)
	{
		if ((number%3 == 0) && (number%5 == 0))
		{
			$('#fizzbuzz').append("<li>FizzBuzz</li>");
		}
		else if (number%3 == 0)
		{
			$('#fizzbuzz').append("<li>Fizz</li>");
		}
		else if (number%5 == 0)
		{
			$('#fizzbuzz').append("<li>Buzz</li>");
		}
		else
		{
			$('#fizzbuzz').append("<li>"+number+"</li>");
		}
	}
});