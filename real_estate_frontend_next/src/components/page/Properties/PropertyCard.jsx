import Image from "next/image";
import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import styled from "./index.module.css";
import Link from "next/link";

const PropertyCard = ({ property }) => {
  const { image, category, locationInfo, name, price, type } = property;
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = (e) => {
    setIsLiked(!isLiked);
  };
  return (
    <>
      <div className="box shadow p-2 flex flex-col gap-2 ">
        <Link href={`/property/${property?.id}`}>
          <div className="img rounded-lg">
            <Image src={image} className="rounded-lg " alt="" />
          </div>
        </Link>
        <div className={`${styled.text} text mt-[0.8rem]  `}>
          <div
            className={`${styled.category} ${styled.flex} flex  items-center justify-between category`}>
            <span
              className="mt-0 text-sm"
              style={{
                background: category === "For Sale" ? "#25b5791a" : "#ff98001a",
                color: category === "For Sale" ? "#25b579" : "#ff9800",
              }}>
              {category}
            </span>
            {isLiked ? (
              <FcLike onClick={handleLikeClick} className="cursor-pointer" />
            ) : (
              <FcLikePlaceholder
                onClick={handleLikeClick}
                className="cursor-pointer"
              />
            )}
          </div>
          <h4 className="text-sm">{name}</h4>
          <p className="text-xs text-gray-400">{locationInfo.district}</p>
        </div>
        <div
          className={`${styled.button} ${styled.flex} button flex items-center justify-between`}>
          <div>
            <button className=" px-2 py-[0.2rem] text-center font-light">
              {price}
            </button>{" "}
            <label htmlFor="" className="text-center text-gray-400">
              /sqft
            </label>
          </div>
          <span className="text-sm text-gray-400">{type}</span>
        </div>
      </div>
    </>
  );
};

export default PropertyCard;

// import Link from "next/link";
// import Image from "next/image";
// import { Box, Flex, Text } from "@chakra-ui/layout";
// import { Avatar } from "@chakra-ui/avatar";
// import { FaBed, FaBath } from "react-icons/fa";
// import { BsGridFill } from "react-icons/bs";
// import { GoVerified } from "react-icons/go";
// import millify from "millify";
// import { p1 as DefaultImage } from "../../../../public/assets/images/properties";

// import DefaultImage from "../assets/images/house.jpg";

// const PropertyCard = ({
//   property: {
//     coverPhoto,
//     price,
//     rentFrequency,
//     rooms,
//     title,
//     baths,
//     area,
//     agency,
//     isVerified,
//     externalID,
//   },
// }) => (
//   <Link href={`/property/${externalID}`} passHref className="w-[320px]">
//     <Flex className="flex-col justify-center items-center gap-[0.4rem] p-3 border rounded-lg ">
//       <Box className="w-[300px] h-[200px]">
//         <img
//           src={coverPhoto ? coverPhoto.url : DefaultImage.src}
//           className=" w-[100%] h-[100%] rounded-lg object-cover"
//         />
//       </Box>
//       <Box className="w-[100%] flex flex-col gap-3">
//         <Flex className=" justify-between items-center ">
//           <Flex alignItems="center">
//             <Box>{isVerified && <GoVerified />}</Box>
//             <Text className="text-sm bg-green-100 text-green-900 px-[0.4rem] py-[0.2rem] text-semibold">
//               AED {price}
//               {rentFrequency && `/${rentFrequency}`}
//             </Text>
//           </Flex>
//           <Box className="rounded-full">
//             <img
//               size="sm"
//               src={agency?.logo?.url}
//               className="w-[50px] h-[50px] rounded-full"></img>
//           </Box>
//         </Flex>
//         <Flex className="w-[100%] text-green-600 flex justify-between gap-5 ">
//           <Box className="flex items-center  gap-2">
//             {rooms}
//             <FaBed />
//           </Box>
//           <Box className="flex items-center  gap-2">
//             {baths} <FaBath />
//           </Box>
//           <Box className="flex items-center  gap-2">
//             {millify(area)} sqft <BsGridFill />
//           </Box>
//         </Flex>
//         <Text fontSize="sm" className="text-gray-400 text-sm">
//           {title.length > 40 ? title.substring(0, 30) + "..." : title}
//         </Text>
//       </Box>
//     </Flex>
//   </Link>
// );

// export default PropertyCard;
