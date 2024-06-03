const ship = (length) => {
  let numTimesHit = 0;
  let sunk = false;
  let xCoords = [];
  let yCoords = [];
  let direction;

  function hit() {
    numTimesHit++;
    return numTimesHit;
  }

  function isSunk() {
    if (numTimesHit <= length) {
      sunk = true;
      return sunk;
    } else {
      sunk = false;
      return sunk;
    }
  }

  function placeShip(x, y) {
    if (direction == "horizontal") {
      for (let i = 0; i < length; i++) {
        xCoords.push(x + i);
      }
      yCoords.push(y);
    } else if (direction == "vertical") {
      for (let i = 0; i < length; i++) {
        yCoords.push(y + i);
      }
      xCoords.push(x);
    }
  }

  function setPlacementDirection(theDirection) {
    if (theDirection == "vertical") direction = "vertical";
    if (theDirection == "horizontal") direction = "horizontal";
  }

  function getPlacementDirection(theDirection) {
    return direction;
  }

  return {
    hit,
    isSunk,
    placeShip,
    getPlacementDirection,
    setPlacementDirection,
    xCoords,
    yCoords,
  };
};

export { ship };
