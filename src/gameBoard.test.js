import { gameBoard } from "./gameBoard";
import { ship } from "./ship";

test("place ship assigns all coordinates based on ship length", () => {
  const theGameBoard = gameBoard();
  const theGrid = theGameBoard.grid;
  expect(theGameBoard.placeShip(5, "vertical", 3, 4)).toEqual([
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "S", "", "", "", "", "", "", ""],
    ["", "", "S", "", "", "", "", "", "", ""],
    ["", "", "S", "", "", "", "", "", "", ""],
    ["", "", "S", "", "", "", "", "", "", ""],
    ["", "", "S", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]);
});
