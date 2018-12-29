var num=[1];

 function Select(a){//selsect picture

   num[0]=a;
}
var targetImg = document.getElementById('image');

  size=  document.getElementById("lineNum").innerHTML;
var orgWidth  = targetImg.width;
var orgHeight  = targetImg.orgHeight;
var lineNum;
//window.onload=function(){

    var canvas = document.getElementById('c');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillRect(0, 0, 600, 600);

canvas.addEventListener('click', onClick, false);
// selsect picture
function HozonImg()//save picture
{
  var canvas = document.getElementById('c');
  var downloadlink=document.getElementById('downloadlink');
  var filename='TeteteTatta.png';
  if(canvas.msToBlob){
    var b=canvas.msToBlob();
    window.navigator.msSaveBlob(blob,filename);

  }else{
  downloadlink.href=canvas.toDataURL('image/png');
  downloadlink.download=filename;
  downloadlink.click();
  //document.getElementById("newImg").src = canvas.toDataURL();
}

}


function clc(){//clear picture
//キャンバスクリアする
ctx.clearRect(0, 0, 800, 800);
}


lineWidth.addEventListener("mousemove",function(){//size of picture

  document.getElementById("image").style.cursor = 'url("img/1.png"),auto';

var lineNum = document.getElementById("lineWidth").value;
document.getElementById("lineNum").innerHTML = lineNum;

var targetImg = document.getElementById('image');

var orgWidth  = targetImg.width;
var orgHeight  = targetImg.orgHeight;

});


function onClick(e) {


  size=  document.getElementById("lineNum").innerHTML;
  var img=new Image();
  img.src="img/"+num+".png";
  var rect = e.target.getBoundingClientRect();
      x = e.clientX*2- rect.left-(size/2);
      y = e.clientY*2- rect.top-(size);


  ctx.drawImage(img, x, y,size,size);

}

