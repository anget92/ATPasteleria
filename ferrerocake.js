let images=["AT-tienda-img/cake-nut.jpeg", "AT-tienda-img/cake-nut.jpeg"]

let slider=document.querySelector("#slides-js");

slider.style.width = images.length * 100 + "%"

for(let img in images){

    slider.innerHTML += `<div class="slider_content" style= "width:${100/images.length}%"><img src="${images[img]}" class="slide_img"></div>`
}


let sliderContent=document.querySelectorAll(".slider_content");



let imagesLast = sliderContent[sliderContent.length -1]; 

slider.insertAdjacentElement("afterbegin", imagesLast);

const btnLeft = document.querySelector('#btn-left')
const btnRight = document.querySelector('#btn-right')

function Next() {
    let imageFirst = document.querySelectorAll(".slider_content")[0]
    slider.style.marginLeft = "-200%"
    slider.style.transition = "all 0.5s"
    setTimeout(function(){
        slider.style.transition = "none"
        slider.insertAdjacentElement("beforeend", imageFirst)
        slider.style.marginLeft = "-100%"
    }, 500)
}


function Prev() {
    let sliderContent = document.querySelectorAll(".slider_content")
    let imagesLast = sliderContent[sliderContent.length -1]
    slider.style.marginLeft = "1px"
    slider.style.transition = "all 0.5s"
    setTimeout(function(){
        slider.style.transition = "none"
        slider.insertAdjacentElement("afterbegin", imagesLast)
        slider.style.marginLeft = "-100%"
    }, 500)
}

btnRight.addEventListener("click", function(){
    Next()
})

btnLeft.addEventListener("click", function(){
    Prev()
})

setInterval(function(){
    Next()
}, 5000)


function selectOption(){

    let opciones = document.getElementById("select")
    opcion= (opciones.value)
    document.getElementById("opcionSeleccionada").innerText = `${opcion}`

}





