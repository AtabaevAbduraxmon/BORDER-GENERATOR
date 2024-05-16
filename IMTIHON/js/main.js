const elBox = document.querySelector('.box');
const elInput = document.querySelector('.input');
const elbox1 = document.querySelector('.box-1');

elInput.addEventListener('input', function() {
    elBox.style.borderWidth = elInput.value + 'px'
})

elbox1.addEventListener('click', function() {
    elBox.style.borderStyle = elbox1.value 
})