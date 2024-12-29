import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./FormEmail.scss";
export const FormEmail = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bdhres2",
        "template_ilio1sz",
        form.current,
        "ctteNpP5qhjkDwvLt"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="user_name">Your Name</label>
      <input
        type="text"
        name="user_name"
        id="user_name"
        minLength={4}
        required
      />
      <label htmlFor="user_email">Your Email</label>
      <input type="email" name="user_email" id="user_email" required />
      <label htmlFor="user_message">Message</label>
      <textarea name="message" id="user_message" required minLength={2} />
      <button type="submit" className="button">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Send
      </button>
    </form>
  );
};

export default FormEmail;
