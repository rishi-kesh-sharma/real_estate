import React from "react";
import Back from "../../utils/Back";
import styles from "./index.module.css";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../../data/Data";
import CustomSlider from "../../utils/CustomSlider";

import FeatureImage from "../../../../public/assets/images/house.jpg";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";
const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    className: "center",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Section
      className={`${styles.contact} ${styles.mb}  contact mb py-[1rem] flex flex-col gap-[3rem]`}>
      <Back
        name="Testimonials"
        title="What People Say About Us"
        cover={FeatureImage.src}
      />
      <Container
        className={`${styles.container} container bg-gray-100 py-[4rem]`}>
        <CustomSlider settings={settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard testimonial={testimonial} key={index} />
          ))}
        </CustomSlider>
      </Container>
    </Section>
  );
};

export default Testimonials;
