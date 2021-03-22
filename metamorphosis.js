initDragAndDrop();

function initDragAndDrop() {
    shuffleCards();

    let dragged;

    document.addEventListener("drag", function (event) {
        event.target.style.border = "5px dotted green";
    }, false);

    document.addEventListener("dragstart", function (event) {
        dragged = event.target;
        event.target.style.opacity = .5;
    }, false);

    document.addEventListener("dragend", function (event) {
        event.target.style.opacity = "";
        event.target.style.border = "none";
    }, false);

    document.addEventListener("dragover", function (event) {
        event.preventDefault();
    }, false);

    document.addEventListener("dragenter", function (event) {
        if (event.target.className == "card-slot") {
            event.target.style.background = "grey";
        }
    }, false);

    document.addEventListener("dragleave", function (event) {
        if (event.target.className == "card-slot") {
            event.target.style.background = "";
        }

    }, false);

    document.addEventListener("drop", function (event) {
        event.preventDefault();
        if (isCorrectSlot(dragged.id, event.target.id)) {
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
            setTimeout(endGame, 500);
        }

    }, false);

    function isCorrectSlot(imgId, slotId) {
        return 'card-' + imgId == slotId;
    }

    function endGame() {
        if (document.querySelectorAll(".card > img").length == 0) {
            alert("END GAME!");
        }
    }


}



function shuffleCards() {
    let mixedCardsContainer = document.querySelector(".mixed-cards");
    for (let i = mixedCardsContainer.children.length; i >= 0; i--) {
        mixedCardsContainer.appendChild(mixedCardsContainer.children[Math.random() * i | 0]);
    }
}



