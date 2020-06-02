const setTrace = (trace, array, comparison = [], swap = [], sorted = []) => {
  trace.arrays.push(array.slice(0));
  trace.comparisons.push(comparison);
  trace.swaps.push(swap);
  trace.sorted.push(sorted);
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
        setTrace(trace, array, [-1, -1], [k + startIdx, i + startIdx]);
        i++;
      } else {
        array[k + startIdx] = right[j];
        setTrace(trace, array, [-1, -1], [k + startIdx, j + middleIdx]);
        j++;
      }
      k++;
    }
    while (i < left.length) {
      array[k + startIdx] = left[i];
      setTrace(trace, array, [-1, -1], [k + startIdx, i + startIdx]);
      i++;
      k++;
    }
    while (j < right.length) {
      array[k + startIdx] = right[j];
      setTrace(trace, array, [-1, -1], [k + startIdx, j + middleIdx]);
      j++;
      k++;
    }
  }

  function splitArray(array, startIdx, endIdx) {
    const length = endIdx - startIdx;
    if (length < 2) {
      // array = []
      if (length < 1) return array;
      // array = [x]
      else return [array[startIdx]];
    }

    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    splitArray(array, startIdx, middleIdx);
    splitArray(array, middleIdx, endIdx);
    merge(array, startIdx, middleIdx, endIdx);
  }

  splitArray(array, 0, array.length);
  setTrace(trace, array, [-1, -1], [-1, -1], [...Array(array.length).keys()]);
  return trace;
};

export const bubbleSort = (arr) => {
  let array = arr.slice(0);
  let n = array.length;
  let swapped = false;
  let comparisons = [];
  let arrays = [];
  let swaps = [];
  let sorted = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      let newArray = array.slice(0);
      arrays.push(newArray);
      comparisons.push([j, j + 1]);
      swaps.push([-1, -1]);
      sorted.length > 0 ? sorted.push([...sorted[sorted.length - 1]]) : sorted.push([]);

      if (array[j + 1] < array[j]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;

        newArray = array.slice(0);
        arrays.push(newArray);
        comparisons.push([-1, -1]);
        swaps.push([j, j + 1]);
        sorted.push([...sorted[sorted.length - 1]]);
      }
    }

    let newArray = array.slice(0);
    arrays.push(newArray);
    comparisons.push([-1, -1]);
    swaps.push([-1, -1]);
    sorted.push([...sorted[sorted.length - 1], n - i - 1]);

    if (!swapped) {
      break;
    }
  }

  return { arrays, comparisons, swaps, sorted };
};
