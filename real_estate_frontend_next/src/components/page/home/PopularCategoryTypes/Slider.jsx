import React from "react";

import CategoryTypeCard from "./CategoryTypeCard";
import { featured } from "../../../../data/Data";
import CustomSlider from "../../../utils/CustomSlider";
import Container from "@/components/utils/Container";

const Slider = ({ categories }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    className: "center",
    arrows: false,
    responsive: [
      {
        breakpoint: 2800,
        settings: {
          slidesToShow: 5,
          // centerMode: false,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          // centerMode: false,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },

      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          className: "center",
        },
      },

      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          className: "center",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="my-[1rem] py-[1rem]">
      <CustomSlider settings={settings}>
        {categories?.map((feature, index) => (
          <CategoryTypeCard feature={feature} key={index} />
        ))}
      </CustomSlider>
    </div>
  );
};

export default Slider;
