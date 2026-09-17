const button = document.getElementById("changeButton");
const description = document.getElementById("description");

button.addEventListener("click", function () {
    description.textContent = "Hello Web";
});