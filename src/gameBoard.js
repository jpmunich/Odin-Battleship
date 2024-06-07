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
    // Set bounds of grid to be 1-10
    if (x < 1 || x > 10 || y < 1 || y > 10) return "Coordinates Out of Bounds";

    const theShip = ship(shipLength);
    theShip.setPlacementDirection(axis);
    theShip.placeSelf(x, y);
    ships.push(theShip);

    for (let i = 0; i < theShip.getShipLength(); i++) {
      // Check to make sure two ships do not overlap
      // prettier-ignore
      if (grid[theShip.getYCoords()[i] - 1][theShip.getXCoords()[i] - 1] == "S") {
        ships.pop();
        for (let j = 0; j < i; j++) {
          grid[theShip.getYCoords()[j] - 1][theShip.getXCoords()[j] - 1] = "";
        }
        return grid;
      }

      grid[theShip.getYCoords()[i] - 1][theShip.getXCoords()[i] - 1] = "S";
    }

    return grid;
  }

  function receiveAttack(x, y) {
    if (grid[y - 1][x - 1] == "H") return "Tile already hit";
    grid[y - 1][x - 1] = "H";
    return grid;
  }

  return { placeShip, receiveAttack };
};

export { gameBoard };
