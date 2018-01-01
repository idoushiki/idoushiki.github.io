


var Flag = false;
var X = 0;
var Y = 0;
window.addEventListener("load", function(){
    var can = document.getElementById("Canvas");
    can.addEventListener("mousemove", draw, true);
    can.addEventListener("mousedown", function(e){
        Flag = true;
        X = e.clientX;
        Y = e.clientY;
    }, false);
    can.addEventListener("mouseup", function(){
        Flag = false;
    }, false);
}, true);
// 描画処理
function draw(e){
    if (!Flag) return;
    var x = e.clientX;
    var y = e.clientY;
    var can = document.getElementById("Canvas");
    var context = can.getContext("2d");
    context.strokeStyle = "rgba(0,0,0,1)";
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(X, Y);
    context.lineTo(x, y);
    context.stroke();
    context.closePath();
    X = x;
    Y = y;
}
function imgs(){
    var can = document.getElementById("Canvas");
    var d = can.toDataURL("image/png");
    d = d.replace("image/png", "image/octet-stream");
    window.open(d,"save");
}
