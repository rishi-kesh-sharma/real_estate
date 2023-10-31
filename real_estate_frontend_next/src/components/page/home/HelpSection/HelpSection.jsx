import React from "react";
import Heading from "@/components/utils/Heading";
import CardContainer from "@/components/utils/CardContainer";
import HelpSectionCard from "./HelpSectionCard";
import { helpSectionData as data } from "@/data/Data";
import Container from "@/components/utils/Container";
const HelpSection = () => {
  return (
    <div className="bg-gray-100 mt-[2rem] pb-1">
      <Container className="my-[4rem] pt-[2rem]">
        <Heading title="See how MyRAJ can help" />
        <div className="gap-[1rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
          {data.map((item, index) => {
            return <HelpSectionCard item={item} key={index} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default HelpSection;
