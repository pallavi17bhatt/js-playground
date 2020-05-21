var fruits = ["Mango", "Orange", "Banana", "Apple"];

function loadFruits(){
	document.getElementById('fruits').innerHTML=fruits;
}

function myFunction(){
	var newfruit=prompt("What is your favorite fruit?");
	fruits[fruits.length]=newfruit;
	document.getElementById('fruits').innerHTML=fruits;
}