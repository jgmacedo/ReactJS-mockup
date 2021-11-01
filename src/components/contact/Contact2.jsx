import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.scss";

function ContactForm() {
  const [state, handleSubmit] = useForm("xvodnkdk");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function Contact2() {
  return <ContactForm />;
}
export default Contact2;
