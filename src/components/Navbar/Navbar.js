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
  arraySize,
  animationSpeed,
}) => {
  const [settingsActive, setSettingsActive] = useState(false);
  const settingsClass = settingsActive ? "active" : "";

  const algorythms = ["Merge sort", "Bubble sort", "Quick sort", "Insertion sort"];

  return (
    <nav>
      <span
        data-tip="How to use?"
        data-for="help-tooltip"
        data-place="right"
        data-effect="solid"
        className="fab help-icon"
      >
        <FaQuestion className="icon" />
      </span>
      <ReactTooltip id="help-tooltip" />

      <section className="controls">
        {/* <button className="choose-algorythm">Merge sort</button> */}

        <div className="choose-algorythm-container">
          <select
            className="choose-algorythm"
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

        <button className="start" onClick={handleStart}>
          START
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
          className="fab settings-icon"
          onClick={() => setSettingsActive(!settingsActive)}
        >
          <FaCog className="icon" />
        </span>
        <ReactTooltip id="settings-tooltip" />

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
            xmax={700}
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
            xmax={100}
            x={animationSpeed}
            onChange={({ x }) => handleAnimationSpeedChange(x)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
