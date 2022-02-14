let palabra = prompt(
  `Ingresa palabra a traducir:, palabras soportadas:
    - (casa, mesa, perro o gato).`
);

if (palabra == null) {
  alert("Error, opción no soportada, intente de nuevo");
} else {
  switch (palabra.toLowerCase()) {
    case "casa":
      alert(`La traducción en inglés de "${palabra}" es home`);
      break;

    case "mesa":
      alert(`La traducción en inglés de "${palabra}" es table`);
      break;

    case "perro":
      alert(`La traducción en inglés de "${palabra}" es dog`);
      break;

    case "gato":
      alert(`La traducción en inglés de "${palabra}" es cat`);
      break;

    default:
      alert(`Error, la palabra "${palabra}" aún no es soportada`);
      break;
  }
}
