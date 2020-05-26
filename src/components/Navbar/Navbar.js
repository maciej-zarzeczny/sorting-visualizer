import React, { useState } from "react";
import "./Navbar.scss";
import { FaQuestion, FaCog, FaRedo } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import Slider from "react-input-slider";

const Navbar = ({ handleArrayReset, handleSizeChange, arraySize }) => {
  const [settingsActive, setSettingsActive] = useState(false);

  const settingsClass = settingsActive ? "active" : "";

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
          <select className="choose-algorythm">
            <option value="merge">Merge sort</option>
            <option value="bubble">Bubble sort</option>
            <option value="quick">Quick sort</option>
            <option value="insertion">Insertion sort</option>
          </select>
        </div>

        <button className="start">START</button>
        <FaRedo
          data-tip="Reset array"
          data-for="reset-tooltip"
          data-place="right"
          data-effect="solid"
          className="reset-icon"
          onClick={() => handleArrayReset()}
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
