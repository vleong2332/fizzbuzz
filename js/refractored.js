$(document).ready(function() {
	console.log("Document is ready");

	// WHEN CLICKING THE GO BUTTON...
	$('#submitMaxNumber').click( function() {
		
		var input = $('#maxNumber');

		if (!isNaN(input.val()) && (input.val() % 1 != 0))
		{
			refresh();
			fizzbuzzMe(input.val());
			input.val("");
		}
		else
		{
			$('#errorMsg').text("Invalid input. Enter whole numbers only.");
		}
	});

});

// BRING EVERYTHING BACK TO NORMAL
function refresh() {
	$('ul#fizzbuzz > li').remove();
	$('#maxNumber').focus();
	$('#errorMsg').text("");
};

// PRINT FIZZBUZZ UNTIL USER-SUBMITTED NUMBER
function fizzbuzzMe(maxNum) {
	var entry;
	for(var i = 1; i <= maxNum; i++)
	{
		entry = "<li>";
		if(i % 3 == 0) entry += "Fizz";
		if(i % 5 == 0) entry += "Buzz";
		if((i % 3 != 0) && (i % 5 != 0)) entry += i;
		entry += "</li>";
		$('ul#fizzbuzz').append(entry);
	}
};