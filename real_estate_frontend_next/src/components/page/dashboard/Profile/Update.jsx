import { Formik, Field, Form, ErrorMessage } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";

import { useRouter } from "next/router";
import ImageField from "@/components/utils/ImageField";
import { updateProfile } from "@/apiCalls/profile";
import Container from "@/components/utils/Container";
import { profileContext } from "@/pages/_app";
import Toast from "@/components/utils/Toast";
import Previews from "@/components/utils/DragNDropWPreview";
import { setUserToLocalStorage } from "@/utils/LocalStorage";
const styles = {
  label: "block text-gray-600 text-sm  pt-2 pb-1",
  field:
    "bg-gray-100 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-[1rem]  block w-full appearance-none max-w-[600px]",
  button:
    " bg-green-700 w-[130px] text-white py-3 px-4 w-full rounded hover:bg-green-600 font-light",
  errorMsg: "text-red-500 text-xs",
};

const UpdateUser = () => {
  const router = useRouter();
  const signUpSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    email: Yup.string().email().required("Email is Required"),
    phoneNumber: Yup.string().required("Phone Number is Required"),
    address: Yup.string().required("Address is Required"),
  });

  const profileData = useContext(profileContext);
  const [selectedFile, setSelectedFile] = useState(
    profileData?.profile?.profile_image
  );

  const [checkFile, setCheckFile] = useState(
    profileData?.profile?.profile_image && true
  );

  const initialValues = {
    firstName: profileData?.profile?.firstName,
    lastName: profileData?.profile?.lastName,
    email: profileData?.profile?.email,
    phoneNumber: profileData?.profile?.phoneNumber,
    roleAlias: profileData?.profile?.roleAlias,
    address: profileData?.profile?.address,
  };

  const imageHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setCheckFile(true);
  };

  const handleSubmit = async (
    values,
    { setErrors, setSubmitting, isSubmitting }
  ) => {
    try {
      const res = await updateProfile({
        _id: profileData.profile._id,
        roleId: profileData.profile.roleId,
        ...values,
      });
      Toast.fire({
        icon: "success",
        title: "Profile Updated successfully",
      });
      setUserToLocalStorage(localStorage, {
        ...profileData.profile,
        ...values,
      });
    } catch (err) {
      console.log(err);

      Toast.fire({
        icon: "error",
        title: `Cannot Login: ${err.response.data.message}`,
      });
    }
  };
  return (
    <div className="overflow-hidden shadow bg-white flex-1 rounded-lg py-[2rem] md:flex-1">
      <Container className="">
        <Formik
          validationSchema={signUpSchema}
          onSubmit={handleSubmit}
          initialValues={initialValues}>
          {({ isSubmitting }) => {
            return (
              <Form className="flex flex-col gap-[1rem]">
                <div>
                  <label className={styles.label} htmlFor="firstName">
                    First Name
                  </label>
                  <Field
                    className={styles.field}
                    id="firstName"
                    name="firstName"
                  />
                  <ErrorMessage
                    component="a"
                    className={styles.errorMsg}
                    name="firstName"
                  />
                </div>
                <div>
                  <label className={styles.label} htmlFor="lastName">
                    Last Name
                  </label>
                  <Field
                    className={styles.field}
                    id="lastName"
                    name="lastName"
                  />
                  <ErrorMessage
                    component="a"
                    className={styles.errorMsg}
                    name="lastName"
                  />
                </div>

                <div>
                  <label className={styles.label} htmlFor="email">
                    Email
                  </label>
                  <Field className={styles.field} id="email" name="email" />
                  <ErrorMessage
                    component="a"
                    className={styles.errorMsg}
                    name="email"
                  />
                </div>

                <div>
                  <label className={styles.label} htmlFor="phoneNumber">
                    phoneNumber
                  </label>
                  <Field
                    className={styles.field}
                    id="phoneNumber"
                    name="phoneNumber"
                  />
                  <ErrorMessage
                    component="a"
                    className={styles.errorMsg}
                    name="phoneNumber"
                  />
                </div>

                <div>
                  <label className={styles.label} htmlFor="roleAlias">
                    Role
                  </label>
                  <Field
                    className={styles.field}
                    id="roleAlias"
                    name="roleAlias"
                  />
                  <ErrorMessage
                    component="a"
                    className={styles.errorMsg}
                    name="roleAlias"
                  />
                </div>
                <div>
                  <label className={styles.label} htmlFor="address">
                    Address
                  </label>
                  <Field className={styles.field} id="address" name="address" />
                  <ErrorMessage
                    component="a"
                    className={styles.errorMsg}
                    name="address"
                  />
                </div>
                {/* <div>
                  <label className={styles.label}>
                    Upload Your profile image
                  </label>
                  <ImageField
                    imageHandler={imageHandler}
                    checkFile={checkFile}
                    selectedFile={selectedFile}
                    className={styles.field}
                  />
                  <Previews />
                </div> */}
                <div className="mt-8 flex justify-end max-w-[600px] cursor-pointer">
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div
                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                          Loading...
                        </span>
                      </div>
                    </div>
                  ) : (
                    <Field
                      type="submit"
                      className={`${styles.button} cursor-pointer`}
                      value="submit"
                    />
                  )}
                </div>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </div>
  );
};

export default UpdateUser;
