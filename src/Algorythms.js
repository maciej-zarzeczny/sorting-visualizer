export const mergeSort = (array) => {
  if (array.length === 1) return array;
  let m = Math.ceil(array.length / 2);
  let L = mergeSort(array.slice(0, m));
  let R = mergeSort(array.slice(m));

  let sortedArray = [];
  let i = 0,
    j = 0;

  while (i < L.length && j < R.length) {
    if (L[i] < R[j]) {
      sortedArray.push(L[i]);
      i += 1;
    } else {
      sortedArray.push(R[j]);
      j += 1;
    }
  }

  while (i < L.length) {
    sortedArray.push(L[i]);
    i += 1;
  }

  while (j < R.length) {
    sortedArray.push(R[j]);
    j += 1;
  }

  return sortedArray;
};

export const bubbleSort = async (
  arr,
  animationSpeed,
  handleArrayChange,
  handleAnimationsChange
) => {
  let animations = [0, 0];
  let array = arr.slice(0);
  let n = array.length;
  let swapped = false;

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      animations[0] = j;
      animations[1] = j + 1;
      if (array[j + 1] < array[j]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
      await sleep(101 - animationSpeed);
      let arrayToChange = array.slice(0);
      let newAnimations = animations.slice(0);
      handleArrayChange(arrayToChange);
      handleAnimationsChange(newAnimations);
    }

    if (!swapped) {
      break;
    }
  }

  animations[0] = -1;
  animations[1] = -1;
  handleAnimationsChange(animations);
  return array;
};
