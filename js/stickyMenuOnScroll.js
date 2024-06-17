let lastScrollTop = 0;
let header = document.getElementById("header");
window.addEventListener("scroll", function() {
    let scrollTop = this.window.scrollY || this.document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.style.top = "-80px";
    } else {
        header.style.top = "0";
    }
    lastScrollTop = scrollTop;
})