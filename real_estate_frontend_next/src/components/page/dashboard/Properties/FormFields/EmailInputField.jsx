import React from "react";
import styles from "./index.module.css";
import { Field, useFormik, Form, Formik, ErrorMessage } from "formik";

const EmailInputField = ({ heading, name, id, placeholder }) => {
  return (
    <div className={`${styles.sub_section}`}>
      <h4 className={`${styles.sub_section_heading}`}>{heading}</h4>
      <Field
        type="email"
        name={name}
        id={id}
        placeholder={placeholder}
        className={`${styles.text_input_field} ${styles.email} w-full`}
      />
      <ErrorMessage
        name="title"
        id="title "
        className={`${styles.error_message}`}>
        {"this is Error"}
      </ErrorMessage>
    </div>
  );
};

export default EmailInputField;
