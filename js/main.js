const imgArray = [];

imgArray[0] = new Image();
imgArray[0].src = 'img/01.webp';

imgArray[1] = new Image();
imgArray[1].src = 'img/02.webp';

imgArray[2] = new Image();
imgArray[2].src = 'img/03.webp';

imgArray[3] = new Image();
imgArray[3].src = 'img/04.webp';

imgArray[4] = new Image();
imgArray[4].src = 'img/05.webp';

console.log(imgArray);


for (let i = 0; i < imgArray.length; i++) {
    const cont = document.querySelector(".img_container");
    const element = `<div class="foto">${imgArray[i]}</div>`;
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