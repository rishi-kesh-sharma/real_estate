import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import NormalLayout from "@/components/layouts/NormalLayout";
import AuthComponent from "@/components/page/Auth";
import { NextSeo } from "next-seo";
import BreadCrumbContainer from "@/components/utils/BreadCrumbContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Auth() {
  return (
    <>
      <NextSeo
        title="Real Estate | Login & SignUp"
        description="A Home Page For Property Selling And Rental Website"
      />
      <main className={styles.main}>
        <NormalLayout>
          {/* <Header /> */}
          <BreadCrumbContainer />
          <AuthComponent />
          {/* <Footer /> */}
        </NormalLayout>
      </main>
    </>
  );
}
