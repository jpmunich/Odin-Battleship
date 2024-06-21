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
    if (axis === "horizontal") {
      if (x < 1 || x + shipLength - 1 > 10) return "Coordinates Out of Bounds";
    } else {
      if (y < 1 || y + shipLength - 1 > 10) return "Coordinates Out of Bounds";
    }

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
    if (grid[y - 1][x - 1] == "H" || grid[y - 1][x - 1] == "SH")
      return "Tile already hit";

    if (ships.length > 0) {
      for (let i = 0; i < ships.length; i++) {
        for (let j = 0; j < ships[i].getShipLength(); j++) {
          if (ships[i].getXCoords()[j] == x && ships[i].getYCoords()[j] == y) {
            ships[i].hit();

            if (ships[i].isSunk()) {
              ships[i].isSunk();
              grid[y - 1][x - 1] = "SH";
              return ships[i].isSunk();
            }

            grid[y - 1][x - 1] = "SH";
            return grid;
          }
        }
      }
    }

    grid[y - 1][x - 1] = "H";

    return grid;
  }

  function checkGameOver() {
    let shipsSunk = 0;

    for (let i = 0; i < ships.length; i++) {
      if (ships[i].isSunk()) shipsSunk++;
    }

    if (shipsSunk >= ships.length) return true;
    return false;
  }

  return { placeShip, receiveAttack, checkGameOver, grid, ships };
};

export { gameBoard };
