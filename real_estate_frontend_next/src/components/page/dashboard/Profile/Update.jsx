import { Formik, Field, Form, ErrorMessage } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
// import { register } from "@/apiCalls/auth";
import { getSingleErrorMessage } from "@/utils/Errors";
// import { setUserState } from "@/store/features/userSlice";
// import { setUserState } from "@/store/features/profileSlice";
import { useRouter } from "next/router";
import ImageField from "@/components/utils/ImageField";
import { updateProfile } from "@/apiCalls/profile";
import Container from "@/components/utils/Container";
import { profileContext } from "@/pages/_app";
import Toast from "@/components/utils/Toast";
import Previews from "@/components/utils/DragNDropWPreview";
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
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email().required("Email is Required"),
    mobile: Yup.string().required("Mobile is Required"),
    dob: Yup.date().required("Date Of Birth is Required"),
    email: Yup.string().required("Email is Required"),
  });

  const profileData = useContext(profileContext);
  const [selectedFile, setSelectedFile] = useState(
    profileData?.profile?.profile_image
  );

  const [checkFile, setCheckFile] = useState(
    profileData?.profile?.profile_image && true
  );

  const initialValues = {
    name: profileData?.profile?.name,
    email: profileData?.profile?.email,
    mobile: profileData.profile.profile.mobile,
    gender: profileData?.profile?.gender,
    dob: profileData?.profile?.dob,
    about_me: profileData?.profile?.about_me,
    profile_image: profileData?.profile?.profile_image,
  };

  const imageHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setCheckFile(true);
  };

  const handleSubmit = async (
    { name, email, mobile, gender, dob, about_me, profile_image },
    { setErrors, setSubmitting, isSubmitting }
  ) => {
    try {
      const res = await updateProfile({
        name,
        email,
        mobile,
        gender,
        dob,
        about_me,
        profile_image,
      });
      Toast.fire({
        icon: "success",
        title: "Profile Updated successfully",
      });
    } catch (err) {
      const messages = getSingleErrorMessage(err.response.data.errors);
      setErrors(messages);

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
                  <label className={styles.label} htmlFor="name">
                    Full Name
                  </label>
                  <Field className={styles.field} id="name" name="name" />
                  <ErrorMessage
                    component="a"
                    className={styles.errorMsg}
                    name="name"
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
                  <label className={styles.label} htmlFor="mobile">
                    Mobile
                  </label>
                  <Field className={styles.field} id="mobile" name="mobile" />
                  <ErrorMessage
                    component="a"
                    className={styles.errorMsg}
                    name="mobile"
                  />
                </div>
                <div>
                  <label className={styles.label} htmlFor="dob">
                    Date Of Birth
                  </label>
                  <Field
                    type="date"
                    className={styles.field}
                    id="dob"
                    name="dob"
                  />
                  <ErrorMessage
                    component="a"
                    className={styles.errorMsg}
                    name="dob"
                  />
                </div>
                <div>
                  <label className={styles.label} htmlFor="about_me">
                    About Me
                  </label>
                  <Field
                    as="textarea"
                    className={styles.field}
                    id="about_me"
                    name="about_me"
                    rows={5}
                  />
                  <ErrorMessage
                    component="a"
                    className={styles.errorMsg}
                    name="about_me"
                  />
                </div>

                <div>
                  <label className={styles.label}>
                    Upload Your profile image
                  </label>
                  {/* <ImageField
                    imageHandler={imageHandler}
                    checkFile={checkFile}
                    selectedFile={selectedFile}
                    className={styles.field}
                  /> */}
                  <Previews />
                </div>
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
