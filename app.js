const menuIcon = document.querySelector('#menu-icon'),
    menu=document.querySelector('#menu-content');

menuIcon.addEventListener('click',(e)=>{
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
})
