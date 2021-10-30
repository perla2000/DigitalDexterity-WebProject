import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="offset-1 col-sm-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/github">GitHub</Link>
              </li>
              <li>
                <Link to="/tests">Tests</Link>
              </li>
              <li>
                <Link to="/training">Training</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5 className="h5">Our Address</h5>
            <address>
              <br />
              Lebanon, Beirut
              <br />
              <br />
              <i className="fa fa-phone fa-lg"></i>Phone: +961 07 625 325
              <br />
              <i className="fa fa-fax fa-lg"></i>Fax : +961 807 764 321
              <br />
            </address>
          </div>
          <div className="align-self-center">
            <div className="text-center">
              <SocialIcon url="http://google.com/+" />
              <SocialIcon url="https://www.linkedin.com/school/university-of-applied-sciences-western-switzerland/" />
              <SocialIcon url="http://twitter.com/" />
            </div>
          </div>
        </div>
        <div className="row">
          <div class="col" />
          <div class="col" />
          <div className="col col-ml-1">
            <p className="coyright">© Copyright 2021 Digital Dexterity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
