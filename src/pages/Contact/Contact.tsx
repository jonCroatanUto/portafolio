import React, { useState } from "react";
import Input from "../../components/Input";
import { sendEmailToJon } from "../../api";
import "./contacStyles.css";
function Contact() {
  const [email, setEmail] = useState({
    emailFrom: "",
    subject: "",
    message: "",
  });
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sendEmailToJon(email);
  }
  function settingState(e: Event & { target: HTMLInputElement }) {
    setEmail({
      ...email,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className="formContactBox">
      <form onSubmit={sendEmail}>
        <Input
          type="email"
          id="emailFrom"
          placeholder="Write your email "
          value={email.emailFrom}
          handleChange={settingState}
          label="Write your email "
        />
        <Input
          type="text"
          id="subject"
          placeholder="Write main subject of your message"
          value={email.subject}
          handleChange={settingState}
          label="Write main subject of your message"
        />
        <Input
          type="textarea"
          id="message"
          placeholder="Explain your history"
          value={email.message}
          handleChange={settingState}
          label="Explain your history"
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
}
export default Contact;
