//CALCULADORA NUMEROLOGÍA

function getData() {
    var nombre = document.getElementById("complete-name").value;
    var diaNacimiento = Number(document.getElementById("day-of-birth").value);
    var mesNacimiento = Number(document.getElementById("month-of-birth").value);
    var añoNacimiento = Number(document.getElementById("year-of-birth").value);
    //alert("You name is " + nombre + ". Your birthday is " + diaNacimiento + "/" + mesNacimiento + "/" + añoNacimiento);
    // console.log(nombre + " " + diaNacimiento + " " + mesNacimiento + " " + añoNacimiento);
    window.nombre = nombre;
    window.diaNacimiento = diaNacimiento;
    window.mesNacimiento = mesNacimiento;
    window.añoNacimiento = añoNacimiento;
}

console.log(nombre);
console.log(diaNacimiento);
console.log(mesNacimiento);
console.log(añoNacimiento);


var foo = null; 
function myClickEvent() { foo = someStuffThatGetsValue; } 

var MyApp = { foo: null }; 
function myClickEvent() { MyApp.foo = someStuffThatGetsValue; } 