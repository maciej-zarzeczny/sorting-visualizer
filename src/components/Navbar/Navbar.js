import React, { useState } from "react";
import "./Navbar.scss";
import { FaQuestion, FaCog, FaRedo } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import Slider from "react-input-slider";

const Navbar = ({
  handleArrayReset,
  handleSizeChange,
  handleAnimationSpeedChange,
  handleAlgorythmChange,
  handleStart,
  stopVisualization,
  visualizationRunning,
  arraySize,
  animationSpeed,
}) => {
  const [settingsActive, setSettingsActive] = useState(false);
  const settingsClass = settingsActive ? "active" : "";

  const algorythms = ["Merge sort", "Bubble sort", "Quick sort", "Insertion sort"];
  const buttonClass = visualizationRunning ? "disabled" : "";
  const buttonText = visualizationRunning ? "STOP" : "START";

  const handleSettingsClick = () => {
    if (!visualizationRunning) {
      setSettingsActive(!settingsActive);
    }
  };

  return (
    <nav>
      <span
        data-tip="How to use?"
        data-for="help-tooltip"
        data-place="right"
        data-effect="solid"
        className={"fab help-icon " + buttonClass}
      >
        <FaQuestion className="icon" />
      </span>
      {!visualizationRunning && <ReactTooltip id="help-tooltip" />}

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
          onClick={visualizationRunning ? () => stopVisualization() : () => handleStart()}
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
};

export default Navbar;
