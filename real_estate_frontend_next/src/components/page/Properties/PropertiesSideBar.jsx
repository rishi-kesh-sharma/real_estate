import { useEffect, useState } from "react";
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Slider,
  RadioGroup,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel, MdExpandLess, MdExpandMore } from "react-icons/md";
import Image from "next/image";

import { filterData } from "../../../data/Data";
import { getFilterValues } from "../../../utils/filter";
import { baseUrl, fetchApi } from "../../../utils/fetchApi";
import { p1 as defaultPropertyImage } from "../../../../public/assets/images/properties";
import { FaStar } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";
import Filters from "./Filters";

// FUNCTIONAL COMPONENT
export default function PropertesSideBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationData, setLocationData] = useState();
  const [showLocations, setShowLocations] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filters] = useState(filterData);
  const [price, setPrice] = useState([0, 200000]);
  const [categoryToggle, setCategoryToggle] = useState(false);
  const [ratingsToggle, setRatingsToggle] = useState(false);
  const [category, setCategory] = useState(false);
  const router = useRouter();

  return (
    <Flex className="py-[2rem] w-full lg:w-1/2 2xl:w-1/3   gap-[1.5rem] justify-start flex flex-wrap  flex-col  md:shadow-lg md:px-[1rem]">
      {/* CLEAR ALL OPTION */}

      {/* FILTERS */}
      <Filters />
      <div className="gap-[0.4rem]">
        <Button
          onClick={() => setShowLocations(!showLocations)}
          border="1px"
          borderColor="gray.200"
          marginTop="2"
          className="border border-solid flex flex-col border-gray-600 text-gray bg-green-700 py-[0.8rem] text-gray-200 w-full">
          Search Location
        </Button>
        {showLocations && (
          <Flex
            flexDir="column"
            pos="relative"
            paddingTop="2"
            className="gap-[0.4rem]">
            <Input
              placeholder="Type Here"
              value={searchTerm}
              focusBorderColor="gray.300"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 border-solid p-[0.5rem] text-lg"
            />
            {searchTerm !== "" && (
              <Icon
                as={MdCancel}
                pos="absolute"
                cursor="pointer"
                right="5"
                top="15"
                zIndex="100"
                onClick={() => setSearchTerm("")}
              />
            )}
            {loading && <Spinner margin="auto" marginTop="3" />}
            {showLocations && (
              <Box height="300px" overflow="auto" className="border px-2">
                {locationData?.map((location) => (
                  <Box
                    key={location.id}
                    onClick={() => {
                      searchProperties({
                        locationExternalIDs: location.externalID,
                      });
                      setShowLocations(false);
                      setSearchTerm(location.name);
                    }}>
                    <Text
                      cursor="pointer"
                      bg="gray.200"
                      p="2"
                      borderBottom="1px"
                      borderColor="gray.100">
                      {location.name}
                    </Text>
                  </Box>
                ))}
                {!loading && !locationData?.length && (
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    flexDir="column"
                    marginTop="5"
                    marginBottom="5">
                    {/* <Image src={noresult} /> */}
                    <Text fontSize="xl" marginTop="3">
                      Waiting to search!
                    </Text>
                  </Flex>
                )}
              </Box>
            )}
          </Flex>
        )}
      </div>
    </Flex>
  );
}
