let imagen1 = document.getElementById("img1"),
    imagen2 = document.getElementById("img2"),
    imagen3 = document.getElementById("img3"),
    boton1 = document.getElementById("button1"),
    boton2 = document.getElementById("button2"),
    boton3 = document.getElementById("button3");

let img1Hidden = () => {
    imagen1.classList.add("imgHidden")
}

let img2Hidden = () => {
    imagen2.classList.add("imgHidden")
}

let img3Hidden = () => {
    imagen3.classList.add("imgHidden")
}

let exposeImg1 = () => {
    imagen1.classList.remove("imgHidden")
}

let exposeImg2 = () => {
    imagen2.classList.remove("imgHidden")
}

let exposeImg3 = () => {
    imagen3.classList.remove("imgHidden")
}


imagen1.addEventListener("mouseover", () => {
    img1Hidden();

});

imagen2.addEventListener("mouseover", () => {
    img2Hidden();
    
});

imagen3.addEventListener("mouseover", () => {
    img3Hidden();
});

boton1.addEventListener("click", () => {
    exposeImg1();
});

boton2.addEventListener("click", () => {
    exposeImg2();
});

boton3.addEventListener("click", () => {
    exposeImg3();
});