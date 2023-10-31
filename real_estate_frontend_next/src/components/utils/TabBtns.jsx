import React, { useState } from "react";

const heroTabItems = [
  // { id: 1, title: "Buy", value: "buy" },
  { id: 1, title: "Rent", value: "rent" },
  { id: 2, title: "Sold", value: "sell" },
];
const TabBtns = () => {
  const [activeButton, setActiveButton] = useState(1);
  const handleClick = (id) => {
    return (e) => {
      setActiveButton(id);
    };
  };

  return (
    <ul className="flex justify-between gap-3  text-sm font-medium text-center text-gray-400 bg-gray-500  rounded-lg">
      {heroTabItems.map((item) => {
        const { title, value, id } = item;
        return (
          <li
            key={id}
            onClick={handleClick(id)}
            className={`cursor-pointer text-white  w-1/2 ${
              activeButton == id && "bg-white text-green-700"
            } ${
              activeButton !== id && "hover:bg-gray-200  hover:text-green-700"
            } font-semibold text-lg px-[1rem] py-[0.5rem] rounded-lg md:py-[1rem] text-[1.25rem] `}
          >
            {title}
          </li>
        );
      })}
    </ul>
  );
};

export default TabBtns;
