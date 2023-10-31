import React from "react";
import styles from "./index.module.css";
const FormSection = ({ children, heading }) => {
  return (
    <div className={`${styles.form_section}`}>
      <h2 className={`${styles.section_heading}`}>{heading}</h2>
      {children}
    </div>
  );
};

export default FormSection;
