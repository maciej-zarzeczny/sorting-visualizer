import React, { useState, useEffect } from "react";
import "./array.scss";

const Array = ({ array, trace, step }) => {
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

  const arrayChart =
    trace.arrays.length > 0
      ? trace.arrays[step].map((val, idx) => {
          let barStyles = "bar";
          if (trace.comparisons[step].includes(idx)) barStyles += " compared";
          if (trace.swaps[step].includes(idx)) barStyles += " swapped";
          if (trace.sorted[step].includes(idx) || trace.sorted[step].includes(-1))
            barStyles += " sorted";

          return (
            <div
              className={barStyles}
              key={idx}
              style={{ height: val + "px", width: barWidth + "px" }}
            ></div>
          );
        })
      : array.map((val, idx) => {
          return (
            <div
              className={"bar"}
              key={idx}
              style={{ height: val + "px", width: barWidth + "px" }}
            ></div>
          );
        });

  return <div className="array-container">{arrayChart}</div>;
};

export default Array;
