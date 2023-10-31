import React from "react";

const BrandImage = ({ logoUrl }) => {
  return (
    <div
      className="hidden lg:block lg:w-1/2 bg-auto bg-no-repeat bg-center	"
      style={{ backgroundImage: `url(${logoUrl})` }}></div>
  );
};

export default BrandImage;
