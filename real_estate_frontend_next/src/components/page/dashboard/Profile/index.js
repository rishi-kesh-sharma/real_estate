import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
import Link from "next/link";
import Modal from "@/components/utils/Modal";
import ChangePasswordModal from "./ChangePasswordModal";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";
import { profileContext } from "@/pages/_app";
const Profile = () => {
  const profileData = useContext(profileContext);
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = (e) => {
    setOpenModal(!openModal);
  };

  const getLastName = () => {
    const nameArray = profileData?.profile?.name?.split(" ");
    return nameArray[nameArray.length - 1];
  };

  const loading = false;
  return (
    <>
      {loading ? ( // <Loader />
        "loading"
      ) : (
        <>
          {/* <!-- details column --> */}
          <Container className="overflow-hidden bg-white p-[1rem] mx-auto  md:shadow-md   md:px-[2rem]  ">
            {/* <!-- personal info --> */}

            <div className="flex flex-col gap-5 items-start">
              <div className="flex justify-between items-center w-full">
                <span className="font-medium text-lg">
                  Personal Information
                </span>
                <Link
                  href="profile/update"
                  className="text-sm  font-medium  cursor-pointer bg-green-600 rounded-md px-[0.6rem] py-[0.3rem] text-gray-100">
                  Edit
                </Link>
              </div>

              <div
                className="flex flex-col sm:flex-row flex-wrap items-center gap-3"
                id="personalInputs">
                <div className="flex flex-col gap-0.5  px-3 py-1.5 rounded-sm border inputs cursor-not-allowed bg-gray-100 focus-within:border-primary-blue">
                  <label className="text-xs text-gray-500">First Name</label>
                  <input
                    type="text"
                    value={profileData?.profile?.name?.split(" ", 1)}
                    className="text-sm outline-none border-none cursor-not-allowed text-gray-500"
                    disabled
                  />
                </div>
                <div className="flex flex-col gap-0.5  px-3 py-1.5 rounded-sm border inputs cursor-not-allowed bg-gray-100 focus-within:border-primary-blue">
                  <label className="text-xs text-gray-500">Last Name</label>
                  <input
                    type="text"
                    value={getLastName()}
                    className="text-sm outline-none border-none cursor-not-allowed text-gray-500"
                    disabled
                  />
                </div>
              </div>

              {/* <!-- gender --> */}
              <div className="flex flex-col gap-2">
                <h2 className="text-sm">Your Gender</h2>
                <div className="flex items-center gap-8" id="radioInput">
                  <div className="flex items-center gap-4 inputs text-gray-500 cursor-not-allowed">
                    <input
                      type="radio"
                      name="gender"
                      checked={profileData.profile.gender === "male"}
                      id="male"
                      className="h-4 w-4 cursor-not-allowed"
                      disabled
                    />
                    <label htmlFor="male" className="cursor-not-allowed">
                      Male
                    </label>
                  </div>
                  <div className="flex items-center gap-4 inputs text-gray-500 cursor-not-allowed">
                    <input
                      type="radio"
                      name="gender"
                      checked={profileData.profile.gender === "female"}
                      id="female"
                      className="h-4 w-4 cursor-not-allowed"
                      disabled
                    />
                    <label htmlFor="female" className="cursor-not-allowed">
                      Female
                    </label>
                  </div>
                </div>
              </div>
              {/* <!-- gender --> */}
              <div className="flex flex-col gap-5 items-start">
                <span className="font-medium text-sm">Mobile Number</span>

                <div className="flex items-center gap-3">
                  <div className="flex flex-col gap-0.5 sm: px-3 py-1.5 rounded-sm border bg-gray-100 cursor-not-allowed focus-within:border-primary-blue">
                    <label className="text-xs text-gray-500">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      value="+919876543210"
                      className="text-sm outline-none border-none text-gray-500 cursor-not-allowed"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <span className="font-medium text-sm">Email Address</span>

              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-0.5 sm: px-3 py-1.5 rounded-sm border bg-gray-100 cursor-not-allowed focus-within:border-primary-blue">
                  <label className="text-xs text-gray-500">Email Address</label>
                  <input
                    type="email"
                    value={profileData.profile.email}
                    className="text-sm outline-none border-none cursor-not-allowed text-gray-500"
                    disabled
                  />
                </div>
              </div>
              <button
                onClick={toggleModal}
                className="text-sm text-gray-50 font-medium rounded bg-green-600 max-w-[150px] px-[1rem] py-[0.5rem]">
                Change Password
              </button>
            </div>
          </Container>
        </>
      )}
      {openModal && <ChangePasswordModal toggleModal={toggleModal} />}
    </>
  );
};

export default Profile;
