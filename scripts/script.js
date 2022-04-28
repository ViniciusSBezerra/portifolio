

function toogleMenu() {
    const toogleMenu = document.querySelector('nav');
    toogleMenu.classList.toggle('active');
}

function renderPage() {
    $('#header').load("./pages/Header/header.html");
    $('#aboutme').load("./pages/aboutme/aboutme.html");
    $('#technology').load("./pages/technology/technology.html");
    $('#project').load("./pages/Projects/projects.html");
    $('#footer').load("./pages/footer/footer.html");
}

renderPage();