import React from "react";
import Card from "@/components/utils/Card";
import CardImage from "@/components/utils/CardImage";
import Image from "next/image";
import CardContent from "@/components/utils/CardContent";

const FeaturedAgencyCard = ({ agency }) => {
  return (
    <Card className=" h-[220px] xs:w-[100%] bg-white">
      <CardImage className="w-[100px] h-[60px]">
        <Image src={agency?.image} />
      </CardImage>
      <CardContent className=" text-center">
        <p className="text-gray-500">{agency?.name}</p>
        <p className="text-gray-400">{agency?.total}</p>
      </CardContent>
    </Card>
  );
};

export default FeaturedAgencyCard;
