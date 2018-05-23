const generateGame = (size, arr) => {
  const length = arr.length;
  const newArray = [];
  let num = 0;
  const halfSize = size / 2;
  let currentElement = '';
  while (num < size / 2) {
    currentElement = arr[Math.floor(Math.random() * length)];
    if (newArray.indexOf(currentElement) === -1) {
      newArray.push(currentElement);
      num += 1;
    }
  }
  const finalArray = [];
  let arrayIndex = 0;
  let checker;
  for (let i = 0; i < size; i += 1) {
    finalArray.push(0);
  }
  for (let i = 0; i < halfSize; i += 1) {
    checker = 0;
    while (checker < 2) {
      arrayIndex = Math.floor(Math.random() * size);
      if (!finalArray[arrayIndex]) {
        finalArray.splice(arrayIndex, 1, newArray[i]);
        checker += 1;
      }
    }
  }
  return finalArray;
};

export default generateGame;
