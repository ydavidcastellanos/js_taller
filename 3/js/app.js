let tamanio = prompt(`
¿Qué pizza desea ordenar?
Ej: Personal, Mediana, Familiar`);

let sabor;
let adicion1;
let adicion2;
let adicion3;
let flag = true;

let armarPizza = (tamanio, sabor) => {
   alert("Puedes escoger entre una u otra adición y te ayudaremos a completar la mejor pizza.")
    

    if (tamanio === "personal" && sabor === "1") {
        adicion1 = prompt(`
        (Escoja un número) Desea su pizza:
        1 Con Queso
        2 Sin queso -> Te añadiremos salsa y borde de bocadillo`)

        switch (adicion1) {
            case "1":
                alert(`Su pedido es una pizza ${tamanio} de Pollo y Champiñones con Queso`);                
                break;

            case "2":
                alert(`Su pedido es una pizza ${tamanio} de Pollo y Champiñones con Salsa y borde de bocadillo`);                
                break;
        
            default:
                alert(`Su pedido es una pizza ${tamanio} de Pollo y Champiñones con Salsa y borde de bocadillo`);
                break;
        }
        
    } else if (tamanio === "personal" && sabor === "2") {
        adicion1 = prompt(`
        (Escoja un número) Desea su pizza:
        1 Con Piña
        2 Sin Piña
        3 Sin Jamón -> Te añadiremos Salami`)

        switch (adicion1) {
            case "1":
                alert(`Su pedido es una pizza ${tamanio} Hawaiana con Piña y Jamón`);                
                break;

            case "2":
                alert(`Su pedido es una pizza ${tamanio} Hawaiana sin Piña y con Jamón`);                
                break;


            case "3":
                alert(`Su pedido es una pizza ${tamanio} Hawaiana con Piña y con Salami`);                
                break;
        
            default:
                alert(`Su pedido es una pizza ${tamanio} Hawaiana con Piña y Jamón`);
                break;
        }
        
    } else if (tamanio === "personal" && sabor === "3") {
        adicion1 = prompt(`
        (Escoja un número) Desea su pizza:
        1 Con Queso
        2 Sin Salami -> Te añadiremos Cábano`)

        switch (adicion1) {
            case "1":
                alert(`Su pedido es una pizza ${tamanio} de Carnes con Queso`);                
                break;

            case "2":
                alert(`Su pedido es una pizza ${tamanio} de Carnes con Cábano`);                
                break;
        
            default:
                alert(`Su pedido es una pizza ${tamanio} de Carnes con Cábano`);
                break;
        }
                
    } else if (tamanio === "mediana" && sabor === "1") {
        adicion1 = prompt(`
        (Escoja un número) Desea su pizza:
        1 Con Nachos
        2 Sin Nachos -> Te añadiremos Extra Guacamole`)

        switch (adicion1) {
            case "1":
                alert(`Su pedido es una pizza ${tamanio} Mexicana con Nachos`);                
                break;

            case "2":
                alert(`Su pedido es una pizza ${tamanio} Mexicana con Extra Guacamole`);                
                break;
        
            default:
                alert(`Su pedido es una pizza ${tamanio} Mexicana con Extra Guacamole`);
                break;
        }
            

        
    } else if (tamanio === "mediana" && sabor === "2") {

        adicion1 = prompt(`
        (Escoja un número) Desea su pizza:
        1 Con Maíz
        2 Sin Maíz -> Te añadiremos Extra Carne molida`);

        switch (adicion1) {
            case "1":
                alert(`Su pedido es una pizza ${tamanio} Criolla con Maíz`);                
                break;

            case "2":
                alert(`Su pedido es una pizza ${tamanio} Criolla con Extra Carne Molida`);                
                break;
        
            default:
                alert(`Su pedido es una pizza ${tamanio} Criolla con Extra Carne Molida`);
                break;
        }
            

    } else if (tamanio === "familiar" && sabor === "1") {

        adicion1 = prompt(`
        (Escoja un número) Desea su pizza:
        1 Con Queso
        2 Sin Queso`);

        switch (adicion1) {
            case "1":
                alert(`Su pedido es una pizza ${tamanio} Vegetariana con Queso`);                
                break;

            case "2":
                alert(`Su pedido es una pizza ${tamanio} Vegetariana sin Queso`);                
                break;
        
            default:
                alert(`Su pedido es una pizza ${tamanio} Vegetariana sin Queso`);
                break;
        }

    } else {

        adicion1 = prompt(`
        (Escoja un número) Desea su pizza:
        1 Sin adición
        2 Con adición de salchicha
        3  Con adición de Champiñones`);

        switch (adicion1) {
            case "1":
                alert(`Su pedido es una pizza ${tamanio} Carne y Pollo`);                
                break;

            case "2":
                alert(`Su pedido es una pizza ${tamanio} Carne y Pollo con adición de Salchicha`);                
                break;


            case "3":
                alert(`Su pedido es una pizza ${tamanio} Carne y Pollo con adición de Champiñones`);                
                break;
        
            default:
                alert(`Su pedido es una pizza ${tamanio} Carne y Pollo`);
                break;
        }



    }

}


while (flag) {

    if (tamanio == null) {
        alert("Ha decidio cancelar su pedido, adiós");
        flag = false;

      } else {

        switch (tamanio.toLowerCase()) {
            case "personal":
                sabor = prompt(`¿Qué sabor desea?, ponga un número de opción:
                1 para Pollo y Champiñones
                2 para Hawaiana
                3 para Carnes`);
                
                if (sabor == "1" || sabor == "2" || sabor == "3") {
                    armarPizza(tamanio, sabor);
                    flag = false;  
                 
                } else if (sabor == null) {
                    alert("Ha decidido salir, el pedido no se realizará, para iniciar ingrese de nuevo")
                    flag = false;
                       
                } else {
                    alert("Sabor de pizza no válida, intente de nuevo");
                }
        
              break;
        
            case "mediana":
                sabor = prompt(`¿Qué sabor desea?, ponga un número de opción:
                1 para Mexicana
                2 para Criolla`);
                if (sabor == "1" || sabor == "2") {
                    armarPizza(tamanio, sabor);
                    flag = false;     
                   
                } else if (sabor == null) {
                    alert("Ha decidido salir, el pedido no se realizará, para iniciar ingrese de nuevo")
                    flag = false;  
                } else {
                    alert("Sabor de pizza no válida, intente de nuevo");
                }
        
              break;
        
        
            case "familiar":
                sabor = prompt(`¿Qué sabor desea?, ponga un número de opción:
                1 para Vegetariana
                2 para Carne y Pollo`);
                if (sabor == "1" || sabor == "2") {
                    armarPizza(tamanio, sabor);
                    flag = false;       
                   
                } else if (sabor == null) {
                    alert("Ha decidido salir, el pedido no se realizará, para iniciar ingrese de nuevo")
                    flag = false;  
                } else {
                    alert("Sabor de pizza no válida, intente de nuevo");
                }
        
              break;
        
        
            default:
                alert("Tamaño de pizza no válida, intente de nuevo");
                flag = false;
              break;
          }
      
      }
 
}
