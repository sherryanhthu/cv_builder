const floatingBtn = document.querySelector(".floating-btn");
const closeBtn = document.querySelector(".close-btn");
const socialPanelContainer = document.querySelector(".social-panel-container");

floatingBtn.addEventListener("click", () => {
    socialPanelContainer.classList.toggle("visible");
});

closeBtn.addEventListener("click", () => {
    socialPanelContainer.classList.remove("visible");
});
