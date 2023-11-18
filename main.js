let btn1 = document.getElementById('btn-0');
let btn2 = document.getElementById('btn-1');
let order = document.querySelector('.bg-color');

btn1.addEventListener('click', function(){
    order.style.background = 'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)'; 
});
btn2.addEventListener('click', function(){
    order.style.background =  'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)';
});