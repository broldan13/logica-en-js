export const PI=Math.PI;//Importación de una costante

export default function saludar(){//Exportación de una función por default
    console.log("\t \t \t Este es un programa modulado \n \n");
}

export class Saludar{//Exportación de una clase
    constructor(){
        console.log("Hello word");
    }
}