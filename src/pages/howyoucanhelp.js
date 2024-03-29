import Link from "next/link";
import React from "react";

const howyoucanhelp = () => {
  return (
    <>
      <section className="spread ptb48 bg8">
        <div className="spread-section wrapper2 ptb48">
          <div className="spread-container df fww">
            <div className="spread-text flx50 fc6 v-center">
              <div className="spread-box mr24">
                <span className="spread-text-heading fc1 bg7 fc12 ptb8 plr12 mb24 dib br4">
                  Empowering Change Through Awareness
                </span>
                <h2 className="spread-text-subheading fs42 fw7 lh42 mb24 fc1">
                  Join Our Mission to Educate and Inspire
                </h2>
                <p className="spread-text-subtext fw5 lh30 mb24 fc11">
                  Explore our initiatives to raise awareness on vital issues
                  like environmental sustainability, social justice, health, and
                  education. Together, we can drive positive change and create a
                  brighter future for all.
                </p>
                <Link href="/contact">
                  <div class="supporting-btn transit2 h48 box-center br8 bg5 fc1 p32 fs18 fw7">
                    Join Us
                  </div>
                </Link>
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
                <Link href="/contact">
                  <div class="supporting-btn transit2 h48 box-center br8 bg5 fc1 p32 fs18 fw7">
                    Join Us
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="donate ptb48 bg6">
        <div className="donate-section wrapper2">
          <div className="donate-container df fww">
            <div className="donate-text flx50 fc6 v-center">
              <div className="donate-box mr24">
                <span className="donate-text-heading fc1 bg7 fc12 ptb8 plr12 mb24 dib br4">
                  Support Our Cause
                </span>
                <h2 className="donate-text-subheading fs42 fw7 lh42 mb24">
                  Make a Difference Through Donation
                </h2>
                <p className="donate-text-subtext fw5 lh30 mb24">
                  Your contribution fuels our mission for positive change. Join
                  hands with us to empower communities, provide education,
                  healthcare, and create lasting impact. Every donation counts
                </p>
                <Link href="/contact">
                  <div class="supporting-btn transit2 h48 box-center br8 bg5 fc1 p32 fs18 fw7">
                    Join US
                  </div>
                </Link>
              </div>
            </div>
            <div className="contact-form df fww flx50 aic pr32">
              <div className="who-we-are-content fc6 bg2 p32 br4 bs3">
                <h2 className="who-we-are-heading fs36 lh48 fw6 mb12">
                  Empower Change
                </h2>
                <p className="who-we-are-subtext mb24 lh30">
                  Your contribution matters. Complete the form below and be a
                  part of transforming lives and communities for the better.
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
                      Ammount
                    </label>
                    <input
                      type="number"
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
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default howyoucanhelp;
