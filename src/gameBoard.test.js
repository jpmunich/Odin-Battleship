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

test("place ship returns error message if coordinates are too high", () => {
  const theGameBoard = gameBoard();
  expect(theGameBoard.placeShip(4, "horizontal", 11, 4)).toBe(
    "Coordinates Out of Bounds"
  );
});

test("place ship returns error message if coordinates are too low", () => {
  const theGameBoard = gameBoard();
  expect(theGameBoard.placeShip(4, "horizontal", 0, 4)).toBe(
    "Coordinates Out of Bounds"
  );
});

test("Cannot place ship on top of other ship", () => {
  const theGameBoard = gameBoard();
  theGameBoard.placeShip(4, "vertical", 5, 5);

  expect(theGameBoard.placeShip(5, "horizontal", 3, 7)).toEqual([
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "S", "", "", "", "", ""],
    ["", "", "", "", "S", "", "", "", "", ""],
    ["", "", "", "", "S", "", "", "", "", ""],
    ["", "", "", "", "S", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]);
});
