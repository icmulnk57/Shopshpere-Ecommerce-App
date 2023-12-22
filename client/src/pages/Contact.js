import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";


const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="contact-container">
        <div className="row">
          <div className="col-md-6 contact-image">
            <img
              src="/images/contact.png"
              alt="Contact Us"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6 contact-details">
            <div className="contact-info-wrapper">
              <h1 className="bg-dark text-white text-center p-3 mb-4 rounded">
                CONTACT US
              </h1>
              <p className="text-justify mt-2">
                Welcome to ShopSphere, where your satisfaction is our top
                priority. Whether you have questions, need assistance, or want
                to share your thoughts, our team is here to help.
              </p>
              <p className="text-justify mt-2">
                Our dedicated support team is available 24/7 to ensure a
                seamless shopping experience. Feel free to reach out to us
                through the following channels:
              </p>
              <div className="contact-info mt-4">
                <p>
                  <BiMailSend /> :{" "}
                  <a href="mailto:mandalamankumar.786@gmail.com">
                  mandalamankumar.786@gmail.com
                  </a>
                </p>
                <p>
                  <BiPhoneCall /> : 08779105845
                </p>
                <p>
                  <BiSupport /> : 1800-0000-0000 (toll-free)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
