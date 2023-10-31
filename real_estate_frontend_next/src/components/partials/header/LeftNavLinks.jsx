import Link from "next/link";
import React from "react";

const LeftNavLinks = ({ links, handleNavLinksClick }) => {
  return (
    <>
      <ul className="flex gap-[1rem]">
        {links?.map((item, index) => {
          return !item.dropItems ? (
            <li
              key={item?.name}
              className="mt-0 relative"
              onClick={handleNavLinksClick}>
              <Link
                href="#"
                className="h-full  flex items-center p-2 text-base font-normal rounded-lg ">
                <span className="flex-1 ml-3 whitespace-nowrap">
                  {item.name}
                </span>
              </Link>
            </li>
          ) : (
            <li
              key={item?.name}
              className="relative px-[0.3rem] py-[0.3rem]   rounded-lg"
              onClick={handleNavLinksClick}>
              <button
                onClick={(e) => {
                  e.currentTarget.parentNode.parentNode
                    .querySelectorAll("li>ul.dropdown-example")
                    .forEach((item) => {
                      if (e.currentTarget.parentNode.lastChild.id == item.id) {
                        item.classList.toggle("hidden");
                      } else {
                        item.classList.add("hidden");
                      }
                    });
                }}
                type="button"
                className="flex items-center w-full p-P2 text-base font-normal transition duration-75 rounded-lg group "
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example">
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  {item.name}
                </span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
                </svg>
              </button>
              <ul
                id={`dropdown-example${index}`}
                className=" dropdown-example  hidden absolute bg-white left-0 w-[200px] top-[2.5rem] rounded-lg ">
                {item.dropItems.map((dropItem, index) => {
                  return (
                    <li
                      key={dropItem?.name}
                      onClick={handleNavLinksClick}
                      className="border">
                      <Link
                        href={dropItem.path}
                        className="flex items-center w-full p-2 text-base font-normal text-gray-600 transition duration-75 rounded-lg pl-[1rem] group ">
                        {dropItem.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default LeftNavLinks;
