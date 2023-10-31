import { useEffect, useState } from "react";
import Router from "next/router.js";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store.js";
import "../styles/nprogress.css";
import NProgress from "nprogress";
import { useRouter } from "next/router";
import { createContext } from "react";
import NextApp from "next/app.js";

import { CookiesProvider } from "react-cookie";
import { parseCookies } from "@/utils/cookies.js";
import { getProfile } from "@/apiCalls/profile.js";
import { getUserFromLocalStorage } from "@/utils/LocalStorage.js";

// APP CONTEXT FOR BREADCRUMBS
export const appContext = createContext(null);
export const profileContext = createContext(null);
function App({ Component, pageProps }) {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState();
  const [profileData, setProfileData] = useState({
    isAuthenticated: false,
    profile: {},
  });

  // USEEFFECT FOR NPROGRESS
  useEffect(() => {
    const handleRouteStart = () => {
      NProgress.start();
    };
    const handleRouteDone = () => {
      NProgress.done();
    };

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  // USEEFFECT FOR BREADCRUMB
  useEffect(() => {
    const pathWithoutQuery = router.asPath.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumbs = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
        isCurrent: index === pathArray.length - 1,
      };
    });
    setBreadcrumbs(breadcrumbs);
    const profile = JSON.parse(getUserFromLocalStorage(localStorage));
    setProfileData({ isAuthenticated: profile && true, profile: profile });
  }, [router.asPath]);

  return (
    <CookiesProvider>
      <appContext.Provider value={breadcrumbs}>
        <profileContext.Provider value={profileData}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </profileContext.Provider>
      </appContext.Provider>
    </CookiesProvider>
  );
}
export default App;
