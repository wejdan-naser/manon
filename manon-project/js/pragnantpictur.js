let minimg = document.querySelector('#imggallre');
let arrowleft = document.querySelector('.left');
let arrowrigth = document.querySelector('.right');

let arrayphotos =  [
    "./img/pregnant Picture/img1.jpg",
    "./img/pregnant Picture/img2.jpg",
    "./img/pregnant Picture/img3.jpg",
    "./img/pregnant Picture/img4.jpg",
    "./img/pregnant Picture/img5.jpg",
    "./img/pregnant Picture/img6.jpg",
    "./img/pregnant Picture/img7.jpg",
    "./img/pregnant Picture/img8.jpg",
]
let indexphoto = 1;

function nextphoto()
{
    if(indexphoto < arrayphotos.length){
        minimg.setAttribute('src',arrayphotos[indexphoto]);
        indexphoto++;
        if(indexphoto > arrayphotos.length){indexphoto = 0;}
    }  
    
};
function beforephoto()
{        
    if(indexphoto > 0){
         indexphoto--;  
         minimg.setAttribute('src',arrayphotos[indexphoto]);
    }else if(indexphoto < arrayphotos.length){indexphoto = 0;}
   
};
