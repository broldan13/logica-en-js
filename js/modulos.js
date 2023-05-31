import saludar, { PI, Saludar } from "./constantes.js";
import { operaciones } from "./aritmeticos.js";


//saludar();//Importación de una función por default
//let saludo=new Saludar();//Importación de una clase desde otro modulo
//saludo;

/*console.log("Archivo de modulo.js");
console.log(PI);
console.log(operaciones.sumar(5,5));
console.log(operaciones.resta(10,2));
console.log(operaciones.multiplicacion(5,5));
console.log(operaciones.division(9,3));
console.log(operaciones.potencia(5,2));*/

//PRIMER EJERCICIO
/*
function miFuncion(texto){
    console.log(`La palabra ${texto} tiene`,texto.length," letras.");
}
miFuncion("Hola mundo");*/

//Función expresada
const numCaracteres=(cadena="")=>
    (!cadena)
        ?console.warn("No se ingresaron caracteres.")
        :console.info(`La "${cadena}" tiene ${cadena.length} caracteres.`);

/*numCaracteres();
numCaracteres("Hola mundo");*/


// SEGUNDO EJERCICIO

const recortaTexto=(cadena="",longitud=undefined)=>
    (!cadena)
        ?console.warn("No has ingresado caracteres")
        :(longitud===undefined)
            ?console.warn("Favor de ingresar la longitud a cortar el texto")
            :console.info(`El texto (${cadena}) recortado se muestra asi: "${cadena.slice(0,longitud)}".`);
        
/*recortaTexto();
recortaTexto("Hola Mundo")
recortaTexto("Brian",3)
recortaTexto("Hola mundo",4)*/

// TERCER EJERCICIO
const separaArreglo=(cadena="",separador=undefined)=>
    (!cadena)
        ?console.warn("No has ingresado ningun carcater")
        :(separador===undefined)
            ?console.warn("No has ingresado ningun separador")
        :console.info(cadena.split(separador));//Split- indica el tipo de separador a buscar.

//separaArreglo("Enero,Febrero,Marzo,Abril,Mayo",",");
//separaArreglo("hola que tal"," ");


//CUARTO EJERCICIO

//1°-Primera solución
const repiteCadena=(cadena="",cantidad=undefined)=>{
    if (!cadena) return console.warn("No has ingresado ningun caracter");
    if (cantidad===undefined) return console.warn("No has ingresado la cantidad a repetir.");
    if (cantidad<=0)return console.error("Número de veces no puede ser 0, ni un numero negativo.");
    console.info(cadena.repeat(cantidad));
}
/*
repiteCadena("Hola mundo ", 2);
repiteCadena("",6);
repiteCadena("Hola",)
repiteCadena("Hola ",4);
repiteCadena("Hola ",-4);
repiteCadena("Hola ",0);*/

//2da Solución

const repiteTexto=(texto="",veces=undefined)=>{
    if (!texto) return console.warn("No has introducido ningun caracter.");
    if (veces===undefined) return console.warn("Falta ingresar las veces a imprimir");
    if (veces<=0) return console.error("El número de veces no puede ser 0 ni menor a 0.")
    for(let i=1;i<=veces;i++){
        console.info(`${texto} - ${i}`);
    }
}

/*repiteTexto("Hola mundo ", 2);
repiteTexto("",6);
repiteTexto("Hola",)
repiteTexto("Hola ",4);
repiteTexto("Hola ",-4);
repiteTexto("Hola ",0);*/

/*5) Programa una función que invierta las palabras de 
una cadena de texto, pe. miFuncion("Hola Mundo")
 devolverá "odnuM aloH".*/

 //Primera Solución

function invierteTexto(texto){
    if (!texto){
        console.warn("No has ingresado ningún texto.");
    }else{
        //Separara el texto
        let separaTexto=texto.split("");
        //Invierte el arreglo
        let reversaTexto=separaTexto.reverse();
        //Unir texto
        let unirTexto=reversaTexto.join("");

        console.info(unirTexto);
    }
    
}
        
//invierteTexto("Brian");

//Segunda solución

const invierteTexto1=(texto="")=>{
    if (!texto)return console.warn("No has ingresado ningún texto");
    //if (texto===123)return console.warn("Solo se admiten numeros.");
    let textoInvertido="";
    for (let i=texto.length-1;i>=0;i--){
        textoInvertido+=texto[i];
    }
    console.info(textoInvertido);
}
//invierteTexto1("Brian");


//Tercera forma
const invierteTexto2=(texto="")=>{
    if(!texto)return console.warn("No has ingresado ningún texto");
    let textoInvertido=(texto.split("").reverse().join(""));
    console.info(textoInvertido);
}
//invierteTexto2("Brian");



/*6) Programa una función para contar el número de veces que se repite una palabra 
en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/
function repitePalabra(texto,buscador){
    let palabra=texto.split(" ");
    let contador = 0;
    for(let i=0; i<=palabra.length;i++){
        if (palabra[i]==buscador){
            contador=contador+1
            
        }
    }
    console.log(contador);

 }
//repitePalabra("hola mundo adios mundo","mundo");

// Solución DOS
const repitePalabra2 = (texto="",buscador="")=>{
    if(!texto) return console.warn("No has introducido ningún texto");
    if(!buscador) return console.warn("No has introducido la palabra a buscar");
    let palabra=texto.split(" ");
    let contador=0;
    for (let i=0; i<= palabra.length; i++){
        if(palabra[i]===buscador){
            contador=contador+1;
        }
    }
    console.info(`En el texto "${texto}" se repite "${contador}" la palabra "${buscador}".`)
}

//repitePalabra2("hola mundo adios mundo mundo","mundo");

/*7) Programa una función que valide si una palabra o frase dada, es un
 palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") 
 devolverá true.*/



const palindromo=(texto="")=>{
    if(!texto) return console.warn("No has ingresado ningún texto");
    texto=texto.toLowerCase();
    let separaTexto=texto.split("").reverse().join("");
    if(separaTexto===texto) {
        console.info(`El texto "${texto}", es palindromo: "${separaTexto}" `);
    }else{
        console.info("No es palindromo.")
    }
}
    
//palindromo("Radar");
//palindromo("salas");
//palindromo("Brian");
//palindromo("salas");


/* 8) Programa una función que elimine cierto patrón de caracteres de un texto ¨
dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/

const eliminaCaracteres=(texto="",caracteres="")=>{
    if(!texto) return console.warn("No se has ingresado el texto.");
    if(!caracteres) return console.warn("No has ingresado los caracteres a buscar.");
    console.info(texto=texto.replace(new RegExp(caracteres,"ig"),""));
}
//eliminaCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const numeroAleatorio=()=>{
    let max=600,
        min=501;

    min = Math.ceil(min);
    max = Math.floor(max);

    console.info(Math.floor(Math.random()*(max-min)+min));
    
}
//numeroAleatorio();

/*10) Programa una función que reciba un número y evalúe si es capicúa o no
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/

const numeroCapicua=(numero = 0)=>{
    if(!numero) return console.warn("No has ingresado nuncún numero.");

    if (typeof numero!== "number") return console.error("Solo se aceptan números NO cadenas de texto.");

    numero = numero.toString();
    
    let numeroReverso = numero.split("").reverse().join("");

    if (numeroReverso === numero){
        console.info(`El número ${numero} es capicua con ${numeroReverso}`);
    }else{
        console.info(`El número ${numeroReverso} NO es capicua con ${numero}`);
    }
}
//numeroCapicua(212);

/*11) Programa una función que calcule el factorial de 
un número (El factorial de un entero positivo n, se 
define como el producto de todos los números enteros 
positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/

const calculaFactorial = (factorial=0)=>{
    if (!factorial) return console.warn("No has ingresado ningún numero.");
    if (typeof factorial !== "number") return console.error("Solo se aceptan números.");
    if (factorial < 1) return console.warn("Un factorial no puede elevarse si el número es negativo.");

    let resultado = 1;

    for (let i=factorial; i>=1; i--){
        resultado=resultado*i;
    }
    console.info(resultado);

}
//calculaFactorial(5);

/*12) Programa una función que determine si un número es primo
(aquel que solo es divisible por sí mismo y 1) o no, pe. 
miFuncion(7) devolverá true.*/
const numeroPrimo = (numero=0)=>{
    if (!numero) return console.warn("No has ingresado ningún número.");
    if (typeof numero!=="number") return console.warn("Solo se aceptan datos de tipo NÚMERO.");

    if (numero === 0 || numero === 1 || numero === 4) return false;
    for (let i=2; i< numero /2 ;i++){
        if (numero % i === 0) return false;
    }
    return true;
 }
 //console.info(numeroPrimo(3));

/*13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.*/
const parImpar = (numero=0)=>{
    if (!numero) return console.warn("No has ingresado ningún número.");
    if (typeof numero!=="number") return ("No has ingresado ningún número.");

    if (numero % 2==0){
        console.info(`El ${numero} es PAR. `);
    }else{
        console.info(`El ${numero} es IMPAR. `);
    }
}
//parImpar(7);

/*14) Programa una función para convertir grados Celsius a 
Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.*/ 
const gradosCF = (temperatura=0,grados="")=>{
    //if (!temperatura) return console.warn("No has ingresado la temperatura");
    if (!grados) return console.warn("No has ingresado el tipo de temperatura");
    if (typeof temperatura!=="number") return console.warn("Ingresa la temperatura con numeros.");

    let fahrenheit=temperatura*1.8000+32;
    let graCelsius= (temperatura-32)/1.8000;

    grados=grados.toLowerCase();
    if (grados==="c"){
        console.info(`Conversion de ${temperatura} celsius a fahrenheit es: ${fahrenheit}°F`);
    }else{
        if(grados==="f"){
            console.info(` Conversion de ${temperatura} fahrenheit a celsius es: ${graCelsius}°C`);
        }
    }
}
//gradosCF(59,"F");

/* 15) Programa una función para convertir números de base binaria a decimal
 y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.*/
 const convierteBase = (numero=0,base=10||2) => {
    if (!numero) return console.warn("No ha ingresado el número a convertir.");
    if (typeof numero!=="number") return console.warn("Solo se aceptan caracteres de tipo número.");
    if (!base) return console.warn("No has ingresado la base a convertir.");
    if (typeof base!=="number") return console.warn("Solo se aceptan datos de tipo número.");
    
    if (base===2){
        numero=numero.toString();
        let invertirNumero=numero.split("").reverse().join("");
        let sum=0;
        for (let i=0; i<invertirNumero.length;i++){
            sum = sum + invertirNumero[i]* 2 **invertirNumero.length -1;
        }
        console.info(sum+" en base 10.");
    }
    if (base===10)return console.info(numero.toString(2)+" en base 2");
 }
//convierteBase(100,2);
//convierteBase(4,10);

// Segúnda Opción
const convertirBase = (numero=0,base=0)=>{
    if (!numero) return console.warn("No has ingresado el número a convertir.");
    if (!base) return console.warn("No has ingresado la base a convertir");
    if (base === 2) return console.info(`${parseInt(numero,base)} base 10.`);
    if (base === 10)console.info(numero.toString(2) + " en base 2.")
}
//convertirBase(100,2);
//convertirBase(4,10);



/*16) Programa una función que devuelva el monto final después de aplicar un 
descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.*/
const descuentos = (cantidad=0,descuento=0)=>{
    if (!cantidad) return console.warn("No has ingresado la cantidad.");
    if (!descuento) return console.warn("No has ingresado el descuento.");
    if (typeof descuento!=="number") return console.warn("Solo se aceptan numeros.");
    if (typeof cantidad!=="number") return console.warn("Solo se aceptan números.");
    descuento=(descuento*10);
    console.info(cantidad=cantidad-descuento);
}
//descuentos(1000,5);

/*17) Programa una función que dada una fecha válida determine cuantos años 
han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 
35 años (en 2020). */
const determinarYears = (fecha=new Date()) =>{
    if (!fecha) return console.warn("No has ingresado ningún dato.");
    let fechaActual= new Date();
    let yearActual=fechaActual.getFullYear();

    let yearTranscurridos=(yearActual-fecha.getFullYear());
    console.info(`Han pasado ${yearTranscurridos} años desde ${fecha.getFullYear()} en ${yearActual}.`);
}
//determinarYears(new Date(1984,4,23));

/*18) Programa una función que dada una cadena de texto cuente 
el número de vocales y consonantes, pe. miFuncion("Hola Mundo") 
devuelva Vocales: 4, Consonantes: 5.*/
const contadorVocalesConsonantes = (palabra="")=>{
    if (!palabra) return console.warn("No has ingresado ningún texto.");
    let contador=0;
    let contadorCons=-1;
    for (let i = 0; i<=palabra.length; i++){
        if (palabra[i]===("a")||palabra[i]===("e")||palabra[i]===("i")||palabra[i]===("o")||palabra[i]===("u")){
            contador=contador+1;
        }else{
            contadorCons=contadorCons+1;
            if (palabra[i]===(" ")||palabra[i]===("1")||palabra[i]===("2")
            ||palabra[i]===("3")||palabra[i]===("4")||palabra[i]===("5")||
            palabra[i]===("6")||palabra[i]===("7")||palabra[i]===("8")||
            palabra[i]===("9")||palabra[i]===("0")){
                contador=contador+0;
                contadorCons=contadorCons-1;
            }
        }
    }
    console.info(`Hay: ${contador} vocales.`);
    console.info(`Hay: ${(contadorCons)} consonantes.`);
}
//contadorVocalesConsonantes("Hola mundo");
// SEGUNDA SOLUCIÓN
const vocalesConsonantes=(palabra="")=>{
    if(!palabra) return console.warn("No has ingresado ningún carcater.");
    if(typeof palabra!=="string") return console.warn("No se aceptan numeros");
    
    let vocales=0,
        consonantes=0;
    
        palabra=palabra.toLocaleLowerCase();
    
    let reVocales=/[aeiouáéíóú]/,
        reConsonantes=/[bcdfghjklmnñpqrstvwxyz]/;
    
    for (let letra of palabra){
        if(reVocales.exec(letra))vocales++;
        if(reConsonantes.exec(letra))consonantes++;
    }
    console.info(`Hay ${vocales} vocales y ${consonantes} consonantes. `);
}
//vocalesConsonantes("Brian  yo");


/*19) Programa una función que valide que un texto sea un nombre 
válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/
const existeNombre=(nombre="")=>{
    if (!nombre) return console.warn("No has ingresado ningún caracter.");
    if (typeof nombre !== "string") return console.warn("No se aceptan caracteres de tipo número.");
    
    let respuesta;

    let exRe=/^[A-Za-zÁÉÍÓÚáéíóú\s]+$/g;
    if(exRe.exec(nombre)){
        respuesta=`${nombre} es valido.`
    }else{
        respuesta="Invalido";
    }
    console.info(respuesta);
    }
    

//existeNombre("Brian,23");//Invalido
//existeNombre("Brian Roldan")// Valido



/*20) Programa una función que valide que un texto sea un email 
válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.*/ 
const esCorreo=(correo="")=>{
    if(!correo) return console.warn("No has ingresado el correo electronico.");
    if(typeof correo!=="string") return console.warn("No se aceptan números");
    const regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (regexp.exec(correo)) {
        console.info("Valido");
    }else{
        console.info("Invalido");
    }
}
//esCorreo("aprax@xet.com")


/*
21) Programa una función que dado un array numérico devuelve otro array 
con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá 
[1, 16, 25].*/
const elevaArreglo=(arreglo=undefined)=>{
    //Validaciones
    if (arreglo===undefined) return console.warn("No ingresaste un arreglo de números");
    if (!(arreglo instanceof Array))return console.warn("El valor ingresado no es un arreglo");
    if (arreglo.length===0) return console.warn("El arreglo esta vacio");
    for(let numero of arreglo){
        if(typeof numero!=="number") return console.error(`${numero} no es un número.`);
    }
    let resultado =[];
    for (let i=0;i<=arreglo.length;i++){
        resultado[[i]]=arreglo[i]*arreglo[i];
    }
    console.info(`${arreglo} -> Arreglo elevado al cuadrado: ${resultado}. `);
}
//elevaArreglo();
//elevaArreglo({});
//elevaArreglo([]);
//elevaArreglo(["3",5]);
//elevaArreglo([1,4,5]);

//SEGUNDA SOLUCIÓN
const multiplicaArreglo=(arreglo=undefined)=>{
    if(arreglo===undefined) return console.warn("No has ingresado ningún arreglo.");
    if(!(arreglo instanceof Array)) return console.warn("El valor ingresado no es un arreglo.");
    if(arreglo.length===0) return console.warn("El arreglo esta vacio.");
    for (let numero of arreglo){
        if(typeof numero !=="number") return console.error(`${numero} no es un número.`);
    }

    let nuevoArreglo=arreglo.map(elemento=>elemento*elemento);
    console.info(nuevoArreglo);
}
//multiplicaArreglo([1,4,5]);

/*22) Programa una función que dado un array devuelva el número mas alto y 
el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/
const numeroMaxMin=(numeros=undefined)=>{
    if (numeros===undefined) return console.warn("No has ingresado ningún arreglo.");
    if (!(numeros instanceof Array)) return console.warn("El valor ingresado no es un arreglo.");
    if (numeros.length===0) return console.warn("El arreglo esta vacio");
    for (let numero of numeros){
        if (typeof numero !== "number") return console.error(`El ${numero} no es un número.`);
    }

    let maximo=Math.max.apply(null,numeros);
    let minimo=Math.min.apply(null,numeros);

    console.info(`${numeros}: Valor maximo: ${maximo} y valor minimo: ${minimo}.`)
}
//numeroMaxMin([1, 4, 5, 99, -60]);

/*23) Programa una función que dado un array de números devuelva un objeto con 2 
arreglos en el primero almacena los números pares y en el segundo los impares, 
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/
const paresImpares=(numeros=undefined)=>{
    if (numeros===undefined) return console.warn("No has ingresado ningún arreglo.");
    if (!(numeros instanceof Array)) return console.warn("El valor ingresado no es un arreglo.");
    if (numeros.length===0) return console.warn("El arreglo esta vacio");
    for (let numero of numeros){
        if (typeof numero !== "number") return console.error(`El ${numero} no es un número.`);
    }

    let impar=[],
        par=[];
    let resultado={};

    for (let i=0;i<=numeros.length;i++){
        if(numeros[i]%2===0){
            par[i]=numeros[i]++;
            if(numeros[i]%2!==0){
                impar[numeros[i]]=numeros[i]++;   
            }
        }
    }
    resultado={
        par:[par],
        impar:[impar]
    }
    console.info(resultado.par[0],resultado.impar[0]);
}
//paresImpares([1,2,3,4,5,6,7,8,9,0]);

//SOLUCIÓN DOS
const numParImpar = (numeros=undefined)=>{
    if (numeros===undefined) return console.warn("No has ingresado ningún arreglo.");
    if (!(numeros instanceof Array)) return console.warn("El valor ingresado no es un arreglo.");
    if (numeros.length===0) return console.warn("El arreglo esta vacio");
    for (let numero of numeros){
        if (typeof numero !== "number") return console.error(`El ${numero} no es un número.`);
    }
    const resultado={
        par:numeros.filter(numero=>numero%2===0),
        impar:numeros.filter(numero=>numero%2!==0)
    }
    console.info(resultado);
}
//numParImpar([1,2,3,4,5,6,7,8,9,0]);

/*24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/
const acendenteDesendente=(numeros=undefined)=>{
    if (numeros===undefined) return console.warn("No has ingresado ningún arreglo.");
    if (!(numeros instanceof Array)) return console.warn("El valor ingresado no es un arreglo.");
    if (numeros.length===0) return console.warn("El arreglo esta vacio");
    for (let numero of numeros){
        if (typeof numero !== "number") return console.error(`El ${numero} no es un número.`);
    }

    let asendente=numeros.sort(function(a,b){
        return a-b;
    });

    console.info(`Asendente: ${asendente}\nDesendente:${asendente.reverse()}.`)
}
//acendenteDesendente([7, 5,7,8,6]);


/*25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].*/
const eliminaDuplicados=(arreglo=undefined)=>{
    if(arreglo===undefined) return console.warn("No has ingresado ningún arreglo.");
    if(!(arreglo instanceof Array)) return console.warn("No has ingresado ningún arreglo.");
    if(arreglo.length===0) return console.warn("El arreglo esta vacio.");

    let nuevoArreglo=[...new Set(arreglo)];
    console.info(nuevoArreglo);
}
//eliminaDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

//SEGUNDA SOLUCIÓN

/*26) Programa una función que dado un arreglo de números obtenga el promedio, pe. 
promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/ 
const promedio =(numeros=undefined)=>{
    if (numeros===undefined) return console.warn("No has ingresado ningún arreglo.");
    if (!(numeros instanceof Array)) return console.warn("El valor ingresado no es un arreglo.");
    if (numeros.length===0) return console.warn("El arreglo esta vacio");
    for (let numero of numeros){
        if (typeof numero !== "number") return console.error(`El ${numero} no es un número.`);
    }

    let total = numeros.reduce((a, b) => a + b, 0);

    console.log(total/numeros.length);
}
//promedio([9,8,7,6,5,4,3,2,1,0]);
/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los 
siguentes datos: id de la película en IMDB, titulo, director, 
año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, 
Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, 
Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, 
War, Western.*/

class Pelicula{
    constructor({id,titulo,director,yearEstreno,paises,generos,calificacion}){
    //Instanciar
        this.id=id;
        this.titulo=titulo;
        this.director=director;
        this.yearEstreno=yearEstreno;
        this.paises=paises;// en arreglo
        this.generos=generos;
        this.calificacion=calificacion;        

        this.validarMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validaYear(yearEstreno);
        this.validarPaises(paises);
        this.validarGeneros(generos);
        this.validaCalificacion(calificacion);
    }

    //Creación Metodo estatico
    static get listaGeneros(){
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", 
                "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", 
                "History", "Horror", "Musical", "Music", "Mystery", "News","Reality-TV", "Romance", 
                "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }
    static generosAceptados(){
        return console.info(`Generos aceptados: ${Pelicula.listaGeneros.join(",")}`);
    }



    //Validaciones
    validarCadena(tipo,valor){
        if(!valor) return console.warn(`${tipo} "${valor}" esta vacío.`);
        if(typeof valor !== "string") return console.error(`${tipo} "${valor}" ingresado, NO es una cadena de texto.`);

        return true;
    }
 
    longitudCadena(propiedad,valor,longitud){
        if(valor.length>longitud)return console.error(`${propiedad} el ${valor} no coincide con los caracteres necesarios en la longitud (${longitud}).`);
    }

    validarYear(tipo,valor){
        if(!valor) return console.warn(`${tipo} "${valor}" esta vacío.`);
        if(typeof valor !== "number") return console.error(`${tipo} "${valor}" ingresado, NO es de tipo numero.`);

        return true;
    }

    validarArreglo(tipo,valor){
        if (valor===undefined) return console.warn("No has ingresado ningún arreglo.");
        if (!(valor instanceof Array)) return console.warn("El valor ingresado no es un arreglo.");
        if(valor.length===0) return console.warn("El arreglo esta vacio.");
        for (let v of valor){
            if (typeof v !== "string") return console.error(` ${v} invalido, no se aceptan nombres con caractes de tipo número.`);
        }

        return true;
    }

    validarMDB(id){
        if(this.validarCadena("MDB id",id)){
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id)))
            return console.error(`MDB id: ${id} no es valido, este debe de tener 9 caracteres, 2 primeros son letras minusculas y 7 de tipo numero.`);
        }
    }

    validarTitulo(titulo){
        if(this.validarCadena("Titulo",titulo)){
            this.longitudCadena("Titulo",titulo,100);
        }
    }

    validarDirector(director){
        if(this.validarCadena("Director",director)){
            this.longitudCadena("Director",director,50);
        }
    }

    validaYear(yearEstreno){
        if(this.validarYear("Fecha de estreno",yearEstreno)){
            if(!(/^([0-9]){4}$/.test(yearEstreno))) return console.warn(`La fecha de estreno ${yearEstreno} no es correcta.`)
        }
    }

    validarPaises(paises){
        this.validarArreglo("Paises",paises);
    }

    validarGeneros(generos){
        if(this.validarArreglo("Genero",generos)){
            for (let genero of generos){
                if (!Pelicula.listaGeneros.includes(genero)){
                    console.error(`"${genero}" no se encuentra dentro de los generos aceptados.`);
                    Pelicula.generosAceptados();
                }
            }
        }
    }

    validaCalificacion(calificacion){
        if(this.validarYear("Calificación",calificacion)){
            if (calificacion<0 || calificacion>10){
                console.error("Rango de calificación invalido (debe estar entre 0 y 10).");
            }else{
                this.calificacion=calificacion.toFixed(1);
            }
        }
    }

    fichaTecnica(){
        console.info(`"ID de pelicula: ${this.id}\n Titulo: ${this.titulo}\n Director: ${this.director}\n Año de estreno: ${this.yearEstreno}\n Pais o paises: ${this.paises}\n Genero: ${this.generos}\n Calificación: ${this.calificacion}`);
    }
}
const peli = new Pelicula({
    id:"kl0986792",
    titulo:"Crazy and stupid love.",
    director: "Robbin Williams",
    yearEstreno:2012,
    paises:["Mexico","Costa Rica"],
    generos:["War","News"],
    calificacion:8.2
})
const instaPeliculas=[
    {
        id:"zz5987331",
        titulo:"Sillicon Valley",
        director: "Peter Witte",
        yearEstreno:2002,
        paises:["E.U.A",],
        generos:["News"],
        calificacion:9.5   
    },
    {
        id:"pp7894410",
        titulo:"La Forma del agua",
        director: "Guillermo del Toro",
        yearEstreno:2012,
        paises:["Mexico"],
        generos:["News"],
        calificacion:8.2
    },
    {
        id:"bb9900102",
        titulo:"Dracula",
        director: "Robbin Williams",
        yearEstreno:2000,
        paises:["Gran Bretaña"],
        generos:["War"],
        calificacion:8.9
    }
];
//peli.fichaTecnica();
//instaPeliculas.forEach(elemento=> new Pelicula(elemento).fichaTecnica());


