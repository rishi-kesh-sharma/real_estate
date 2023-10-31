import { useState } from "react";
import AuthMain from "./AuthMain";
import BrandImage from "./BrandImage";

const MemberPage = ({ brand, logoUrl }) => {
  return (
    <div className="flex flex-row w-full overflow-hidden ">
      <div className="py-[2rem] flex-1">
        <div className="flex bg-white rounded-lg shadow-2xl overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <BrandImage logoUrl={logoUrl} />
          <AuthMain brand={brand} />
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
