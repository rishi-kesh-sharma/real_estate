import React from "react";
import { Field, ErrorMessage } from "formik";
import styles from "./index.module.css";
const CheckBox = ({ heading, name, items }) => {
  return (
    <div className={`${styles.sub_section}`}>
      <h4 className={`${styles.sub_section_heading}`}>{heading}</h4>
      <div className={`${styles.radio_btn_group}`}>
        {items.map((item, index) => (
          <div key={index}>
            <Field
              name={name}
              type="checkbox"
              id={item?.id}
              label={item.label}
              value={item.value}
            />
          </div>
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

export default CheckBox;

{
  /* <div className={`${styles.sub_section}`}>
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

<li>
<input type="checkbox" id="checkboxOne" value="Rainbow Dash" />
<label for="checkboxOne">Rainbow Dash</label>
</li> */
}
