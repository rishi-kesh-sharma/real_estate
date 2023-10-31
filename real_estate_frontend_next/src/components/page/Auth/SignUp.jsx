import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register, selectAuthState } from "@/store/features/authSlice";
import { getSingleErrorMessage } from "@/utils/Errors";
import { setUserState } from "@/store/features/userSlice";
import { useRouter } from "next/router";
import { setAuthState } from "@/store/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Toast from "@/components/utils/Toast";
import { baseUrl } from "@/apiCalls/constants";
import axios from "axios";
import { useState } from "react";

const SignUpForm = ({ styles }) => {
  const [usernameMessage, setUsernameMessage] = useState({
    type: "",
    message: "",
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const authState = useSelector(selectAuthState);
  console.log(authState);

  // SIGN UP SCHEMA
  const signUpSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("First Name is Required"),
    username: Yup.string().required("username is Required").min(3, "Too Short"),
    phoneNumber: Yup.string().required("Phone Number is Required"),
    email: Yup.string().email().required("Email is Required"),
    password: Yup.string()
      .required("Password is Required")
      .min(3, "Too Short!"),
    confirm: Yup.string()
      .required("Confirm Password is Required")
      .min(3, "Too Short!"),
    address: Yup.string().required("Address is Required"),
  });

  // REGISTER SUBMIT HANDLER
  const handleSubmit = async (values, { setErrors }) => {
    const resultAction = await dispatch(register(values));
    // EXECUTES IF THE LOGIN IS SUCCESSFUL
    if (register.fulfilled.match(resultAction)) {
      Toast.fire({
        icon: "success",
        title: "Signed up successfully",
      });
      // REDIRECTING TO HOME
      // router.push("/");

      // EXECUTES IF LOGIN FAILS
    } else {
      console.log(resultAction);
      Toast.fire({
        icon: "error",
        title: `Cannot Register: ${resultAction.payload.message}`,
      });
    }
  };

  return (
    <>
      <Formik
        validationSchema={signUpSchema}
        initialValues={{
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          password: "",
          confirm: "",
          address: "",
        }}
        onSubmit={handleSubmit}>
        {() => {
          return (
            <Form>
              <label className={styles.label} htmlFor="firstName">
                First Name
              </label>
              <Field className={styles.field} id="firstName" name="firstName" />
              <ErrorMessage
                component="a"
                className={styles.errorMsg}
                name="firstName"
              />
              <label className={styles.label} htmlFor="lastName">
                Last Name
              </label>
              <Field className={styles.field} id="lastName" name="lastName" />
              <ErrorMessage
                component="a"
                className={styles.errorMsg}
                name="lastName"
              />
              <label className={styles.label} htmlFor="name">
                Username
              </label>
              <Field
                onInput={async (e) => {
                  const username = e.target.value;
                  try {
                    const res = await axios.post(
                      `${baseUrl}/auth/check-username`,
                      {
                        username,
                      }
                    );
                    setUsernameMessage({
                      type: "available",
                      message: res.data.message,
                    });
                  } catch (err) {
                    setUsernameMessage({
                      type: "error",
                      message: err.response.data.message,
                    });
                  }
                }}
                className={styles.field}
                id="username"
                name="username"
              />

              <div
                className={`text-xs ${
                  usernameMessage.type == "error"
                    ? "text-red-400"
                    : "text-green-400"
                }`}>
                {usernameMessage.message}
              </div>
              {/* <ErrorMessage
                component="a"
                className={styles.errorMsg}
                name="username"
              /> */}
              {/* <button className="bg-green-600 p-1  ">Check</button> */}
              <label className={styles.label} htmlFor="phoneNumber">
                Phone Number
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
              <label className={styles.label} htmlFor="Email">
                Email
              </label>
              <Field className={styles.field} id="email" name="email" />
              <ErrorMessage
                component="a"
                className={styles.errorMsg}
                name="email"
              />
              <label className={styles.label} htmlFor="password">
                Password
              </label>
              <Field className={styles.field} id="password" name="password" />
              <ErrorMessage
                component="a"
                className={styles.errorMsg}
                name="password"
              />
              <label className={styles.label} htmlFor="confirm">
                Confirm password
              </label>
              <Field className={styles.field} id="confirm" name="confirm" />
              <ErrorMessage
                component="a"
                className={styles.errorMsg}
                name="confirm"
              />
              <label className={styles.label} htmlFor="address">
                Address
              </label>
              <Field className={styles.field} id="address" name="address" />
              <ErrorMessage
                component="a"
                className={styles.errorMsg}
                name="address"
              />
              <div className="mt-8">
                <button type="submit" className={styles.button}>
                  Register
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default SignUpForm;
