import React from "react";
import PopUp from "./PopUp";
import "./styles.css";
import Tests from "./test/Tests";
import { withRouter } from "react-router-dom";

class PopUpshow extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    seen: false,
  };

  togglePop = () => {
    this.props.history.push("/test");
  };

  render() {
    return (
      <div
        className="container"
        style={{
          background:
            "linear-gradient(to top, rgb(0, 157, 255) 0%, rgb(0, 0, 0) 100%)",
          height: "100%",
        }}
      >
        <div className="row justify-content-center">
          <div className="btn">
            <label
              style={{
                width: "100%",
                height: "50px",
                color: "black",
                fontSize: "30px",
                marginTop: "30%",
              }}
            >
              Insert code:
              <input style={{ width: "60%" }} type="text" name="name" />
            </label>
            <br />
            <button onClick={this.togglePop}>Start Test</button>
          </div>
          {!this.state.seen ? <PopUp toggle={this.togglePop} /> : <Tests />}
        </div>
      </div>
    );
  }
}

export default withRouter(PopUpshow);
