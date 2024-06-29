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

function createGrid(intendedPlayer) {
  let shipCount = 0;
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
    gridCell.dataset.player = intendedPlayer;
    console.log(gridCell.dataset.player);
    // console.log(gridCell.dataset.y);
    gridCell.addEventListener("mouseover", () => {
      // console.log([gridCell.dataset.x, gridCell.dataset.y]);
    });

    gridCell.addEventListener("click", () => {
      if (
        thePlayer.playerGameBoard.canPlaceShip(
          3,
          "horizontal",
          parseInt(gridCell.dataset.x),
          parseInt(gridCell.dataset.y)
        )
      ) {
        thePlayer.playerGameBoard.placeShip(
          3,
          "horizontal",
          parseInt(gridCell.dataset.x),
          parseInt(gridCell.dataset.y)
        );

        console.log(thePlayer.playerGameBoard.ships[shipCount].getShipLength());
        for (
          let i = 0;
          i < thePlayer.playerGameBoard.ships[shipCount].getShipLength();
          i++
        ) {
          console.log(gridCell.dataset.x);
          document.querySelector(
            `[data-player='${intendedPlayer}'][data-x='${
              thePlayer.playerGameBoard.ships[shipCount].getXCoords()[i]
            }'][data-y='${
              thePlayer.playerGameBoard.ships[shipCount].getYCoords()[i]
            }']`
          ).innerHTML = "S";
        }
        shipCount++;
      }
    });
  }
}

export { createHeader, createGrid };
