import { Inter } from "@next/font/google";
import NormalLayout from "@/components/layouts/NormalLayout";
import HomeComponent from "@/components/page/home";
import { NextSeo } from "next-seo";
const inter = Inter({ subsets: ["latin"] });
import { useEffect } from "react";
import { getProfile } from "../apiCalls/profile.js";
import { parseCookies } from "../utils/cookies.js";
import { createContext } from "react";

// profile context
// HOME COMPONENT
export default function Home(data) {
  return (
    <>
      <NextSeo
        title="MyRAJ | Home"
        description="A Home Page For Property Selling And Rental Website"
      />
      <main className={"overflow-x-hidden"}>
        <NormalLayout>
          <HomeComponent />
        </NormalLayout>
      </main>
    </>
  );
}

// Home.getInitialProps = async ({ req, res }) => {
//   const token = parseCookies(req);

//   if (res) {
//     if (Object.keys(token).length === 0 && token.constructor === Object) {
//       res.writeHead(301, { Location: "/" });
//       res.end();
//     }
//   }
//   let data = {};
//   try {
//     const response = await getProfile(token);
//     data = { profile: response.data.data, isAuth: true };
//     return data;
//   } catch (err) {
//     data = {};
//     return data;
//   }
// };

// const profileInitialPropsGetter=(Page)=>{
// return(
//   Page.getInitialProps = async ({ req, res }) => {
//     const token = parseCookies(req);

//     if (res) {
//       if (Object.keys(token).length === 0 && token.constructor === Object) {
//         res.writeHead(301, { Location: "/" });
//         res.end();
//       }
//     }
//     let data = {};
//     try {
//       const response = await getProfile(token);
//       data = { profile: response.data.data, isAuth: true };
//       return data;
//     } catch (err) {
//       data = {};
//       return data;
//     }
//   };
// )
// }
