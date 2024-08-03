import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import FlashSales from './FlashSales';
import BrowserByCategory from './BrowserByCategory';
import BestSellingProducts from './BestSellingProducts';
import NewArrival from './NewArrival';

const ACCESS_KEY = '-0l22hnYCqomsJY2ToywZm_iCt5dOO1lY4KPqQ3_0Ew';

function Home() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`https://api.unsplash.com/photos?client_id=${ACCESS_KEY}&per_page=5&query=phones,clothes`);
        setImages(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching images');
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="p-6">
      <div className="max-w-full mx-auto">
        <div className="relative" data-carousel="static">
          {/* Carousel wrapper */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-128 xl:h-144 overflow-hidden rounded-lg">
            {/* Carousel items */}
            {images.length > 0 ? (
              images.map((image, index) => (
                <div
                  key={index}
                  className={`duration-700 ease-in-out ${index === currentIndex ? 'block' : 'hidden'}`}
                  data-carousel-item
                >
                  <span className="absolute top-1/2 left-1/2 text-sm sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white -translate-x-1/2 -translate-y-1/2">
                    {image.alt_description || 'Slide'}
                  </span>
                  <img
                    src={image.urls.full}
                    className="block w-full h-full object-cover"
                    alt={image.alt_description || 'Image'}
                  />
                </div>
              ))
            ) : (
              <p className="text-center">No images available.</p>
            )}
          </div>
          {/* Slider indicators */}
          {images.length > 0 && (
            <div className="flex absolute bottom-4 left-1/2 z-30 space-x-2 -translate-x-1/2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-500'} hover:bg-gray-700`}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => handleDotClick(index)}
                ></button>
              ))}
            </div>
          )}
          {/* Slider controls */}
          <button
            type="button"
            className="flex absolute top-0 left-0 z-30 justify-center items-center p-2 h-full cursor-pointer group focus:outline-none"
            onClick={handlePrevClick}
            aria-label="Previous slide"
          >
            <span className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
              <FaArrowLeft className="w-6 h-6 text-white" />
              <span className="hidden">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="flex absolute top-0 right-0 z-30 justify-center items-center p-2 h-full cursor-pointer group focus:outline-none"
            onClick={handleNextClick}
            aria-label="Next slide"
          >
            <span className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
              <FaArrowRight className="w-6 h-6 text-white" />
              <span className="hidden">Next</span>
            </span>
          </button>
        </div>
      </div>
      <div className="mt-6">
        <FlashSales />
      </div>
      <div className="mt-6">
        <BrowserByCategory />
      </div>
      <div className="mt-6">
        <BestSellingProducts />
      </div>
      <div className="mt-6">
        <NewArrival />
      </div>
    </section>
  );
}

export default Home;
