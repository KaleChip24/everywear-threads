import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuid } from "uuid";
import { config } from "react-spring";

export default class Example extends Component {
  state = {
    goToSlide: 2,
    goToSlideDelay: 5,
    offsetRadius: 8,
    showNavigation: false,
    config: config.slow
  };

  slides = [
    {
      key: uuid(),
      content: <img src="https://i.ibb.co/6n5WQRz/NewStyle.png" alt="1" />
    },
    {
      key: uuid(),
      content: <img src="https://i.ibb.co/9cgZVrW/New-Arrival.png" alt="2" />
    },
    {
      key: uuid(),
      content: <img src="https://i.ibb.co/Ytfk965/New-Season.png" alt="3" />
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  render() {
    return (
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          animationConfig={this.state.config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >

        </div>
      </div>
    );
  }
}
