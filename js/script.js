//CALCULADORA NUMEROLOGÍA

const button = document.querySelector('#submit');
const nameField = document.querySelector('#name');
const dayField = document.querySelector('#day');
const monthField = document.querySelector('#month');
const yearField = document.querySelector('#year');
const div = document.querySelector('#result');

button.addEventListener('click', getFormValues);

let nombre;
let diaNacimiento;
let mesNacimiento;
let añoNacimiento;

function getFormValues() {
  event.preventDefault();
  nombre = nameField.value;
  diaNacimiento = Number(dayField.value);
  mesNacimiento = Number(monthField.value);
  añoNacimiento = Number(yearField.value);


//PREPARAR EL NOMBRE PARA DESARROLLAR LA NUMEROLOGÍA
    //QUITAR CARÁCTERES ESPECIALES DEL NOMBRE
    var normalize = (function() {
      var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", 
          to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
          mapping = {};
      for (var i = 0, j = from.length; i < j; i++)
          mapping[ from.charAt(i)] = to.charAt(i);
      return function(str) {
          var ret = [];
          for (var i = 0, j = str.length; i < j; i++) {
              var c = str.charAt(i);
              if (mapping.hasOwnProperty(str.charAt(i)))
                  ret.push(mapping[c]);
              else
                  ret.push(c);
          }      
          return ret.join('');
      }
      })();
  
      var nombreSinAcentos = normalize(nombre);
  
      //CONVERTIR LETRAS A MINÚSCULAS
      var nombreMinusculas = nombreSinAcentos.toLowerCase();
  
      //CONVERTIR LETRAS DEL NOMBRE EN STRINGS Y GENERAR UN ARRAY
      var nombreConEspacios = nombreMinusculas.split("");
  
      //CONVERTIR NOMBRE EN ARRAY CON BLOQUES EQUIVALENTES A CADA NOMBRE/APELLIDO
      var nombreYapellido = nombreMinusculas.split(" ");
  
      //ELIMINAR LOS ESPACIOS DEL ARRAY
      const nombreSinEspacios = nombreConEspacios.filter(function(letra) {return letra !== ' '});
  
      //DEVUELVE EL ARRAY 'NOMBRESINESPACIOS' COMO STRINGS SEPARADOS
      //const letrasDelNombre = nombreSinEspacios.toString();
      //console.log(letrasDelNombre);
  
  //FUNCIÓN PARA SUMAR NÚMEROS DE UN ARRAY
  function sumar(n) {
      var nx = n.reduce(function(a, b){
          return a + b;
      }, 0);
      return(nx);
  }
  
  //FUNCIÓN PARA RESTAR NÚMEROS DE UN ARRAY
  function restar (n) {
      nReordenado = n.sort((a, b) => b - a)
      const numeroResta = [];
      var resta = nReordenado[0];
      for (let i = 1; i < nReordenado.length; i++) {
          numeroResta[i] = n[i];
          resta = resta - numeroResta[i];
      }
      return Math.abs(resta);
  }
  
  //FUNCIÓN PARA OBTENER INICIALES DEL NOMBRE
  var iniciales = []
  function primeraLetraNombres (nombre) {
      for (i = 0; i < nombre.length; i++) {
          iniciales.push(nombre[i].slice(0, 1));
      }
      return iniciales;
  }
  
  //INICIALES DEL NOMBRE
      primeraLetraNombres(nombreYapellido);
  
  //INICIALES DEL NOMBRE CONVERTIDAS A NÚMEROS
      var inicialesNumericas = generarNombreNumerico(iniciales);
      var inicialesNumericasOrdenadas = inicialesNumericas.sort((a, b) => b - a);
      console.log(inicialesNumericasOrdenadas);
  
  //FUNCION PARA REDUCIR FECHA DE NACIMIENTO
  function reducirFecha(n) {
      var nToString = n.toString();
      var reduccionFecha = 0;
          for (var i = 0; i < nToString.length; i++) {
              reduccionFecha = Number(reduccionFecha) + Number(nToString[i]);   
          }
          return reduccionFecha;
      }
  
  //FUNCIÓN PARA REDUCIR NÚMEROS A UNA CIFRA TENIENDO EN CUENTA LAS EXCEPCIONES:
  function reducir(n) {
      var nToString = n.toString();
      var reduccion = 0;
      if (n == 10 || n == 20 || n == 30 || n == 40 || n == 50 || n == 60 || n == 70 || n == 80 || n == 90) {
          return (/*"Número especial " + */n);
      }
      else if (n == 11 || n == 22 || n == 33 || n == 44 || n == 55 || n == 66 || n == 77 || n == 88 || n == 99) {
          return (/*"Número maestro " + */n);
      }
      else if (n == 12 || n == 13 || n == 14 || n == 15 || n == 16 || n == 19 || n == 26) {
          return (/*"Número kármico " + */n);
      } else {
          for (var i = 0; i < nToString.length; i++) {
              reduccion = Number(reduccion) + Number(nToString[i]);
          }
      }
      if (reduccion <= 9) { 
          return reduccion;
      } else {
          var reduccionToString = reduccion.toString();
          var segundaReduccion = 0;
          if (reduccion == 10 || reduccion == 20 || reduccion == 30 || reduccion == 40 || reduccion == 50 || reduccion == 60 || reduccion == 70 || reduccion == 80 || reduccion == 90) {
              return (/*"Número especial " + */reduccion);
          }
          else if (reduccion == 11 || reduccion == 22 || reduccion == 33 || reduccion == 44 || reduccion == 55 || reduccion == 66 || reduccion == 77 || reduccion == 88 || reduccion == 99) {
              return (/*"Número maestro " + */reduccion);
          }
          else if (reduccion == 12 || reduccion == 13 || reduccion == 14 || reduccion == 15 || reduccion == 16 || reduccion == 19 || reduccion == 26) {
              return (/*"Número kármico " + */reduccion);
          } else {
              for (var z = 0; z < reduccionToString.length; z++) {
                  segundaReduccion = Number(segundaReduccion) + Number(reduccionToString[z]); 
              }  
          }
      return segundaReduccion;
      }
  }
  
  //FUNCIÓN PARA REDUCIR NÚMEROS A UNA CIFRA TENIENDO EN CUENTA LAS EXCEPCIONES:
  function reducirUnaCifra(n) {
      var nToString = n.toString();
      var reduccion = 0;
      for (var i = 0; i < nToString.length; i++) {
          reduccion = Number(reduccion) + Number(nToString[i]);
          }
      if (reduccion <= 9) { 
          return reduccion;
      } else {
          var reduccionToString = reduccion.toString();
          var segundaReduccion = 0;
          for (var z = 0; z < reduccionToString.length; z++) {
              segundaReduccion = Number(segundaReduccion) + Number(reduccionToString[z]); 
          }  
      }
      return segundaReduccion;
  }
  
  //CONVERTIR LETRAS A NÚMEROS
  function generarNombreNumerico(n) {
      var nombreNumerico = [];
      for (var i = 0; i < n.length; i++) {
          if (n[i] === 'a' || n[i] === 'j' || n[i] === 's') {
              nombreNumerico.push(1);
              } 
              else if (n[i] === 'b' || n[i] === 'k' || n[i] === 't') {
              nombreNumerico.push(2);
              }
              else if (n[i] === 'c' || n[i] === 'l' || n[i] === 'u') {
              nombreNumerico.push(3);
              }
              else if (n[i] === 'd' || n[i] === 'm' || n[i] === 'v') {
              nombreNumerico.push(4);
              }
              else if (n[i] === 'e' || n[i] === 'n' || n[i] === 'w') {
              nombreNumerico.push(5);
              }
              else if (n[i] === 'f' || n[i] === 'o' || n[i] === 'x') {
              nombreNumerico.push(6);
              }
              else if (n[i] === 'g' || n[i] === 'p' || n[i] === 'y') {
              nombreNumerico.push(7);
              }
              else if (n [i]=== 'h' || n[i] === 'q' || n[i] === 'z') {
              nombreNumerico.push(8);
              }
              else if (n[i] === 'i' || n[i] === 'r') {
              nombreNumerico.push(9);
              }
              /*else if (!n[i]) {
                  nombreNumerico.push(0);
              }*/
          else {
  
          }
      }
      return nombreNumerico;
  }    
  
  //NÚMERO DE ALMA
      //CONVERTIR VOCALES A NÚMEROS
      function generarVocalesNumericas(n) {
      var vocalesNumerico = [];
      for (var i = 0; i < n.length; i++) {
          if (n[i] === 'a') {
              vocalesNumerico.push(1);
              } 
              else if (n[i] === 'u') {
              vocalesNumerico.push(3);
              }
              else if (n[i] === 'e') {
              vocalesNumerico.push(5);
              }
              else if (n[i] === 'o') {
              vocalesNumerico.push(6);
              }
              else if (n[i] === 'i') {
              vocalesNumerico.push(9);
              }
          else {}
      }
      return vocalesNumerico;
      }  
      //CALCULAR EL NÚMERO DE ALMA
      var vocalesEnNumeros = generarVocalesNumericas(nombreSinEspacios);
      var numeroAlma = sumar(vocalesEnNumeros);
      var numeroAlmaReducido = reducir(numeroAlma);
      console.log("Número de Alma: " + numeroAlma + " / " + numeroAlmaReducido);    
  
  //NÚMERO DE PERSONALIDAD
      //CONVERTIR CONSONANTES A NÚMEROS
      function generarConsonantesNumericas(n) {
      var consonantesNumerico = [];
      for (var i = 0; i < n.length; i++) {
          if (n[i] === 'j' || n[i] === 's') {
              consonantesNumerico.push(1);
              } 
              else if (n[i] === 'b' || n[i] === 'k' || n[i] === 't') {
              consonantesNumerico.push(2);
              }
              else if (n[i] === 'c' || n[i] === 'l') {
              consonantesNumerico.push(3);
              }
              else if (n[i] === 'd' || n[i] === 'm' || n[i] === 'v') {
              consonantesNumerico.push(4);
              }
              else if (n[i] === 'n' || n[i] === 'w') {
              consonantesNumerico.push(5);
              }
              else if (n[i] === 'f' || n[i] === 'x') {
              consonantesNumerico.push(6);
              }
              else if (n[i] === 'g' || n[i] === 'p' || n[i] === 'y') {
              consonantesNumerico.push(7);
              }
              else if (n [i]=== 'h' || n[i] === 'q' || n[i] === 'z') {
              consonantesNumerico.push(8);
              }
              else if (n[i] === 'r') {
              consonantesNumerico.push(9);
              }
          else {}
      }
      return consonantesNumerico;
      }  
      //CALCULAR EL NÚMERO DE PERSONALIDAD
      var consonantesEnNumeros = generarConsonantesNumericas(nombreSinEspacios);
      var numeroPersonalidad = sumar(consonantesEnNumeros);
      var numeroPersonalidadReducido = reducir(numeroPersonalidad);
      console.log("Número de Personalidad: " + numeroPersonalidad + " / " + numeroPersonalidadReducido);
  
  //NÚMERO DE EXPRESIÓN
      //CONVERTIR NOMBRE COMPLETO EN NÚMEROS
      var nombreCompletoEnNumeros = generarNombreNumerico(nombreSinEspacios);
  
      //CALCULAR EL NÚMERO DE EXPRESIÓN
      const numeroExpresion = sumar(nombreCompletoEnNumeros); //numeroAlma + numeroPersonalidad;
      var numeroExpresionReducido = reducir(numeroExpresion);
      console.log("Número de expresión: " + numeroExpresion + " / " + numeroExpresionReducido);

  //INCLUSIÓN
  const casilla0 = 0;
  const casilla1 = 1;
  const casilla2 = 2;
  const casilla3 = 3;
  const casilla4 = 4;
  const casilla5 = 5;
  const casilla6 = 6;
  const casilla7 = 7;
  const casilla8 = 8;
  const casilla9 = 9;

  const casillasArray = [casilla1, casilla2, casilla3, casilla4, casilla5, casilla6, casilla7, casilla8, casilla9];
  const casillasArrayCon0 = [casilla0, casilla1, casilla2, casilla3, casilla4, casilla5, casilla6, casilla7, casilla8, casilla9];

  const habitanteCasilla0 = 0;
  const habitanteCasilla1 = nombreCompletoEnNumeros.filter(numero => numero === 1).length;
  const habitanteCasilla2 = nombreCompletoEnNumeros.filter(numero => numero === 2).length;
  const habitanteCasilla3 = nombreCompletoEnNumeros.filter(numero => numero === 3).length;
  const habitanteCasilla4 = nombreCompletoEnNumeros.filter(numero => numero === 4).length;
  const habitanteCasilla5 = nombreCompletoEnNumeros.filter(numero => numero === 5).length;
  const habitanteCasilla6 = nombreCompletoEnNumeros.filter(numero => numero === 6).length;
  const habitanteCasilla7 = nombreCompletoEnNumeros.filter(numero => numero === 7).length;
  const habitanteCasilla8 = nombreCompletoEnNumeros.filter(numero => numero === 8).length;
  const habitanteCasilla9 = nombreCompletoEnNumeros.filter(numero => numero === 9).length;

  const inclusion = [habitanteCasilla1, habitanteCasilla2, habitanteCasilla3, habitanteCasilla4, habitanteCasilla5, habitanteCasilla6, habitanteCasilla7, habitanteCasilla8, habitanteCasilla9];
  const inclusionCon0 = [habitanteCasilla0, habitanteCasilla1, habitanteCasilla2, habitanteCasilla3, habitanteCasilla4, habitanteCasilla5, habitanteCasilla6, habitanteCasilla7, habitanteCasilla8, habitanteCasilla9];

  console.log("Inclusión: " + inclusion);

//NÚMERO DE LIBERACIÓN
function calcularNumeroLiberacion (inclusion) {    
  var numerosKarma = [];
  var casillasConValor0 = inclusion.filter(casilla => casilla === 0).length;
  var casillasConValor1 = inclusion.filter(casilla => casilla === 1).length;
  var casillasConValor2 = inclusion.filter(casilla => casilla === 2).length;
  var casillasConValor3 = inclusion.filter(casilla => casilla === 3).length;
  var casillasConValor4 = inclusion.filter(casilla => casilla === 4).length;
  var casillasConValor5 = inclusion.filter(casilla => casilla === 5).length;
  var casillasConValor6 = inclusion.filter(casilla => casilla === 6).length;
  var casillasConValor7 = inclusion.filter(casilla => casilla === 7).length;
  var casillasConValor8 = inclusion.filter(casilla => casilla === 8).length;
  var casillasConValor9 = inclusion.filter(casilla => casilla === 9).length;

  if (casillasConValor0 !== 0) {
      for (let i = 0; i < inclusion.length; i++) {
          if (inclusion[i] === 0) {
              numerosKarma.push(i + 1);
          } 
      }
      return sumar(numerosKarma);
  } 
  else if (casillasConValor1 !== 0) {
      for (let i = 0; i < inclusion.length; i++) {
          if (inclusion[i] === 1) {
              numerosKarma.push(i + 1);
          } 
      }
      return sumar(numerosKarma);
  }
  else if (casillasConValor2 !== 0) {
      for (let i = 0; i < inclusion.length; i++) {
          if (inclusion[i] === 2) {
              numerosKarma.push(i + 1);
          } 
      }
      return sumar(numerosKarma);
  }
  else if (casillasConValor3 !== 0) {
      for (let i = 0; i < inclusion.length; i++) {
          if (inclusion[i] === 3) {
              numerosKarma.push(i + 1);
          } 
      }
      return sumar(numerosKarma);
  }
  else if (casillasConValor4 !== 0) {
      for (let i = 0; i < inclusion.length; i++) {
          if (inclusion[i] === 4) {
              numerosKarma.push(i + 1);
          } 
      }
      return sumar(numerosKarma);
  }
  else if (casillasConValor5 !== 0) {
      for (let i = 0; i < inclusion.length; i++) {
          if (inclusion[i] === 5) {
              numerosKarma.push(i + 1);
          } 
      }
      return sumar(numerosKarma);
  }
  else if (casillasConValor6 !== 0) {
      for (let i = 0; i < inclusion.length; i++) {
          if (inclusion[i] === 6) {
              numerosKarma.push(i + 1);
          } 
      }
      return sumar(numerosKarma);
  }
  else if (casillasConValor7 !== 0) {
      for (let i = 0; i < inclusion.length; i++) {
          if (inclusion[i] === 7) {
              numerosKarma.push(i + 1);
          } 
      }
      return sumar(numerosKarma);
  }
  else if (casillasConValor8 !== 0) {
      for (let i = 0; i < inclusion.length; i++) {
          if (inclusion[i] === 8) {
              numerosKarma.push(i + 1);
          } 
      }
      return sumar(numerosKarma);
  }
  else if (casillasConValor9 !== 0) {
      for (let i = 0; i < inclusion.length; i++) {
          if (inclusion[i] === 9) {
              numerosKarma.push(i + 1);
          } 
      }
      return sumar(numerosKarma);
  }
}

const numeroLiberacion = calcularNumeroLiberacion(inclusion);
console.log("Número de liberación: " + numeroLiberacion);

//NÚMERO DE CICLO BISAGRA
  const cicloBisagra = nombreSinEspacios.length;
  console.log("Ciclo bisagra: ciclo de " + cicloBisagra + " años.");

//NÚMERO DE EQUILIBRIO
  const numeroEquilibrio = sumar(inicialesNumericas);
  var numeroEquilibrioReducido = reducir(numeroEquilibrio);
  console.log("Número de equilibrio: " + numeroEquilibrio + " / " + numeroEquilibrioReducido);

//NÚMERO DE DESEQUILIBRIO = RESTA INICIALES NOMBRE
  const numeroDesequilibrio = restar(inicialesNumericasOrdenadas);
  console.log("Número de desequilibrio: " + numeroDesequilibrio);

//NÚMERO DE CAMINO DE VIDA
  //SUMATORIO DÍA 
  var diaNacimientoReducido = reducirFecha(diaNacimiento);
  var diaNacimientoEspecial = reducir(diaNacimiento);
  console.log("Número de día: " + diaNacimientoEspecial + " / " + diaNacimientoReducido);

  //SUMATORIO MES
  var mesNacimientoReducido = reducirFecha(mesNacimiento);
  var mesNacimientoEspecial = reducir(mesNacimiento);
  console.log("Número de mes: " + mesNacimientoEspecial + " / " + mesNacimientoReducido);
  
  //SUMATORIO AÑO
  var añoNacimientoReducido = reducirFecha(añoNacimiento);
  var añoNacimientoEspecial = reducir(añoNacimiento);
  var añoNacimientoReducidoUnaCifra = reducirUnaCifra(añoNacimiento);
  console.log("Número de año: " + añoNacimientoReducido + " / " + añoNacimientoReducidoUnaCifra);

  //CALCULAR NÚMERO DE CAMINO DE VIDA
  var numeroCaminoDeVida = diaNacimientoReducido + mesNacimientoReducido + añoNacimientoReducido;
  var numeroCaminoDeVidaEspecial = reducir(numeroCaminoDeVida); 
  var numeroCaminoDeVidaReducido = reducirUnaCifra(numeroCaminoDeVida);
  console.log("Número de camino de vida: " + numeroCaminoDeVida + " / " + numeroCaminoDeVidaReducido);

//NÚMERO DE FUERZA O MISIÓN DE VIDA = DÍA + MES
  var numeroMisionVida = diaNacimiento + mesNacimiento;
  var numeroMisionVidaEspecial = reducir(numeroMisionVida);
  var numeroMisionVidaReducido = reducirUnaCifra(numeroMisionVida);
  console.log("Número de Misión de vida: " + numeroMisionVida + " / " + numeroMisionVidaReducido);

  div.innerHTML = 
  `
  <div class="fila">
    <div class="item-fila">
      <h2>Your Numerology:</h2>
        <h4>${nombre}</h4>
        <h5>Born the ${diaNacimiento}, ${mesNacimiento}, ${añoNacimiento}</h5>
          <br>
        <h4>Live Path Number</h4>
        <p>Your Live Path Number is</p>
        <h2>${numeroCaminoDeVidaEspecial}</h2>
          <br>
        <h5>Live Mision Number ${numeroMisionVidaEspecial}</h5>
        <p>Your Live Mision Number is ${numeroMisionVidaEspecial}.</p>
          <br>
        <h5>Soul Number ${numeroAlmaReducido}</h5>
        <p>Your Soul Number is ${numeroAlmaReducido}.</p>
          <br>
        <h5>Personality Number ${numeroPersonalidadReducido}</h5>
        <p>Your Personality Number is ${numeroPersonalidadReducido}.</p>
          <br>
        <h5>Expression Number ${numeroExpresionReducido}</h5>
        <p>Your Expression Number is ${numeroExpresionReducido}.</p>
          <br>
        <h5>Balance Number ${numeroEquilibrio}</h5>
        <p>Your Balance Number is ${numeroEquilibrio}.</p>
          <br>
    </div>
    <div class="item-fila">
      <h4>Your Inclusion:</h4>
      <table>
      <tr>
        <td>Casa 1:<h1>${habitanteCasilla1}</h1></td>
        <td>Casa 2:<h1>${habitanteCasilla2}</h1></td>
        <td>Casa 3:<h1>${habitanteCasilla3}</h1></td>
      </tr>
      <br>
      <tr>
        <td>Casa 4:<h1>${habitanteCasilla4}</h1></td>
        <td>Casa 5:<h1>${habitanteCasilla5}</h1></td>
        <td>Casa 6:<h1>${habitanteCasilla6}</h1></td>
      </tr>
      <br>
      <tr>
        <td>Casa 7:<h1>${habitanteCasilla7}</h1></td>
        <td>Casa 8:<h1>${habitanteCasilla8}</h1></td>
        <td>Casa 9:<h1>${habitanteCasilla9}</h1></td>
      </tr>
      </table>
    </div>

  </div>
  `;

}

