import React from "react";
import styled from "./index.module.css";
import Card from "@/components/utils/Card";
import CardImage from "@/components/utils/CardImage";
import Image from "next/image";
import CardContent from "@/components/utils/CardContent";
import { Avatar1 } from "public/assets/images/Avatars";
import { baseUrl, imageUrl } from "@/apiCalls/constants";

const CategoryTypeCard = ({ feature }) => {
  return (
<Card className="card group h-[180px] bg-white xs:h-[200px] my-3 mx-3 shadow-none hover:shadow-md transition-all hover:bg-blue-100 duration-500" style={{backgroundPosition: "0% 0%"}}>
  <CardImage>
    <div className="p-5 rounded-full bg-yellow-100 group-hover:bg-white transition-all duration-500" >
      <div className="h-[60px] w-[60px] rounded-full">
        <img height={100} width={100} src={`${imageUrl}/${feature.image}` || Avatar1} alt={feature?.name} />
      </div>
    </div>
  </CardImage>
  <CardContent className="items-center">
    <h4 className="text-gray-600">{feature.name}</h4>
    <label className="text-gray-400 px-5 mt-1 transition-all duration-500 rounded-md group-hover:bg-white">{feature.total}</label>
  </CardContent>
</Card>

  );
};

export default CategoryTypeCard;
