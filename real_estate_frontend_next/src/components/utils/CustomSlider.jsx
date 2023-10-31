import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "./Container";

export default function CustomSlider({ children, settings }) {
  return (
    <div>
      <Slider className="py-[1rem]  items-center justify-center " {...settings}>
        {children}
      </Slider>
    </div>
  );
}
