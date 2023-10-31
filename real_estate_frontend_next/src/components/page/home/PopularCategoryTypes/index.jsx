import React, { useEffect } from "react";
import Heading from "../../../utils/Heading";
import styled from "./index.module.css";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";
import Slider from "./Slider";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getCategoryCount,
} from "@/store/features/categorySlice";

const CategoryTypes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {
    if (categories?.length > 0) {
      categories?.forEach((item) => {
        dispatch(
          getCategoryCount({ cat_name: item?.name, icon: item?.images?.[0] })
        );
      });
    }
  }, [dispatch, categories]);

  const categoriesCount = useSelector((state) => state.category.categoryCount);

  return (
    <Section
      className={`${styled.featured} featured my-[2rem] bg-gray-100 py-[2rem] `}
    >
      <Container className="container">
        <Heading
          title="Popular Categories"
          subtitle="Find All Type of Property."
        />
        <Slider categories={categoriesCount} />
      </Container>
    </Section>
  );
};

export default CategoryTypes;
