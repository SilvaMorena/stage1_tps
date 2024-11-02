let imagenes = [
    {
        "url": "img/marado1.jpg",
        "nombre": "Diego ",
        "descripcion": "Su etapa en Cebollitas -el equipo de las divisiones infantiles de Argentinos Juniors en el que se formó entre los 9 y 14 años"

    },
    {
        "url": "img/marado2.jpg",
        "nombre": "Armando",
        "descripcion": "El 22 de febrero de 1981, jugaba su primer partido oficial y de penal, hacía ante Talleres de Córdoba sus dos primeros goles con la camiseta de Boca Juniors. ."

    },
    {
        "url": "img/marado3.jpg",
        "nombre": "Maradona",
        "descripcion": "Un emblema del fútbol. El Diez fue amo y señor de la pelota en los estados mexicanos para conducir a la Selección a su segunda Copa del Mundo."

    },
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}