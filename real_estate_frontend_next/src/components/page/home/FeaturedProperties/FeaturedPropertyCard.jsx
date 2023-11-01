import React, { useEffect, useState } from "react";
import styled from "./index.module.css";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import Image from "next/image";
import Card from "@/components/utils/Card";
import CardImage from "@/components/utils/CardImage";
import CardContent from "@/components/utils/CardContent";
import Link from "next/link";
import { city1 } from "public/assets/images/cities";
import { imageUrl } from "@/apiCalls/constants";
import { useDispatch } from "react-redux";
import { getTokenFromLocalStorage, getUserFromLocalStorage } from "@/utils/LocalStorage";
import { addFavorite, getFavorites } from "@/store/features/favoriteSlice";

const FeaturedPropertyCard = ({ featured }) => {
  console.log(featured, "this is featured property");
  const { purpose,image, images, name, location, price, type } = featured;
  const [isLiked, setIsLiked] = useState(false);
  const dispatch= useDispatch()
  const handleLikeClick = (e) => {
    dispatch(addFavorite({ addedBy: user?._id, property: id }));
  };

  useEffect(() => {
    const token= getTokenFromLocalStorage(localStorage)
    if(token){
      const user = JSON.parse(getUserFromLocalStorage(localStorage));
      dispatch(getFavorites({ addedBy: user?._id, populate: "property" }));

    }

  }, [dispatch]);

  return (
    <Card className="w-[100%] group rounded-lg shadow-lg bg-white items-start p-[0.4rem]">
      <Link href={`property/${featured.id}`} className="w-[100%]">
        <CardImage className="rounded-lg sm:h-[200px] xs:h-[180px] lg:h-[200px] w-[100%] overflow-hidden  ">
          <img src={image} className="rounded-lg transition-all duration-500 transform scale-100 group-hover:scale-110 bg-cover " alt="" />
        </CardImage>
      </Link>

      <CardContent className={`gap-[0.2rem] w-[100%]`}>
        <div className={`flex items-start justify-between category`}>
          <span
            className="mt-0 text-sm"
            style={{
              background: purpose === "For Sale" ? "#25b5791a" : "#ff98001a",
              color: purpose === "For Sale" ? "#25b579" : "#ff9800",
            }}>
            {purpose}
          </span>
          {isLiked ? <FcLike onClick={handleLikeClick} /> : <FcLikePlaceholder onClick={handleLikeClick} />}
        </div>
        <h4 className="text-sm">{name}</h4>
        <p className="text-xs text-gray-400">{location}</p>
        <div className="flex flex-col gap-[0.1rem] xs:flex-row xs:justify-between">
          <div className="flex items-center">
            <p className="py-[0.1rem] text-center font-semibold text-sm">{price}</p>
            <p htmlFor="" className="text-center text-gray-400 text-xs">
              /sqft
            </p>
          </div>
          <span className="text-sm text-gray-400">{type?.slice(0, 1)?.toUpperCase() + type?.slice(1, type?.length)}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedPropertyCard;
