import React, { useEffect, useState } from "react";
import styled from "./index.module.css";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import Image from "next/image";
import Card from "@/components/utils/Card";
import CardImage from "@/components/utils/CardImage";
import CardContent from "@/components/utils/CardContent";
import Link from "next/link";
import { city1 } from "public/assets/images/cities";
import { useDispatch, useSelector } from "react-redux";
import { getUserFromLocalStorage } from "@/utils/LocalStorage";
import { addFavorite, getFavorites } from "@/store/features/favoriteSlice";

const RecentPropertyCard = ({ recent }) => {
  const dispatch = useDispatch();
  const { image, purpose, location, name, price, type, id } = recent;
  const user = JSON.parse(getUserFromLocalStorage(localStorage));
  const favorites = useSelector((state) => state.favorite.favorites);
  const isLiked = favorites?.find((item) => {
    return item.property._id == id;
  });
  console.log(isLiked && "hello");
  const handleLikeClick = (e) => {
    dispatch(addFavorite({ addedBy: user._id, property: id }));
  };

  useEffect(() => {
    const user = JSON.parse(getUserFromLocalStorage(localStorage));
    dispatch(getFavorites({ addedBy: user?._id, populate: "property" }));
  }, [dispatch]);

  return (
    <Card className="w-[100%] rounded-lg shadow-lg bg-white items-start p-[0.4rem]">
      <Link href={`property/${recent.id}`} className="w-[100%]">
        <CardImage className="rounded-lg sm:h-[200px] xs:h-[180px] lg:h-[200px] w-[100%]">
          <Image src={city1 || image} className="rounded-lg" alt="" />
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
          {isLiked ? (
            <FcLike onClick={handleLikeClick} />
          ) : (
            <FcLikePlaceholder onClick={handleLikeClick} />
          )}
        </div>
        <h4 className="text-sm">{name}</h4>
        <p className="text-xs text-gray-400">{location}</p>
        <div className="flex flex-col gap-[0.1rem] xs:flex-row xs:justify-between">
          <div className="flex items-center">
            <p className="py-[0.1rem] text-center font-semibold text-sm">
              {price}
            </p>
            <p htmlFor="" className="text-center text-gray-400 text-xs">
              /sqft
            </p>
          </div>
          <span className="text-sm text-gray-400">
            {type?.slice(0, 1)?.toUpperCase() + type?.slice(1, type?.length)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentPropertyCard;
