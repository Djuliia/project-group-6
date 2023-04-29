const cards = document.querySelectorAll(".novelty__item");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseover", function () {
    if (i > 0) {
      cards[i - 1].classList.add("previous-card");
    }
  });

  cards[i].addEventListener("mouseout", function () {
    if (i > 0) {
      cards[i - 1].classList.remove("previous-card");
    }
  });
}