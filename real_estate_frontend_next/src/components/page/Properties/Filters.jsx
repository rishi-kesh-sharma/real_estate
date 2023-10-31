import {
  Flex,
  SliderThumb,
  SliderTrack,
  Text,
  Icon,
  Slider,
  SliderFilledTrack,
  FormControl,
  RadioGroup,
  FormLabel,
  Radio,
} from "@chakra-ui/react";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { BsFilter } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
const categories = [
  "land",
  "flat",
  "office space",
  "house",
  "shop space",
  "apartment",
];
const ratings = [1, 3, 2, 1];
let purposes = ["rent", "buy"];

const Filters = ({}) => {
  // const priceRef = useRef(null);
  const [showfilters, setShowFilters] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationData, setLocationData] = useState();
  const [showLocations, setShowLocations] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [filters] = useState(filterData);
  const [price, setPrice] = useState([100000, 100000000]);
  const [rating, setRating] = useState(1);
  const [purpose, setPurpose] = useState(purposes);
  const [categoryToggle, setCategoryToggle] = useState(false);

  const [ratingsToggle, setRatingsToggle] = useState(false);
  const [category, setCategory] = useState(categories[0]);
  const router = useRouter();

  const priceHandler = (e) => {
    // setPrice(priceRef.current.value);
    // api request
  };
  return (
    <div className="flex flex-col gap-[2rem] py-3 text-sm overflow-hidden">
      <div className=" flex flex-wrap  items-center justify-between gap-[1rem]  ">
        <p className="text-[1rem] text-gray-600  ">
          Search Property By Filters
        </p>
        <p className="text-sm  p-[0.2rem] max-w-[100px]  shadow-md items-center justify-center  rounded-md text-gray-200 bg-green-500 ">
          Clear All
        </p>
      </div>
      {/* price slider filter */}
      <div className="flex flex-col gap-2 border-b px-4">
        <span className="font-medium text-xs">PRICE</span>
        <RangeSlider
          // ref={priceRef}
          // onThumbDragEnd={priceHandler}
          onInput={(value) => {
            setPrice(value);
          }}
          min={100000}
          max={10000000000}
        />

        <div className="flex gap-3 items-center justify-between mb-2 min-w-full w-full flex-col mt-4  ">
          <span className="flex-1 border px-4 py-1 rounded-sm text-gray-800 bg-gray-50  w-full">
            ₹{price[0]}
          </span>
          <span className="font-medium text-gray-400">to</span>
          <span className="flex-1 border px-4 py-1 rounded-sm text-gray-800 bg-gray-50 w-full">
            ₹{price[1]}
          </span>
        </div>
      </div>
      {/* price slider filter */}
      {/* category filter */}
      <div className="flex flex-col border-b px-4">
        <div
          className="flex justify-between cursor-pointer py-2 pb-4 items-center"
          onClick={() => setCategoryToggle(!categoryToggle)}>
          <p className="font-medium text-xs uppercase">Category</p>
          {categoryToggle ? (
            <MdExpandLess sx={{ fontSize: "20px" }} />
          ) : (
            <MdExpandMore sx={{ fontSize: "20px" }} />
          )}
        </div>
        {categoryToggle && (
          <div className="flex flex-col pb-1 gap-[0.5rem] py-[1rem]">
            {categories.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-start gap-[0.5rem] ">
                  <input
                    type="radio"
                    name={"category"}
                    id={item}
                    className="h-[1.3rem] w-[1.3rem]"
                    value={item}
                  />
                  <label for={item} className="capitalize text-[1rem]">
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* category filter */}

      {/* ratings filter */}
      <div className="flex flex-col border-b px-4">
        <div
          className="flex justify-between cursor-pointer py-2 pb-4 items-center"
          onClick={() => setRatingsToggle(!ratingsToggle)}>
          <p className="font-medium text-xs uppercase">ratings</p>
          {ratingsToggle ? (
            <MdExpandLess sx={{ fontSize: "20px" }} />
          ) : (
            <MdExpandMore sx={{ fontSize: "20px" }} />
          )}
        </div>

        {ratingsToggle && (
          <div className="flex flex-col pb-1 gap-[0.5rem]">
            {ratings.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-start gap-[0.5rem] ">
                  <input
                    type="radio"
                    name={"category"}
                    id={item}
                    className="h-[1.3rem] w-[1.3rem]"
                    value={item}
                  />
                  <label for={item} className="capitalize text-[1rem]">
                    {item}
                  </label>
                </div>
              );
            })}
            {/* )} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
