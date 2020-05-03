let addButton = document.querySelectorAll(".cards__button--add");
let removeButton = document.querySelectorAll(".cards__button--remove");
let cartCounter = document.querySelector(".cart__counter");

let counter = 0;

addButton.forEach(el => el.addEventListener("click", addToCart));
removeButton.forEach(el => el.addEventListener("click", removeFromCart));

function addToCart(evt) {
    evt.preventDefault();
    var target = evt.target;
    var cardMarker = target.parentNode.querySelector(".cards__marker");
    var cardContent = target.parentNode.querySelector(".cards__content");
    var currentRemoveButton = target.parentNode.querySelector(".cards__button--remove");
   
    if (cardMarker.classList.contains("cards__marker--off")) {
        cardMarker.classList.remove("cards__marker--off");
      }
    cardContent.classList.add("cards__content--chosen");
    target.classList.add("cards__button--off");
    currentRemoveButton.classList.remove("cards__button--off");

    counter++;
    cartCounter.innerHTML = counter;
}

function removeFromCart(evt) {
    evt.preventDefault();
    if (counter <=0) {counter = 0;}

    var target = evt.target;
    var cardMarker = target.parentNode.querySelector(".cards__marker");
    var cardContent = target.parentNode.querySelector(".cards__content");
    var currentAddButton = target.parentNode.querySelector(".cards__button--add");
   
    cardMarker.classList.add("cards__marker--off");
    if (cardContent.classList.contains("cards__content--chosen")) {
        cardContent.classList.remove("cards__content--chosen");
    }
    target.classList.add("cards__button--off");
    currentAddButton.classList.remove("cards__button--off");

    counter--;
    cartCounter.innerHTML = counter;
}