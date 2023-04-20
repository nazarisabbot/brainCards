import { createElement } from "../helper/createElement.js";
import { declOfNum } from "../helper/declOfNum.js";

export const createCategory = (app) => {
  const category = createElement("section", {
    className: "category section-offset",
  });

  const container = createElement("div", {
    className: "container",
  });

  category.append(container);

  const categoryList = createElement("ul", {
    className: "category__list",
  });

  container.append(categoryList);

  const createCategoryCard = (data) => {
    const li = createElement("li", {
      className: "category__item",
    });

    li.dataset.id = data.id;

    const buttonCard = createElement("button", {
      className: "category__card",
    });

    const spanTitle = createElement("span", {
      className: "category__title",
      textContent: data.title,
    });

    const spanPairs = createElement("span", {
      className: "category__pairs",
      textContent: declOfNum(data.length, ["пара", "пары", "пар"]),
    });

    buttonCard.append(spanTitle, spanPairs);

    const buttonEdit = createElement("button", {
      className: "category__btn category__edit",
      "aria-label": "редактировать",
    });

    const buttonDel = createElement("button", {
      className: "category__btn category__del",
      "aria-label": "удалить",
    });

    li.append(buttonCard, buttonEdit, buttonDel);

    return li;
  };

  const mount = (data) => {
    categoryList.textContent = "";
    app.append(category);
    const cards = data.map(createCategoryCard);
    categoryList.append(...cards);
    app.append(category);
  };

  const unmount = () => {
    category.remove();
  };

  return { mount, unmount, categoryList };
};
