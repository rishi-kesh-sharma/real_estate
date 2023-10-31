import React from "react";
import Back from "../../utils/Back";
import styles from "./index.module.css";
import featureImage from "../../../../public/assets/images/house.jpg";
import Container from "@/components/utils/Container";

const Contact = () => {
  return (
    <Container>
      <section
        className={`${styles.contact} ${styles.mb} mb-5  contact pt-[1rem]`}>
        <Back
          name="Contact Us"
          title="Get Helps & Friendly Support"
          cover={featureImage.src}
        />
        <div className={`${styles.container}`}>
          <form className={`${styles.shadow} shadow-md mt-[3rem]`}>
            <h4 className="text-gray-400 font-semibold">Fillup The Form</h4>{" "}
            <br />
            <div>
              <input
                type="text"
                placeholder="Name"
                className="text-lg text-gray-600"
                required
              />
              <input type="email" placeholder="Email" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea
              cols="30"
              rows="5"
              className="px-[1rem] text-gray-600"></textarea>
            <button
              type="submit"
              className="bg-green-500 px-[1rem] py-[0.5rem] font-light text-gray-200 rounded-lg">
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
