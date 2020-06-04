import React from "react";
import "./array.scss";

class Array extends React.Component {
  state = {
    barWidth: 0,
  };

  componentDidMount() {
    this.calculateBarWidth();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.array.length !== this.props.array.length) {
      this.calculateBarWidth();
    }
  }

  calculateBarWidth() {
    const { array } = this.props;

    let size = array.length;
    let containerWidth = document.getElementsByClassName("array-container")[0].clientWidth;
    let barWidth = Math.floor((containerWidth - size) / size);

    this.setState({ barWidth });
  }

  render() {
    const { array, trace, step } = this.props;
    const { barWidth } = this.state;

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
  }
}

export default Array;
