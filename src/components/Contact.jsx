import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_a2n6oxp",
        "template_0tln8k8",
        form.current,
        "ai-0PlA3c0TbFaoHQ"
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          document.getElementById("myForm").reset();
        },
        (error) => {
          toast.error("Ops Message Not Sent!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <>
      <form id="myForm" className="contactform" ref={form} onSubmit={sendEmail}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="YOUR NAME"
                required
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="YOUR EMAIL"
                required
              />
            </div>
          </div>
          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="YOUR SUBJECT"
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <textarea
                name="message"
                id="message"
                placeholder="YOUR MESSAGE"
                required
              ></textarea>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="button">
              <span className="button-text">Send Message</span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
