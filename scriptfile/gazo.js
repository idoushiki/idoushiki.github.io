
var myImage;
(new Image()).src=myImage;

myImage = new Array(                      // 画像ファイル名の設定

 "../img1/i.png","../img1/i2.png",
 "../img1/i3.png", "../img1/i4.png", "../img1/i5.png","../img1/i6.png", "../img1/i7.png",
 "../img1/i8.png", "../img1/i9.png", "../img1/i10.png", "../img1/i11.png", "../img1/i12.png", "../img1/i13.png", "../img1/i14.png", "../img1/i15.png", "../img1/i16.png", "../img1/i17.png",
 "../img1/i18.png", "../img1/i19.png", "../img1/i20.png", "../img1/i21.png", "../img1/i22.png", "../img1/i23.png"
);
myNowCnt = -1;                        // 現在表示している画像番号
function myChange(){                 // 定期的に画像を更新する関数
  if (myNowCnt == myImage.length-1){     // 最後の画像まで表示したのなら 
    myNowCnt=0;                     // 最初の画像に戻す
  }else{                             // 最後の画像まで表示していないのなら
    myNowCnt++;                     // 次の画像へ
  }
  document.sshow.src = myImage[myNowCnt];  // 次の画像を表示する
  setTimeout( "myChange()" , 300 );           // 1秒周期に画像を更新する
}


  


 