import { gameBoard } from "./gameBoard";
import { ship } from "./ship";

test("place ship assigns all coordinates based on ship length", () => {
  const theGameBoard = gameBoard();
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

test("can place multiple ships that do not overlap", () => {
  const theGameBoard = gameBoard();
  theGameBoard.placeShip(5, "horizontal", 1, 6);
  expect(theGameBoard.placeShip(5, "vertical", 1, 1)).toEqual([
    ["S", "", "", "", "", "", "", "", "", ""],
    ["S", "", "", "", "", "", "", "", "", ""],
    ["S", "", "", "", "", "", "", "", "", ""],
    ["S", "", "", "", "", "", "", "", "", ""],
    ["S", "", "", "", "", "", "", "", "", ""],
    ["S", "S", "S", "S", "S", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]);
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

test("receive attack registers hit on untouched tile", () => {
  const theGameBoard = gameBoard();
  expect(theGameBoard.receiveAttack(3, 5)).toEqual([
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "H", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]);
});

test("receive attack does not register hit on tile already hit", () => {
  const theGameBoard = gameBoard();
  theGameBoard.receiveAttack(6, 7);
  expect(theGameBoard.receiveAttack(6, 7)).toBe("Tile already hit");
});

test("receive attack processes a hit on ship", () => {
  const theGameBoard = gameBoard();
  theGameBoard.placeShip(3, "horizontal", 5, 6);
  theGameBoard.placeShip(4, "vertical", 1, 1);
  theGameBoard.receiveAttack(6, 6);

  expect(theGameBoard.receiveAttack(3, 6)).toEqual([
    ["S", "", "", "", "", "", "", "", "", ""],
    ["S", "", "", "", "", "", "", "", "", ""],
    ["S", "", "", "", "", "", "", "", "", ""],
    ["S", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "H", "", "S", "H", "S", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]);
});
