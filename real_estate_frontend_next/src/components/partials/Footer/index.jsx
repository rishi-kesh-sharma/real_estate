import React from "react";
import { footer } from "@/data/Data";
import styled from "./index.module.css";
import Logo from "../../../../public/assets/images/logo-footer.png";
import Image from "next/image";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";
import Link from "next/link";
const Footer = () => {
  return (
    <Section>
      <Section className={`${styled.footerContact} footerContact `}>
        <Container className={`${styled.container} container`}>
          <div
            className={`${styled.send} ${styled.flex} flex-col sm:flex-row rounded-sm sm:flex  md:gap-[2rem]`}>
            <div className={`${styled.text} text`}>
              <h1 className="text-xl">Do You Have Questions ?</h1>
              <p className="text-gray-300 ">
                We&apos;ll help you to grow your career and growth.
              </p>
            </div>
            <button
              className={`bg-gray-200  rounded-lg py-2 px-4 mt-2 sm:mt-0 text-[#27ae60] `}>
              Contact Us Today
            </button>
          </div>
        </Container>
      </Section>
      <div className=" bg-[#1d2636] pt-[2rem]">
        <Container
          className={`container flex flex-col sm:flex-row  gap-[0.8rem] pb-[2rem] `}>
          <input
            type="text"
            placeholder="Email Address"
            className=" input text-gray-600 rounded-sm bg-white  p-[17px] "
          />
          <button className="bg-green-500 py-2 md:py-0 px-5 max-w-[150px] text-lg text-gray-200 rounded-lg">
            Subscribe
          </button>
        </Container>
      </div>

      <footer className={`${styled.footer} footer `}>
        <Container className={`${styled.container} container`}>
          <div className={`${styled.box} box`}>
            <div className={`${styled.logo} logo `}>
              <Image src={Logo} />
              <h2 className="text-gray-400 text-sm">
                Do You Need Help With Anything?
              </h2>
              <h1 className="text-xs text-gray-400 mt-3">
                Receive updates, hot deals, tutorials, discounts sent straight
                in your inbox every month
              </h1>
            </div>
          </div>

          {footer.map((val, index) => (
            <div key={index} className={`${styled.box} box`}>
              <h3 className="text-gray-300">{val.title}</h3>
              <ul>
                {val.text.map((item, index) => (
                  <Link key={index} href={`${item.link}`}>
                    <li key={index} className="text-sm">
                      {item.list}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </Container>
      </footer>
      <div className={`${styled.legal} legal`}>
        <span className="text-sm">
          {" "}
          <span className="mr-[0.1rem text-sm]">© 2021 MyRAJ.</span> Designed By
          APP TECHNOLOGIES.
        </span>
      </div>
    </Section>
  );
};

export default Footer;
