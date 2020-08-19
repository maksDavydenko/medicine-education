const menu = document.getElementById('menu');
const adaptiveMenu = document.querySelector('.adaptive-menu');

const details = document.querySelectorAll('details');


$(document).mouseup(function (e) {
    var container = $(".adaptive-menu");
    if (container.has(e.target).length === 0) {
        container.hide();
    }
});
menu.addEventListener('click', () => {
    adaptiveMenu.style.display === 'block' ?
        adaptiveMenu.style.display = 'none' :
        adaptiveMenu.style.display = 'block';
})

$('details').click(function (event) {
    $('details').not(this).removeAttr("open");
});


