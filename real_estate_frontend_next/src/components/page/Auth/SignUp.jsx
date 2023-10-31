import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "@/store/features/authSlice";
import { getSingleErrorMessage } from "@/utils/Errors";
import { setUserState } from "@/store/features/userSlice";
import { useRouter } from "next/router";
import { setAuthState } from "@/store/features/authSlice";
import { useDispatch } from "react-redux";
import Toast from "@/components/utils/Toast";
import { baseUrl } from "@/apiCalls/constants";
import axios from "axios";

const SignUpForm = ({ styles }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  // SIGN UP SCHEMA
  const signUpSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    username: Yup.string().required("username is Required"),
    email: Yup.string().email().required("Email is Required"),
    password: Yup.string()
      .required("Password is Required")
      .min(3, "Too Short!"),
    password_confirmation: Yup.string()
      .required("Confirm Password is Required")
      .min(3, "Too Short!"),
  });

  // REGISTER SUBMIT HANDLER
  const handleSubmit = async (values, { setErrors }) => {
    const resultAction = await dispatch(register(values));

    // EXECUTES IF THE LOGIN IS SUCCESSFUL
    if (register.fulfilled.match(resultAction)) {
      const user = resultAction.payload;
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });

      // REDIRECTING TO HOME
      router.push("/");

      // EXECUTES IF LOGIN FAILS
    } else {
      // EXECUTES IF THE RESULT ACTION HAS NO PAYLOAD
      if (resultAction.payload) {
        const messages = getSingleErrorMessage(
          resultAction.payload.data.errors
        );
        setErrors(messages);
      }
      // EXECUTES IF RESULT ACTION HAS NO PAYLOAD
      else {
        Toast.fire({
          icon: "error",
          title: `Cannot Register: ${resultAction.error.message}`,
        });
      }
    }
  };

  return (
    <>
      <Formik
        validationSchema={signUpSchema}
        initialValues={{
          name: "",
          email: "",
          password: "",
          password_confirmation: "",
        }}
        onSubmit={handleSubmit}>
        {() => {
          return (
            <Form>
              <label className={styles.label} htmlFor="Name">
                Full Name
              </label>
              <Field className={styles.field} id="name" name="name" />
              <ErrorMessage
                component="a"
                className={styles.errorMsg}
                name="name"
              />
              <label className={styles.label} htmlFor="name">
                Username
              </label>
              <Field
                onInput={async (e) => {
                  const username = e.target.value;
                  const res = await axios.post(
                    `${baseUrl}/auth/check-username`,
                    {
                      username,
                    }
                  );
                  console.log(res);
                }}
                className={styles.field}
                id="username"
                name="username"
              />

              <ErrorMessage
                component="a"
                className={styles.errorMsg}
                name="username"
              />
              <button className="bg-green-600 p-1  ">Check</button>
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
