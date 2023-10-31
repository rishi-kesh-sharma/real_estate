import React from "react";
import Back from "../../utils/Back";
import Heading from "../../utils/Heading";
import featureImage from "../../../../public/assets/images/house.jpg";
import styles from "./index.module.css";
import Container from "@/components/utils/Container";

const About = () => {
  return (
    <div className={`mb-5 flex flex-col gap-[3rem] `}>
      <Back
        name="About Us"
        title="About Us - Who We Are?"
        cover={featureImage.src}
      />
      <Container className="flex flex-col gap-[1.5rem]">
        <div
          className={`${styles.left} ${styles.row} left row flex flex-col gap-[0.3rem]`}>
          <Heading
            title="Our Agency Story"
            subtitle="Check out our company story and work process"
          />

          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <button className="  py-3 px-3 max-w-[150px] bg-green-500 text-gray-200 rounded-lg font-normal ">
            More About Us
          </button>
        </div>
        <div className="w-full ">
          <img
            src="./immio.jpg"
            alt=""
            className="w-full max-h-[400px] object-cover"
          />
        </div>
      </Container>
    </div>
  );
};

export default About;
