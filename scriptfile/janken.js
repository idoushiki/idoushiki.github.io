function janken(num){

   var rand=0;
   var gazo=0;
rand=Math.round(Math.random()*5+1);
   
   if(rand==1||rand==2){
  gazo=0;
}else
if(rand==3||rand==4){
gazo=1;
}else if
(rand==5||rand==6){
 
gazo=2;
}          

image=Array("janken/gu.png","janken/chi.png","janken/pa.png");
image2=Array("janken/sai1.png","janken/sai2.png","janken/sai3.png","janken/sai4.png","janken/sai5.png","janken/sai6.png");

if (num==1){
   document.jan.src="janken/black.png";
wait();
document.jan.src=image[gazo];
}

else if (num==2){
   
   document.sai.src="janken/black.png";
wait(); 
document.sai.src=image2[rand-1];


}
num=0;

}
   function wait(){                     
  
  
  var s1 = new Date();

while (true) {
  var  s2 = new Date();
  if (s2 - s1 > 500) {
    break;
  }
   }}
