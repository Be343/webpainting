var mouseEvent = "";
var ultimoX,ultimoY;

canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="cyan";
widthOfLine=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
widthOfLine=document.getElementById("Largura").value;

mouseEvent="mousedown"


}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){

mouseEvent="mouseleave"


}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){

lastPositionOfX=e.clientX-canvas.offsetLeft
lastPositionOfY=e.clientY-canvas.offsetTop
if(mouseEvent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=widthOfLine;
ctx.moveTo(ultimoX,ultimoY);
ctx.lineTo(atualX,atualY);
ctx.stroke();


}
lastPositionOfX=atualX
lastPositionOfY=atualY
}
function limpar(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)




}