let imagen = document.getElementById("imagen");

function changeImage() {
    imagen.src = "./images/img2.png";
}

function returnImage() {
    imagen.src = "./images/img1.png";
}


imagen.addEventListener("mouseover", () => {
    changeImage();
})

imagen.addEventListener("mouseleave", () => {
    returnImage();
})
