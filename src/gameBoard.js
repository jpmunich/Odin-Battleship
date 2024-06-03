import { ship } from "./ship";

const gameBoard = () => {
  function placeShip(theShip, axis, x, y) {
    theShip.setPlacementDirection(axis);
    theShip.placeShip(x, y);
    return theShip.yCoords;
  }

  return { placeShip };
};

export { gameBoard };
