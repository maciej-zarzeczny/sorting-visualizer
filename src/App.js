import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainArray from "./components/Array/MainArray";
import { mergeSort, bubbleSort, quickSortAlgorythm, insertionSort } from "./Algorythms";

class App extends React.Component {
  state = {
    array: [],
    arraySize: 70,
    algorythm: "0",
    animationSpeed: 10,
    visualizationRunning: false,
    trace: { arrays: [], comparisons: [], swaps: [], sorted: [] },
    step: 0,
    animationId: null,

    currentComparison: [],
    currentSwap: [],
  };

  componentDidMount() {
    this.generateNewArray();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.arraySize !== this.state.arraySize) {
      this.generateNewArray();
    }
  }

  generateNewArray() {
    let { arraySize } = this.state;
    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let array = [];
    for (let i = 0; i < arraySize; i++) {
      array.push(getRandomInt(1, 95));
    }

    this.setState({
      array,
      trace: {
        arrays: [],
        comparisons: [],
        swaps: [],
        sorted: [],
      },
      step: 0,
    });
  }

  //Start generating new array and reset animations
  handleArrayReset = () => {
    this.generateNewArray();
  };

  //Generate new array of different size
  handleSizeChange = (arraySize) => {
    this.setState({ arraySize });
  };

  //Change animations speed
  handleAnimationSpeedChange = (animationSpeed) => {
    this.setState({ animationSpeed });
  };

  //Change current algorythm
  handleAlgorythmChange = (algorythm) => {
    if (this.state.trace.arrays.length !== 0) {
      this.generateNewArray();
    }
    this.setState({ algorythm });
  };

  //Update array
  handleArrayChange = (array) => {
    this.setState({ array });
  };

  handleStart = () => {
    let { algorythm, array, trace } = this.state;

    switch (algorythm) {
      case "0":
        if (trace.arrays.length === 0) {
          let newTrace = mergeSort(array);
          this.setState({ trace: newTrace }, () => {
            this.startVisualization();
          });
        } else {
          this.startVisualization();
        }
        break;

      case "1":
        if (trace.arrays.length === 0) {
          let newTrace = bubbleSort(array);
          this.setState({ trace: newTrace }, () => {
            this.startVisualization();
          });
        } else {
          this.startVisualization();
        }
        break;

      case "2":
        if (trace.arrays.length === 0) {
          let newTrace = quickSortAlgorythm(array);
          this.setState({ trace: newTrace }, () => {
            this.startVisualization();
          });
        } else {
          this.startVisualization();
        }
        break;

      case "3":
        if (trace.arrays.length === 0) {
          let newTrace = insertionSort(array);
          this.setState({ trace: newTrace }, () => {
            this.startVisualization();
          });
        } else {
          this.startVisualization();
        }
        break;

      default:
        break;
    }
  };

  //Move to the next step of visualization
  nextStep = () => {
    let { step, trace } = this.state;
    if (step < trace.arrays.length - 1) {
      this.setState({ step: step + 1 });
    } else {
      this.stopVisualization();
    }
  };

  startVisualization = () => {
    let time = 250 / this.state.animationSpeed;
    let animationId = setInterval(() => {
      this.nextStep();
    }, time);

    this.setState({ animationId, visualizationRunning: true });
  };

  stopVisualization = () => {
    clearInterval(this.state.animationId);
    this.setState({ animationId: null, visualizationRunning: false });
  };

  render() {
    const { arraySize, animationSpeed, array, trace, step, visualizationRunning } = this.state;

    return (
      <div className="App">
        <Navbar
          handleArrayReset={this.handleArrayReset}
          handleSizeChange={this.handleSizeChange}
          handleAnimationSpeedChange={this.handleAnimationSpeedChange}
          handleAlgorythmChange={this.handleAlgorythmChange}
          handleStart={this.handleStart}
          stopVisualization={this.stopVisualization}
          visualizationRunning={visualizationRunning}
          arraySize={arraySize}
          animationSpeed={animationSpeed}
        />
        <MainArray array={array} trace={trace} step={step} />
      </div>
    );
  }
}

export default App;
