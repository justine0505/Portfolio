document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".btn-mission").forEach(button => {
        button.addEventListener("click", function () {
            let targetId = this.getAttribute("data-target");
            let details = document.getElementById(targetId);

            if (details) {
                if (details.style.display === "none" || details.style.display === "") {
                    details.style.display = "block";
                    this.textContent = "Voir moins";
                } else {
                    details.style.display = "none";
                    this.textContent = "Voir plus";
                }
            } else {
                console.error("Élément introuvable :", targetId);
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const stageContent = this.parentElement.nextElementSibling;
            const reportBtn = stageContent.querySelector(".report-btn");

            if (stageContent.style.display === "none" || stageContent.style.display === "") {
                stageContent.style.display = "block";
                reportBtn.style.display = "inline-block";
                this.textContent = "-"; // Change le "+" en "-"
            } else {
                stageContent.style.display = "none";
                reportBtn.style.display = "none";
                this.textContent = "+"; // Change le "-" en "+"
            }
        });
    });
});

