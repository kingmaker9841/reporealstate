
var lines = document.getElementsByClassName('lines')[0];
var absoluteNavs = document.getElementsByClassName('absolute-navs')[0];
var line1 = document.getElementsByClassName('line1')[0];
var line2 = document.getElementsByClassName('line2')[0];
var line3 = document.getElementsByClassName('line3')[0];
lines.addEventListener('click', (e)=>{
    absoluteNavs.classList.toggle('absolute-navs-open');
    line1.classList.toggle('line1-open');
    line2.classList.toggle('line2-open');
    line3.classList.toggle('line3-open');
});

var arrowUp = document.getElementsByClassName('arrow-up')[0];
var faArrowUp = document.getElementsByClassName('fa-arrow-up')[0];

window.addEventListener('scroll', (e)=>{
    if (document.documentElement.scrollTop > 400){
        arrowUp.style.display = 'flex';
    }else{
        arrowUp.style.display = 'none';
    }
});
   
arrowUp.addEventListener('click', (e)=>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome
});

