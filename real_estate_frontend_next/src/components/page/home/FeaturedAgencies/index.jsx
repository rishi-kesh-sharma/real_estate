import React from "react";
import Heading from "../../../utils/Heading";
import styled from "./index.module.css";
import FeaturedAgencyCard from "./FeaturedAgencyCard";
import { agencies } from "../../../../data/Data";
import CardContainer from "@/components/utils/CardContainer";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";

const FeaturedAgencies = () => {
  return (
    <Section
      className={`${styled.featured} featured bg-gray-50 py-[2rem] my-[1rem] `}>
      <Container>
        <Heading
          title="Featured Agencies"
          subtitle="Find All Of Our Agencies."
        />
        <div className="mt-5 grid sm:grid-cols-3  gap-5  lg:grid-cols-4 xl:grid-cols-5">
          {" "}
          {agencies.map((agency, index) => (
            <FeaturedAgencyCard agency={agency} key={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedAgencies;
