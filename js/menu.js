const menu = document.getElementById('menu');
const adaptiveMenu = document.querySelector('.adaptive-menu');

menu.addEventListener('click', () => {
    adaptiveMenu.style.display === 'block' ?
        adaptiveMenu.style.display = 'none' :
        adaptiveMenu.style.display = 'block';
})

$('details').click(function (event) {
    $('details').not(this).removeAttr("open");
});

