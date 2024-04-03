import React from "react";
import { VscArrowCircleRight } from "react-icons/vsc";
import { FaRegFolderOpen } from "react-icons/fa";
import Link from "next/link";

const iwalkicare = () => {
  return (
    <>
      <section className="events bg5 ptb48">
        <div className="events-section wrapper df fww ptb40">
          <div className="flx1 df fww">
            <div className="donate-container df fww">
              <div className="donate-text flx50 fc6 v-center">
                <div className="donate-box mr24">
                  <span className="donate-text-heading fc1 bg7 fc12 ptb8 plr12 mb24 dib br4">
                    Explore Our Events
                  </span>
                  <h2 className="donate-text-subheading fs42 fw1 lh42 mb24 fc1">
                    Engage with Meaningful Experiences
                  </h2>
                  <p className="donate-text-subtext fw5 lh30 mb24 fc11">
                    Discover a range of enriching events tailored to inspire,
                    educate, and empower. Join us in making a difference today.
                  </p>
                  <Link href="https://www.paypal.com/donate?token=fQKEOQs3go0wzRLWSPxfdOfsuolpqBzG5_a0XkaxZGXqK65kmyHfDMulU5_K3C-TEXU_fuqLIHluvRXt">
                    <div className="supporting-btn transit2 h48 box-center br8 bg8 fc1 p32 fw7">
                      Donate Now
                    </div>
                  </Link>
                </div>
              </div>
              <div className="contact-form df fww flx50 aic pr32">
                <div className="who-we-are-content fc6 bg2 p32 br4 bs3">
                  <h2 className="who-we-are-heading fs36 lh48 fw6 mb12 tac">
                    Event Registration Form
                  </h2>
                  <p className="who-we-are-subtext mb24 lh30 tac">
                    Complete the form below to register for the selected event.
                    Secure your spot and join us for an unforgettable
                    experience!
                  </p>
                  <div className="df fww mb16">
                    <div className="contact-firstname flx50 mb16 pr12">
                      <label for="/" className=" mb12 dib ml4 fw5">
                        Name
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
                    <div className="contact-email flx50 mb16">
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
                    <div className="contact-phone flx50 mb16 pr12">
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
                    <div className="contact-subject flx50 mb16">
                      <label for="/" className=" mb12 dib ml4 fw5">
                        Purpose
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
                  </div>
                  <div className="flx1 p12">
                    <button className="form-btn cp h48 br8 bg1 fc1 p32 fs18 box-center fw7 transit2">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="side-navigation flx25 pl24">
            <div className="p24 fs18 fw6 brd1 bg2 br4">
              <h2 className="category tac mb24 fs20 fc6 ttu">category</h2>
              <h3>
                <Link
                  href="/gala"
                  className="category-list mb24 p12 bg1 fc1 df br4"
                >
                  Gala
                </Link>
              </h3>
              <h4>
                <Link
                  href="/iwalkicare"
                  className="category-list mb24 p12 bg1 fc1 df br4"
                >
                  I Walk & I Care
                </Link>
              </h4>
              <ul className="category-item fs16 fw5 ml24 mb24">
                <li className="category-item-list df mb16 tdhu">
                  <Link href="#" className="">
                    <FaRegFolderOpen className="fs14 fc6 mr8" />
                    2024
                  </Link>
                </li>
                <li className="category-item-list df mb16 tdhu">
                  <Link href="#" className="">
                    <FaRegFolderOpen className="fs14 fc6 mr8" />
                    2023
                  </Link>
                </li>
                <li className="category-item-list df mb16 tdhu">
                  <Link href="#" className="">
                    <FaRegFolderOpen className="fs14 fc6 mr8" />
                    2022
                  </Link>
                </li>
                <li className="category-item-list df mb16 tdhu">
                  <Link href="#" className="">
                    <FaRegFolderOpen className="fs14 fc6 mr8" />
                    2021
                  </Link>
                </li>
              </ul>
              <h4>
                <Link
                  href="/grantnight"
                  className="category-list mb24 p12 bg1 fc1 df br4"
                >
                  Grant Night
                </Link>
              </h4>
              <h4>
                <Link
                  href="/liveinhouston"
                  className="category-list mb24 p12 bg1 fc1 df br4"
                >
                  Live in Houston
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="support ptb48">
        <div className="support-box wrapper2 ptb40">
          <div className="message-heading-box h-center mb40">
            <div className="message-heading-section tac w75">
              <h2 className="message-heading fs52 lh48 fc6 fw7 mb24">
                Levels of Support for Our Cause{" "}
              </h2>
              <p className="message-text lh30 fs18">
                Explore Various Ways to Contribute to Our Mission
              </p>
            </div>
          </div>
          <div className="supports-cards-container df fww aisc ptb24">
            <div className="support-card flx33 mtb32 df">
              <div className="support-cards mr32 w100 fc6 fw5 bg12 plr12 br8 brd-b1 ptb32">
                <div className="support-cards-content df fww jcsb">
                  <div>
                    <h2 className="support-cards-heading mb12 fw7 fs18">
                      Diamond Supporter :
                    </h2>
                    <p className="support-cards-price fs13 fw7 mb24 fc7 it">
                      $ 25,000
                    </p>
                  </div>
                  <img
                    src="images/diamond.webp"
                    alt="diamond"
                    className="support-cards-img bg1 br50 brd2"
                  />
                </div>
                <ul className="support-inner-point">
                  <li className="inner-point mb12 df lh24">
                    <VscArrowCircleRight className="mr8 fs24 fc5 fw5" />
                    Two Premium Tables / 20 Guests.
                  </li>
                  <li className="inner-point mb12 df lh24">
                    <VscArrowCircleRight className="mr8 fs24 fc5 fw5" />
                    Naming Rights and Speaking time at the Gala.
                  </li>
                  <li className="inner-point mb12 df lh24">
                    <VscArrowCircleRight className="mr8 fs24 fc5 fw5" />
                    Recognition in all Multimedia Presentations.
                  </li>
                  <li className="inner-point mb12 df lh24">
                    <VscArrowCircleRight className="mr8 fs24 fc5 fw5" />
                    Full page Ad in Gala Brochure.
                  </li>
                </ul>
              </div>
            </div>
            <div className="support-card flx33 mtb32 df">
              <div className="support-cards mr32 w100 fc6 fw5 bg12 plr12 br8 brd-b1 ptb32">
                <div className="support-cards-content df fww jcsb">
                  <div>
                    <h2 className="support-cards-heading mb12 fw7 fs18">
                      Sapphire Supporter :
                    </h2>
                    <p className="support-cards-price fs13 fw7 mb24 fc7 it">
                      $ 15,000
                    </p>
                  </div>
                  <img
                    src="images/sapphire.webp"
                    alt="sapphire"
                    className="support-cards-img bg1 br50 brd2"
                  />
                </div>
                <ul className="support-inner-point">
                  <li className="inner-point mb12 df lh24">
                    <VscArrowCircleRight className="mr8 fs24 fc5 fw5" />
                    Two Premium Tables / 20 Guests.
                  </li>
                  <li className="inner-point mb12 df lh24">
                    <VscArrowCircleRight className="mr8 fs24 fc5 fw5" />
                    Stage time at the Gala.
                  </li>
                  <li className="inner-point mb12 df lh24">
                    <VscArrowCircleRight className="mr8 fs24 fc5 fw5" />
                    Recognition in all Multimedia Presentations.
                  </li>
                  <li className="inner-point mb12 df lh24">
                    <VscArrowCircleRight className="mr8 fs24 fc5 fw5" />
                    Full page Ad in Gala Brochure.
                  </li>
                </ul>
              </div>
            </div>
            <div className="support-card flx33 mtb32 df">
              <div className="support-cards mr32 w100 fc6 fw5 bg12 plr12 br8 brd-b1 ptb32">
                <div className="support-cards-content df fww jcsb">
                  <div>
                    <h2 className="support-cards-heading mb12 fw7 fs18">
                      Ruby Supporter :
                    </h2>
                    <p className="support-cards-price fs13 fw7 mb24 fc7 it">
                      $ 10,000
                    </p>
                  </div>
                  <img
                    src="images/ruby.webp"
                    alt="ruby-webp"
                    className="support-cards-img bg1 br50 brd2"
                  />
                </div>
                <ul className="support-inner-point">
                  <li className="inner-point mb12 df lh24">
                    <VscArrowCircleRight className="mr8 fs24 fc5 fw5" />
                    One Premium Table / 10 guests.
                  </li>
                  <li className="inner-point mb12 df lh24">
                    <VscArrowCircleRight className="mr8 fs24 fc5 fw5" />
                    Recognition in all Multimedia Presentations.
                  </li>
                  <li className="inner-point mb12 df lh24">
                    <VscArrowCircleRight className="mr8 fs24 fc5 fw5" />
                    Full page Ad in Gala Brochure.
                  </li>
                </ul>
              </div>
            </div>
            <div className="support-card flx33 mtb32 df">
              <div className="support-cards mr32 w100 fc6 fw5 bg12 plr12 br8 brd-b1 ptb32">
                <div className="support-cards-content df fww jcsb">
                  <div>
                    <h2 className="support-cards-heading mb12 fw7 fs18">
                      Emerald Supporter :
                    </h2>
                    <p className="support-cards-price fs13 fw7 mb24 fc7 it">
                      $ 5,000
                    </p>
                  </div>
                  <img
                    src="images/emerald.webp"
                    alt="emerald.webp"
                    className="support-cards-img bg1 br50 brd2"
                  />
                </div>
                <ul className="support-inner-point">
                  <li className="inner-point mb12 df lh24">
                    <VscArrowCircleRight className="mr8 fs24 fc5 fw5" />
                    One Premium Table / 10 guests.
                  </li>
                  <li className="inner-point mb12 df lh24">
                    <VscArrowCircleRight className="mr8 fs24 fc5 fw5" />
                    Recognition in all Multimedia Presentations.
                  </li>
                  <li className="inner-point mb12 df lh24">
                    <VscArrowCircleRight className="mr8 fs24 fc5 fw5" />
                    Half page Ad in Gala Brochure.
                  </li>
                </ul>
              </div>
            </div>
            <div className="support-card flx33 mtb32 df">
              <div className="support-cards mr32 w100 fc6 fw5 bg12 plr12 br8 brd-b1 ptb32">
                <div className="support-cards-content df fww jcsb">
                  <div>
                    <h2 className="support-cards-heading mb12 fw7 fs18">
                      Amethyst Supporter :
                    </h2>
                    <p className="support-cards-price fs13 fw7 mb24 fc7 it">
                      $ 2,500
                    </p>
                  </div>
                  <img
                    src="images/amethyst.webp"
                    alt="amethyst"
                    className="support-cards-img bg1 br50 brd2"
                  />
                </div>
                <ul className="support-inner-point">
                  <li className="inner-point mb12 df lh24">
                    <VscArrowCircleRight className="mr8 fs24 fc5 fw5" />
                    One Table / 10 guests.
                  </li>
                  <li className="inner-point mb12 df lh24">
                    <VscArrowCircleRight className="mr8 fs24 fc5 fw5" />
                    Quarter page Ad in Gala Brochure.
                  </li>
                </ul>
              </div>
            </div>
            <div className="support-card flx33 mtb32 df">
              <div className="support-cards mr32 w100 fc6 fw5 bg12 plr12 br8 brd-b1 ptb32">
                <div className="support-cards-content df fww jcsb">
                  <div>
                    <h2 className="support-cards-heading mb12 fw7 fs18">
                      Citrine Supporter :
                    </h2>
                    <p className="support-cards-price fs13 fw7 mb24 fc7 it">
                      $ 1,000
                    </p>
                  </div>
                  <img
                    src="images/citrine.jpg"
                    alt="citrine"
                    className="support-cards-img bg1 br50 brd2"
                  />
                </div>
                <ul className="support-inner-point">
                  <li className="inner-point mb12 df lh24">
                    <VscArrowCircleRight className="mr8 fs24 fc5 fw5" />
                    Two Premium Tickets.
                  </li>
                  <li className="inner-point mb12 df lh24">
                    <VscArrowCircleRight className="mr8 fs24 fc5 fw5" />
                    Name Mention in Gala Brochure.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="events ptb48 bg7">
        <div className="message-heading-box h-center ptb40">
          <div className="message-heading-section tac fc1 w75">
            <h2 className="message-heading fs52 lh48 fw7 mb24">
              Levels of Support for Our Cause{" "}
            </h2>
            <p className="message-text lh30 fs18">
              Explore Various Ways to Contribute to Our Mission
            </p>
          </div>
        </div>
        <div className="event-container wrapper2 pt24">
          <div className="events-img df flx100 p12">
            <img
              src="images/gallery/iacf-flyer.jpg"
              alt="iacf-flyer"
              className="w100 br4"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default iwalkicare;
