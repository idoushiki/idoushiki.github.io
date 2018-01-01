

myImage = new Array(                      // 画像ファイル名の設定

 "i.png","i2.png",
 "i3.png", "i4.png", "i5.png","i6.png", "i7.png",
 "i8.png", "i9.png", "i10.png", "i11.png", "i12.png", "i13.png", "i14.png", "i15.png", "i16.png", "i17.png",
 "i18.png", "i19.png", "i20.png", "i21.png", "i22.png", "i23.png"
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


  


 