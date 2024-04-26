/**
 * caso #1 workshop # 1
 */

//inicio del viaje compra de comida

let presupuesto = 2500000;
let gastos = presupuesto;
let almoGase = 13000;
let subwayGase = 23000;
let validar = true;
let pasaje = 350000;

alert(`Los paajes ida y vuelta tienen un costo de ${pasaje}`);
while(validar){

     let compraComida = Number(prompt("que deseas comer escoje una opcion: n\
        1- almojabana con gaseosa $15.000 n\
        2- sobway con gaseosa $23.000 n\
        3- no comprar nada"));

    if(compraComida === 1){
        let confirmacion = confirm("la almojabana con gaseosa te caera mal porque llevan mucho tiempo en el stand, confirma tu compra.");
        if (confirmacion === true){
            presupuesto -= almoGase;
            console.log(`compra de almojabana con gaseosa x $${almoGase} su presupuesto es de ${presupuesto}`);
            alert("la almojabana con gaseosa te cayo mal. :(")
            validar = confirm("deseas realizar otra compra.")
        }else{
            validar = confirm("desea comprar otra cosa")
        }
    }else if (compraComida ===2){
        confirmacion = confirm("El subway con gaseosa te quitaran el hambre, confirmar compra.")
        if(confirmacion){
            alert("subway con gaseosa costo $23.000");
            presupuesto -= subwayGase;
            console.log(`compra de subway con gaseosa x $${almoGase} su presupuesto es de ${presupuesto}`);
            alert("Estas llenito y bien. :)")
            validar = confirm("deseas realizar otra compra.")
        }else{
            validar = confirm("deseas realizar otra compra.");
        }
    }else if(compraComida === 3){
        confirmacion = confirm("si no compras nada ahora deberas esperar hasta llegar a medellin seguro no compraras nada de comer.");
        if (confirmacion){
            validar = false;
        }
    }else{
        alert("esa opcion no es valida vuelve a seleccionar.")
        validar = true;
    }
}

console.log(`Tu presupuesto es de ${presupuesto}`)


// // //reduccion de l a maleta para que pueda pasar el con las medidas permitidas

let factorReduccion = [];
const tamañoDefinitivo = {}
const limiteAerolinea = {
    alto: 55,
    largo: 40,
    ancho: 20
};
console.log("El limite del tamaño en la aerolinea es: ")
console.log(limiteAerolinea);

alert("El tamaño de tu maleta no pasa como maleta de mano porque excede el tamaño permitido por la aerolinea ");

const tamañoMaleta = {
    alto: 60,
    largo:40,
    ancho:20
};
console.log("Tamaño de la maleta de hilderbrando: ")
console.log(tamañoMaleta);

let reducir = confirm("Reducir el tamaño de su maleta: ");
if (reducir){
    let factor1 = limiteAerolinea.alto/tamañoMaleta.alto;
    factorReduccion.push(factor1);
    let factor2 = limiteAerolinea.largo/tamañoMaleta.largo;
    factorReduccion.push(factor2);
    let factor3 = limiteAerolinea.ancho/tamañoMaleta.ancho;
    factorReduccion.push(factor3);
    console.log(`El factor de reduccion de alto, largo y acho: `)
    console.log(factorReduccion)
    let factorMenor = Math.min(...factorReduccion);
    console.log("El factor de reduccion que usaremos sera el menor que es: ");
    console.log(factorMenor);
    alert(`El factor de reduccion es ${factorMenor}`);

    tamañoDefinitivo.alto = tamañoMaleta.alto*factorMenor;
    tamañoDefinitivo.largo = tamañoMaleta.largo*factorMenor;
    tamañoDefinitivo.ancho = tamañoMaleta.ancho*factorMenor;

    console.log(`El tamaño de la maleta haciendo la reduccion quedaria: `)
    console.log(tamañoDefinitivo)

}


// // // descubri contraseña de wifi

validar = confirm("el consto del internet es de $50.000 por hora deseas comprarlo.")
if(validar){
    
    presupuesto -= 50000;
    const EllPassEs = "01110010_01101001_01110111_01101001";
    console.log(`la contraseña en nuemero binarios es: ${EllPassEs}`);

    let listaBinaria = EllPassEs.split("_");
    console.log(`Separacion de la contraseña en binarios en un lista: ${listaBinaria}`);

    let conversionDecimal = [];
    for(let i of listaBinaria){
        conversionDecimal.push(parseInt(i, 2));
    };
    console.log(conversionDecimal);

    let conversionCadena = [];
    for(let i of conversionDecimal){
        conversionCadena.push(String.fromCharCode(i));
    };
    console.log(conversionCadena);

    let contraseñafinal=(conversionCadena.join(""));
    console.log(`La contraseña es ${contraseñafinal}`);
}

console.log(`Su presupuesto es de $${presupuesto}`)



//todos hablan con la i en macondo traducir para poder pedir un taxi

let frase = "taxi me puede llevar al hotel mariposas amarillas";

let listFrase = frase.split("");
console.log(listFrase);

let fraseTradus = [];

for(let i in listFrase){

    if(listFrase[i] ==="a" || listFrase[i]==="e" || listFrase[i] ==="o" || listFrase[i] ==="u"){
        fraseTradus.push("i");
    }else{
        fraseTradus.push(listFrase[i]);
    };

    
};
console.log(fraseTradus);
let traduccionFinal = fraseTradus.join("");
console.log(`Tu frase traducida es:`);
console.log(traduccionFinal);



// // //Juego de piedra papel y tijera
// // //piedra=1 papel=2 tijera=3

alert(`Comienza el juego de piedra, papel y tijera`);
let opciones = ["piedra", "papel","tijera"];
let opciontaxi = "";
let opcionhildebrando;
let ganador;

validar = true;
while(validar){

    let eleccionTaxi = Math.floor(Math.random()*(4-1)+1);

    for(let i in opciones){
        if (i == eleccionTaxi-1){
            opciontaxi = opciones[i];
        }
    }

    opcionhildebrando = Number(prompt(`Escoge:  1-piedra papel o 3-tijeras :`));
    for(let i in opciones){
        if (i == opcionhildebrando-1){
            opcionhildebrando = opciones[i];
        }
    }

    console.log(`Eleccion del taxista: ${opciontaxi}`);
    console.log(`Tu eleccion: ${opcionhildebrando}`);

    if(opcionhildebrando === "piedra" && opciontaxi === "tijera" || opcionhildebrando === "tijera" && opciontaxi === "papel" || opcionhildebrando =="papel" && opciontaxi === "piedra"){
        console.log("Has ganado el pasaje te ha salido gratis");
        alert("Has ganado el pasaje te ha salido gratis");
        validar=false;
    }else if(opcionhildebrando === "tijera" && opciontaxi === "piedra" || opcionhildebrando === "papel" && opciontaxi === "tijera" || opcionhildebrando =="piedra" && opciontaxi === "papel"){
        console.log(`El taxista ha ganado debes pagarle los $300.000`);
        alert(`El taxista ha ganado debes pagarle los $300.000`);
        presupuesto -= 300000;
        validar=false;
    }else{
        alert(`Han quedado empate escoje de nuevo.`);
        console.log(`Han quedado empate escoje de nuevo.`);
        validar=true
    }

 }
console.log(`Tu presupuesto es de $${presupuesto}`);

// actividades de cada dia 
let actividad;
let muerto = 0;
let pelado = 0;
let diasVacaciones = 0;

while(true){



    alert("Hay 4 actividades puedes hacer una por dia.");
    actividad = Number(prompt(`1- Ir a la piscina vestimenta Amarilla \n 2- caminata vestimenta Verde \n 3- Actividades en la playa vestimenta Roja \n 4- Actividades dentro del hotel vestimenta Azul`));


    let respuestas = true;

    if(actividad === 1){
        alert(`la entrada a la piscina tiene un costo de $25.000`)
        presupuesto -= 25000;
        if (presupuesto > 0){

            respuestas = confirm(`El lugar huele raro, ¿deseas quedarte?`);
            if(respuestas){
                alert(`Estas pasando un buen rato`);
                respuestas = confirm(`¿Deseas meterte a la piscina?`);
                if(respuestas){
                    alert(`EL AGUA TIENE DEMASIADO CLORO ESTAS MUERTO`);
                    console.log(`EL AGUA TIENE DEMASIADO CLORO ESTAS MUERTO`);
                    diasVacaciones +=1;
                    muerto += 1;
                    break;
                }else{
                    alert(`Has tenido un excelente dia en la piscina.`);
                    console.log(`Has tenido un excelente dia en la piscina.`);
                    diasVacaciones += 1;
                };
            }else{
                alert(`Debes pasar el dia en tu habitacion ya no hay actividades hasta mañana.`);
                console.log(`Debes pasar el dia en tu habitacion ya no hay actividades hasta mañana.`)
                diasVacaciones += 1;
            };

        }else{
            alert(`No tienes dinero`)
            presupuesto += 25000;
            break;
        };
       
    }else if(actividad == 2){
        alert(`La caminata tiene un costo de $20.000`)
        presupuesto -= 20000;
        if(presupuesto > 0){

            respuestas = confirm(`Es una caminata larga ya llevas un buen tramo, ¿Deseas llegar hasta el final de la caminata?`);
            if(respuestas){
                alert(`Has llegado a una hermosa cascada tomate fotos y disfruta.`)
                diasVacaciones += 1;
            }else{
                alert(`NO PUEDE SER TE TUVISTE QUE DEVOLVER SOLO Y SE TE HIZO DENOCHE ESTAS PERDIDO, HA NO YA ESTAS MUERTO. HAN TERMINADO LAS VACACIONES`);
                console.log(`NO PUEDE SER TE TUVISTE QUE DEVOLVER SOLO Y SE TE HIZO DENOCHE ESTAS PERDIDO, HA NO YA ESTAS MUERTO. HAN TERMINADO LAS VACACIONES`);
                diasVacaciones += 1;
                muerto += 1;
                break;
            };

        }else{
            alert(`No tienes presupuesto suficiente`);
            presupuesto += 20000;
            break;
        }
        
    }else if(actividad == 3){
    
        let a = Number(prompt(`Quenactividad deseas hacer ahora: \n 1- jugar voleibol \n 2-nadar en el mar y montar en moto acuatica \n 3- tomar cocteles \n 4- Ir al cuarto`));
        if(a == 1){
            alert(`Excelente juego eres el mejor, has pasado un muy buen rato`);
            consolelse.log(`Excelente juego eres el mejor, has pasado un muy buen rato`);
            diasVacaciones +=1;
        }else if (a == 2){
            alert(`Tiene un costo de $50.000`)
            presupuesto -= 50000;
            if (presupuesto > 0){

                console.log(`Manejar estas moto es magnifico lo has hecho de maravilla y nadar en la playa es magnifico la playa el sol el mar que gran rato.`);
                alert(`Manejar estas moto es magnifico lo has hecho de maravilla y nadar en la playa es magnifico la playa el sol el mar que gran rato.`);
                diasVacaciones +=1;

            }else{
                alert(`no tienes presupuesto suficiente`);
                presupuesto += 50000;
                break;
            }
            
        }else if (a == 3){
            alert(`El coctel tiene un costo de $35.000`)
            presupuesto -=35000;
            if(presupuesto>0){

                alert(`NOOO PUEDE SER EL LICOR ES ADULTERADO NO TE ESTAS SINTIENDO BIEN, HA YA ESTAS MUERTO`);
                console.log(`NOOO PUEDE SER EL LICOR ES ADULTERADO NO TE ESTAS SINTIENDO BIEN, HA YA ESTAS MUERTO`);
                diasVacaciones +=1;
                muerto += 1;
                break;

            }else{
                alert(`No tienes el presupuesto suficiente`)
                presupuesto += 35000;
            }
            
        }else{
            alert(`El dia ya ha finalizado para ti esta bien ir tu habitacion`);
            console.log(`El dia ya ha finalizado para ti esta bien ir tu habitacion`);
            diasVacaciones +=1;
            break;
        };
        
    }else if(actividad == 4){

        let a = Number(prompt(`Quenactividad deseas hacer ahora: \n 1- jugar bingo \n 2- Bailar \n 3- Entrar al casino y apostar \n 4- Ir a la habitacion`));
        if(a == 1){
            alert(`Latabla de bingo cuenta $10.000`)
            presupuesto -= 10000;
            if(presupuesto>0){

                alert(`Que suerte tienes has ganado el bingo tienes $500.000`);
                consolelse.log(`Que suerte tienes has ganado el bingo tienes $500.000`);
                presupuesto += 500000;
                diasVacaciones +=1; 

            }else{
                alert(`No tienes el presupuesto necesario`)
                presupuesto += 10000;
                break;
            }
            
        }else if (a == 2){
            alert(`Debes gastar como minimo $50.000`);
            presupuesto -= 50000;
            if(presupuesto>0){

                console.log(`Eres un muy buen bailarin, con tus pasos de baile has enamora a un hermosa chica. pillin`);
                alert(`Eres un muy buen bailarin, con tus pasos de baile has enamora a un hermosa chica. pillin`);
                diasVacaciones +=1;

            }else{
                alert(`No tienes suficiente presupuesto`)
                presupuesto += 50000;
                break;
            }
            
        }else if (a == 3){
            alert(`La entrada para comenzar a juega es de $50.000`)
            presupuesto -= 50000;
            if(presupuesto>0){

                alert(`VAYA QUE QUE NO ESTU DIA HAS PERDIDO PRACTICAMENTE TODO TU DINERO SOLO TIENES PARA DEVOLVERTE`);
                console.log(`VAYA QUE QUE NO ESTU DIA HAS PERDIDO PRACTICAMENTE TODO TU DINERO SOLO TIENES PARA DEVOLVERTE.`);
                diasVacaciones +=1;
                pelado += 1;
                break;

            }else{
                alert(`No tienes suficiente presupuesto`)
                presupuesto += 50000;
                break;
            }
            
        }else{
            alert(`El dia ya ha finalizado para ti esta bien ir tu habitacion`);
            console.log(`El dia ya ha finalizado para ti esta bien ir tu habitacion`);
            diasVacaciones +=1;
        };

    }else{

    };

    if(diasVacaciones == 4){
        alert(`Las vacaciones han terminado`);
        console.log(`Las vacaciones han terminado`);
        break;
    }
    

};
console.log(`El viaje duro ${diasVacaciones}`)
console.log(`Tu presupuesto final es de ${presupuesto}`)
console.log(`Gastaste ${gastos-presupuesto}`)
if ( muerto == 1){
    console.log(`Terminaste tus vacaciones muerto`)
}else{
    console.log(`Terminaste tus vacaciones vivo`)
};
if (pelado == 1){
    console.log(`terminaste vivo pero sin un solo peso`)
}
