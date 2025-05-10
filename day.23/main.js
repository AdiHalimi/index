// function sgowMessage(){
//     alert("this is a function in javascript")
// }

// showMessage();

function sum(x,y){
    document.write(x+y)
}

sum(2,5);
document.write("<br>");
sum(55,44);
document.write("<br>");
sum(120,54);
// arrow function
// var arrowFunction = name => alert(`hello ${name}`);

//arrowFunction("Adi");

function testFunction(){
    var localVar = "adi";
    alert(localVar);
}

testFunction();

var car = {name: 
        "Mercedes", color: "red", year: 2023,
         kilometeres: "1200",
    startEngine: function () {
        alert("engine started");
    },
    get getkilometeres(){
        return this.kilometeres;},
    set setkilometeres(kilometeres){
        this.kilometeres = kilometeres;
    }

    }
    console.log(car.getkilometeres);
    car.setkilometeres = 100;
    console.log(car.setkilometeres);
    

    alert(car.name);
    alert(car['color']);

    var car = new Object();
    car.name = "Mercedes";
    car.color = "red";
    car.year = 2023;
    car.kilometeres = "1200";
    car.type = function () {
        return this.name + " " + this.color + " " + this.year + " " + this.kilometeres;
    }

    console.log(car.type());