import { ship } from "./ship";

test("Does hit function increment numTimesHits", () => {
  const theShip = ship(5, 3);
  expect(theShip.hit()).toBe(4);
});

test("isSunk when length is equal to numTimesHit", () => {
  const theShip = ship(5, 5);
  expect(theShip.isSunk()).toBe(true);
});

test("isSunk when length is greater than numTimesHit", () => {
  const theShip = ship(5, 3);
  expect(theShip.isSunk()).toBe(false);
});

test("isSunk when length is less than numTimesHit", () => {
  const theShip = ship(5, 7);
  expect(theShip.isSunk()).toBe(true);
});
