import React from "react";
import ContactUsForm from "./ContactUsForm";
import { FaGraduationCap } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
      <h1 className="text-4xl leading-10 font-semibold text-richblack-5">
        Your ideas! Our skills! Let’s create something amazing.
      </h1>
      <p className="">
        Tell us what you're thinking, and we’ll bring it to life.
      </p>

      <div className="mt-7">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;