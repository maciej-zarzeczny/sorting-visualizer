import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Array from "./components/Array/Array";

function App() {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(100);
  const [resetArray, setResetArray] = useState(false);

  useEffect(() => {
    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let newArray = [];

    for (let i = 0; i < arraySize; i++) {
      let val = getRandomInt(5, 750);
      newArray.push(val);
    }

    setArray((arr) => newArray);
  }, [resetArray, arraySize]);

  function handleArrayReset() {
    setResetArray(!resetArray);
  }

  function handleSizeChange(val) {
    setArraySize(val);
  }

  return (
    <div className="App">
      <Navbar
        handleArrayReset={handleArrayReset}
        handleSizeChange={handleSizeChange}
        arraySize={arraySize}
      />
      <Array array={array} />
    </div>
  );
}

export default App;
