import React, { useContext, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { list } from "@/data/Data";
import PropertyCard from "../../Properties/PropertyCard";
import { getFavorites } from "@/store/features/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { profileContext } from "@/pages/_app";
import { getUserFromLocalStorage } from "@/utils/LocalStorage";
const FavoritePropertiesContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(getUserFromLocalStorage(localStorage));
    dispatch(
      getFavorites({ addedBy: user?._id, populate: "addedBy property" })
    );
  }, [dispatch]);
  const favorites = useSelector((state) => state.favorite.favorites);
  const list = favorites?.map((item) => ({
    id: item?.property?._id,
    name: item?.property?.name,
    type: item?.property?.category?.name,
    image: item?.property?.images?.[0],
    location: `${item?.property?.location?.tole}-${item?.property?.location?.ward}, ${item?.property?.location?.district}`,
    purpose: item?.property?.purpose === "sale" ? "For Sale" : "For Rent",
    price: `Rs. ${item?.property?.price}`,
    rentFrequency: item?.property?.rentFrequency,
    description: item?.property?.description,
    furnishingStatus: item?.property?.furnishingStatus,
    amenities: [
      { amenities: item?.property?.amenities?.map((a) => ({ text: a?.name })) },
    ],
    photos: item?.property?.images,
  }));
  return (
    <div className="w-full md:w-2/3">
      <Text
        fontSize="2xl"
        fontWeight="semibold"
        className="text-[1.6rem] mb-[2rem]">
        Favorite Properties
      </Text>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-[1rem]">
        {list?.map((favorite) => (
          <PropertyCard property={favorite} key={favorite?._id} />
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
export default FavoritePropertiesContainer;
