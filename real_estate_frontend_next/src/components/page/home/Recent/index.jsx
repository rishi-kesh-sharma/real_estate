import React, { useEffect, useMemo } from "react";
import Heading from "../../../utils/Heading";
import { list } from "../../../../data/Data";

import styled from "./index.module.css";
import RecentCard from "./RecentCard";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";
import { useDispatch, useSelector } from "react-redux";
import { getRecentProperties } from "@/store/features/propertySlice";
import moment from "moment";

const Recent = () => {
  // Get today's date
  const today = moment();

  // Calculate the date 5 days ago
  const fiveDaysAgo = today.clone().subtract(3, "days");

  // Format the dates in the required format (YYYY-MM-DD)
  const todayFormatted = today.format("YYYY-MM-DD");
  const fiveDaysAgoFormatted = fiveDaysAgo.format("YYYY-MM-DD");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getRecentProperties({
        populate: "category amenities",
        isSold: false,
        listingDateRange: [fiveDaysAgoFormatted, todayFormatted],
      })
    );
  }, [dispatch, fiveDaysAgoFormatted, todayFormatted]);

  const recentProperties = useSelector(
    (state) => state.property.recentProperties
  );

  const list = recentProperties?.map((item) => ({
    id: item?._id,
    name: item?.name,
    type: item?.category?.name,
    image: item?.images?.[0],
    location: `${item?.location?.tole}-${item?.location?.ward}, ${item?.location?.district}`,
    purpose: item?.purpose === "sale" ? "For Sale" : "For Rent",
    price: `Rs. ${item?.price}`,
    rentFrequency: item?.rentFrequency,
    description: item?.description,
    furnishingStatus: item?.furnishingStatus,
    amenities: [
      { amenities: item?.amenities?.map((a) => ({ text: a?.name })) },
    ],
    photos: item?.images,
  }));

  return (
    <Section className={`${styled.recent} bg-gray-100 my-[2rem] py-[2rem]`}>
      <Container>
        <Heading
          title="Recently Listed Properties"
          subtitle="see our recently listed properties"
        />
        <div className="grid  lg:grid-cols-3 mt-5 gap-5 xl:grid-cols-4 xs:grid-cols-2">
          {list?.map((recent, index) => {
            return <RecentCard recent={recent} key={index} />;
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Recent;
