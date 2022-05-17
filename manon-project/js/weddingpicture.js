let minimg = document.querySelector('#imggallre');
let arrowleft = document.querySelector('.left');
let arrowrigth = document.querySelector('.right');

let arrayphotos =  [
    "./img/widdingpicture/img1.jpg",
    "./img/widdingpicture/img2.jpg",
    "./img/widdingpicture/img3.jpg",
    "./img/widdingpicture/img4.jpg",
    "./img/widdingpicture/img5.jpg",
    "./img/widdingpicture/img6.jpg",
    "./img/widdingpicture/img7.jpg",
    "./img/widdingpicture/img8.jpg",

];
let indexphoto = 1;;

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
