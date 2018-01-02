function ImageLoop(imageid,frameurl){

  this.imageid=imageid;
  this.frameInterval=1000/8;
  this.frames=new Array(frameurl.length);

  this.image=null;
  this.loaded=false;
  this.loadedframes=0;
  this.startonload=false;
  this.framenumber=-1;
  this.timer=null;

  for(var i=0;i<frameurl.length;i++){


    this.frames[i]=new Image();

    this.frames[i].onload=countLoadedFrames;
    this.frames[i].src=frameurl[i];

  }


  var loop=this;

  function countLoadedFrames(){

    loop.loadedframes++;
    if(loop.loadedframes==loop.frames.length){

      loop.loaded=true;
      if(loop.startonload)loop.start();
    }
  }



  this._displayNextFrame=function(){

    loop.framenumber=(loop.framenumber+1)%loop.frames.length;
    loop.image.src=loop.frames[loop.framenumber].src;
  };
  }

  ImageLoop.prototype.start=function(){

    if(this.timer!=null)return;

    if(!this.loaded)this.startonload=true;

    else{

      if(!this.image)this.image=document.getElementById(this.imageid);

      this._displayNextFrame();
      this.timer=setInterval(this._displayNextFrame,this.frameInterval);
    }
  };
