import React, { useState } from "react";
import "./Navbar.scss";
import { FaQuestion, FaCog, FaRedo } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import Slider from "react-input-slider";

function Navbar({
  handleArrayReset,
  handleSizeChange,
  handleAnimationSpeedChange,
  handleAlgorythmChange,
  handleStart,
  stopVisualization,
  visualizationRunning,
  arraySize,
  animationSpeed,
}) {
  const [settingsActive, setSettingsActive] = useState(false);
  const [infoActive, setInfoActive] = useState(false);
  const settingsClass = settingsActive ? "active" : "";
  const infoClass = infoActive ? "active" : "";

  const algorythms = ["Merge sort", "Bubble sort", "Quick sort", "Insertion sort"];
  const buttonClass = visualizationRunning ? "disabled" : "";
  const buttonText = visualizationRunning ? "STOP" : "START";

  const handleSettingsClick = () => {
    if (!visualizationRunning) {
      setSettingsActive(!settingsActive);
    }
  };

  const handleInfoClick = () => {
    if (!visualizationRunning) {
      setInfoActive(!infoActive);
    }
  };

  const handleStartClick = () => {
    if (settingsActive) setSettingsActive(false);
    if (infoActive) setInfoActive(false);
    handleStart();
  };

  return (
    <nav>
      <div className="info-container">
        <span
          data-tip="How to use?"
          data-for="help-tooltip"
          data-place="right"
          data-effect="solid"
          className={"fab help-icon " + buttonClass}
          onClick={handleInfoClick}
        >
          <FaQuestion className="icon" />
        </span>
        {!visualizationRunning && <ReactTooltip id="help-tooltip" />}

        <div className={"info " + infoClass}>
          <p>Choose desired sorting algorythm and press start to see the visualization.</p>
          <p>
            You can adjust array size and sorting speed by clicking on a settings icon in upper
            right corner.
          </p>
        </div>
      </div>

      <section className="controls">
        <div className="choose-algorythm-container">
          <select
            disabled={visualizationRunning}
            className={"choose-algorythm " + buttonClass}
            onChange={(e) => handleAlgorythmChange(e.target.value)}
          >
            {algorythms.map((el, idx) => {
              return (
                <option value={idx} key={idx}>
                  {el}
                </option>
              );
            })}
          </select>
        </div>

        <button
          className="start"
          onClick={visualizationRunning ? () => stopVisualization() : () => handleStartClick()}
        >
          {buttonText}
        </button>
        <FaRedo
          data-tip="Reset array"
          data-for="reset-tooltip"
          data-place="right"
          data-effect="solid"
          className="reset-icon"
          onClick={handleArrayReset}
        />
        <ReactTooltip id="reset-tooltip" />
      </section>

      <div className="settings-container">
        <span
          data-tip="Settings"
          data-for="settings-tooltip"
          data-place="left"
          data-effect="solid"
          className={"fab settings-icon " + buttonClass}
          onClick={handleSettingsClick}
        >
          <FaCog className="icon" />
        </span>
        {!visualizationRunning && <ReactTooltip id="settings-tooltip" />}

        <div className={"settings " + settingsClass}>
          <p>Array size: {arraySize}</p>
          <Slider
            styles={{
              active: {
                backgroundColor: "#a8dadc",
              },
            }}
            axis="x"
            xstep={1}
            xmin={10}
            xmax={200}
            x={arraySize}
            onChange={({ x }) => handleSizeChange(x)}
          />
          <p>Animation speed: {animationSpeed}</p>
          <Slider
            styles={{
              active: {
                backgroundColor: "#a8dadc",
              },
            }}
            axis="x"
            xstep={1}
            xmin={1}
            xmax={25}
            x={animationSpeed}
            onChange={({ x }) => handleAnimationSpeedChange(x)}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
