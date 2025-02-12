document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.dropdown').forEach(drop => {
        drop.addEventListener("mouseover", function() {
            this.querySelector(".dropdown-content").style.display = "block";
        });
        drop.addEventListener("mouseleave", function() {
            this.querySelector(".dropdown-content").style.display = "none";
        });
    });
});
