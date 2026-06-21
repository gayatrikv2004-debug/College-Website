const images = [
"images/slide1.jpg",
"images/slide2.jpg",
"images/slide3.jpg"
];

let i = 0;

setInterval(() => {
i++;
if(i >= images.length){
i = 0;
}
document.getElementById("slide").src = images[i];
}, 3000);