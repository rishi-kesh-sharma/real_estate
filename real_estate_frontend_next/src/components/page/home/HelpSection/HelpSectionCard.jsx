import CardImage from "@/components/utils/CardImage";
import React from "react";
import Card from "./../../../utils/Card";
import Image from "next/image";
import CardContent from "./../../../utils/CardContent";

const HelpSectionCard = ({ item }) => {
  return (
    <Card className="shadow-none items-center justify-center">
      <CardImage className="h-[100px] w-[100px]">
        <Image src={item.image} />
      </CardImage>
      <CardContent className="justify-center items-center gap-[0.5rem]">
        <h2 className="text-gray-700 text-lg text-center ">{item.title}</h2>
        <p className="text-gray-500 text-center text-sm">{item.subtitle}</p>
        <button className="px-[1rem] py-[0.5rem] bg-green-500 rounded-lg text-gray-200">
          {item.buttonText}
        </button>
      </CardContent>
    </Card>
  );
};

export default HelpSectionCard;
