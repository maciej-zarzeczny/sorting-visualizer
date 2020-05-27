import React, { useState, useEffect } from "react";
import "./array.scss";

const Array = ({ array, animations }) => {
  const [barWidth, setBarWidth] = useState(0);
  useEffect(() => {
    const calculateBarWidth = () => {
      let size = array.length;
      let containerWidth = document.getElementsByClassName("array-container")[0].clientWidth;
      let width = Math.floor((containerWidth - size) / size);

      setBarWidth(width);
    };
    calculateBarWidth();
  }, [array.length]);

  return (
    <div className="array-container">
      {array.map((val, idx) => {
        let activeClass = animations.includes(idx) || animations.includes(-1) ? "active" : "";

        return (
          <div
            className={"bar " + activeClass}
            key={idx}
            style={{ height: val + "px", width: barWidth + "px" }}
          ></div>
        );
      })}
    </div>
  );
};

export default Array;
