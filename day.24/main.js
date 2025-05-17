// var button1 = document.getElementById("btn1");

var button1 = document.querySelector('button');
var button2 = document.getElementById('btn2');
var button3 = document.getElementById('btn3');
var v_button = document.getElementById('btn4');
var v_text = document.getElementById('text');

// button1.addEventListener('click',function(){
//     alert("Hello from me");
// });

// // button1.onclick = function(){
// //     alert("Hello from me");
// // }

// button2.onmouseover = function(){
//     alert("mause is over me")
//         };
//         button3.onmouseleave = function(){
//             alert("Mouse is away from me") };

v_button.onclick = function(){
v_text.style.color = "red";
v_text.style.backgroundcolor = "lightblue";
v_text.style.textAlign = "center";
v_text.style.fontSize = "30px";
v_text.style.padding = "25px";
};