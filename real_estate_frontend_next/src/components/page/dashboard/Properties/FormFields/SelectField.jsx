import React from "react";
import Select from "react-select";
import styles from "./index.module.css";
import { Field, useFormik, Form, Formik, ErrorMessage } from "formik";
const SelectField = ({ heading, name, id, options }) => {
  return (
    <div className={`${styles.sub_section}`}>
      <h2 className={`${styles.sub_section_heading}`}>{heading}</h2>
      <Field
        component={Select}
        name={name}
        id={id}
        options={options}
        className={`${styles.select_field}`}></Field>
    </div>
  );
};

export default SelectField;
