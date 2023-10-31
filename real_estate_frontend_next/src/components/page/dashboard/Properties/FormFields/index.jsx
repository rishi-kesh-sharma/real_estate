import React, { useEffect } from "react";
import { Field, useFormik, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./index.module.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import TextInputField from "./TextInputField";
import ButtonRadio from "./ButtonRadio";
import SelectField from "./SelectField";
import { structure } from "addPropertypageStructure";
import FormSection from "./FormSection";
import NumberInputField from "./NumberInputField";
import EmailInputField from "./EmailInputField";
import CheckBox from "./CheckBox";
import TextAreaField from "./TextAreaField";
import DateInputField from "./DateInputField";
import {
  getAreaUnits,
  getPropertyCategories,
  getProvinces,
  getRoadTypes,
} from "@/apiCalls/general";
import Link from "next/link";

// IFRAME FOR GOOGLE MAP
const IFrame = (src) => {
  return (
    <iframe
      id="inlineFrameExample"
      title="Inline Frame Example"
      width="300"
      height="200"
      src={src}
    />
  );
};

// GET CAN RENDER FUNCTION THAT SPECIFIES WHICH SECTION SUB-SECTION OR FILEDS TO RENDER
const getCanRender = (dependencies, values) => {
  let canRender = false;
  if (dependencies && Object.keys(dependencies).length > 0) {
    const keys = Object.keys(dependencies);
    canRender = keys.every((key) => {
      return dependencies[key].includes(values[key]);
    });
  } else {
    canRender = true;
  }
  return canRender;
};

// FUNCTION TO FILTER THE FIELDS BASE ON THE FIELD TYPE
const filterField = (
  canRender,
  {
    subSectionTitle,
    fieldType,
    name,
    dependencies,
    placeholder,
    fields,
    radios,
    options,
    items,
    id = name,
    defaultValue,
  }
) => {
  // IF CAN RENDER THE ONLY THE FIELD IS SELECTED
  if (canRender) {
    switch (fieldType) {
      case "text_input_field":
        return (
          <TextInputField
            key={id}
            heading={subSectionTitle}
            name={name}
            id={id}
            placeholder={placeholder}
          />
        );
      case "number_input_field":
        return (
          <NumberInputField
            key={id}
            heading={subSectionTitle}
            name={name}
            id={id}
            placeholder={placeholder}
          />
        );
      case "email_input_field":
        return (
          <EmailInputField
            key={id}
            heading={subSectionTitle}
            name={name}
            id={id}
            placeholder={placeholder}
          />
        );
      case "date":
        return (
          <DateInputField
            key={id}
            heading={subSectionTitle}
            name={name}
            id={id}
            placeholder={placeholder}
          />
        );
      case "textarea":
        return (
          <TextAreaField
            key={id}
            heading={subSectionTitle}
            name={name}
            id={id}
            placeholder={placeholder}
          />
        );

      case "btn_radio":
        return (
          <ButtonRadio
            key={id}
            heading={subSectionTitle}
            name={name}
            radios={radios}
          />
        );
      case "checkbox":
        return (
          <CheckBox
            key={id}
            heading={subSectionTitle}
            name={name}
            items={items}
          />
        );
      case "select":
        return (
          <SelectField
            key={id}
            heading={subSectionTitle}
            name={name}
            id={id}
            options={options}
          />
        );
      default:
        return;
    }
  } else {
    return null;
  }
};

// FORMIK FIELDS INITIAL VALUES
const initialValues = {
  property_title: "",
  purpose: "",
  property_category: "",
  land_type: "",
  flat_type: "",
  office_space_type: "",
  shop_space_type: "",
  house_type: "",
  apartment_type: "",
  availability: "",
  ownership: "",
  buildDate: "",
  province: "",
  district: "",
};

// function to fetch general data
const getApiData = async () => {
  try {
    let provinces = await getProvinces();
    let propertyCategories = await getPropertyCategories();
    let areaUnits = await getAreaUnits();
    let roadTypes = await getRoadTypes();
    provinces = provinces.data.data;
    propertyCategories = propertyCategories.data.data;
    areaUnits = areaUnits.data.data;
    roadTypes = roadTypes.data.data;

    // setProvinceOptions(provinces);
    // setPropertyCategoriesOptions(propertyCategories);
    // setRoadTypesOptions(roadTypes);
    // setAreaUnitsOptions(areaUnits);
  } catch (err) {
    console.log(err.response);
  }
};

// FORMIK VALIDATION SCHEMA
const validationSchema = Yup.object({});
const FormFields = ({ structure: s }) => {
  console.log(s);
  // HANDLE SUBMIT FORM
  const handleSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  useEffect(() => {
    getApiData();
  }, []);
  // TOP LEVEL JSX
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({ values, handleSubmit }) => {
          return (
            <Form>
              {/* SECTIONS */}
              {structure.sections.map(
                // PARTICULAR SECTION
                ({ title, subSections, dependencies }, index) => {
                  // LOGIC FOR WHETHER THE SECTION IS RENDERABLE OR NOT
                  let canRenderSection = false;
                  if (dependencies) {
                    canRenderSection = getCanRender(dependencies, values);
                  } else {
                    canRenderSection = true;
                  }
                  if (canRenderSection) {
                    return (
                      // PARTICULAR SECION JSX
                      <FormSection key={index} heading={title}>
                        {/* SUB SECTION */}
                        {subSections.map(
                          (
                            {
                              title: subSectionTitle,
                              fieldType,
                              name,
                              dependencies,
                              placeholder,
                              fields,
                              dataUrl,
                              radios,
                              options,
                              items,
                              defaultValue,
                            },
                            index
                          ) => {
                            // LOGIC FOR WHETHER THE SUB SECTION IS RENDERABLE OR NOT
                            const canRender = getCanRender(
                              dependencies,
                              values
                            );

                            let RenderField = filterField(canRender, {
                              subSectionTitle,
                              fieldType,
                              name,
                              dependencies,
                              placeholder,
                              fields,
                              dataUrl,
                              radios,
                              options,
                              items,
                              defaultValue,
                            });

                            // LOGIC FOR RENDERING IFRAME
                            if (name == "map_link" && values.map_link) {
                              return (
                                <div key={index}>
                                  <IFrame src={values.apartment_type} />{" "}
                                  {RenderField}
                                </div>
                              );
                            }
                            // RENDERABLE FIELD
                            return RenderField;
                          }
                        )}
                      </FormSection>
                    );
                  }
                }
              )}
              <div key="dvddfje" className="flex my-[0.5rem] gap-[0.3rem]">
                <Field type="checkbox" />
                <label>
                  I agree to{" "}
                  <Link href="/" className="text-blue-600">
                    listing policy
                  </Link>
                </label>
              </div>
              <Field
                key="fdlfdf"
                type="submit"
                value="submit"
                role="button"
                className="bg-green-600 text-gray-100 px-[1rem] py-[0.3rem] rounded-md my-[1rem]"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default FormFields;
