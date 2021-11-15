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
        className="container-fluid"
        style={{
          background:
            "linear-gradient(to top, rgb(0, 157, 255) 0%, rgb(0, 0, 0) 100%)",
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <div className="row justify-content-center">
          <div className="btn">
            <label
              style={{
                width: "100%",
                height: "50px",
                color: "white",
                fontSize: "40px",
                marginTop: "30%",
                marginLeft: "400px",
              }}
            >
              Insert code:
              <br />
              <br />
              <br />
              <input style={{ width: "80%" }} type="text" name="name" />
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
