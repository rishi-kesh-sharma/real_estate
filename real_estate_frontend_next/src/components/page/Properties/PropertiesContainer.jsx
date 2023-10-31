import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { list } from "@/data/Data";
import PropertyCard from "./PropertyCard";
const PropertiesContainer = ({ query }) => {
  const properties = list.filter((item) => {
    console.log(item);
    return item.locationInfo.district == query.district;
  });
  console.log(properties);
  return (
    <div className="">
      <Text
        fontSize="2xl"
        fontWeight="semibold"
        className="text-[1.6rem] mb-[2rem]">
        Properties {query?.purpose}
      </Text>
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-[1rem] ">
        {properties?.map((property) => (
          <PropertyCard property={property} key={property.id} />
        ))}
      </div>
      {properties.length === 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          marginTop="5"
          marginBottom="5">
          <Text fontSize="xl" marginTop="3">
            No Result Found.
          </Text>
        </Flex>
      )}
    </div>
  );
};

export default PropertiesContainer;
