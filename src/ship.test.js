import { ship } from "./ship";

test("Does hit function increment numTimesHits", () => {
  const theShip = ship(5);
  expect(theShip.hit()).toBe(1);
});

test("isSunk when length is equal to numTimesHit", () => {
  const theShip = ship(5);
  for (let i = 0; i < 5; i++) theShip.hit();
  expect(theShip.isSunk()).toBe(true);
});

test("isSunk when length is greater than numTimesHit", () => {
  const theShip = ship(5);
  expect(theShip.isSunk()).toBe(false);
});

test("isSunk when length is less than numTimesHit", () => {
  const theShip = ship(5);
  for (let i = 0; i < 7; i++) theShip.hit();
  expect(theShip.isSunk()).toBe(true);
});
