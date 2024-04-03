import Link from "next/link";
import React from "react";
import { FaDonate } from "react-icons/fa";

const howyoucanhelp = () => {
  return (
    <>
      <section className="donate ptb48 bg8">
        <div className="donate-section wrapper2 ptb40">
          <div className="donate-container df fww">
            <div className="donate-text flx50 fc6 v-center">
              <div className="donate-box mr24">
                <span className="donate-text-heading fc1 bg7 fc12 ptb8 plr12 mb24 dib br4">
                  Support Our Cause
                </span>
                <h2 className="donate-text-subheading fs42 fw7 lh42 mb24 fc1">
                  Make a Difference Through Donation
                </h2>
                <p className="donate-text-subtext fw5 lh30 mb24 fc11">
                  Your contribution fuels our mission for positive change. Join
                  hands with us to empower communities, provide education,
                  healthcare, and create lasting impact. Every donation counts
                </p>
              </div>
            </div>
            <div className="contact-form df fww flx50 aic pr32 df jcc">
              <div className="who-we-are-content fc6 bg2 p32 br4 bs3">
                <Link href="/" className="social-links plr12 mb24">
                  <img
                    src="images/svg-icon/charity.png"
                    alt="charity"
                    className="h150 w180"
                  />
                </Link>
                <Link
                  href="https://www.paypal.com/donate?token=fQKEOQs3go0wzRLWSPxfdOfsuolpqBzG5_a0XkaxZGXqK65kmyHfDMulU5_K3C-TEXU_fuqLIHluvRXt"
                  className="popup-d-btn transit2 br4 h48 fc1 cp bg1 box-center"
                >
                  <FaDonate className="mr8 fs24" />
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="volunteer ptb48">
        <div className="volunteer-section wrapper2 ptb48">
          <div className="volunteer-container df fww">
            <div className="volunteer-img flx50 df">
              <div className="volunteer-box mlr12 df">
                <img
                  src="images/volunteer-engagement.jpg"
                  alt="spread-awareness"
                  className="br4 w100"
                />
              </div>
            </div>
            <div className="volunteer-text flx50 fc6 v-center">
              <div className="volunteer-box ml24">
                <span className="volunteer-text-heading fc1 bg7 fc12 ptb8 plr12 mb24 dib br4">
                  Join Us in Making a Difference
                </span>
                <h2 className="volunteer-text-subheading fs42 fw7 lh42 mb24">
                  Volunteer and Transform Lives
                </h2>
                <p className="volunteer-text-subtext fw5 lh30 mb24">
                  Discover opportunities to volunteer and contribute to
                  impactful projects focused on education, healthcare, community
                  development, and more. Be part of positive change and make a
                  meaningful impact today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="spread ptb48 bg6">
        <div className="spread-section wrapper2 ptb48">
          <div className="spread-container df fww">
            <div className="spread-text flx50 fc6 v-center">
              <div className="spread-box mr24">
                <span className="spread-text-heading fc1 bg7 fc12 ptb8 plr12 mb24 dib br4">
                  Empowering Change Through Awareness
                </span>
                <h2 className="spread-text-subheading fs42 fw7 lh42 mb24">
                  Join Our Mission to Educate and Inspire
                </h2>
                <p className="spread-text-subtext fw5 lh30 mb24">
                  Explore our initiatives to raise awareness on vital issues
                  like environmental sustainability, social justice, health, and
                  education. Together, we can drive positive change and create a
                  brighter future for all.
                </p>
              </div>
            </div>
            <div className="spread-img flx50 df">
              <div className="spread-box mlr12 df">
                <img
                  src="images/spread-awareness.jpg"
                  alt="spread-awareness"
                  className="br4 w100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default howyoucanhelp;
