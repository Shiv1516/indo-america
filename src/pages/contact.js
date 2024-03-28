import React from "react";
import Link from "next/link";
import { MdAlternateEmail } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <section className="contact-us bg8 ptb48">
        <div className="contact-us-section wrapper2 df aic fww ptb40">
          <div className="contact-form df fww flx50 aic pr32">
            <div className="who-we-are-content fc6 bg2 p32 br4">
              <h2 className="who-we-are-heading fs36 lh48 fw6 mb16">
                Reach Out to Us
              </h2>
              <p className="who-we-are-subtext mb24 lh30">
                Complete the form below to send us a message. Our team will
                respond promptly. Thank you for contacting us!
              </p>
              <div className="df fww mb16">
                <div className="contact-firstname flx50 mb12 pr12">
                  <label for="/" className=" mb12 dib ml4 fw5">
                    First Name
                    <span className="fc2">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="first-name-box w100 br8 p16 h48 brd1"
                    placeholder
                    required
                  />
                </div>
                <div className="contact-lastname flx50 mb12">
                  <label for="/" className=" mb12 dib ml4 fw5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="last-name-box w100 br8 p16 h48 brd1"
                    placeholder
                    required
                  />
                </div>
                <div className="contact-mailing-message flx50 mb12 pr12">
                  <label for="/" className="mb12 dib ml4 fw5">
                    Mailing Address
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mailing-add w100 br8 p16 h48 brd1"
                    placeholder
                    required
                  />
                </div>
                <div className="contact-email flx50 mb12">
                  <label for="/" className=" mb12 dib ml4 fw5">
                    Email
                    <span className="fc2">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="email w100 br8 p16 h48 brd1"
                    placeholder
                    required
                  />
                </div>
                <div className="contact-phone flx50 mb12 pr12">
                  <label for="/" className=" mb12 dib ml4 fw5">
                    Phone
                    <span className="fc2">#</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="phone w100 br8 p16 h48 brd1"
                    placeholder
                    required
                  />
                </div>
                <div className="contact-subject flx50 mb12">
                  <label for="/" className=" mb12 dib ml4 fw5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="subject w100 br8 p16 h48 brd1"
                    placeholder
                    required
                  />
                </div>
                <div className="flx100">
                  <label for="/" className=" mb12 dib ml4 fw5">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="message-box w100 br8 p16 brd1"
                    rows="4"
                    placeholder
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flx1 p12">
                <button className="form-btn cp h48 br8 bg1 fc1 p32 box-center fw7 transit2">
                  Send Message
                </button>
              </div>
            </div>
          </div>
          <div className="contact-us-content plr24 flx50 fc1">
            <h2 className="contact-us-heading fs42 fw7 mb24">Contacts</h2>
            <p className="contact-us-subtext mb24 lh30 taj">
              Indo-American Charity Foundation is a distinguished NGO in India,
              committed to comprehensive national progress. Our initiatives
              encompass poverty alleviation, education, healthcare, environment
              conservation, and more. Join us in driving positive change and
              supporting our impactful programs for a brighter future.
            </p>
            <Link href="/">
              <div className="contact-us transit2 h48 box-center br8 bg10 fc6 p32 fw7">
                Take Action
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-info bg6 df fww">
        <div className="contact-section flx50 jcc df aic ptb72">
          <div className="contact-content fc6 w50 ptb72">
            <h2 className="contact-heading fs42 lh48 fw7 mb24">
              Contact Information
            </h2>
            <p className="contact-subtext mb24 lh30">
              Get to know us, including how you can contact us and how we keep
              your information secure.
            </p>
            <div className="office-detail df fww">
              <div className="office-address ptb12">
                <p className="address lh24 df">
                  <IoIosMail className="fc2 mr8 fs24" /> P.O. BOX 18184, <br />
                  Sugar Land, TX 77496-8184
                </p>
              </div>
              <div className="office-address ptb12">
                <p className="address lh24 df">
                  <MdAlternateEmail className="fc2 mr8 fs24" />
                  iacfpresident@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-maps flx50 pr">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111026.2206047867!2d-95.79519494927773!3d29.587129785880727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640de10e11b70cb%3A0x2779e11b2263d8cc!2sSugar%20Land%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1711172107133!5m2!1sen!2sin"
            width="100%"
            height="680px"
            className="map-box pa br-br-02"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
