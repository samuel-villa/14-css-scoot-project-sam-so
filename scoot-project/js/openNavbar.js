function openMenu() {
    const navbar = document.getElementById("navbar");
    const header = document.getElementById("header");
    const openButton = document.getElementById("icon-hamburger");
    const closeButton = document.getElementById("close-button");
    if (navbar.style.display === "flex") {
        navbar.style.display = "none";
        closeButton.style.display = "none";
        openButton.style.display = "block";
        header.style.position = "relative"
    } else {
        navbar.style.display = "flex";
        header.style.position = "fixed"
        navbar.classList.add("navbar-menu");
        closeButton.style.display = "block";
        openButton.style.display = "none";
    }
}
