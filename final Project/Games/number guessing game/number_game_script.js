	var y = Math.floor(Math.random() * 20 + 1); 
	
	var guess = 1; 
	
	document.getElementById("submitguess").onclick = function(){ 
		 
var x = document.getElementById("guessField").value; 

if(x == y) 
{	 
	alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
			+ guess + " GUESS "); 
} 
else if(x > y)
{	 
	guess++; 
	alert("OOPS SORRY!! TRY A SMALLER NUMBER"); 
} 
else
{ 
	guess++; 
	alert("OOPS SORRY!! TRY A GREATER NUMBER") 
} 
}