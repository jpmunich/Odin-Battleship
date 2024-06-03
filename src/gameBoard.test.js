import { gameBoard } from "./gameBoard";
import { ship } from "./ship";

test("place ship assigns all coordinates based on ship length", () => {
  const theGameBoard = gameBoard();
  const theShip = ship(5);
  expect(theGameBoard.placeShip(theShip, "vertical", 3, 4)).toEqual([
    4, 5, 6, 7, 8,
  ]);
});
