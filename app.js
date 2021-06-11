/*
	https://source.unsplash.com/300x300/?
*/

function genImg() {
	var userInput = document.getElementById('userinput').value;
	if(userinput === "") {
		alert("Type Correctly")
		return resul = " ";
	}
	var resul = document.getElementById("result-box");
	var img = document.createElement('img');
	img.id = "images";
	img.src = `https://source.unsplash.com/250x250/?${userInput}`;
	resul.appendChild(img);
}
