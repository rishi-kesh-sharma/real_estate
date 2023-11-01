import React, { useEffect } from "react";
import Heading from "../../../utils/Heading";
import { list } from "../../../../data/Data";

import styled from "./index.module.css";
import FeaturedPropertyCard from "./FeaturedPropertyCard";
import CustomSlider from "../../../utils/CustomSlider";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";
import Slider from "./Slider";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedProperties } from "@/store/features/propertySlice";
import { ContainerSection } from "@/components/ui/design";

const FeaturedProperties = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeaturedProperties());
  }, [dispatch]);

  const featuredProperties = useSelector(
    (state) => state.property.featuredProperties
  );

  console.log(featuredProperties, "this is fetured properties")

  return (
    <Section
      className={`${styled.recent} ${styled.padding} mt-[3rem] bg-gray-50 py-[2rem] `}
    >
      <ContainerSection>
        <Heading
          title="Featured Properties"
          subtitle="look our featured properties"
        />
        <Slider properties={featuredProperties} />
      </ContainerSection>
    </Section>
  );
};
export default FeaturedProperties;
