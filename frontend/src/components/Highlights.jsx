import highlightsCover from "../assets/ImgHighlights/highlightsCover.jpeg";
import highlight2 from "../assets/ImgHighlights/highlight2.jpeg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Highlights = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: highlightsCover,
      title: "One-Stop Shop for Power Tools & Pressure Washers",
      description: "- Deals You Can’t Miss!",
    },
    {
      image: highlight2,
      title: "One-Stop Shop for Power Tools & Pressure Washers",
      description: "Top Pressure Washers Now on Big Sale!",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [slides.length]);

  const goToPreviousSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <header className="relative">
      <div className="relative flex flex-col items-center justify-center">
        <img
          src={slides[currentSlide].image}
          alt={`highlight${currentSlide + 1}`}
          className="bg-cover opacity-20 w-full"
        />

        <div className="absolute transform text-left z-10 text-white px-2 md:px-20">
          <h1 className="font-bold textarea-lg md:text-5xl ">
            {slides[currentSlide].title}
          </h1>
          <p className="textarea-md md:text-xl">
            {slides[currentSlide].description}
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 w-full flex justify-center space-x-2">
        <button
          onClick={goToPreviousSlide}
          className="bg-gray-500 text-white rounded-full w-2 h-2 md:w-3 md:h-3 focus:outline-none"
        />
        <button
          onClick={goToNextSlide}
          className="bg-gray-500 text-white rounded-full w-2 h-2 md:w-3 md:h-3 focus:outline-none"
        />
      </div>
    </header>
  );
};

export default Highlights;