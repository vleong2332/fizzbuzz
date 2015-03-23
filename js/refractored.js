// MAIN FUNCTION THAT WILL HANDLE USER INPUT
function runFizzBuzz() {
	var input = document.getElementById("maxNumber").value;
	var inputInt = parseInt(input);
	if (!isNaN(inputInt) && (inputInt % 1 == 0))
	{
		refresh();
		fizzbuzzMe(inputInt);
		document.getElementById("maxNumber").value = "";
		// QUESTION: Why can't this work with input = ""??
	}
	else
	{
		document.getElementById("errorMsg").innerHTML = "Invalid input. Enter whole numbers only.";
		// QUESTION: What's the difference between innerHTML and nodeValue??
	}
}


// BRING EVERYTHING BACK TO NORMAL
function refresh() {
	// Delete everything on the list
	var element = document.getElementById("fizzbuzz");
	while (element.firstChild)
	{
		element.removeChild(element.firstChild);
	}
	// Remove error message, if any
	document.getElementById("errorMsg").innerHTML = "";
	// Focus on the Max Number user input
	document.getElementById("maxNumber").focus();
};


// PRINT FIZZBUZZ UNTIL USER-SUBMITTED NUMBER
function fizzbuzzMe(maxNum) {
	// Loop until we reach user-submitted number
	for(var i = 1; i <= maxNum; i++)
	{
		// Prepare elements to be added
		var list = document.createElement("li");
		var entry = document.createTextNode("");

		// Determine the content of the element
		if(i % 3 == 0) entry.nodeValue += "Fizz";
		if(i % 5 == 0) entry.nodeValue += "Buzz";
		if((i % 3 != 0) && (i % 5 != 0)) entry.nodeValue = i;

		// Append text to the list, append list to the UL
		list.appendChild(entry);
		document.getElementById("fizzbuzz").appendChild(list);
	}
};