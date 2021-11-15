import React from "react";
import { Component } from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
  CardImgOverlay,
} from "reactstrap";

// core components

const items = [
  {
    src: "assets/testjpg.jpg",
    altText: "Somewhere",
    width: "100%",
    style: {
      backgroundSize: "cover",
      innerHeight: "200px",
      width: "100%",
      objectFit: "cover",
    },
  },
  // {
  //   src: "assets/idea.jpg",
  //   altText: "Somewhere else",
  //   width: "100%",
  // },
  // {
  //   src: "assets/tech.jpg",
  //   altText: "Here it is",
  //   width: "100%",
  // },
];

function SectionCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div
        className="section pt-o"
        id="carousel"
        style={{
          background:
            "linear-gradient(to top, rgb(0, 157, 255) 0%, rgb(0, 0, 0) 100%)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 550,
        }}
      >
        <div
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 550,
            color: "black",
            fontSize: "30px",
            fontFamily: "times",
            textAlign: "center",

            padding: "15px",
            position: "absolute",
            top: "30%",
          }}
        >
          {" "}
          "It is not the strongest of the species that survives, nor the most
          intelligent that survives. It is the one that is the most adaptable to
          change.”   CHARLES DARWIN"
        </div>

        {/* <div class="container-fluid">
          <Row>
            <Col style={{ backgroundSize: "cover" }}>
              <Card className="page-carousel">
                <Carousel 
                  style={{objectFit: "cover",
                  position: "absolute",
                  height:"50px",
                width:"100px"}}
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                      style={{objectFit: "cover",
                      position: "absolute"}}
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader="hiiiii"
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
          </Row>
        </div> */}
      </div>{" "}
    </>
  );
}

export default SectionCarousel;
