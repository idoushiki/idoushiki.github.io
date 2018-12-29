
var num=[1];

 function Select(a){

   num[0]=a;
}


//window.onload=function(){
  var canvas = document.getElementById('c');
    var ctx = canvas.getContext('2d');

canvas.addEventListener('click', onClick, false);
// number bf picture
function onClick(e) {

  var img=new Image();
  img.src="https://idoushiki.github.io/img/"+num+".png";
  var x = e.pageX-50;
  var y = e.pageY-200;
  ctx.drawImage(img, x, y,100,100);
}



function HozonImg()
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
}

function clc(){//clear picture
//キャンバスクリアする
ctx.clearRect(0, 0, 800, 800);
}


lineWidth.addEventListener("mousemove",function(){//size of picture

  document.getElementById("image").style.cursor = 'url("https://idoushiki.github.io/img/1.png"),auto';

var lineNum = document.getElementById("lineWidth").value;
document.getElementById("lineNum").innerHTML = lineNum;

var targetImg = document.getElementById('image');

var orgWidth  = targetImg.width;
var orgHeight  = targetImg.orgHeight;

});


function onClick(e) {


  size=  document.getElementById("lineNum").innerHTML;
  var img=new Image();
  img.src="https://idoushiki.github.io/img/"+num+".png";
  var rect = e.target.getBoundingClientRect();
      x = e.clientX*2- rect.left-(size/2);
      y = e.clientY*2- rect.top-(size);


  ctx.drawImage(img, x, y,size,size);

}
