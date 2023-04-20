import { createElement } from "../helper/createElement.js";
import { showAlert } from "./showAlert.js";

export const createPairs = (app) => {
  const pairs = createElement("section", {
    className: "card section-offset",
  });

  const container = createElement("div", {
    className: "container card__container",
  });

  const buttonReturn = createElement("button", {
    className: "card__return",
    arialLabel: "Возврат к категориям",
  });

  const buttonCard = createElement("button", {
    className: "card__item",
  });

  const spanFront = createElement("span", {
    className: "card__front",
    textContent: "one",
  });

  const spanBack = createElement("span", {
    className: "card__back",
    textContent: "two",
  });

  buttonCard.append(spanFront, spanBack);
  container.append(buttonReturn, buttonCard);
  pairs.append(container);

  const cardControler = (data) => {
    let index = 0;

    spanFront.textContent = data[index][0];
    spanBack.textContent = data[index][1];

    const flipCard = () => {
      buttonCard.classList.add("card__item_flipped");
      buttonCard.removeEventListener("click", flipCard);

      setTimeout(() => {
        buttonCard.classList.remove("card__item_flipped");

        setTimeout(() => {
          index++;

          if (index === data.length) {
            spanFront.textContent = "The END";
            showAlert("Вернемся к категориям", 2000);

            setTimeout(() => {
              buttonReturn.click();
            }, 2000);

            return;
          }

          spanFront.textContent = data[index][0];
          spanBack.textContent = data[index][1];
          setTimeout(() => {
            buttonCard.addEventListener("click", flipCard);
          }, 200);
        }, 100);
      }, 1000);
    };

    buttonCard.addEventListener("click", flipCard);
  };

  const mount = (data) => {
    app.append(pairs);
    cardControler(data.pairs);
  };

  const unmount = () => {
    pairs.remove();
  };

  return { buttonReturn, mount, unmount };
};
