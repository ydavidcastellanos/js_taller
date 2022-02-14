let tareasL = ["trabajar", "leer", "hacer ejercicio", "pasear perro"],
  tareasM = ["trabajar", "reunión", "cocinar", "ir a oficina"],
  tareasX = ["trabajar", "hacer informe", "hacer Yoga", "pasear perro"],
  tareasJ = ["trabajar", "reunión", "cocinar", "ir a oficina"],
  tareasV = ["trabajar", "retroalimentación", "hacer Yoga", "pasear perro"],
  tareasS = ["hacer deporte","visitar familia","ir a cine","hacer una siesta","pasear perro"],
  tareasD = [ "hacer deporte", "visitar familia", "ir a restaurante", "cuidar las plantas", "pasear perro"],
  entreSemana = "Hoy es un día entre semana y tus activiades son:",
  finDeSemana = "Hoy es un día de fin de semana  y tus activiades son:";

  function actividades(arrSem) {
      let acc = "";
    for (let i = 0; i < arrSem.length; i++) {
        acc += arrSem[i] + ", ";
        
    }
    
    alert(acc);
  }

let diaSemana = prompt("Hoy qué día de la semana es?");

if (diaSemana == null) {
    alert("No has seleccionado un día válido, intenta de nuevo");
    
} else {

    switch (diaSemana.toLowerCase()) {
        case "lunes":
            alert(entreSemana);
            actividades(tareasL);
          break;
        case "martes":
          alert(entreSemana);
          actividades(tareasM);
          break;
        case "miercoles":
          alert(entreSemana);
          actividades(tareasX);
          break;
          case "miércoles":
            alert(entreSemana);
            actividades(tareasX);
            break;
        case "jueves":
          alert(entreSemana);
          actividades(tareasJ);
          break;
        case "viernes":
          alert(entreSemana);
          actividades(tareasV);
          break;
        case "sabado":
          alert(finDeSemana);
          actividades(tareasS);
          break;
          case "sábado":
            alert(finDeSemana);
            actividades(tareasS);
            break;
        case "domingo":
          alert(finDeSemana);
          actividades(tareasD);
          break;
      
        default:
          alert("No has seleccionado un día válido, intenta de nuevo");
          break;
      }
    
}


