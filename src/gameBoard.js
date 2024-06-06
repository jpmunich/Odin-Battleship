import { ship } from "./ship";

const gameBoard = () => {
  let grid = [
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ];

  let ships = [];
  function placeShip(shipLength, axis, x, y) {
    const theShip = ship(shipLength);
    theShip.setPlacementDirection(axis);
    theShip.placeSelf(x, y);
    ships.push(theShip);

    for (let i = 0; i < theShip.getShipLength(); i++) {
      grid[theShip.getYCoords()[i] - 1][theShip.getXCoords()[i] - 1] = "S";
    }
    return grid;
  }

  return { placeShip, grid };
};

export { gameBoard };
