var mouseEvent="empty";
var last_x,last_y;
canvas = document.getElementById('myCanvas'); ctx = canvas.getContext("2d");
color="black";
width=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown (e){
    color=document.getElementById("color").value;
    width=document.getElementById("width_of_line").value;

    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseUp);
function my_mouseUp (e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseLeave);
function my_mouseLeave (e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mouseMove);
function my_mouseMove (e){
  current_x=e.clientX-canvas.offsetLeft;
  current_y=e.clientY-canvas.offsetTop;
  if(mouseEvent=="mousedown")
  {
      ctx.beginPath();
      ctx.strokeStyle=color;
      ctx.lineWidth=width;
      ctx.moveTo(last_x,last_y);
      ctx.lineTo(current_x,current_y);
      ctx.stroke();

  }
  last_x=current_x;
  last_y=current_y;

}

function clearArea(){ 
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

    }
