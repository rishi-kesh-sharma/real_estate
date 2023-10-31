import CustomSelect from "@/components/utils/CustomSelect";
import React from "react";
import { BsSearch } from "react-icons/bs";

const DropdownSearch = () => {
  return (
    <div>
      {currentDevice == "sm" && (
        <div>
          <button
            onClick={(e) => {
              e.currentTarget.parentNode.lastChild.classList.toggle("hidden");
            }}
            className={`flex items-center justify-between gap-1 w-[100%] max-w-[400px] mx-auto text-2xl mt-[2rem]`}>
            <span className="text-gray-100 text-xl font-semibold ">
              Search Property
            </span>
            <BsSearch />
          </button>
          <form className="hidden max-w-[400px] mx-auto ">
            <ul
              id="dropdown-example"
              className=" bg-white p-[1rem] rounded-sm ">
              <li>
                {/* <div className="flex flex-col flex-wrap"> */}
                <CustomSelect
                  className="py-1"
                  optionValues={locationData.provinces}
                  name={"provinces"}
                />

                <CustomSelect
                  className="py-1"
                  optionValues={locationData.districts}
                  name="district"
                />
                <CustomSelect
                  className="py-1"
                  optionValues={locationData.localLevels}
                  name="local levels"
                />
              </li>
              <li>
                <CustomSelect
                  className="py-1"
                  optionValues={propertyMeta.purposes}
                  name="Purpose"
                />
              </li>
              <li>
                <CustomSelect
                  className="py-1"
                  optionValues={propertyMeta.types}
                  name="types"
                />
              </li>
              <li>
                <CustomSelect
                  className="py-1"
                  optionValues={propertyMeta.budget}
                  name="budget"
                />
              </li>
              <li>
                <button
                  className={`flex items-center justify-center gap-3 w-[100%] text-lg py-[8px]`}>
                  <BsSearch />
                  <span className="text-gray-100 text-xl font-semibold ">
                    Search
                  </span>
                </button>
              </li>
            </ul>
          </form>
        </div>
      )}
      {(currentDevice == "md" || currentDevice == "lg") && (
        <form className="mt-[2rem]">
          <ul
            id="dropdown-example"
            className=" bg-white p-[1rem] flex flex-wrap gap-2">
            <li className="">
              {/* <div className="flex flex-col flex-wrap"> */}
              <CustomSelect
                className="py-1"
                optionValues={locationData.provinces}
                name={"provinces"}
              />
            </li>

            <li>
              <CustomSelect
                className="py-1"
                optionValues={locationData.districts}
                name="district"
              />
            </li>
            <li>
              <CustomSelect
                className="py-1"
                optionValues={locationData.localLevels}
                name="local levels"
              />
            </li>
            <li>
              <CustomSelect
                className="py-1"
                optionValues={propertyMeta.purposes}
                name="Purpose"
              />
            </li>
            <li>
              <CustomSelect
                className="py-1"
                optionValues={propertyMeta.types}
                name="types"
              />
            </li>
            <li>
              <CustomSelect
                className="py-1"
                optionValues={propertyMeta.budget}
                name="budget"
              />
            </li>
            <li>
              <button
                className={`flex items-center justify-center gap-3 w-[100%] text-lg py-[8px]`}>
                <BsSearch />
                <span className="text-gray-100 text-xl font-semibold ">
                  Search
                </span>
              </button>
            </li>
          </ul>
        </form>
      )}
    </div>
  );
};

export default DropdownSearch;
