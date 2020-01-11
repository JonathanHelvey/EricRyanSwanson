import React from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = () => (
  <Carousel autoPlay interval={10000} infiniteLoop>
    <div>
      <img alt="ericryanswanson" src={require('../../data/images/EricBanner1.jpg')} />
      <h1 className="legend">Eric Ryan Swanson</h1>
    </div>
    <div>
      <img alt="ericryanswanson" src={require('../../data/images/EricBanner2.jpg')} />
      <h1 className="legend">Eric Ryan Swanson</h1>
    </div>
    <div>
      <img alt="ericryanswanson" src={require('../../data/images/EricBanner3.jpg')} />
      <h1 className="legend">Eric Ryan Swanson</h1>
    </div>
  </Carousel>
);

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
export default DemoCarousel;
