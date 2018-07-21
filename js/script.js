var icon = document.querySelector('.navbar__icon');
var aside = document.querySelector('aside');
var navbar = document.querySelector('#navbar');
var navItems = document.querySelectorAll('.nav-item');

icon.addEventListener('click', function(e){
    icon.classList.toggle('change');
    aside.classList.toggle('navbar__open');
    // setTimeout(function(){
navbar.classList.toggle('navbar__show');
    // }, 300)
    
});


navItems.forEach(navItem => {
    navItem.addEventListener('click', ()=>{
        if(aside.classList.contains('navbar__open')){
            aside.classList.remove('navbar__open');
            navbar.classList.remove('navbar__show');
            icon.classList.remove('change');
        }
    });
});
