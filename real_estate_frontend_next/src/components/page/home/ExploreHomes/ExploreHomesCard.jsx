import CardImage from "@/components/utils/CardImage";
import Image from "next/image";
import React from "react";
import Card from "./../../../utils/Card";
import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import { city1 } from "public/assets/images/cities";

const ExploreHomesCard = ({ property, id }) => {
  return (
    <Link key={id} href={`property/${property?.id}`} className="w-[100%]">
      <Card className={`relative p-0 py-0  rounded-lg w-[100%] gap-0`}>
        <div className="absolute z-[20] bg-gray-600 opacity-50 left-0 top-0 bottom-0 right-0 rounded-lg"></div>

        <Image
          alt=""
          src={city1 || property?.image}
          className="h-[340px] object-cover rounded-lg"
        />
        <div>
          <p className="absolute z-[25] top-[1rem] left-[1rem] text-white font-semibold text-lg">
            {property?.location}
          </p>
          <button className=" bg-green-600 rounded-lg text-gray-200 absolute z-[25] flex gap-[0.5rem] items-center justify-center h-[2.4rem] w-[8rem] font-light text-sm m-0 p-0 left-[1rem] bottom-[3rem]">
            View Detail
            <AiOutlineRight />
          </button>
        </div>
      </Card>
    </Link>
  );
};

export default ExploreHomesCard;
