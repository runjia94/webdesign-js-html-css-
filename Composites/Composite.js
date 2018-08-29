var fgimage=null;
var bgimage=null;
function loadForegroundImage(){
  var imgFile=document.getElementById("fgfile");
  fgimage = new SimpleImage(imgFile);
  var fcanvas = document.getElementById("can");
  fgimage.drawTo(fcanvas);
}
function loadBackgroundImage(){
  var imagefile=document.getElementById("bgfile");
  bgimage = new SimpleImage(imagefile);
  var bcanvas = document.getElementById("vas");
  bgimage.drawTo(bcanvas);
}
function greenscreen(){
  if(fgimage==null||!fgimage.complete()){
    alert("foreground not load");
  }
  if(bgimage==null||!bgimage.complete()){
    alert("background not load");
  }
  clearcanvas();
}
function composite(){
  greenscreen();
  var output = new SimpleImage(fgimage.getWidth(),fgimage.getHeight());
  for(var pixel of fgimage.values()){
    var x=pixel.getX();
    var y = pixel.getY();
    if(pixel.getGreen()>pixel.getRed()+pixel.getBlue()){
      var bgpixel = bgimage.getPixel(x,y);
      output.setPixel(x,y,bgpixel);
    }
    else{
      output.setPixel(x,y,pixel);
       
    }
  }
  var bcanvas = document.getElementById("vas");
  output.drawTo(bcanvas);
}
function clearcanvas(){
  var canvas1 = document.getElementById("vas");
  var cxt = canvas1.getContext("2d");
  cxt.clearRect(0,0,canvas1.width,canvas1.height);
  var canvas12 = document.getElementById("can");
  var cxt2 = canvas12.getContext("2d");
  cxt2.clearRect(0,0,canvas12.width,canvas12.height);
}