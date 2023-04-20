import { createElement } from "../helper/createElement.js";

export const createHeader = (parent) => {
  const container = createElement("div", {
    className: "container header__container",
  });

  parent.append(container);

  const headerLogoLink = createElement("a", {
    className: "header__logo",
    href: "#",
  });

  const headerTitle = createElement("h2", {
    className: "header__subtitle",
    textContent: "Категории",
  });

  const headerButton = createElement("button", {
    className: "header__btn",
    textContent: "Добавить категорию",
  });

  container.append(headerLogoLink, headerTitle, headerButton);

  const logo = createElement("img", {
    src: "img/logo.svg",
    className: "header__logo",
    alt: "Логотип сервиса Brain Cards",
  });

  headerLogoLink.append(logo);

  const updateHeaderTitle = (title) => {
    headerTitle.textContent = title;
  };

  return { headerLogoLink, headerButton, updateHeaderTitle };
};
