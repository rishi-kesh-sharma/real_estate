import React, { useState } from "react";
import LoginForm from "./Login";
import SignUpForm from "./SignUp";
import Link from "next/link";

// FORM STYLES
const styles = {
  label: "block text-gray-700 text-sm font-bold pt-2 pb-1",
  field:
    "bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none",
  button:
    " bg-green-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-green-600",
  errorMsg: "text-red-500 text-xs",
};

// COMPONENT
const AuthMain = ({ brand }) => {
  const [isLogin, setIsLogin] = useState("Login");

  return (
    <div className="w-full p-8 lg:w-1/2 overflow-hidden">
      {/* BRAND NAME */}
      <h2 className="text-2xl font-semibold  text-center text-red-500">
        {brand}
      </h2>
      {/* TOGGLE FORMS BUTTON */}
      <div
        onClick={() => {
          setIsLogin(!isLogin);
        }}
        className="flex items-center justify-center mt-4 text-white rounded-lg shadow-lg bg-gray-50 hover:bg-gray-100">
        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
          {isLogin ? "Signup Now" : "Back to Login"}
        </h1>
      </div>

      {/* DIVIDER */}
      <div className="mt-4 flex items-center justify-between">
        <span className="border-b border-green-700 w-1/5 lg:w-1/4"></span>
        <Link href="#" className="text-xs text-center text-gray-500 uppercase">
          {isLogin ? "Login" : "Register"}
        </Link>
        <span className="border-b w-1/5 border-green-700 lg:w-1/4"></span>
      </div>

      {/* FORMS */}
      {isLogin ? <LoginForm styles={styles} /> : <SignUpForm styles={styles} />}
    </div>
  );
};

export default AuthMain;
