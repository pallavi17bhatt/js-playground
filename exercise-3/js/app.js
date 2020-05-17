function showProperties(element){
 x = document.getElementById('message');
 x.innerHTML = element.alt;  
// x.style.backgroundColor = "#ffffff";
  x.className="message show";
  
}


function hideProperties(){
	document.getElementById('message').innerHTML='Hover over an image';
	x.className="message hide"
}