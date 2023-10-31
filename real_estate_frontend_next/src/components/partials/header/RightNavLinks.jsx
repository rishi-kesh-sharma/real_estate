import React from "react";
import Link from "next/link";
import DropdownProfileAvatar from "@/components/utils/ProfileAvatar";
import ProfileDropDown from "@/components/utils/ProfileDropDown";
import AuthButton from "@/components/utils/AuthButton";
import { profileLinks } from "@/data/Data";
import { BiHeartCircle, BiLike } from "react-icons/bi";

const RightNavLinks = ({
  links,
  handleNavLinksClick,
  isAuthenticated,
  profile,
}) => {
  return isAuthenticated ? (
    <div className="flex gap-[1rem] items-center justify-center">
      <ProfileDropDown
        profileLinks={profileLinks}
        isAuthenticated
        profile={profile}
      />
      <Link href="/dashboard/properties/favorites">
        <div className=" relative p-[0.1rem] rounded-full border-[2px] border-solid border-gray-300">
          <BiHeartCircle className="text-[2rem] text-green-600" />
          <div className="absolute bg-red-500 text-sm top-[-0.2rem] right-[-1rem] w-[1.5rem] h-[1.5rem] flex items-center justify-center rounded-full text-gray-200">
            {"5"}
          </div>
        </div>
      </Link>
    </div>
  ) : (
    <AuthButton />
  );
};

export default RightNavLinks;
