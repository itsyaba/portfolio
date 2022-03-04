const menu = document.querySelector('.menu');
const target = document.querySelectorAll('.target');
const wrapper = document.querySelectorAll('.wrapper');


menu.addEventListener('click', function () {
    target.forEach( function (items) {
        items.classList.toggle('change')
    })
})


wrapper.forEach(function (items) {
    items.addEventListener('click', function () {
        target.forEach(function (items) {
            items.classList.remove('change')
        });
    });
});