import "react-toastify/dist/ReactToastify.css";
import "./Hero.css";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Button, LoadingButton } from "@mantine/core";
import { ToastContainer, toast } from "react-toastify";

const Hero = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if (validateEmail(e.target.email.value)) {
      setIsError(false); // Reset error state
      setIsLoading(true); // Show loading state
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
            setIsLoading(false); // Hide loading state

            toast.success("Thank you for subscribing!", {
              position: "top-center",
              autoClose: 2000,
            }); // Show success toast on top-center
          },
          (error) => {
            console.log(error.text);
            setIsError(true);
            setIsLoading(false); // Hide loading state
            toast.error(
              "An error occurred while submitting the form. Please try again later.",
              {
                position: "top-center",
              }
            ); // Show error toast on top-center
          }
        );
    } else {
      toast.error("Please enter a valid email address.", {
        position: "top-center",
        autoClose: 2000,
      }); // Show error toast on top-center
    }
  }

  function validateEmail(email) {
    // Regular expression to validate email format
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  function handleInputChange(event) {
    const email = event.target.value;
    if (validateEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Please enter a valid email address.");
    }
  }

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-contents d-flex flex-column gap-5 gap-md-0 flex-md-row align-items-center">
          <div className="hero-left-side">
            <h1 className="get-smarter-text ">
              Get smarter about <br />
            </h1>
            <h1 className="get-smarter-text">
              <span className="nft-text m-0">Your NFTs</span>{" "}
              <span className="investment-text m-0"></span>
            </h1>

            <p className="newsletter-text">
              Get your <b>FREE 1-year</b> digital magazine subscription now
              <br className="d-none d-lg-block" /> to gain an edge in the NFT
              market
            </p>
            {!isSuccess ? (
              <form ref={form} onSubmit={sendEmail}>
                <div className="d-flex justify-content-between align-items-center hero-input-container">
                  <input
                    className={`hero-input${
                      isError || emailError ? " is-invalid" : ""
                    }`}
                    type="text"
                    name="email"
                    placeholder="Enter email address..."
                    onChange={handleInputChange}
                  />
                  <Button
                    style={{ backgroundColor: "#e27c23" }}
                    type="submit"
                    size="xl"
                    loading={isLoading}
                    disabled={isLoading}
                  >
                    Join Free
                  </Button>{" "}
                </div>
                {(isError || emailError) && (
                  <div className="invalid-feedback">
                    {isError
                      ? "An error occurred while submitting the form. Please try again later."
                      : emailError}
                  </div>
                )}
              </form>
            ) : (
              <div style={{ fontSize: 24 }} className="success-message">
                Thank you for subscribing!
              </div>
            )}

            <p className="read-by-nft-text">Read by NFT whales from</p>

            <div className="hero-bottom-image-group">
              <img className="w-100" src="/images/binance.png" alt="" />
              <img className="trust w-100" src="/images/trust.png" alt="" />
              <img className="w-100" src="/images/metamask.png" alt="" />
            </div>
          </div>
          <div className="right-side mx-auto">
            <img
              className="d-block mx-auto gifImage"
              src="/images/laser-eyes.gif"
              alt=""
            />
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </section>
  );
};
export default Hero;
