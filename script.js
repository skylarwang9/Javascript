var message="Your external javascript is connected";
console.log(message);

//funcion declaration
function sayHello(){
  alert("hello");
  console.log("hello");
  document.write("hello");
}
//function call
 sayHello();

var moveObject=
    document.getElementById("moveDiv");
var another= document.getElementById("animate");

function moveObject(){
   console.log("move things");
   moveObject.style.transform="translateY(200px)";
   another.style.animation="quickanimation 3s linear 3 alternate forwards";
 }

var thirdDiv= document.getElementById("div3");
 function changeColor(){
   thirdDiv.style.backgroundColor="orange";
 }
