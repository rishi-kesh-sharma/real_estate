import React, { useContext, useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { nav } from "@/data/Data";
import Image from "next/image";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";
import Logo from "@/components/utils/Logo";
import LeftNavLinks from "./LeftNavLinks";
import ToggleNavigation from "./ToggleNavigation";
import RightNavLinks from "./RightNavLinks";
import SectionWrapper from "@/components/utils/SectionWrapper";
import Link from "next/link";
import { profileContext } from "@/pages/_app";
import ProfileAvatar from "@/components/utils/ProfileAvatar";
import { ContainerSection } from "@/components/ui/design";
const Navbar = () => {
  // TOGGLE SIDEBAR
  const [show, setShow] = useState(false);
  const [currentDevice, setCurrentDevice] = useState("lg");
  const profileData = useContext(profileContext);
  console.log(profileData);
  // HANDLE SCREEN RESIZE
  const handleResize = (e) => {
    if (window.innerWidth >= 1024) return setCurrentDevice("lg");
    if (window.innerWidth < 768) return setCurrentDevice("sm");
    if (window.innerWidth >= 768 && window.innerWidth < 1024) return setCurrentDevice("md");
  };

  // HANDLE NAV LINKS CLICK
  const handleNavLinksClick = (e) => {
    setShow(false);
  };

  // HANDLE MENU TOGGLE
  const handleToggle = (e) => {
    setShow(!show);
  };

  // USE EFFECT
  useEffect(() => {
    window.addEventListener("click", (e) => {
      console.log(e.target);
    });
    // LISTENING TO RESIZE EVENT
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <SectionWrapper className="h-[50px]">
      <Section className=" fixed bg-white" style={{ zIndex: 1000 }}>
        <Container>
          <div className=" flex justify-between  items-center">
            <Link href={nav.logo.path}>
              <Logo LogoImage={nav.logo.image} alt="Logo" className="h-[80px]" />
            </Link>
            <div className="flex gap-10">
              {/* LEFT NAVIGATION LINKS */}
              {currentDevice == "lg" && <LeftNavLinks links={nav?.links?.leftLinks} handleNavLinksClick={handleNavLinksClick} />}

              {/* RIGHT NAVIGATION LINKS */}
              {currentDevice == "lg" && <RightNavLinks handleNavLinksClick={handleNavLinksClick} links={nav?.links?.rightLinks} isAuthenticated={profileData?.isAuthenticated} profile={profileData?.profile} />}
              <FiMenu className="text-[2rem] cursor-pointer" onClick={handleToggle} />
              {/* sidebar for small device  and medium device*/}
              {show && (currentDevice == "sm" || currentDevice == "md" || currentDevice == "lg") && <ToggleNavigation links={nav?.links?.sideBarLinks} handleNavLinksClick={handleNavLinksClick} show={show} setShow={setShow} isAuthenticated={profileData?.isAuthenticated} profile={profileData?.profile} />}
            </div>
          </div>
        </Container>
      </Section>
    </SectionWrapper>
  );
};

export default Navbar;
