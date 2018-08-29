var img=null;
var blurimage=null;
var h =null;
var w = null;
var output=null;
function upload(){
  var imagecanvas=document.getElementById("can");
  var aftcanvas=document.getElementById("vas");
  var fileinput = document.getElementById("finput");
  var fileinput2 = document.getElementById("ffinput");
  img = new SimpleImage(fileinput);
  img.drawTo(imagecanvas);
  blurimage=new SimpleImage(fileinput);
  h=blurimage.getHeight();
  w=blurimage.getWidth();
  output = new SimpleImage(fileinput2);
  output.drawTo(aftcanvas);
}
function doblur(){
    blur();
   var aftcanvas=document.getElementById("vas");
    output.drawTo(aftcanvas);
}
function blur(){
  for(var pixel of output.values()){
    var rnum = Math.random();
    if(rnum>0.5){
      var rr = Math.floor(Math.random()*11);
      var z = pixel.getX()+rr;
      var c = pixel.getY()+rr;
      var newpix = img.getPixel(z,c);
      output.setPixel(pixel.getX(),pixel.getY(),newpix);
    }
  }
  return output
}