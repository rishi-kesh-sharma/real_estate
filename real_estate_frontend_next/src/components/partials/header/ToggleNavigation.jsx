import Link from "next/link";
import React, { useContext, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthState } from "@/store/features/authSlice.js";
import { profileContext } from "@/pages/_app";
import RightNavLinks from "./RightNavLinks";
import ProfileAvatar from "@/components/utils/ProfileAvatar";
import ProfileToggleNavigation from "@/components/utils/ProfileToggleNavigation";
import { profileLinks } from "@/data/Data";
import AuthButton from "@/components/utils/AuthButton";
const ToggleNavigation = ({
  links,
  handleNavLinksClick,
  show,
  setShow,
  profile,
  isAuthenticated,
}) => {
  const [openProfileLinks, setOpenProfileLinks] = useState(false);
  const handleLogout = (e) => {
    console.log("logout button clicked");
  };
  const handleProfileAvatarClick = (e) => {
    console.log("avatar clicked");
    setOpenProfileLinks(!openProfileLinks);
  };
  return (
    <div className=" fixed left-0 z-40  right-0 top-0 h-[100vh] overflow-y-hidden shadow-2xl bg-[rgba(0,0,0,0.6)] ">
      <aside
        id="sidebar-multi-level-sidebar overflow-y-hidden h-full"
        className="fixed top-0 right-0 z-40  h-screen w-full max-w-[350px] sm:max-w-[300px] "
        aria-label="Sidebar">
        {show && (
          <RxCross1
            className="absolute text-red-600 top-[1rem] text-3xl  left-[0.5rem] z-50 cursor-pointer "
            onClick={(e) => setShow(false)}
          />
        )}
        <div className="h-full px-3  py-4 overflow-y-auto bg-gray-50 pt-[6rem]">
          {isAuthenticated ? (
            <div
              className="flex items-center justify-between gap-[1rem] cursor-pointer"
              onClick={handleProfileAvatarClick}>
              <div className="ml-[1rem]">
                <ProfileAvatar profile={profile} />
              </div>
              <span>
                <svg
                  // sidebar-toggle-item
                  className="w-6 h-6 text-gray-400 cursor-pointer"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
                </svg>
              </span>
            </div>
          ) : (
            <AuthButton />
          )}
          {openProfileLinks && (
            <ProfileToggleNavigation profileLinks={profileLinks} />
          )}
          <ul className="space-y-2 mt-[1rem] ">
            {links?.map((item) => {
              return !item.dropItems ? (
                <li
                  key={item?.name}
                  onClick={handleNavLinksClick}
                  className="border-b-[1px] w-full hover:bg-gray-100 border-b-gray-300 flex items-center px-[0.6rem] ">
                  {item.icon && item.icon}
                  {item.path ? (
                    <Link
                      href={item?.path}
                      className="flex items-center p-2 text-base font-normal text-gray-600 rounded-lg hover:bg-gray-100 hover:text-black">
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        {item.name}
                      </span>
                    </Link>
                  ) : (
                    <div className="flex items-center p-2 text-base font-normal text-gray-600 rounded-lg hover:bg-gray-100 hover:text-black">
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        {item.name}
                      </span>
                    </div>
                  )}
                </li>
              ) : (
                <li
                  key={item?.name}
                  className=" border-b-[1px] border-b-gray-300">
                  <button
                    onClick={(e) => {
                      e.currentTarget.parentNode.lastChild.classList.toggle(
                        "hidden"
                      );
                    }}
                    type="button"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example">
                    {item.icon && item.icon}
                    <span
                      className="flex-1 py-[0.3] px-[0.5rem] ml-3 text-left whitespace-nowrap text-gray-600"
                      sidebar-toggle-item>
                      {item?.name}
                    </span>
                    <svg
                      // sidebar-toggle-item
                      className="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"></path>
                    </svg>
                  </button>
                  <ul id="dropdown-example" className="hidden py-2 space-y-2">
                    {item.dropItems.map((dropItem) => {
                      return (
                        <li
                          key={dropItem?.name}
                          onClick={handleNavLinksClick}
                          className="border-b-[1px] border-b-gray-300 last-of-type:border-none">
                          <Link
                            href={dropItem.path}
                            className="flex items-center w-full p-2 text-base font-normal text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">
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
        </div>
      </aside>
    </div>
  );
};

export default ToggleNavigation;
