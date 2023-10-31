import { useDispatch, useSelector } from "react-redux";
// import { logoutUser } from "../../actions/userAction";
import { AiFillFolder } from "react-icons/ai";
import { BiChevronRightCircle } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import Link from "next/link";
import {
  MdAccountBalanceWallet,
  MdFolderShared,
  MdPowerSettingsNew,
} from "react-icons/md";
import ProfileAvatar from "@/components/utils/ProfileAvatar";
import { useContext } from "react";
import { profileContext } from "@/pages/_app";

const UserDashboardSidebar = (
  props = { activeTab: "profile", user: { name: "user" } }
) => {
  const profileData = useContext(profileContext);
  console.log(profileData);
  const { activeTab, user } = props;
  const dispatch = useDispatch();

  const handleLogout = () => {};

  return (
    <div className="hidden md:flex flex-col gap-4  md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4 px-1">
      {/* <!-- profile card --> */}
      <div className="flex items-center gap-4 p-3 bg-white rounded-sm shadow">
        {/* <!-- user icon --> */}
        <div className="w-12 h-12 rounded-full">
          <ProfileAvatar profile={profileData?.profile} />
        </div>
        {/* <!-- user icon --> */}
        <div className="flex items-center gap-1">
          <p className="text-xs"></p>
        </div>
      </div>
      {/* <!-- profile card --> */}

      {/* <!-- nav tiles --> */}
      <div className="flex flex-col bg-white rounded-sm shadow">
        {/* <!-- my orders tab --> */}
        <div className="flex items-center gap-5 px-4 py-4 border-b">
          <span className="text-primary-green">
            <AiFillFolder />
          </span>
          <p className="flex w-full justify-between font-medium text-gray-500 hover:text-primary-green">
            PROPERTIES
            <span>{/* <BiChevronRightCircle /> */}</span>
          </p>
        </div>
        <div className="flex flex-col pb-3 border-b text-sm">
          <Link
            href="/dashboard/properties"
            className={`${
              activeTab === "profile"
                ? "bg-green-50 text-primary-green font-medium"
                : "hover:bg-green-50 hover:text-primary-green"
            } p-3 pl-14`}>
            View Properties
          </Link>
          <Link
            className="p-3 pl-14 hover:bg-green-50 hover:text-primary-green"
            href="/dashboard/properties/add">
            Post Properties
          </Link>
          {/* <Link
            className="p-3 pl-14 hover:bg-green-50 hover:text-primary-green"
            href="/"
          >
            
          </Link> */}
        </div>
        {/* <!-- my orders tab --> */}

        {/* <!-- account settings tab --> */}
        <div className="flex items-center gap-5 px-4 py-4">
          <span className="text-primary-green">
            <BsFillPersonFill />
          </span>
          <p className="flex w-full justify-between font-medium text-gray-500">
            PROFILE SETTINGS
          </p>
        </div>
        <div className="flex flex-col pb-3 border-b text-sm">
          <Link
            href="/dashboard/profile"
            className={`${
              activeTab === "profile"
                ? "bg-green-50 text-primary-green font-medium"
                : "hover:bg-green-50 hover:text-primary-green"
            } p-3 pl-14`}>
            Profile Information
          </Link>
          <Link
            className="p-3 pl-14 hover:bg-green-50 hover:text-primary-green"
            href="/">
            Manage Addresses
          </Link>
          <Link
            className="p-3 pl-14 hover:bg-green-50 hover:text-primary-green"
            href="/">
            PAN Card Information
          </Link>
        </div>

        <div className="flex items-center gap-5 px-4 py-4">
          <span className="text-primary-green">
            <MdFolderShared />
          </span>
          <p className="flex w-full justify-between font-medium text-gray-500">
            MY STUFF
          </p>
        </div>
        <div className="flex flex-col pb-3 border-b text-sm">
          <Link
            className="p-3 pl-14 hover:bg-green-50 hover:text-primary-green"
            href="/">
            My Reviews & Ratings
          </Link>
          <Link
            className="p-3 pl-14 hover:bg-green-50 hover:text-primary-green"
            href="/">
            All Notifications
          </Link>
          <Link
            href="/dashboard/favourites"
            className={`${
              activeTab === "favourites"
                ? "bg-green-50 text-primary-green font-medium"
                : "hover:bg-green-50 hover:text-primary-green"
            } p-3 pl-14`}>
            My Favourites
          </Link>
        </div>
        {/* <!-- my stuff tab --> */}

        {/* <!-- logout tab --> */}
        <div className="flex items-center gap-5 px-4 py-4 border-b">
          <span className="text-primary-green">
            <MdPowerSettingsNew />
          </span>
          <div
            className="flex w-full justify-between font-medium text-gray-500 hover:text-primary-green cursor-pointer"
            onClick={handleLogout}>
            Logout
            <span>
              <BiChevronRightCircle />
            </span>
          </div>
        </div>
        {/* <!-- logout tab --> */}
      </div>
      {/* <!-- nav tiles --> */}

      {/* <!-- frequenty visited tab --> */}
      <div className="flex flex-col items-start gap-2 p-4 bg-white rounded-sm shadow">
        <span className="text-xs font-medium">Frequently Visited:</span>
        <div className="flex gap-2.5 text-xs text-gray-500">
          <Link href="/password/update">Change Password</Link>
          <Link href="/orders">Track Order</Link>
          <Link href="/">Help Center</Link>
        </div>
      </div>
      {/* <!-- frequenty visited tab --> */}
    </div>
  );
};

export default UserDashboardSidebar;
