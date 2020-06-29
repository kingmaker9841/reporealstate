var imgArray = document.getElementsByClassName('imgarr');
var slideIndex = 1;
showSlide(slideIndex);

function prev(n){
    showSlide(slideIndex+=n);
}
function next(n){
    showSlide(slideIndex+=n);
}
function current(n){
    showSlide(slideIndex = n);
}

function showSlide(n){
    if (n > imgArray.length){ slideIndex = 1};
    if (n < 1){ slideIndex = imgArray.length};
    for(let i = 0; i < imgArray.length; i++){
        imgArray[i].style.display = 'none';
    }
    imgArray[slideIndex-1].style.display = 'block';
}
