import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

function DetailsCarousel(props, id) {
  return (
    <div className="carousel-wrap">
      {props.imageURL.length > 1 ?
        <Carousel> {
          props.imageURL.map((image, id) => (
            <Carousel.Item key={image.id}>
              <div className="details-img" key={image.id}>
                <img style={{ width: 400, height: 300 }} src={image} alt="item" />
              </div>
            </Carousel.Item>
          ))
        }
        </Carousel>
        :
        <div className="details-img">
          <img style={{ width: 400, height: 300 }} src={props.imageURL[0]} alt="item" />
        </div>
      }</div>
  );
}

export default DetailsCarousel;