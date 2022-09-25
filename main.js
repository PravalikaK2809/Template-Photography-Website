let headersSubmit = document.querySelector(".Header-Submit");
let userInput = document.querySelector(".User-Input");
let cards = document.querySelector(".Cards");

headersSubmit.addEventListener("click", function(event) {
    event.preventDefault();

    if (userInput.value != "") {
        let HTML = `<div class="Card"><div class="Image-Space"><img src="https://source.unsplash.com/1600x900/?${userInput.value}" alt="This is an image..." class="Card-Image"></div><div><a href="https://source.unsplash.com/1600x900/?${userInput.value}" download-class="Download-btn">Download</a>
    </div></div>`;
    cards.insertAdjacentHTML("beforeend", HTML);
    userInput.value = "";
    }
});