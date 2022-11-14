const imgArray = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];


console.log(imgArray);


for (let i = 0; i < imgArray.length; i++) {
    const cont = document.querySelector(".img_container");
    const element = `<div class="foto"><img src="${imgArray[i]}"></div>`;
    cont.innerHTML += element; 
    console.log(element);
}

const divArray = document.getElementsByClassName('foto');
divArray[0].classList.add("active");

let activeItem = 0;


// Creo il bottone
let avanti = document.getElementById("avanti");
let indietro = document.getElementById("indietro");

avanti.addEventListener("click",
    function(){
        if(activeItem < divArray.length - 1){
            divArray[activeItem].classList.remove("active");
            activeItem++;
            divArray[activeItem].classList.add("active");
        }

        else if(activeItem === divArray.length - 1);{
            indietro.classList.add("hidden");
        }
    }

)

indietro.addEventListener("click",
    function(){
        if(activeItem > 0){
            divArray[activeItem].classList.remove("active");
            activeItem--;
            divArray[activeItem].classList.add("active");
        }

        else if(activeItem == divArray.length + 1){
            avanti.classList.add("hidden");

        }
    }

)