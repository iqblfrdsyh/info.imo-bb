import { Carousel } from "@material-tailwind/react";
import React from "react";

const Banner = () => {
  return (
    <Carousel
      className="rounded-xl h-[400px]"
      autoplay={true}
      loop={true}
      autoplayDelay={5000}
    >
      <img
        src="https://img.mobilelegends.com/group1/M00/00/B9/Cq2IxmOZjLOAISnZAAEcxdmOfZU052.png?width=572&height=269"
        alt="image 1"
        className="object-fill h-[400px] w-full"
        loading="lazy"
      />
      <img
        src="https://img.mobilelegends.com/group1/M00/00/BA/rBEABWRYr56AJNUtAAEOdgYZ0jw995.jpg?width=572&height=269"
        alt="image 2"
        className="object-fill h-[400px] w-full"
        loading="lazy"
      />
    </Carousel>
  );
};

export default Banner;
