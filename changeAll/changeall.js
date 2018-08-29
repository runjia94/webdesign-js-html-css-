function dochange(){
  alert('It is a joke !')
}
function confirminsteadofalert(){
  var choice = confirm("Do you want to know the reason?");
  if(choice == true){
    document.write("You pressed OK");
  }
  else{
    document.write("Are you sure to cancel?");
    alert('it is a joke')
  }
}
function changecolor(){
  var div1element = document.getElementById("div1");
  var div2element = document.getElementById("div2");
  div1element.className="greenback";
  div2element.className="blackback";
}
function changetext(){
  var div1element = document.getElementById("div1");
  var div2element = document.getElementById("div2");
  div1element.innerHTML = "Erste";
  div2element.innerHTML = "Zweite";
}

function change(){
  var div1element = document.getElementById("div1");
  div1element.style.backgroundColor="Black";
}