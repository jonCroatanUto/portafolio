import React, { useState } from "react";
import Input from "../../components/Input";
function Contact() {
  const [email, setEmail] = useState({
    emailFrom: "",
    subject: "",
    message: "",
  });
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(email);
  }
  function setingState(e: Event & { target: HTMLInputElement }) {
    setEmail({
      ...email,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div style={{ color: "white" }}>
      <form onSubmit={sendEmail}>
        <Input
          type="text"
          id="emailFrom"
          placeholder="Write your email direction"
          value={email.emailFrom}
          handleChange={(e) => setingState(e)}
          label="Write your email direction"
        />
        <Input
          type="text"
          id="subject"
          placeholder="Write main subject of your message"
          value={email.subject}
          handleChange={setingState}
          label="Write main subject of your message"
        />
        <Input
          type="textarea"
          id="message"
          placeholder="Explain your history"
          value={email.message}
          handleChange={setingState}
          label="Explain your history"
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
}
export default Contact;
