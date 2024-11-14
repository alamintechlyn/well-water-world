  // new arrival section 
  document.addEventListener("DOMContentLoaded", function() {
    var cards = document.getElementsByClassName("pf-new-arrival-card");
    cards[0]?.classList.add("active");
    for (var i = 0; i < cards.length; i++) {

        (function(index) {
            cards[index].addEventListener("mouseover", function() {
                // Remove active class from all cards
                for (var j = 0; j < cards.length; j++) {
                    cards[j].classList.remove("active");
                }
                // Add active class to the hovered card
                cards[index].classList.add("active");
            });
        })(i);
    }
});


