import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HomeMockup01 from "../../assets/home-mockup-01.png";
import HomeMockup02 from "../../assets/home-mockup-02.png";

const HomeMockup = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [HomeMockup01, HomeMockup02];
  const timeInterval = 4000; // Time for auto-slide in milliseconds

  // Automatically change slides
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, timeInterval);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [images.length]);

  // Handle pagination click
  const handlePaginationClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="section-mt max-w-6xl mx-auto">
      <div className="relative w-full h-[240px] sm:h-[400px] md:h-[600px] flex justify-center items-center">
        {/* Images */}
        <div className="relative w-full h-full mb-4 md:mb-10">
          <motion.img
            src={images[0]}
            alt="First Image"
            className="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000"
            animate={{ opacity: activeIndex === 0 ? 1 : 0 }}
          />
          <motion.img
            src={images[1]}
            alt="Second Image"
            className="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000"
            animate={{ opacity: activeIndex === 1 ? 1 : 0 }}
          />
        </div>

        {/* Pagination */}
        <div className="absolute bottom-0 flex gap-2 justify-center w-full">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 md:h-2 w-8 rounded-full cursor-pointer ${activeIndex === index ? "bg-blue-500 w-16" : "bg-gray-400 w-6"}`}
              onClick={() => handlePaginationClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeMockup;