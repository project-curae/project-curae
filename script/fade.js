document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    function fadeInElement(element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
            element.classList.add("visible");
        }
    }

    function handleScroll() {
        elements.forEach(element => {
            fadeInElement(element);
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check in case elements are already in view
});
