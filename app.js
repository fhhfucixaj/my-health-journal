document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("start-button");
    const formContainer = document.getElementById("record-form-container");
    const closeButton = document.getElementById("close-form");

    // Открытие формы при нажатии на кнопку
    button.addEventListener("click", function () {
        formContainer.style.display = "block"; // Показываем форму
    });

    // Закрытие формы
    closeButton.addEventListener("click", function () {
        formContainer.style.display = "none"; // Скрываем форму
    });

    const circles = document.querySelectorAll(".circle");

    function checkScroll() {
        let triggerBottom = window.innerHeight * 0.9;

        circles.forEach((circle) => {
            let circleTop = circle.getBoundingClientRect().top;
            if (circleTop < triggerBottom) {
                circle.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});