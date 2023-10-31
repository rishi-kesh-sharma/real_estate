import React from "react";

import CustomSlider from "@/components/utils/CustomSlider";
import { list } from "./../../../../data/Data";
import ExploreHomesCard from "./ExploreHomesCard";
const Slider = ({ homes }) => {
  const list = homes?.map((item) => ({
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
    <div className="mt-5 grid xs:grid-cols-2  gap-5  lg:grid-cols-3 xl:grid-cols-4">
      {/* <CustomSlider settings={settings}> */}
      {list?.map((property, index) => (
        <ExploreHomesCard property={property} key={index} id={index} />
      ))}
      {/* </CustomSlider> */}
    </div>
  );
};

export default Slider;
