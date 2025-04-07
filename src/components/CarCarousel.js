'use client';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarCarousel = () => (
  <div className="flex-1 max-w-md mx-auto">
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
      className="shadow-md rounded-lg"
    >
      <div>
        <img src="/assets/rentcar.jpg" alt="Car 1" />
      </div>
      <div>
        <img src="/assets/subaru.jpg" alt="Car 2" />
      </div>
      <div>
        <img src="/assets/tesla.jpg" alt="Car 3" />
      </div>
      <div>
        <img src="/assets/bens.jpg" alt="Car 4" />
      </div>
      <div>
        <img src="/assets/bmw.jpeg" alt="Car 5" />
      </div>
    </Carousel>
  </div>
);

export default CarCarousel;
