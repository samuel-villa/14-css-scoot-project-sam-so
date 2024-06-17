function openMenu() {
    const navbar = document.getElementById("navbar");
    const openButton = document.getElementById("icon-hamburger");
    const closeButton = document.getElementById("close-button");
    if (navbar.style.display === "flex") {
        navbar.style.display = "none";
        closeButton.style.display = "none";
        openButton.style.display = "block";
    } else {
        navbar.style.display = "flex";
        navbar.classList.add("navbar-menu");
        closeButton.style.display = "block";
        openButton.style.display = "none";
    }
}
