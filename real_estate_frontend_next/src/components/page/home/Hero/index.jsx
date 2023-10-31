import React, { useState, useEffect } from "react";
import Heading from "../../../utils/Heading";
import styled from "./index.module.css";
import { BsSearch } from "react-icons/bs";
import CustomSelect from "@/components/utils/CustomSelect";
import { locationData, propertyMeta } from "@/data/Data";
import SearchBox from "@/components/utils/SearchBox";
import TabBtns from "@/components/utils/TabBtns";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";
import HeroText from "./HeroText";
import NepalMap from "@/components/utils/NepalMap";

const Hero = () => {
  const [show, setShow] = useState(false);
  const [currentDevice, setCurrentDevice] = useState("lg");
  const handleResize = (e) => {
    if (window.innerWidth >= 1024) return setCurrentDevice("lg");
    if (window.innerWidth < 768) return setCurrentDevice("sm");
    if (window.innerWidth >= 768 && window.innerWidth < 1024)
      return setCurrentDevice("md");
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", (e) => {});
    handleResize();
  }, []);
  return (
    <Section className={`${styled.hero} h-[90vh]  bg-gray-200`}>
      <div className="flex h-full flex-col justify-center  mt-[1rem] bg-[url('/assets/images/banner.png')] bg-center">
        <Container className="flex flex-col">
          <HeroText />
          <div className="flex flex-col gap-[0.6rem] md:mt-[2rem]">
            <TabBtns />
            <SearchBox />
            {/* <NepalMap /> */}
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Hero;
