import CustomSlider from "@/components/utils/CustomSlider";
import { list } from "@/data/Data";
import React from "react";
import FeaturedPropertyCard from "./FeaturedPropertyCard";

const Slider = ({ properties }) => {
  const list = properties?.map((item) => ({
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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 my-5 gap-5 xl:grid-cols-4 xs:grid-cols-2">
      {/* <CustomSlider settings={settings}> */}{" "}
      {list?.map((featured, index) => {
        return <FeaturedPropertyCard featured={featured} key={index} />;
      })}
      {/* </CustomSlider> */}
    </div>
  );
};

export default Slider;
