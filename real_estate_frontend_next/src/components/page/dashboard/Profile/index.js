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
  const { firstName, lastName, email, phoneNumber, roleAlias } =
    profileData.profile;
  console.log(profileData.profile);
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = (e) => {
    setOpenModal(!openModal);
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
                    value={firstName}
                    className="text-sm outline-none border-none cursor-not-allowed text-gray-500"
                    disabled
                  />
                </div>
                <div className="flex flex-col gap-0.5  px-3 py-1.5 rounded-sm border inputs cursor-not-allowed bg-gray-100 focus-within:border-primary-blue">
                  <label className="text-xs text-gray-500">Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    className="text-sm outline-none border-none cursor-not-allowed text-gray-500"
                    disabled
                  />
                </div>
                <div className="flex flex-col gap-0.5 sm: px-3 py-1.5 rounded-sm border bg-gray-100 cursor-not-allowed focus-within:border-primary-blue">
                  <label className="text-xs text-gray-500">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    className="text-sm outline-none border-none cursor-not-allowed text-gray-500"
                    disabled
                  />
                </div>
                <div className="flex flex-col gap-0.5  px-3 py-1.5 rounded-sm border inputs cursor-not-allowed bg-gray-100 focus-within:border-primary-blue">
                  <label className="text-xs text-gray-500">Role </label>
                  <input
                    type="text"
                    value={roleAlias}
                    className="text-sm outline-none border-none cursor-not-allowed text-gray-500"
                    disabled
                  />
                </div>
                <div className="flex flex-col gap-0.5 sm: px-3 py-1.5 rounded-sm border bg-gray-100 cursor-not-allowed focus-within:border-primary-blue">
                  <label className="text-xs text-gray-500">Phone Number</label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    className="text-sm outline-none border-none text-gray-500 cursor-not-allowed"
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
