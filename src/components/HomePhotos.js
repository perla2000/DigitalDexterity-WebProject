import React, { Component } from "react";
import { Media } from "reactstrap";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logos: [
        {
          id: 0,
          name: "What is digital Dexterity",
          image: "assets/image.png",
          category: "mains",
          description:
            "Digital dexterity is the ability of employees to adapt and adopt existing and emerging technologies in their field to produce better results for their company. As the digital world is constantly changing, the desire to adapt and innovate using new technologies is important for employees. The level of digital dexterity can affect both the employees and the organization.",
          justifyContent: "left",
        },
        {
          id: 1,
          name: "It's Impact Nowadays",
          image: "assets/dexterite.jpg",
          category: "mains",
          description:
            "An agile and flexible team can make all the difference when implementing a digital transformation and this is where digital dexterity comes in. Digital dexterity in the workforce keeps your employees on their toes and ready to embrace the next best innovation or new technology.the benefits of promoting digital dexterity in your organization are; the ability to work remotely, with hight efficiency and flexibility. Therefore it's important for companies to include it in their requirements for employees   ",
        },
        {
          id: 2,
          name: "Our Mission",
          image: "assets/dexterite.jpg",
          category: "mains",
          description:
            "Our community aims to boost the productivity of entreprise by priming your organization for future problems and finding solutions using digital tools.",
        },
      ],
    };
  }

  render() {
    const seeim = this.state.logos.map((logo) => {
      return (
        //every element in react requires a key for updates
        <div key={logo.id} className="col-12 mt-5">
          <Media tag="li">
            <Media right>
              <Media
                object
                src={logo.image}
                alt={logo.name}
                className="photo "
              />
            </Media>
            <Media left body className="page-enter">
              <Media heading>{logo.name}</Media>
              <p>{logo.description}</p>
            </Media>
          </Media>
        </div>
      );
    }); //map iterates //logos list for every dish return layout
    return (
      <div
        className="container"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 1000,
        }}
      >
        <div className="row" style={{ padding: "40px" }}>
          <Media list style={{ width: "100%" }}>
            {this.state.logos.map((logo, i) => (
              //every element in react requires a key for updates
              <Media
                tag="li"
                key={logo.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexDirection: i % 2 == 1 && "row-reverse",
                  style: {
                    justifyContent: "center",
                    padding: "30px 30px 30px 30px",
                    backgroundImage: "assets/bg.jpg",
                  },
                }}
              >
                <Media left>
                  <Media
                    object
                    src={logo.image}
                    alt={logo.name}
                    className="photo "
                  />
                </Media>
                <Media body>
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: 30,
                      marginBottom: 30,
                    }}
                  >
                    <Media heading style={{ marginBottom: "10px" }}>
                      {logo.name}
                    </Media>
                    <p>{logo.description}</p>
                  </div>
                </Media>
              </Media>
            ))}
          </Media>
        </div>
      </div>
    );
  }
}

export default Menu;
