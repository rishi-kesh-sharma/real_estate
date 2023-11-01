import React, { useEffect } from "react";
import Link from "next/link";
import DropdownProfileAvatar from "@/components/utils/ProfileAvatar";
import ProfileDropDown from "@/components/utils/ProfileDropDown";
import AuthButton from "@/components/utils/AuthButton";
import { profileLinks } from "@/data/Data";
import { BiHeartCircle, BiLike } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteCount } from "@/store/features/favoriteSlice";
import { getUserFromLocalStorage } from "@/utils/LocalStorage";

const RightNavLinks = ({ isAuthenticated, profile }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(getUserFromLocalStorage(localStorage));
    dispatch(getFavoriteCount({ addedBy: user?._id }));
  }, []);
  const favoritesCount = useSelector((state) => state.favorite.favoriteCount);
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
            {favoritesCount}
          </div>
        </div>
      </Link>
    </div>
  ) : (
    <AuthButton />
  );
};

export default RightNavLinks;
