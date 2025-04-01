// ⁡⁣⁢⁣STICKY NAVBAR⁡
const handleScroll = () => document.querySelector('nav')?.classList.toggle('scrolled', window.scrollY > 0);
document.addEventListener('scroll', handleScroll);

// NAV LINK
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".li___tab");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        const linkHref = link.getAttribute("href").replace("./", "");

        if (currentPage === "" && linkHref === "index.html") {
            link.classList.add("active");
        } else if (linkHref === currentPage) {
            link.classList.add("active");
        }
    });
});