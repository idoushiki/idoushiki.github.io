<!--
myTotal = 0;  
myInput = ""; 
var rtime;


var ary = [
[1,4,1,5,9,2,6,5,3,5,8,9,7,9,3,2,3,8,4,6], [2,6,4,3,3,8,3,2,7,9,5,0,2,8,8,4,1,9,7,1], [6,9,3,9,9,3,7,5,1,0,5,8,2,0,9,7,4,9,4,4], [5,9,2,3,0,7,8,1,6,4,0,6,2,8,6,2,0,8,9,9], [8,6,2,8,0,3,4,8,2,5,3,4,2,1,1,7,0,6,7,9], [8,2,1,4,8,0,8,6,5,1,3,2,8,2,3,0,6,6,4,7], [0,9,3,8,4,4,6,0,9,5,5,0,5,8,2,2,3,1,7,2], [5,3,5,9,4,0,8,1,2,8,4,8,1,1,1,7,4,5,0,2], [8,4,1,0,2,7,0,1,9,3,8,5,2,1,1,0,5,5,5,9], [6,4,4,6,2,2,9,4,8,9,5,4,9,3,0,3,8,1,9,6], [4,4,2,8,8,1,0,9,7,5,6,6,5,9,3,3,4,4,6,1], [2,8,4,7,5,6,4,8,2,3,3,7,8,6,7,8,3,1,6,5], [2,7,1,2,0,1,9,0,9,1,4,5,6,4,8,5,6,6,9,2], [3,4,6,0,3,4,8,6,1,0,4,5,4,3,2,6,6,4,8,2], [1,3,3,9,3,6,0,7,2,6,0,2,4,9,1,4,1,2,7,3], [7,2,4,5,8,7,0,0,6,6,0,6,3,1,5,5,8,8,1,7], [4,8,8,1,5,2,0,9,2,0,9,6,2,8,2,9,2,5,4,0], [9,1,7,1,5,3,6,4,3,6,7,8,9,2,5,9,0,3,6,0], [0,1,1,3,3,0,5,3,0,5,4,8,8,2,0,4,6,6,5,2], [1,3,8,4,1,4,6,9,5,1,9,4,1,5,1,1,6,0,9,4], [3,3,0,5,7,2,7,0,3,6,5,7,5,9,5,9,1,9,5,3],
[0,9,2,1,8,6,1,1,7,3,8,1,9,3,2,6,1,1,7,9],
[3,1,0,5,1,1,8,5,4,8,0,7,4,4,6,2,3,7,9,9], [6,2,7,4,9,5,6,7,3,5,1,8,8,5,7,5,2,7,2,4], [8,9,1,2,2,7,9,3,8,1,8,3,0,1,1,9,4,9,1,2], [9,8,3,3,6,7,3,3,6,2,4,4,0,6,5,6,6,4,3,0], [8,6,0,2,1,3,9,4,9,4,6,3,9,5,2,2,4,7,3,7], [1,9,0,7,0,2,1,7,9,8,6,0,9,4,3,7,0,2,7,7], [0,5,3,9,2,1,7,1,7,6,2,9,3,1,7,6,7,5,2,3], [8,4,6,7,4,8,1,8,4,6,7,6,6,9,4,0,5,1,3,2], [0,0,0,5,6,8,1,2,7,1,4,5,2,6,3,5,6,0,8,2], [7,7,8,5,7,7,1,3,4,2,7,5,7,7,8,9,6,0,9,1], [7,3,6,3,7,1,7,8,7,2,1,4,6,8,4,4,0,9,0,1], [2,2,4,9,5,3,4,3,0,1,4,6,5,4,9,5,8,5,3,7], [1,0,5,0,7,9,2,2,7,9,6,8,9,2,5,8,9,2,3,5], [4,2,0,1,9,9,5,6,1,1,2,1,2,9,0,2,1,9,6,0], [8,6,4,0,3,4,4,1,8,1,5,9,8,1,3,6,2,9,7,7], [4,7,7,1,3,0,9,9,6,0,5,1,8,7,0,7,2,1,1,3], [4,9,9,9,9,9,9,8,3,7,2,9,7,8,0,4,9,9,5,1], [0,5,9,7,3,1,7,3,2,8,1,6,0,9,6,3,1,8,5,9], [5,0,2,4,4,5,9,4,5,5,3,4,6,9,0,8,3,0,2,6], [4,2,5,2,2,3,0,8,2,5,3,3,4,4,6,8,5,0,3,5], [2,6,1,9,3,1,1,8,8,1,7,1,0,1,0,0,0,3,1,3], [7,8,3,8,7,5,2,8,8,6,5,8,7,5,3,3,2,0,8,3], [8,1,4,2,0,6,1,7,1,7,7,6,6,9,1,4,7,3,0,3], [5,9,8,2,5,3,4,9,0,4,2,8,7,5,5,4,6,8,7,3], [1,1,5,9,5,6,2,8,6,3,8,8,2,3,5,3,7,8,7,5], [9,3,7,5,1,9,5,7,7,8,1,8,5,7,7,8,0,5,3,2], [1,7,1,2,2,6,8,0,6,6,1,3,0,0,1,9,2,7,8,7],
[6,6,1,1,1,9,5,9,0,9,2,1,6,4,2,0,1,9,8,9],
[3,8,0,9,5,2,5,7,2,0,1,0,6,5,4,8,5,8,6,3],
[2,7,8,8]
  
];
totalnum=0;
i=0;
j=0;



function myValue(myData){                 

if(totalnum>=1024){
myData="";}

if(ary[i][j]!=myData){
var result="<html><head><meta charset=\"UTF-8\"><link rel=\"stylesheet\" type=\"text/css\" href=\"webapp.css\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no\"><script type=\"text/javascript\" src=\"move.js\"></script></head><body><div class=\"div\"><h1>RESULT</h1><img src='img/piresult.png'name=\"sshow\"><script type=\"text/javascript\">myChange();</script><h2><p>小数点以下";

var res2="桁</h2>タイム";

var resultmid="<p><input type=\"button\" class=\"button\" value=\"         Back to menu        \" onclick=\"location.href='gamemenu.html'\"></p><a href=\"http://twitter.com/share?url=https://pimemorizer.herokuapp.com/&text=PI MEMORIZER  円周率暗記ゲーム あなたの記録は小数点以下";

var result2="桁 タイム";

var res3="&hashtags=PIMEMORIZER,円周率\"\><input type=\"button\" class=\"button\" value=\"       Share on Twitter      \" ></a></div>&copy;2017 idoushiki </body></html>";
document.write(result,totalnum,res2,rtime,resultmid,totalnum,result2,rtime,res3);// totalnum桁数rtimeタイム



}


var numlength=document.myForm.myLine.value.length;   //フォーム内の文字数を計る

++totalnum;
document.myForm.total.value =totalnum; 






if(numlength >17)                 //フォーム内の数値をリセットする
{ 
myInput="";
document.myForm.myLine.value = myInput+myData;
 
}else{
  myInput += myData;  
  document.myForm.myLine.value = myInput;                     // 現在入力している値に追加
// 現在入力している値表示	
}      

j++;

if((j%20)==0){          //次の段の配列に切り替える
i++;
j=0;
}

//




}


myButton = 0;	// はんだん

function mytime(){	
if (myButton==0){	// Startボタンを押した
myStart=new Date();	// スタート時間を退避
myButton = 1;	
myInterval=setInterval("myDisp()",1);	
}		
}	
function myDisp(){	
myStop=new Date();	// 経過時間を退避
myTime = myStop.getTime() - myStart.getTime();	// ごうけい

myM = Math.floor(myTime/(60*1000));	// '分'
myTime = myTime-(myM*60*1000);	

myS = Math.floor(myTime/1000);	// '秒'
myMS = myTime%10;	// 'ミリ秒'
 rtime=myM+":"+myS+":"+myMS;	
document.myForm1.myFormTime.value =rtime;

}


//memorizing

function mymemo(memonum){

  

if(ary[i][j]==memonum){//正解なら実行





var numlength=document.myForm.myLine.value.length;   //フォーム内の文字数を計る

++totalnum;

if(numlength >17)                 //フォーム内の数値をリセットする
{ 
myInput="";
document.myForm.myLine.value = myInput+memonum;


 
}else{

myInput += memonum;  
  document.myForm.myLine.value = myInput;

                   // 現在入力している値に追加
// 現在入力している値表示	
}      

j++;

if((j%20)==0){          //次の段の配列に切り替える
i++;
j=0;
}


var next=0;//nextnumber
pinum="";//nextnumber

for(next=0;next<=19;next++){
pinum+=ary[i][next];
}
document.myForm.memo.value =pinum;//next number 20


  





}//ifbun

}//function

	


// --></script>