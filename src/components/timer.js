import { func } from "prop-types";
import React, { Component } from "react";
import { useState, useRef, useEffect } from "react";
import Trying from "./Trying";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Timer() {
  const intervalRef = useRef(null);
  const [timer, setTimer] = useState("00:00:00");

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
  }

  function startTimer(deadline) {
    let { total, hours, minutes, seconds } = getTimeRemaining(deadline);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    } else {
      clearInterval(intervalRef.current);
    }
  }

  function clearTimer(endtime) {
    setTimer("00:00:10");
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    const id = setInterval(() => {
      startTimer(endtime);
    }, 1000);
    intervalRef.current = id;
  }

  function getDeadlineTime() {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  }

  useEffect(() => {
    clearTimer(getDeadlineTime());
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); //empty arrays to act as componenetDidMount

  return (
    <div
      className="Timer"
      style={{
        fontSize: "40px",
      }}
    >
      Time Left {timer}
    </div>
  );
}
export default Timer;
// class Timer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 1,
//     };
//   }

//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         <h1>Current Count: {count}</h1>
//       </div>
//     );
//   }
//   // setInterval
//   // clearInterval
//   componentDidMount() {
//     const { startCount } = this.props;
//     this.setState({
//       count: startCount,
//     });
//     this.doIntervalChange();
//   }

//   doIntervalChange = () => {
//     this.myInterval = setInterval(() => {
//       this.setState((prevState) => ({
//         count: prevState.count - 1,
//       }));
//     }, 1000);
//   };

//   componentWillUnmount() {
//     clearInterval(this.myInterval);
//   }
// }
