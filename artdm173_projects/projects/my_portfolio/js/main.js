document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("init");
    document.querySelector('#menu-btn').addEventListener('click', function (e) {
        console.log("toggle #menu-btn");
        e.preventDefault();
        var el = document.querySelector('.main-nav');
        el.classList.toggle('show');
    });

    document.querySelector('#x-burger').addEventListener('click', function (e) {
        console.log("toggle #menu-btn");
        e.preventDefault();
        var elx = document.querySelector('.main-nav');
        elx.classList.toggle('show');
    });
}