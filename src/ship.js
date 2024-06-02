const ship = (length, numTimesHit) => {
  let sunk;
  function hit() {
    numTimesHit++;
    return numTimesHit;
  }

  function isSunk() {
    if (numTimesHit >= length) {
      sunk = true;
      return sunk;
    } else {
      sunk = false;
      return sunk;
    }
  }
  return { hit, isSunk };
};

export { ship };
