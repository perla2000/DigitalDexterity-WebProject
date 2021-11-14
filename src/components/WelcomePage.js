import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import vid from "./videos/dark.mp4";

// const history = useHistory();

// const routeChange = () => {
//   let path = "/login";
//   history.push(path);
// };

function Welcome() {
  return (
    <>
      <div style={{ backgroundColor: "black", height: "90px" }}>
        <Link
          to="/login"
          className="btn btn-primary"
          style={{
            width: "250px",
            height: "50px",
            fontSize: "30px",
            backgroundColor: "black",
            marginLeft: "85%",
            marginBottom: "20px",
            borderBlockColor: "black",
          }}
        >
          Sign up/ Log In
        </Link>
      </div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={vid} type="video/mp4" />
      </video>
      <div
        className="center"
        href=""
        style={{
          fontSize: "60px",
          fontFamily: "arial",
        }}
      >
        <Link
          to="/login"
          style={{
            color: "white",
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            objectFit: "contain",
            zIndex: "-1",
            textDecoration: "none",
          }}
        >
          Digital Dexterity
        </Link>
      </div>
    </>
  );
}
export default Welcome;
