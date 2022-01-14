var mouseEvent = "empty";
var last_x , last_y;

canvas = document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=1;
Radius=3;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color= document.getElementById("color").value;
    width_of_line  = document.getElementById("lineWidth").value;
Radius=document.getElementById("Radius").value;
 mouseEvent= "mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){

 mouseEvent= "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
  

 mouseEvent= "mouseleave";
}
canvas.addEventListener("mousemove" , my_mousemove)

function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;

current_y=e.clientY-canvas.offsetTop;
if (mouseEvent == "mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    console.log("Current position of x and y coordinates = ");
     console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
      ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
       ctx.stroke();
       console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
   ctx.beginPath();
ctx.stokeStyle=color;
ctx.lineWidth=1;
ctx.stroke();
ctx.arc( last_position_of_x , last_position_of_y , Radius , 0 , 2*Math.PI );

}
}
function clearArea() {
     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
    }
