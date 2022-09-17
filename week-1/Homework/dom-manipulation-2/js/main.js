// Task 1

const blueBtn = document.querySelector("#blueBtn");
const jumbotron = document.querySelector(".jumbotron");
const donateBikeBtn = document.querySelector(".buttons .btn-primary");
const volunteerBtn = document.querySelector(".buttons .btn-secondary");

//Blue Button
blueBtn.addEventListener("click", () => {
    jumbotron.style.backgroundColor = "#588fbd";
    donateBikeBtn.style.backgroundColor = "#ffa500";
    volunteerBtn.style.backgroundColor = "#000";
    volunteerBtn.style.color = "#fff";
});

//Orange Button
const orangeBtn = document.querySelector("#orangeBtn");

orangeBtn.addEventListener("click", () => {
    jumbotron.style.backgroundColor = "#f0ad4e";
    donateBikeBtn.style.backgroundColor = "#5751fd";
    volunteerBtn.style.backgroundColor = "#31b0d5";
    volunteerBtn.style.color = "#fff";
});

//
//Green Button
const greenBtn = document.querySelector("#greenBtn");

greenBtn.addEventListener("click", () => {
    jumbotron.style.backgroundColor = "#87ca8a";
    donateBikeBtn.style.backgroundColor = "#000";
    volunteerBtn.style.backgroundColor = "#8c9c08";
})
