var modal = document.querySelector('.modal');
var btn 	= document.querySelector('.btn');
var close = document.querySelector('.modal__head-close');

btn.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}