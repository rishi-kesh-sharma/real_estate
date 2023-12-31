import Head from "next/head";
import { Inter } from "@next/font/google";
import UserDashboardLayout from "@/components/layouts/UserDashboardLayout";
import ProfileComponent from "@/components/page/dashboard/Profile";
const inter = Inter({ subsets: ["latin"] });

export default function Profile() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.min.css"
        />
        <script
          src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"
          defer></script>
      </Head>
      <main className={"w-[100vw] overflow-x-hidden"}>
        <UserDashboardLayout>
          <ProfileComponent />
        </UserDashboardLayout>
      </main>
    </>
  );
}
