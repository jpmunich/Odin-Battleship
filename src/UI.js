import player from "./player";
import {
  createElement,
  createTextElement,
  createElementWithClass,
  createImage,
} from "./UIController";

const content = document.getElementById("content");
const thePlayer = player("Player One");

function createHeader() {
  const headerContainer = createElementWithClass(
    "div",
    content,
    "header-container"
  );
  const headerText = createTextElement("h1", headerContainer, "Battleship");
}

export { createHeader };
