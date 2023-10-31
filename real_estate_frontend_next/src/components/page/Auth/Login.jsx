import { useCookies } from "react-cookie";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  login,
  selectAuthState,
  setAuthState,
} from "@/store/features/authSlice";
import { useRouter } from "next/router";
import { setUserState } from "@/store/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Toast from "@/components/utils/Toast";
import { setTokenToLocalStorage } from "@/utils/LocalStorage";

// FUNCTIONAL COMPONENENT
const LoginForm = ({ styles }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [cookie, setCookie, removeCookies] = useCookies(["token"]);

  // LOGIN VALIDATION SCHEMA
  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is Required"),
    password: Yup.string()
      .required("Password is Required")
      .min(3, "Too Short!"),
  });

  // HANDLE LOGIN SUBMIT
  const handleSubmit = async (values, { setErrors }) => {
    // DISPATCHING LOGIN ACTION
    const resultAction = await dispatch(login(values));

    // EXECUTES IF THE LOGIN IS SUCCESSFUL
    if (login.fulfilled.match(resultAction)) {
      const user = resultAction.payload.user;
      const token = resultAction.payload.token;
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });

      // setCookie("token", token, {
      //   path: "/",
      //   maxAge: 3600, // Expires after 1hr
      //   sameSite: true,
      // });
      // setTokenToLocalStorage(localStorage, token);
      // localStorage.setItem("token", token);

      // REDIRECTING TO HOME
      router.push("/");
      // router.reload("/");
      window.location.href = "/";

      // EXECUTES IF LOGIN FAILS
    } else {
      setErrors(resultAction.payload.data);
      Toast.fire({
        icon: "error",
        title: `Cannot Login: ${
          resultAction.payload.data.message || resultAction.error.message
        }`,
      });
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}>
        <Form>
          <label className={styles.label} htmlFor="Email">
            Email
          </label>
          <Field className={styles.field} id="email" name="email" />
          <ErrorMessage
            component="a"
            className={styles.errorMsg}
            name="email"
          />
          <label className={styles.label} htmlFor="Email">
            Password
          </label>
          <Field className={styles.field} id="password" name="password" />
          <ErrorMessage
            component="a"
            className={styles.errorMsg}
            name="password"
          />
          <div className="mt-8">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
