window.onload=init;
function init(){
	window.onresize=canvasResize;
	canvasResize();
	var submit=document.getElementById("submit");
	submit.onclick=userInfo;
	// drawFace();
}
function canvasResize(){
	var newWidth=window.innerWidth;
	var canvas=document.getElementById("canvas");
	canvas.setAttribute("width",newWidth);
	
}


function userInfo(){
	var backgroudColor=getSelectValue("backgroudColor");
	var shape=getSelectValue("shape");
	var shapeColor=getSelectValue("shapeColor");
	drawImageYL(backgroudColor,shape,shapeColor);
	

}
function getSelectValue(selectName){
	var selected=document.getElementById(selectName);
	var selectedIndex=selected.selectedIndex;
	var selectedValue=selected[selectedIndex].value;
	return selectedValue;

}

function drawImageYL(backgroudColor,shape,shapeColor){
	var canvas=document.getElementById("canvas");
	var canvas2d=canvas.getContext("2d");
	canvas2d.clearRect(0,0,canvas.width,canvas.height);
	if(backgroudColor=="white")
		canvas2d.fillStyle="#fff";
	else if(backgroudColor=="blue")
		canvas2d.fillStyle="#00f";
	canvas2d.fillRect(0,0,canvas.width,canvas.height);
	
	var num=30;
	canvas2d.fillStyle=shapeColor;
	while(num){
		var para=getRandom();
		if(shape=="squares")
			canvas2d.fillRect(para.x,para.y,para.length,para.length);
		else if(shape=="circles"){
			canvas2d.strokeStyle=shapeColor;
			canvas2d.beginPath();
			canvas2d.arc(para.x,para.y,para.length,0,2*Math.PI,true);
			canvas2d.closePath();
			canvas2d.stroke();
		}
		num--;
	}
}

function getRandom(){
	var x=Math.floor(Math.random()*window.innerWidth);
	var canvas=document.getElementById("canvas");
	var y=Math.floor(Math.random()*canvas.height);
	var length=Math.floor(Math.random()*10+2);

	var para=new Para(x,y,length);
	return para;

}

function Para(x,y,length){
	this.x=x;
	this.y=y;
	this.length=length;
}

function drawFace(){
	var canvas=document.getElementById("canvas");
	var canvas2d=canvas.getContext("2d");
	canvas2d.beginPath();
	canvas2d.arc(50,50,50,0,2*Math.PI,false);
	canvas2d.stroke();
	canvas2d.closePath();
	canvas2d.beginPath();
	canvas2d.arc(25,25,13,0,2*Math.PI,false);
	canvas2d.stroke();
	canvas2d.closePath();
	canvas2d.beginPath();
	canvas2d.arc(75,25,13,0,2*Math.PI,false);
	canvas2d.stroke();
	canvas2d.moveTo(50,50);
	canvas2d.lineTo(50,65);
	canvas2d.stroke();
	canvas2d.closePath();
	canvas2d.beginPath();
	canvas2d.arc(50,30,50,Math.PI/4,3*Math.PI/4,false);
	canvas2d.stroke();
	canvas2d.closePath();

	var text="face";
	canvas2d.font="italic 1.5em sans-serif";
	canvas2d.fillText(text,120,50);
}