const burgerMenu = document.querySelector(".fa-bars")
const closeMenu = document.querySelector(".fa-x")
const offScreenMenu = document.querySelector(".off-screen-menu")
const heroImage = document.querySelector(".hero__image")

// Function to handle toggling of closeMenu icon visibility
function toggleCloseMenuVisibility() {
    if (window.innerWidth > 750) {
        closeMenu.classList.add("hidden");
        heroImage.classList.remove("hidden")
    }
    else if (window.innerWidth < 750 && offScreenMenu.classList.contains("active")) {
        closeMenu.classList.remove("hidden");
        heroImage.classList.add("hidden")
    }
}

burgerMenu.addEventListener("click", () => {
    offScreenMenu.classList.add("active")
    closeMenu.classList.remove("hidden")
    heroImage.classList.add("hidden")
})

closeMenu.addEventListener("click", () => {
    offScreenMenu.classList.remove("active")
    closeMenu.classList.add("hidden")
    heroImage.classList.remove("hidden")
})

window.addEventListener("resize", toggleCloseMenuVisibility);