import Head from "next/head";
import styles from "@/styles/properties.module.css";
import PropertyDetailsComponent from "../../components/page/PropertyDetails";
import NormalLayout from "@/components/layouts/NormalLayout";

// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import { list } from "@/data/Data";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getPropertyDetail } from "@/store/features/propertySlice";
import { useEffect } from "react";

const PropertyDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const {detail}= useSelector((state)=> state.property)
  const dispatch = useDispatch();

  ///fetching the singke property
  useEffect(() => {
    dispatch(getPropertyDetail(id))
    
  }, [dispatch, id]);
  
  console.log(detail)


  return (
    <>
      <Head>
        <title>Property Detail</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <main className={styles.main}>
          <NormalLayout>{detail && <PropertyDetailsComponent property={detail} />}</NormalLayout>
        </main>
      </ChakraProvider>
    </>
  );
};

// export async function getServerSideProps({ params: { id } }) {
//   const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
//   console.log(data);
//   return {
//     props: {
//       propertyDetails: data,
//     },
//   };
// }
export default PropertyDetails;
