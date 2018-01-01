var myImage;

(new Image()).src=myImage;
myImage = new Array(                      // 画像ファイル

 "img/pi.png","img/pi01.png",
 "img/pi02.png", "img/pi03.png", "img/pi04.png","img/pi05.png", "img/pi06.png",
 "img/pi07.png","img/pi0.png", "img/pi08.png", "img/pi09.png", "img/pi10.png", "img/pi11.png", "img/pi12.png", "img/pi13.png", "img/pi14.png", "img/pi15.png", "img/pi16.png",
 "img/pi17.png", "img/pi18.png"
);
myNowCnt = -1;                        
function myChange(){



                // 定期的に画像を更新
           if(myNowCnt<19){


                    
    myNowCnt++;                     // 次の画像へ
  
  document.sshow.src = myImage[myNowCnt];  
  setTimeout( "myChange()" , 200 );       }   


else{  var s1 = new Date();

while (true) {
  var  s2 = new Date();
  if (s2 - s1 > 1000) {
    break;
  }
}  location.href="gamemenu.html";}

}
  


 