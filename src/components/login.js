import React from "react";
import { Link } from "react-router-dom";
import vid from "./videos/white.mp4";

import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

function SectionLogin() {
  return (
    <>
      <div>
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "-1",
          }}
        >
          <source src={vid} type="video/mp4" />
        </video>

        <Container>
          <Row className="mx-auto">
            <Col className="mx-auto" lg="5" md="10">
              <Card
                className="card-register mt-5"
                style={{ backgroundColor: "transparent" }}
              >
                <h3 className="title mx-auto" style={{ color: "#black" }}>
                  Welcome
                </h3>
                <div
                  className="social-line text-center"
                  style={{ display: "grid", gridRowGap: 50 }}
                >
                  <div>
                    <Button
                      className="btn-neutral btn-just-icon mt-0 "
                      color="facebook"
                      href="#pablo"
                      
                      
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button
                      className="btn-neutral btn-just-icon mt-0 ml-1"
                      color="google"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                    
                      className="btn-neutral btn-just-icon mt-0 ml-1"
                      color="twitter"
                      href="#pablo"
                      
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                  </div>
                </div>
                <Form className="register-form">
                  <label className="mt-5" style={{ color:"black" }}>
                    Email
                  </label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" />
                  </InputGroup>
                  <label className="mt-5 " style={{ color:"black"}}>
                    Password
                  </label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" />
                  </InputGroup>
                  <div className="mt-5">
                    <Button
                      block
                      className="btn-round"
                      color="danger"
                      type="button"
                      href="/home"
                    >
                      Register
                    </Button>
                  </div>
                </Form>
                <div className="forgot" class="mt-5">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>
              </Card>
              <div className="col text-center">
                <Link to="/register">View Register Page</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionLogin;
