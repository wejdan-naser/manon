let mainimg = document.querySelector('#imggallre');
let arrowleft = document.querySelector('.left');
let arrowrigth = document.querySelector('.right');
let downpotos = document.querySelectorAll('.downphotos'); 
let actives = document.getElementsByClassName('actives');

/* for remove and add class */
for(let i = 0 ; i < downpotos.length ; i++)
{   
   

    downpotos[i].onmousemove = function()
    { 
         for(let j = 0 ; j < downpotos.length ; j++){
         downpotos[j].classList.remove('actives');
    } 
        
        if(downpotos[i].classList.contains('actives') === false){
            this.classList.add('actives');
        }else 
        {      
           this.classList.remove('actives');
        }
        mainimg.src = this.src;
    }

};


//the downe arrow

let alldwnphotos = document.querySelector('.alldwnphotos');
let downlefts = document.querySelector('.downleft');
let downright = document.querySelector('.downright');
  

downlefts.addEventListener('click',function(){
    alldwnphotos.scrollLeft -=180;
});
downright.addEventListener('click',function(){
    alldwnphotos.scrollLeft +=180;
});
