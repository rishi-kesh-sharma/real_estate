import React from "react";
import styles from "./index.module.css";
import { Field, ErrorMessage } from "formik";

const ButtonRadio = ({ heading, name, radios }) => {
  return (
    <div className={`${styles.sub_section}`}>
      <h4 className={`${styles.sub_section_heading}`}>{heading}</h4>
      <div className={`${styles.radio_btn_group}`}>
        {radios.map((radio) => (
          <Field
            key={radio?.id}
            name={name}
            type="radio"
            id={radio?.id}
            label={radio.label}
            value={radio.value}
          />
        ))}
      </div>
      <ErrorMessage
        name="title"
        id="title"
        className={`${styles.error_message}`}>
        {"this is Error"}
      </ErrorMessage>
    </div>
  );
};

export default ButtonRadio;
