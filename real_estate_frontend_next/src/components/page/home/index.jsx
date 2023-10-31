"use client";
import React from "react";
import Hero from "./Hero";

import CategoryTypes from "./PopularCategoryTypes";
import Recent from "./Recent";
import FeaturedProperties from "./FeaturedProperties";
import FeaturedAgencies from "./FeaturedAgencies";
import Blogs from "./Blogs";
import ExploreHomes from "./ExploreHomes/ExploreHomes";
import HelpSection from "./HelpSection/HelpSection";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryTypes />
      <FeaturedProperties />
      <Recent />
      <ExploreHomes />
      <Blogs />
      {/* <FeaturedAgencies /> */}
      <HelpSection />
    </>
  );
};

export default Home;

export async function getServerSideProps({ req, query, res, baseUrl }) {
  console.log("hello from home page");
  return;
}
