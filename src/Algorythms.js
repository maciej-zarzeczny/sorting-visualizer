const setTrace = (trace, array, comparison = [], swap = [], sorted) => {
  trace.arrays.push(array.slice(0));
  trace.comparisons.push(comparison);
  trace.swaps.push(swap);

  trace.sorted.length > 0
    ? sorted === undefined
      ? trace.sorted.push([...trace.sorted[trace.sorted.length - 1]])
      : trace.sorted.push([...trace.sorted[trace.sorted.length - 1], sorted])
    : trace.sorted.push([]);
};

const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

export const quickSortAlgorythm = (array) => {
  let trace = { arrays: [], comparisons: [], swaps: [], sorted: [] };

  const partition = (array, low, high) => {
    let i = low - 1;
    let pivot = array[high];

    // ANIMATIONS: set pivot bar
    setTrace(trace, array, [i, high]);

    for (let j = low; j < high; j++) {
      setTrace(trace, array, [j, high]);
      if (array[j] < pivot) {
        i++;
        // ANIMATIONS: swap
        setTrace(trace, array, [high, high], [i, j]);
        swap(array, i, j);
        setTrace(trace, array, [high, high], [i, j]);
      }
    }
    // ANIMATIONS: swap pivot and mark it as sorted
    setTrace(trace, array, [], [i + 1, high]);
    swap(array, i + 1, high);
    setTrace(trace, array, [], [i + 1, high], i + 1);
    return i + 1;
  };

  const quickSort = (array, low, high) => {
    if (low >= high) {
      if (low === high) {
        setTrace(trace, array, [], [], low);
      }
      return;
    }
    let pi = partition(array, low, high);

    quickSort(array, low, pi - 1);
    quickSort(array, pi + 1, high);
  };

  quickSort(array, 0, array.length - 1);
  setTrace(trace, array, [], [], -1);
  return trace;
};

export const mergeSort = (array) => {
  let trace = { arrays: [], comparisons: [], swaps: [], sorted: [] };

  function merge(array, startIdx, middleIdx, endIdx) {
    const left = array.slice(startIdx, middleIdx);
    const right = array.slice(middleIdx, endIdx);
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left.length && j < right.length) {
      setTrace(trace, array, [i + startIdx, j + middleIdx], [-1, -1]);
      if (left[i] <= right[j]) {
        array[k + startIdx] = left[i];
        setTrace(trace, array, [], [k + startIdx, i + startIdx]);
        i++;
      } else {
        array[k + startIdx] = right[j];
        setTrace(trace, array, [], [k + startIdx, j + middleIdx]);
        j++;
      }
      k++;
    }
    while (i < left.length) {
      array[k + startIdx] = left[i];
      setTrace(trace, array, [], [k + startIdx, i + startIdx]);
      i++;
      k++;
    }
    while (j < right.length) {
      array[k + startIdx] = right[j];
      setTrace(trace, array, [], [k + startIdx, j + middleIdx]);
      j++;
      k++;
    }
  }

  function splitArray(array, startIdx, endIdx) {
    const length = endIdx - startIdx;
    if (length < 2) {
      // if (length < 1) return array;
      // else return [array[startIdx]];
      return;
    }

    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    splitArray(array, startIdx, middleIdx);
    splitArray(array, middleIdx, endIdx);
    merge(array, startIdx, middleIdx, endIdx);
  }

  splitArray(array, 0, array.length);
  setTrace(trace, array, [], [], -1);
  return trace;
};

export const bubbleSort = (arr) => {
  let array = arr.slice(0);
  let n = array.length;
  let swapped = false;
  let trace = { arrays: [], comparisons: [], swaps: [], sorted: [] };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      setTrace(trace, array, [j, j + 1]);

      if (array[j + 1] < array[j]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;

        setTrace(trace, array, [], [j, j + 1]);
      }
    }

    setTrace(trace, array, [], [], n - i - 1);

    if (!swapped) {
      break;
    }
  }

  return trace;
};

export const insertionSort = (array) => {
  let trace = { arrays: [], comparisons: [], swaps: [], sorted: [] };

  for (let i = 1; i < array.length; i++) {
    setTrace(trace, array, [i, i]);
    let comparedValue = array[i];
    let j = i - 1;

    while (j >= 0 && comparedValue < array[j]) {
      setTrace(trace, array, [], [i, j]);
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = comparedValue;
  }

  setTrace(trace, array, [], [], -1);
  return trace;
};
