let btnDivs = document.getElementById("botonAgregarDivs");
let btnBorrar = document.getElementById("botonBorrarDivs");
let contenedorDivs = document.getElementById("contenedorDivs");

btnDivs.addEventListener("click", (event) => {
  event.preventDefault();
  contenedorDivs.innerHTML += `<div id="div"></div>`;

  let divs = document.querySelectorAll("#div");
  //console.log(divs);
  let contenedorDivsLength = contenedorDivs.childNodes.length;
  //console.log(contenedorDivsLength);

  if (contenedorDivsLength > 4) {
    alert("No se permite más elementos ahora");
    contenedorDivs.innerHTML = ``;
  } else {
    switch (contenedorDivsLength) {
      case 1:
        divs[0].addEventListener("mouseover", () => {
          divs[0].classList.add("styleDiv");
        });

        divs[0].addEventListener("mouseleave", () => {
          divs[0].classList.remove("styleDiv");
        });
        break;

      case 2:
        divs[0].addEventListener("mouseover", () => {
          divs[0].classList.add("styleDiv");
        });

        divs[0].addEventListener("mouseleave", () => {
          divs[0].classList.remove("styleDiv");
        });
        divs[1].addEventListener("mouseover", () => {
          divs[1].classList.add("styleDiv");
        });

        divs[1].addEventListener("mouseleave", () => {
          divs[1].classList.remove("styleDiv");
        });
        break;

      case 3:
        divs[0].addEventListener("mouseover", () => {
          divs[0].classList.add("styleDiv");
        });

        divs[0].addEventListener("mouseleave", () => {
          divs[0].classList.remove("styleDiv");
        });
        divs[1].addEventListener("mouseover", () => {
          divs[1].classList.add("styleDiv");
        });

        divs[1].addEventListener("mouseleave", () => {
          divs[1].classList.remove("styleDiv");
        });
        divs[2].addEventListener("mouseover", () => {
          divs[2].classList.add("styleDiv");
        });

        divs[2].addEventListener("mouseleave", () => {
          divs[2].classList.remove("styleDiv");
        });
        break;

      case 4:
        divs[0].addEventListener("mouseover", () => {
          divs[0].classList.add("styleDiv");
        });

        divs[0].addEventListener("mouseleave", () => {
          divs[0].classList.remove("styleDiv");
        });
        divs[1].addEventListener("mouseover", () => {
          divs[1].classList.add("styleDiv");
        });

        divs[1].addEventListener("mouseleave", () => {
          divs[1].classList.remove("styleDiv");
        });
        divs[2].addEventListener("mouseover", () => {
          divs[2].classList.add("styleDiv");
        });

        divs[2].addEventListener("mouseleave", () => {
          divs[2].classList.remove("styleDiv");
        });
        divs[3].addEventListener("mouseover", () => {
          divs[3].classList.add("styleDiv");
        });

        divs[3].addEventListener("mouseleave", () => {
          divs[3].classList.remove("styleDiv");
        });
        break;

      default:
        break;
    }
  }
});

btnBorrar.addEventListener("click", () => {
  contenedorDivs.innerHTML = "";
});
