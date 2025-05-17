// var button1 = document.getElementById("btn1");

var button1 = document.querySelector('button');
var button2 = document.getElementById('btn2');
var button3 = document.getElementById('btn3');

button1.addEventListener('click',function(){
    alert("Hello from me");
})

// button1.onclick = function(){
//     alert("Hello from me");
// }

button2.onmouseover = function(){
    alert("mause is over me")
        };
        button3.onmouseleave = function(){
            alert("Mouse is away from me") };