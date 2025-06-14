// for loop
let text1="";

for(let i=0; i<10; i++){
    text1+="the number is "+i+"<br>";
}
//for loop 2
document.getElementById("demo1").innerHTML = text1; 

const cars = ["audi", "bmw", "toyota"];

let text = "";

for (let i = 0; i<cars.length; i++) {
    text += cars[i] + "<br>";
    }
    document.getElementById("demo2").innerHTML = text;

    //for/in

    const person = {name:"uvejs", lastname:"azizi", age:69 };

    let txt = "";
    for (let x in person) {
        txt += person[x] + " ";
        }
document.getElementById("demo3").innerHTML = txt;
//for/off

 const ds = ["html", "css", "javascript"];
 let text2 = "";
 for (let x of ds) {
    text2 += x + "<br>"
    }
    document.getElementById("demo4").innerHTML = text2;

    //for/of 2

    let language = "Javascript";
    let text3 = "";
    for (let x of language) {
        text3 += x + "<br>"
        }
        document.getElementById("demo6").innerHTML = text3;

    //while

    let text5 ="";
    let i = 0;

    while(i<10){
        text5+="the number is "+i+"<br>";
        i++;
    }
    document.getElementById("demo5").innerHTML = text5;

    //do while loop
let text7 = "";
let j = 0;
do {
    text7 += "<br>the number is "+j;
    j++;
    } while (j<10);
    document.getElementById("demo7").innerHTML = text7;

    //

    var students = ["John", "Mary", "David", "Emma"];

    for(let i=0; i<students.length; i++){
        document.write('<br>'+students[i]);
     }