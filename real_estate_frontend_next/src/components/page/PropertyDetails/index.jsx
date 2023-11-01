import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import ImageScrollbar from "../../utils/ImageScrollBar.jsx";
const PropertyDetails = ({ property: { price, rentFrequency, room, name, bathroom, area, agency, isVerified, description, purpose, furnishingStatus, amenities, images } }) => (
  <Box maxWidth="1000px" margin="auto" p="4" paddingTop={"6rem"} className="bg-gray-100">

    {images && <ImageScrollbar data={images} />}
    <Box w="full" p="6">
      <Flex paddingTop="2" alignItems="center">
        <Box paddingRight="3" color="green.400">
          {isVerified && <GoVerified />}
        </Box>
        <Text fontWeight="bold" fontSize="lg">
          USD{price} {rentFrequency && `/${rentFrequency}`}
        </Text>
        <Spacer />
        <Avatar size="sm" src={agency?.logo?.url}></Avatar>
      </Flex>
      <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
        {room}
        <FaBed /> | {bathroom} <FaBath /> | {millify(area)} sqft <BsGridFill />
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
    <Flex flexWrap="wrap" textTransform="uppercase" justifyContent="space-between">
      <Flex justifyContent="space-between" borderBottom="1px" gap="3" borderColor="gray.100" p="3">
        <Text>Type</Text>:
        <Text fontWeight="bold">{proer}</Text>
      </Flex>
      <Flex justifyContent="space-between" borderBottom="1px"  gap="3" borderColor="gray.100" p="3">
        <Text>Purpose</Text>:
        <Text fontWeight="bold">{purpose}</Text>
      </Flex>
      {furnishingStatus && (
        <Flex justifyContent="space-between" borderBottom="1px"  gap="3" borderColor="gray.100" p="3">
          <Text className="text-sm" fontSize={"medium"}>
            Furnishing Status
          </Text>:
          <Text className="text-sm" fontWeight="semibold">
            {furnishingStatus}
          </Text>
        </Flex>
      )}
    </Flex>
    <Box>
      {amenities?.length && (
        <Text fontSize="xl" fontWeight={"semibold"} marginTop="5">
          Facilites:
        </Text>
      )}
      <Flex flexWrap="wrap">
        {amenities?.map((item) =>
          item?.amenities?.map((amenity) => (
            <Text key={amenity?.text} color="blue.600" fontSize="l" p="2" bg="gray.200" m="1" borderRadius="5">
              {amenity?.text}
            </Text>
          ))
        )}
      </Flex>
    </Box>
  </Box>
);

export default PropertyDetails;
