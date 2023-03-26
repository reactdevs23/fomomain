import "./Subscribe.css";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Subscribe = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [messageEmpty, setMessageEmpty] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    if (form.current.message.value.trim() !== "") {
      setIsError(false);
      setMessageEmpty(false);
      emailjs
        .sendForm(
          "service_9plagsj",
          "template_omukmin",
          form.current,
          "xARxpb0qg9LhoguWb"
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSuccess(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setMessageEmpty(true);
    }
  }

  return (
    <section id="subscribe">
      <div className="container">
        <div className="subscribe-contents">
          <h1>Subscribe to our newsletter</h1>
          <p className="top-p">
            Be the first to know about the biggest stories as they break
          </p>

          {!isSuccess ? (
            <form ref={form} onSubmit={sendEmail}>
              <div className="input-content">
                <input name="message" />
                <button type="submit" value="Send">
                  Send
                </button>
              </div>
              {messageEmpty && (
                <div style={{ color: "red" }} className="error-message">
                  Please enter a message.
                </div>
              )}
            </form>
          ) : (
            <div className="success-message">Thank you for subscribing!</div>
          )}

          <p className="bottom-p">
            By clicking Subscribe, you indicate that you agree to Hypnosis Terms
            and Conditions and Data Use Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
