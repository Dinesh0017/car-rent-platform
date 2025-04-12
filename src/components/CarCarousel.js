'use client';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarCarousel = () => (
  <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
      className="rounded-lg shadow-lg"
    >
      <div>
        <img
          src="/assets/rentcar.jpg"
          alt="Car 1"
          className="object-cover w-full h-60 sm:h-72 md:h-80 lg:h-96 rounded-lg"
        />
      </div>
      <div>
        <img
          src="/assets/subaru.jpg"
          alt="Car 2"
          className="object-cover w-full h-60 sm:h-72 md:h-80 lg:h-96 rounded-lg"
        />
      </div>
      <div>
        <img
          src="/assets/tesla.jpg"
          alt="Car 3"
          className="object-cover w-full h-60 sm:h-72 md:h-80 lg:h-96 rounded-lg"
        />
      </div>
      <div>
        <img
          src="/assets/bens.jpg"
          alt="Car 4"
          className="object-cover w-full h-60 sm:h-72 md:h-80 lg:h-96 rounded-lg"
        />
      </div>
      <div>
        <img
          src="/assets/bmw.jpeg"
          alt="Car 5"
          className="object-cover w-full h-60 sm:h-72 md:h-80 lg:h-96 rounded-lg"
        />
      </div>
    </Carousel>
  </div>
);

export default CarCarousel;
