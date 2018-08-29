var img=null;
var grayimage=null;
var redimage=null;
var createimage=null;
var rainimage=null;
function imageisloaded(){
  if(img==null||!img.complete()){
    alert("The original image is not loaded")
  }
  else{
    return img;
  }
}
function upload(){
  var imagecanvas=document.getElementById("can");
  var aftcanvas = document.getElementById("vas")
  var fileinput = document.getElementById("finput");
  img = new SimpleImage(fileinput);
  img.drawTo(imagecanvas);
  grayimage = new SimpleImage(fileinput);
  redimage = new SimpleImage(fileinput);
  createimage = new SimpleImage(fileinput);
  rainimage = new SimpleImage(fileinput);
  
}
function dogray(){
  if(imageisloaded(img)){
    makeGray();
  aftcanvas=document.getElementById("can");
    grayimage.drawTo(aftcanvas);
  }
}
function makeGray(){
  for(var pixel of grayimage.values()){
    var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
    pixel.setRed(avg);
    pixel.setBlue(avg);
    pixel.setGreen(avg);
  }
  aftcanvas=document.getElementById("can");
  grayimage.drawTo(aftcanvas);
}
function dored(){
  if(imageisloaded(img)){
    makered();
   aftcanvas=document.getElementById("can");
    redimage.drawTo(aftcanvas);
  }
}
function makered(){
  for(var pixel of redimage.values()){
    var avg=(pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
    if(avg<128){
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen(avg*2-255);
      pixel.setBlue(avg*2-255);
    }
  }
}
function checkimg(){
  if(img==null||!img.complete()){
    alert("The original image is not loaded")
  }
  else{
    return img;
  }
}
function doreset(){
  if(checkimg(img)){
   aftcanvas=document.getElementById("can");
    upload();
    img.drawTo(aftcanvas);
    
  }
}
function dorandom(){
  if(imageisloaded(img)){
    
    makerandom();
    aftcanvas=document.getElementById("can");
    createimage.drawTo(aftcanvas);
    
  }
}
function makerandom(){
  var ran = Math.random()*111;
  for(var pixel of createimage.values()){
      var avg=(pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
    if(ran<avg){
      pixel.setGreen(255);
    }
    else{
      pixel.setRed(255);
    }
  }
}
function dorainbow(){
  if(imageisloaded(img)){
    rainbow();
   aftcanvas=document.getElementById("can");
    rainimage.drawTo(aftcanvas);
  }
}
function rainbow(){
  for(var pixel of rainimage.values()){
    var rc = pixel.getRed();
    var bc = pixel.getBlue();
    var gc = pixel.getGreen();
    var avg = (rc+bc+gc)/3;
    if(pixel.getY()<rainimage.getHeight()/7){
    if(avg<128){
      var r = 2*avg;
      var g = 0;
      var b = 0;
      pixel.setRed(r);
      pixel.setGreen(g);
      pixel.setBlue(b);
    }
    else{
      var r = 255;
      var b = 2*avg-255;
      var g = 2*avg-255;
      pixel.setRed(r);
      pixel.setGreen(g);
      pixel.setBlue(b);
    }
    }
    if(pixel.getY()>rainimage.getHeight()/7 && pixel.getY()<rainimage.getHeight()*2/7){
      if(avg<128){
      var r = 2*avg;
      var g = 0.8*avg;
      var b = 0;
      pixel.setRed(r);
      pixel.setGreen(g);
      pixel.setBlue(b);
    }
    else{
      var r = 255;
      var b = 2*avg-255;
      var g = 1.2*avg-51;
      pixel.setRed(r);
      pixel.setGreen(g);
      pixel.setBlue(b);
    }
      
    }
    if(pixel.getY()>rainimage.getHeight()*2/7 && pixel.getY()<rainimage.getHeight()*3/7){
      if(avg<128){
      var r = 2*avg;
      var g = 2*avg;
      var b = 0;
      pixel.setRed(r);
      pixel.setGreen(g);
      pixel.setBlue(b);
    }
    else{
      var r = 255;
      var g = 255;
      var b = 2*avg-255;
      pixel.setRed(r);
      pixel.setGreen(g);
      pixel.setBlue(b);
    }
      
    }
    if(pixel.getY()>rainimage.getHeight()*3/7 && pixel.getY()<rainimage.getHeight()*4/7){
      if(avg<128){
      var r = 0;
      var g = 2*avg;
      var b = 0;
      pixel.setRed(r);
      pixel.setGreen(g);
      pixel.setBlue(b);
    }
    else{
      var r = 2*avg-255;
      var g = 255;
      var b = 2*avg-255;
      pixel.setRed(r);
      pixel.setGreen(g);
      pixel.setBlue(b);
    }
      
    }
    if(pixel.getY()>rainimage.getHeight()*4/7 && pixel.getY()<rainimage.getHeight()*5/7){
      if(avg<128){
      var r = 0;
      var g = 0;
      var b = 2*avg;
      pixel.setRed(r);
      pixel.setGreen(g);
      pixel.setBlue(b);
    }
    else{
      var r = 2*avg-255;
      var g = 2*avg-255;
      var b = 255;
      pixel.setRed(r);
      pixel.setGreen(g);
      pixel.setBlue(b);
    }
      
    }
     if(pixel.getY()>rainimage.getHeight()*5/7 && pixel.getY()<rainimage.getHeight()*6/7){
      if(avg<128){
      var r = 0.8*avg;
      var g = 0;
      var b = 2*avg;
      pixel.setRed(r);
      pixel.setGreen(g);
      pixel.setBlue(b);
    }
    else{
      var r = 1.2*avg-51;
      var g = 2*avg-255;
      var b = 255;
      pixel.setRed(r);
      pixel.setGreen(g);
      pixel.setBlue(b);
    }
      
    }
    if(pixel.getY()>rainimage.getHeight()*6/7 && pixel.getY()<rainimage.getHeight()){
      if(avg<128){
      var r = 1.6*avg;
      var g = 0;
      var b = 1.6*avg;
      pixel.setRed(r);
      pixel.setGreen(g);
      pixel.setBlue(b);
    }
    else{
      var r = 0.4*avg+153;
      var g = 2*avg-255;
      var b = 0.4*avg+153;
      pixel.setRed(r);
      pixel.setGreen(g);
      pixel.setBlue(b);
    }
      
    }
  }
}