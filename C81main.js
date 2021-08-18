var colour, width;
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
var mouse_event = "empty";
var last_position_x, last_position_y;


canvas.addEventListener("mousedown", myMousedown);

function myMousedown(e) {
    colour = document.getElementById("textInput").value;
    width = document.getElementById("textInput2").value;
    radius = document.getElementById("textInput3") .value  
    mouse_event = "mousedown";
}

canvas.addEventListener("mousemove", My_Mousemove);

function My_Mousemove(e)
{
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if(mouse_event =="mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;
        ctx.arc(current_x, current_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

    last_position_x = current_x;
    last_position_y = current_y;
    
}

canvas.addEventListener("mouseup", My_mouseup);
function My_mouseup(e)
{
    mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave", My_mouseleave);
function My_mouseleave(e)
{
    mouse_event = "mouseleave";
}

function clearScreen()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}