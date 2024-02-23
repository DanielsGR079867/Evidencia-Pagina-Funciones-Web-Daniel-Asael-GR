let nombreVariable = 'Valor variable';
var nombreVariable2 = 10;

let Object={
    propiedad1: 10,
    propiedad: 'valor propiedad 2',
    propiedadObjeto:{
        propiedad4: ['valor','valor2','valor3',],
        propiedad: 'valor propiedad 5'

    }
};

//Funciones con parametros

function nombrefuncion(){
    console.log('Ejecutando funcion "nombrefuncion"');


}

function nombreConParametros(nombre,apellido,edad){
    var text= "Nombre:" +nombre+",apellido: "+apellido+",edad:"+edad;
    console.log(text);

}

//Mandar llamar la funcion
nombrefuncion();

//Llamada a la funccion con parametros.
nombreConParametros('Daniel','Gutierrez',20);

//console.log(Object);
//console.log(Object.propiedad1);
//console.log(Object.propiedadObjeto.propiedad5);


function square(number){
    return number * number;
}

function cube(number){
    return number * number * number;
}

let array = 2;
let squareValue = square(array);
console.log(square(8));
console.log(cube(8));


//for
for(let index = 0; index <11; index++){
    let number = 10 * index;
    console.log(number);
}



//while
let indexWhile = 0;
while(indexWhile <11){

    let number = indexWhile * 10;
    console.log(number);
    indexWhile++;

}

// do-while
let indexDoWhile = 0;
do{
    let number = indexDoWhile * 10;
    console.log(number);
    indexDoWhile++;
} while(indexDoWhile <11);


//--------------------------------------------------------------------------------------------------------------------------//

//For
function tablaMultiplicarFor(valor, maximo){

    for(let index = 0; index<maximo; index++){
        let number = valor * index;
        console.log(number);
    }
}
tablaMultiplicarFor(7,70);

//While
function tablaMultiplicarWhile(valor,maximo){
    let indexWhile = 0;
    while(indexWhile <maximo){
       
     let number = indexWhile * valor;
     console.log(number);
     indexWhile++;
    }
  
}
tablaMultiplicarWhile(5,50)

//DoWhile
function tablaMultiplicarDowhile(valor,maximo){
    let indexDoWhile = 0;
    do{
      let number = indexDoWhile * valor;
      console.log(number);
      indexDoWhile++;
    } while(indexDoWhile <maximo);

}
tablaMultiplicarDowhile(6,60);
