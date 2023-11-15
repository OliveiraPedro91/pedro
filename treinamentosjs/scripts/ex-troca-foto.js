const fotos = [
    "img/foto01.jpg",
    "img/foto02.jpg",
    "img/foto03.jpg",
    "img/foto04.jpg",
    "img/foto05.jpg",
    "img/foto06.jpg",
    "img/foto07.jpg",
    "img/foto08.jpg",
    "img/foto09.jpg",
    "img/foto10.jpg",
    "img/foto11.jpg",
    ]

let fotoAtual = 0;

function trocarFoto() {

    imagens = document.getElementById("imagens");
    fotoAtual = (fotoAtual + 1) % fotos.length;

    imagens.setAttribute("src", fotos[fotoAtual]);

}