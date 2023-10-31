import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { list } from "@/data/Data";
import PropertyCard from "../../Properties/PropertyCard";

const MyPropertiesContainer = () => {
  const router = useRouter();
  return (
    <div className="w-full md:w-2/3">
      <Text
        fontSize="2xl"
        fontWeight="semibold"
        className="text-[1.6rem] mb-[2rem] mt-5 md:mt-0">
        My Properties
      </Text>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-[1rem]">
        {list.map((property) => (
          <PropertyCard property={property} key={property.id} />
        ))}
      </div>
      {list.length === 0 && (
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

export default MyPropertiesContainer;
