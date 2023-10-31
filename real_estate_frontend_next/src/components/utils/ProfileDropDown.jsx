import Link from "next/link";
import ProfileAvatar from "./ProfileAvatar";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { logoutFunctionality } from ".";

const ProfileDropDown = ({ profileLinks, isAuthenticated, profile }) => {
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);
  const router = useRouter();

  const handleClick = (e) => {
    e.currentTarget.parentNode.lastChild.classList.toggle("hidden");
  };
  const handleLogout = async (e) => {
    await logoutFunctionality(removeCookie, router);
  };
  return (
    <div className="relative cursor-pointer">
      <div
        className="flex items-center justify-between w-full gap-[0.4rem]"
        onClick={handleClick}>
        <ProfileAvatar profile={profile} />
        <svg
          // sidebar-toggle-item
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"></path>
        </svg>
      </div>
      <ul
        id="dropdown-example"
        className="hidden absolute bg-white left-0 w-[200px] ">
        {profileLinks.map((dropItem, index) => {
          return !dropItem.path ? (
            <li key={dropItem?.name} className="border" onClick={handleLogout}>
              <div className="flex items-center w-full p-2 text-base font-normal text-gray-600 transition duration-75 rounded-lg pl-[1rem] group hover:bg-gray-100">
                {dropItem.name}
              </div>
            </li>
          ) : (
            <li key={index} className="border">
              <Link
                href={dropItem.path}
                className="flex items-center w-full p-2 text-base font-normal text-gray-600 transition duration-75 rounded-lg pl-[1rem] group hover:bg-gray-100">
                {dropItem.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ProfileDropDown;
