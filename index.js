const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector(".links-container")
const links = document.querySelector(".links");


navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("open");

    const linksHeight = links.getBoundingClientRect().height;
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;

    if(linksContainerHeight === 0 ) {
        linksContainer.style.height = `${linksHeight}px`
    }else {
        linksContainer.style.height = 0;
    }

});