import React from "react";
import Image from "next/image";
const Logo = ({ className, alt, height, width, LogoImage }) => {
  return (
    <Image
      src={LogoImage}
      width={width}
      height={height}
      alt={alt}
      className={`${className} object-contain`}
    />
  );
};

export default Logo;
