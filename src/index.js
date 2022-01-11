import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/bootstrap-social.css";
import "./index.css";
import { ConfigureStore } from "./redux/configureStore";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";


ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
