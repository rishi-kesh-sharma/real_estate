import { updatePassword } from "@/apiCalls/profile";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const styles = {
  label: "block text-gray-600 text-sm  pt-2 pb-1 ",
  field:
    "bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-solid border-gray-400  rounded py-2 px-4 block w-full appearance-none w-[100%]",
  button:
    " bg-green-700 w-[200px] text-white py-3 px-4 w-full rounded hover:bg-green-600 font-light",
  errorMsg: "text-red-500 text-xs",
};
const ChangePasswordForm = ({ toggleModal }) => {
  console.log(toggleModal);
  const changePasswordSchema = Yup.object().shape({
    old_password: Yup.string()
      .required(" Old Password is Required")
      .min(3, "Too Short!"),
    password: Yup.string()
      .required("Password is Required")
      .min(3, "Too Short!"),
    password_confirmation: Yup.string()
      .required("Confirm Password is Required")
      .min(3, "Too Short!"),
  });
  const initialValues = {
    old_password: "",
    password: "",
    password_confirmation: "",
  };
  const handleSubmit = async (values) => {
    alert(JSON.stringify(values));
    try {
      const res = await updatePassword(values);
      console.log(res.data);
      toggleModal();
      Toast.fire({
        icon: "success",
        title: "Password Updated successfully",
      });
    } catch (err) {
      console.log(err.response.data);
      const messages = getSingleErrorMessage(err.response.data.errors);
      setErrors(messages);

      Toast.fire({
        icon: "error",
        title: `Cannot Change Password: ${err.response.data.message}`,
      });
    }
  };
  return (
    <div className="">
      <h1 className="text-center text-lg">Change Password</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={changePasswordSchema}>
        {({ isSubmitting }) => {
          return (
            <Form className="flex flex-col gap-[1rem] ">
              <div>
                <label className={styles.label} htmlFor="password">
                  Old Password
                </label>
                <Field
                  className={styles.field}
                  id="old_password"
                  name="old_password"
                />
                <ErrorMessage
                  component="a"
                  className={styles.errorMsg}
                  name="old_password"
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="password">
                  Password
                </label>
                <Field className={styles.field} id="password" name="password" />
                <ErrorMessage
                  component="a"
                  className={styles.errorMsg}
                  name="password"
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="password_confirmation">
                  Confirm password
                </label>
                <Field
                  className={styles.field}
                  id="password_confirmation"
                  name="password_confirmation"
                />
                <ErrorMessage
                  component="a"
                  className={styles.errorMsg}
                  name="password_confirmation"
                />
              </div>
              <div className="mt-8 flex justify-end">
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
    </div>
  );
};

export default ChangePasswordForm;
