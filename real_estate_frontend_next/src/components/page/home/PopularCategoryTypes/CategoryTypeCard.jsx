import React from "react";
import styled from "./index.module.css";
import Card from "@/components/utils/Card";
import CardImage from "@/components/utils/CardImage";
import Image from "next/image";
import CardContent from "@/components/utils/CardContent";
import { Avatar1 } from "public/assets/images/Avatars";

const CategoryTypeCard = ({ feature }) => {
  console.log(feature);
  return (
    <Card className="h-[180px]  bg-white xs:h-[200px] my-3 mx-3 shadow-none">
      <CardImage className="h-[100px] w-[100px]">
        <img
          height={100}
          width={100}
          src={`http://localhost:5000/${feature.image}` || Avatar1}
          // src={`\public\images/ `}
          alt={feature?.name}
        />
      </CardImage>
      <CardContent className="items-center">
        <h4 className="text-gray-600">{feature.name}</h4>
        <label className="text-gray-400">{feature.total}</label>
      </CardContent>
    </Card>
  );
};

export default CategoryTypeCard;
