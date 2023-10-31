import React from "react";
import PropertiesContainer from "./PropertiesContainer";
import PropertiesSideBar from "./PropertiesSideBar";
import Container from "@/components/utils/Container";
import Section from "@/components/utils/Section";

const Properties = ({ properties, query }) => {
  return (
    <Section className="pt-[1rem] flex flex-col gap-[2rem] mb-[2rem]">
      <Container className="flex flex-col md:flex-row items-start gap-[2rem] ">
        <PropertiesSideBar />
        <PropertiesContainer query={query} properties={properties} />
      </Container>
    </Section>
  );
};
export default Properties;
