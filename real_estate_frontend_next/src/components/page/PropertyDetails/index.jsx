import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import ImageScrollbar from "../../utils/ImageScrollBar.jsx";
const PropertyDetails = ({ property }) => {
  console.log(property);
  const {
    id,
    name,
    type,
    image,
    location,
    purpose,
    price,
    rentFrequency,
    description,
    furnishingStatus,
    amenities,
    photos,
    isVerified,
  } = {
    id: property?._id,
    name: property?.name,
    type: property?.category?.name,
    image: property?.images?.[0],
    location: `${property?.location?.tole}-${property?.location?.ward}, ${property?.location?.district}`,
    purpose: property?.purpose === "sale" ? "For Sale" : "For Rent",
    price: `Rs. ${property?.price}`,
    rentFrequency: property?.rentFrequency,
    description: property?.description,
    furnishingStatus: property?.furnishingStatus,
    amenities: [
      { amenities: property?.amenities?.map((a) => ({ text: a?.name })) },
    ],
    photos: property?.images,
    isVerified: true,
  };

  return (
    <Box
      maxWidth="1000px"
      margin="auto"
      p="4"
      paddingTop={"6rem"}
      className="bg-gray-100">
      {photos && <ImageScrollbar data={photos} />}
      <Box w="full" p="6">
        <Flex paddingTop="2" alignItems="center">
          <Box paddingRight="3" color="green.400">
            {isVerified && <GoVerified />}
          </Box>
          <Text fontWeight="bold" fontSize="lg">
            {price} {rentFrequency && `/${rentFrequency}`}
          </Text>
          <Spacer />
          {location}
          {/* <Avatar size="sm" src={agency?.logo?.url}></Avatar> */}
        </Flex>
        <Flex
          alignItems="center"
          p="1"
          justifyContent="space-between"
          w="250px"
          color="blue.400">
          {/* {rooms} */}
          {/* <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill /> */}
        </Flex>
      </Box>
      <Box marginTop="2">
        <Text fontSize="lg" marginBottom="2" fontWeight="bold">
          {name}
        </Text>
        <Text lineHeight="2" color="gray.600">
          {description}
        </Text>
      </Box>
      <Flex
        flexWrap="wrap"
        textTransform="uppercase"
        justifyContent="space-between">
        <Flex
          justifyContent="space-between"
          w="400px"
          borderBottom="1px"
          borderColor="gray.100"
          p="3">
          <Text>Type</Text>
          <Text fontWeight="bold">{type}</Text>
        </Flex>
        <Flex
          justifyContent="space-between"
          w="400px"
          borderBottom="1px"
          borderColor="gray.100"
          p="3">
          <Text>Purpose </Text>
          <Text fontWeight="bold">{purpose}</Text>
        </Flex>
        {furnishingStatus && (
          <Flex
            justifyContent="space-between"
            w="400px"
            borderBottom="1px"
            borderColor="gray.100"
            p="3">
            <Text className="text-sm" fontSize={"medium"}>
              Furnishing Status
            </Text>
            <Text className="text-sm" fontWeight="semibold">
              {furnishingStatus}
            </Text>
          </Flex>
        )}
      </Flex>
      <Box className=" flex justify-between items-end">
        <div>
          {amenities?.length && (
            <Text fontSize="xl" fontWeight={"semibold"} marginTop="5">
              Facilites:
            </Text>
          )}
          <Flex flexWrap="wrap">
            {amenities?.map((item) =>
              item?.amenities?.map((amenity) => (
                <Text
                  key={amenity?.text}
                  color="blue.600"
                  fontSize="l"
                  p="2"
                  bg="gray.200"
                  m="1"
                  borderRadius="5">
                  {amenity?.text}
                </Text>
              ))
            )}
          </Flex>
        </div>
        <button className="text-gray-100 bg-green-500 px-3 py-1 rounded-md mt-3 h-[40px] mb-1">
          Buy
        </button>
      </Box>
    </Box>
  );
};

export default PropertyDetails;
