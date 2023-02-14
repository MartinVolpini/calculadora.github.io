const items = document.querySelectorAll("div");

function resolve(arg){
    return   eval(arg);
}

let acumulador = [];

for (let i=0;i<items.length;i++){
items[i].addEventListener("click",(e)=>{
        e.preventDefault();
        if(e.currentTarget == items[20]){ 
            let res =  resolve(items[0].innerText)   //TODO LO QUE FUISTE METIENDO EN EL ARRY LLAMA A LA FUNCIO Y LO RESUELVE
            res == undefined ? items[0].innerText = "" : items[0].innerText = res;
        }
        else if(e.currentTarget == items[3]) {             //FUNCIONAMIENTO DEL BOTTON: BORRAR TODO
            acumulador = [];
            items[0].innerText = "";
        }
        else if(e.currentTarget == items[2]) {             //FUNCIONAMIENTO DEL BOTTON: BORRAR EL ANTERIOR
            acumulador.pop()
            items[0].innerText = acumulador.join("");
        }
        else if(e.currentTarget.innerText == "×") {             //FUNCIONAMIENTO DEL BOTTON: * 
            acumulador.push("*")
            // console.log(acumulador)
            items[0].innerText += "*"; 
        }
        else if(e.currentTarget.innerText == "–") {             //FUNCIONAMIENTO DEL BOTTON: - 
            acumulador.push("-")
            // console.log(acumulador)
            items[0].innerText += "-"; 
        }
        else {                                              //EL ELEMENTO Q ELEGISTE METELO EN EL ARRAY
            acumulador.push(e.currentTarget.innerText)
            // console.log(acumulador, e.currentTarget.innerText)
            items[0].innerText += e.currentTarget.innerText; 
        }        
    })
}
// A RESOLVER:
/*RESOLVE UNA ANOMALIA CON EL BOTON DE BORRAR EL ANTERIOR*/

// INCREMENTOS:
/*GENERA MAS ACCIONES */
