import React from "react";
import styled from "./index.module.css";
import Image from "next/image";
import Card from "@/components/utils/Card";
const TestimonialCard = ({ testimonial }) => {
  return (
    <>
      <Card className=" w-[220px] bg-white">
        <p className="text-gray-400 text-sm">{testimonial.text}</p>
        <hr />
        <div
          className={`${styled.box} box flex  gap-[1rem] items-center justify-start`}>
          <Image
            src={testimonial.avatar}
            alt=""
            width={100}
            height={100}
            className="w-[50px] h-[50px] rounded-full"
          />
          <h4 className="text-green-400">{testimonial.profession}</h4>
        </div>
      </Card>
    </>
  );
};

export default TestimonialCard;
