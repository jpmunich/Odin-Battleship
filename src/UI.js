import player from "./player";
import {
  createElement,
  createTextElement,
  createElementWithClass,
  createImage,
} from "./UIController";

const content = document.getElementById("content");
const thePlayer = player();

function createHeader() {
  const headerContainer = createElementWithClass(
    "div",
    content,
    "header-container"
  );
  const headerText = createTextElement("h1", headerContainer, "Battleship");
}

function createGrid() {
  const gridContainer = createElementWithClass(
    "div",
    content,
    "grid-cell-container"
  );

  for (let i = 0; i < 11; i++) {
    const xCoordLabel = createTextElement("p", gridContainer, `${i}`);
    xCoordLabel.classList.add("grid-cell");
  }

  for (let i = 0; i < 100; i++) {
    if (i % 10 === 0) {
      const yCoordLabel = createTextElement(
        "p",
        gridContainer,
        `${i / 10 + 1}`
      );
      yCoordLabel.classList.add("grid-cell");
    }

    const gridCell = createElementWithClass("div", gridContainer, "grid-cell");

    gridCell.dataset.x = (i % 10) + 1;
    gridCell.dataset.y = Math.floor(i / 10) + 1;

    gridCell.addEventListener("mouseover", () => {
      // console.log([gridCell.dataset.x, gridCell.dataset.y]);
    });

    gridCell.addEventListener("click", () => {
      thePlayer.playerGameBoard.placeShip(
        3,
        "vertical",
        gridCell.dataset.x % 10,
        gridCell.dataset.y % 10
      );
      console.log(thePlayer.playerGameBoard.ships[0].getYCoords());
    });
  }
}

export { createHeader, createGrid };
