import React, { useState } from "react";
import styled from "./index.module.css";
import Image from "next/image";

import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import Card from "@/components/utils/Card";
import CardImage from "@/components/utils/CardImage";
import CardContent from "@/components/utils/CardContent";
import Link from "next/link";
import { city1 } from "public/assets/images/cities";

const RecentCard = ({ recent }) => {
  const { image, purpose, location, name, price, type } = recent;
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = (e) => {
    setIsLiked(!isLiked);
  };
  return (
    <Card className="bg-white shadow-sm  items-start w-[100%] ">
      <Link href={`property/${recent.id}`} className="w-[100%]">
        <CardImage className="rounded-md">
          <Image
            alt=""
            src={city1 || image}
            className="rounded-lg object-cover"
          />
        </CardImage>
      </Link>

      <CardContent className="w-[100%]">
        <div className={`flex items-center justify-between`}>
          <span
            className="text-sm p-1"
            style={{
              background: purpose === "For Sale" ? "#25b5791a" : "#ff98001a",
              color: purpose === "For Sale" ? "#25b579" : "#ff9800",
            }}
          >
            {purpose}
          </span>
          {isLiked ? (
            <FcLike onClick={handleLikeClick} />
          ) : (
            <FcLikePlaceholder onClick={handleLikeClick} />
          )}
        </div>
        <h4 className=" text-sm">{name}</h4>
        <p className="text-gray-400 text-xs">{location}</p>
        <div className="flex flex-col gap-[0.1rem] xs:flex-row xs:justify-between">
          <div className="flex items-center">
            <p className="py-[0.1rem] text-center font-semibold text-sm">
              {price}
            </p>
            <p htmlFor="" className="text-center text-gray-400 text-xs">
              /sqft
            </p>
          </div>
          <span className="text-sm text-gray-400">{type}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentCard;
