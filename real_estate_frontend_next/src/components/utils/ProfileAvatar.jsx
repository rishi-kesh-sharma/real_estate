import React from "react";
import Image from "next/image";
import { RxAvatar } from "react-icons/rx";
import { person1 } from "public/assets/images/people";
const ProfileAvatar = ({ profile }) => {
  return (
    <div className="flex items-center gap-[0.6rem] cursor-pointer ">
      <img
        src={profile?.profile_image}
        width={100}
        height={100}
        id="avatarButton"
        type="button"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        className="w-10 h-10 rounded-full cursor-pointer text-[4rem]"
        alt="User dropdown"
      />
      <p className="text-md text-gray-600"> {profile?.name}</p>
    </div>
  );
};

export default ProfileAvatar;
