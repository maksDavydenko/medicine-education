const wrap = document.querySelector('.check-universe__buttons');
const list = document.querySelector('.check-universe__list');
const buttons = document.querySelectorAll('.check-universe__btn');
const universItems = document.querySelectorAll('.universe-items');

wrap.addEventListener('click', (e) => {
    const activeCheck = e.target.classList.contains('check-universe__btn') ? e.target.getAttribute('data-id') : null;

    if (activeCheck) {
        delClass(list, ['top-active', 'middle-active', 'bottom-active']);

        buttons.forEach(button => {
            button.classList.remove('check-universe__btn--active');
        })

        universItems.forEach(universItem => {
            universItem.style.display = 'none'
        })

        e.target.classList.add('check-universe__btn--active');

        switch (activeCheck) {
            case 'top':
                list.classList.add('top-active');
                displayItem('universe-items--russia');
                break;

            case 'middle':
                list.classList.add('middle-active');
                displayItem('universe-items--ukraine');
                break;

            case 'bottom':
                list.classList.add('bottom-active');
                displayItem('universe-items--admition');
                break;
        }
    }
})


function delClass(elem, classArr) {
    classArr.forEach(className => {
        elem.classList.remove(className);
    });
}

function displayItem(itemName) {
    universItems.forEach(universItem => {
        universItem.classList.contains(itemName) ? universItem.style.display = 'flex' : null;
    })
}