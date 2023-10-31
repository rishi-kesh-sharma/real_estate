import React, { useEffect } from "react";
import Heading from "@/components/utils/Heading";
import Slider from "./Slider";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";
import { useDispatch, useSelector } from "react-redux";
import { getHomesProperties } from "@/store/features/propertySlice";
import { getCatId } from "@/store/features/categorySlice";
const ExploreHomes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatId({ name: "house" }));
  }, [dispatch]);

  const cat_id = useSelector((state) => state.category.catId);

  useEffect(() => {
    if (cat_id) {
      dispatch(getHomesProperties(cat_id));
    }
  }, [dispatch, cat_id]);

  const homes = useSelector((state) => state.property.homes);

  console.log(homes, "homes");

  return (
    <Section>
      <Container>
        <Heading
          title={"Explore homes"}
          subtitle={
            "Take a deep dive and browse homes for sale, original neighborhood photos, resident reviews and local insights to find what is right for you."
          }
        />
        <Slider homes={homes} />
      </Container>
    </Section>
  );
};

export default ExploreHomes;
