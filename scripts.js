var meuCanvas = document.getElementById('meuCanvas'),
	ctx = meuCanvas.getContext('2d'),
	img = document.getElementById('logo'),
	posX = 0;


function downloadImage(){
	var element = document.createElement('a'),
    	myImage = meuCanvas.toDataURL();
    
    element.setAttribute('href', myImage);
    element.setAttribute('download', 'myImage.png');
    element.click();
}


function drawLogo(){
	window.requestAnimationFrame(drawLogo);
	ctx.clearRect(0,0,meuCanvas.width, meuCanvas.height);

	ctx.drawImage(img, posX, 50);
	posX += 5;

	if(posX > meuCanvas.width){
		posX = -150;
	}
}

drawLogo();