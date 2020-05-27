import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Array from "./components/Array/Array";
import { mergeSort, bubbleSort } from "./Algorythms";

function App() {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(100);
  const [resetArray, setResetArray] = useState(false);
  const [algorythm, setAlgorythm] = useState("0");
  const [animationSpeed, setAnimationSpeed] = useState(80);
  const [animations, setAnimations] = useState([]);

  useEffect(() => {
    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let newArray = [];
    for (let i = 0; i < arraySize; i++) {
      newArray.push(getRandomInt(5, 750));
    }

    setArray(() => newArray);
  }, [resetArray, arraySize]);

  const handleArrayReset = () => {
    setResetArray(!resetArray);
    setAnimations([]);
  };

  const handleSizeChange = (val) => {
    setArraySize(val);
  };

  const handleAnimationSpeedChange = (val) => {
    setAnimationSpeed(val);
  };

  const handleAlgorythmChange = (val) => {
    setAlgorythm(val);
    setAnimations([]);
  };

  const handleArrayChange = (newArray) => {
    setArray(newArray);
  };

  const handleAnimationsChange = (newAnimations) => {
    console.log(newAnimations);
    setAnimations(newAnimations);
  };

  const handleStart = async () => {
    switch (algorythm) {
      case "0":
        setArray(mergeSort(array));
        break;

      case "1":
        bubbleSort(array, animationSpeed, handleArrayChange, handleAnimationsChange);
        break;

      case "2":
        break;

      case "3":
        console.log("Starting insertion sort");
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <Navbar
        handleArrayReset={handleArrayReset}
        handleSizeChange={handleSizeChange}
        handleAnimationSpeedChange={handleAnimationSpeedChange}
        handleAlgorythmChange={handleAlgorythmChange}
        handleStart={handleStart}
        arraySize={arraySize}
        animationSpeed={animationSpeed}
      />
      <Array array={array} animations={animations} />
    </div>
  );
}

export default App;
