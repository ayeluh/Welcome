document.getElementById("welcomeButton").addEventListener("click", function() {
    const popupMessage = document.getElementById("popupMessage");
    popupMessage.classList.remove("hidden");
});

document.querySelector(".close-button").addEventListener("click", function() {
    const popupMessage = document.getElementById("popupMessage");
    popupMessage.classList.add("hidden");
});