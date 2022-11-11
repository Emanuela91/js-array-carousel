const imgContainer = document.querySelector('.img-container');
console.log(imgContainer);

// creo elemento "div" e la foto al suo interno

let divElement = document.createElement("div");
var img = document.createElement("img");
img.src = "img/01.wepb"

imgContainer.append(divElement);
divElement.append(img);



