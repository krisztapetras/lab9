function lyrics(){
	for(i = 99;i>=2;i--){
		document.getElementById("main").innerHTML+=(i+"Take one down and pass it around,  " + i + " bottles of beer.<br/>");
		document.getElementById("main").innerHTML+=("Take one down and pass it around, " + (i - 1) + " more bottles of beer on the wall.<br/>");
	}
	document.getElementById("main").innerHTML+=("1 bottle of beer on the wall, 1 bottle of beer Take one down and pass it around,<br/> no more bottles of beer on the wall No more bottles of beer on the wall, no more bottles of beer <br/> Go to the store and buy some more, 99 bottles of beer on the wall");
			   
}