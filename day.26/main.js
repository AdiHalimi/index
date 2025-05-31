// var x=5;

// if(x>2){
//     console.log("x is greater than 2");
// }else{
//     console.log("x is less than 2");
// };
// var y=10;

// if(y<2){
//     console.log("y is greater than 2");
// }else{
//     console.log("y is less than 2");
// };

  var input = document.getElementById('input');
 var button = document.getElementById('id');
 var text = document.getElementById('h1');

 button.onclick=function(){ 
    text.innerHTML = input.value;
 };

var input2 = document.querySelector('#input2');
var input3 = document.querySelector('#input3');
var button1 = document.querySelector('#btn2_id');
var ans = document.querySelector('#answer');
button1.addEventListener("click", function(){
    ans.innerHTML = parseInt(input2.value) + parseInt(input3.value);
});

button.onclick=function(){
    if(input.value>10){
        text.innerHTML = "Input value is bigger than 10";
    }else if(input.value=10){
        text.innerHTML = "Input value is equals to 10";
    }else{
        text.innerHTML = "Input value is less than 10";
    }
}