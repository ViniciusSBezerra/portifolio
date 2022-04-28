
function toogleMenu(){

    const toogleMenu = document.querySelector('nav');

    toogleMenu.classList.toggle('active');

}


$(function () {
    $('#header').load("./pages/Header/header.html");
    $('#about-me').load("./pages/About-me/aboutMe.html");
    $('#technology').load("./pages/technology/technology.html");
    $('#project').load("./pages/Projects/projects.html");
    $('#footer').load("./pages/Footer/footer.html");
});

