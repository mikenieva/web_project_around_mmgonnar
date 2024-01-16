//Creates cards
export default class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  getTemplate() {
    const templateSelector = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

      const cardImage = card.querySelector(".card__image");
      const cardTitle = card.querySelector(".card__title");
      const popupImageElement = document.querySelector(".popup__element");
      cardTitle.innerText = title;
      cardImage.src = link;


    return templateSelector;
  }

  setEventListeners() {
    buttonImage.addEventListener("click", function () {
      popupImageElement.src = cardImage.src;
      popupButtonSwitch(popupImage);
      popupImageElement.setAttribute("alt", title);
  }

  generateCard() {
    this._templateSelector = this.getTemplate();
    this._setEventListeners();
    return this._?
  }
}

const card = new Card(item.name, item.link, "#cards-template");

//

/*
export default class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }
  _getTemplate() {
    const template = document.querySelector(this._templateSelector").content;
    const card = template.querySelector(".card").cloneNode(true);
    const cardImage = card.querySelector(".card__image");
    const cardTitle = card.querySelector(".card__title");
    const popupImageElement = document.querySelector(".popup__element");

    return card;
  }

  _setEventListeners() {
    const buttonLike = this.card.querySelector(".button_like");
    buttonLike.addEventListener("click", () => {
      buttonLike.classList.toggle("liked");
    });

    const buttonDelete = this.card.querySelector(".button_delete");
    buttonDelete.addEventListener("click", () => {
      const card = buttonDelete.closest(".card");
      card.remove();
    });

    const buttonImage = this.card.querySelector(".card__image");
    buttonImage.addEventListener("click", () => {
      popupImageElement.src = cardImage.src;
      popupButtonSwitch(popupImage);
      popupImageElement.setAttribute("alt", title);

      popupImageTitle.textContent = cardTitle.textContent;
    });
  }

  renderCard() {
    this._card = this._getTemplate();
    this._setEventListeners();
    return this._card;
  }
}
 */
