import Link from "next/link";

const stylingForButton =
  "text-white rounded hover:bg-gray-200 bg-green-500 hover:bg-gray-100 text-gray-100 hover:text-gray-800 ";

const AuthButton = () => {
  return (
    <div className="mt-0 relative">
      <Link
        href={"/auth"}
        className={`flex items-center p-2 text-base font-normal text-gray-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${stylingForButton}`}>
        <div className="flex-1 ml-3 whitespace-nowrap">{"SignUp or Login"}</div>
      </Link>
    </div>
  );
};

export default AuthButton;
