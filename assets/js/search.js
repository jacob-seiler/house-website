const cards = document.querySelectorAll(".card");

function setCardImages() {
	for (let i = 0; i < cards.length; i++) {
		let card = cards[i];
		let fileName = card.getAttribute("img-file");

		card.style.background = "url('assets/img/" + fileName + "')";
		card.style.backgroundRepeat = "no-repeat";
		card.style.backgroundSize = "100% auto";
		card.style.backgroundPosition = "center";
	}
}

document.addEventListener("DOMContentLoaded", function() {
	setCardImages();
});
