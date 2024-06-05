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

  function placeSelf(x, y) {
    if (direction == "horizontal") {
      for (let i = 0; i < length; i++) {
        xCoords.push(x + i);
      }
      for (let i = 0; i < length; i++) {
        yCoords.push(y);
      }
    } else if (direction == "vertical") {
      for (let i = 0; i < length; i++) {
        yCoords.push(y + i);
      }
      for (let i = 0; i < length; i++) {
        xCoords.push(x);
      }
    }
  }

  function setPlacementDirection(theDirection) {
    direction = theDirection;
  }

  function getPlacementDirection() {
    return direction;
  }

  function getXCoords() {
    return xCoords;
  }

  function getYCoords() {
    return yCoords;
  }

  function getShipLength() {
    return length;
  }

  return {
    hit,
    isSunk,
    placeSelf,
    getPlacementDirection,
    setPlacementDirection,
    getXCoords,
    getYCoords,
    getShipLength,
  };
};

export { ship };
