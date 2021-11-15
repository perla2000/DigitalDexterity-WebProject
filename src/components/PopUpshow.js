import React from "react";
import PopUp from "./PopUp";
import "./styles.css";
import Tests from "./test/Tests";

class PopUpshow extends React.Component {
  state = {
    seen: false,
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen,
    });
  };

  render() {
    return (
      <div>
        <div className="btn" onClick={this.togglePop}>
          <button>Start Test</button>
        </div>
        {!this.state.seen ? <PopUp toggle={this.togglePop} /> : <Tests />}
      </div>
    );
  }
}

export default PopUpshow;
