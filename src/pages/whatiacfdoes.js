import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const whatiacfdoes = () => {
  return (
    <>
      <section className="our-initiatives ptb48 bg6">
        <div className="initiatives-container wrapper2 df fww ptb40">
          <div className="initiatives-text flx50 v-center fc6">
            <div className="initiatives-box mlr8 mr16">
              <span className="initiatives-text-heading fc1 bg3 ptb8 plr12 mb24 dib br4">
                Creating Positive Change Across India
              </span>
              <h2 className="initiatives-text-subheading fs42 lh48 fw6 mb24">
                Empower Communities Through IACF's Initiatives
              </h2>
              <p className="initiatives-text-subtext lh24 mb16">
                Discover how Indo-American Charity Foundation's diverse
                initiatives are making a meaningful impact on education,
                healthcare, livelihoods, and environmental sustainability in
                communities across India.
              </p>
              <div className="bullet-point-contain v-center fc3">
                <ul className="bullet-points-box mr32">
                  <li className="bullet-points mb16 v-center fw5">
                    <FaCheckCircle className="fc2 fw6 fs20 mr8" />
                    Empowerment
                  </li>
                  <li className="bullet-points mb16 v-center fw5">
                    <FaCheckCircle className="fc2 fw6 fs20 mr8" />
                    Impact
                  </li>
                </ul>
                <ul className="bullet-points-box mr32">
                  <li className="bullet-points mb16 v-center fw5">
                    <FaCheckCircle className="fc2 fw6 fs20 mr8" />
                    Change
                  </li>
                  <li className="bullet-points mb16 v-center fw5">
                    <FaCheckCircle className="fc2 fw6 fs20 mr8" />
                    Community
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="initiatives-img flx50">
            <div className="initiatives-box df fww mlr12">
              <div className="initiatives-section-img flx50 p8 df">
                <img
                  src="images/our-initiatives-img-01.jpg"
                  className="w100 br4"
                />
              </div>
              <div className="initiatives-section-img flx50 p8 df">
                <img
                  src="images/our-initiatives-img-04.jpg"
                  className="w100 br4"
                />
              </div>
              <div className="initiatives-section-img flx50 p8 df">
                <img
                  src="images/our-initiatives-img-03.jpg"
                  className="w100 br4"
                />
              </div>
              <div className="initiatives-section-img flx50 p8 df">
                <img
                  src="images/our-initiatives-img-02.jpg"
                  className="w100 br4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="community-programs ptb48 bg5">
        <div className="community-section wrapper2 ptb40">
          <div className="volunteer-container df fww">
            <div className="volunteer-img flx50 df">
              <div className="volunteer-box mlr12 df">
                <img
                  src="images/community-programs.jpg"
                  alt="spread-awareness"
                  className="br4 w100"
                />
              </div>
            </div>
            <div className="volunteer-text flx50 fc6 v-center">
              <div className="volunteer-box ml24">
                <span className="volunteer-text-heading fc1 bg7 fc12 ptb8 plr12 mb24 dib br4">
                  Empowering Lives, Transforming Futures
                </span>
                <h2 className="volunteer-text-subheading fs42 fw7 lh48 mb24 fc1">
                  Building Stronger Communities with IACF's Programs
                </h2>
                <p className="volunteer-text-subtext fw5 lh30 mb24 fc11">
                  Explore Indo-American Charity Foundation community-driven
                  programs focused on education, skill development, health, and
                  social welfare, designed to uplift and empower underprivileged
                  communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="community-programs ptb48 bg8">
        <div className="community-section wrapper2 ptb40">
          <div className="volunteer-container df fww">
            <div className="volunteer-text flx50 fc6 v-center">
              <div className="volunteer-box mr24">
                <span className="volunteer-text-heading fc1 bg5 fc12 ptb8 plr12 mb24 dib br4">
                  Empowering Change, Inspiring Hope
                </span>
                <h2 className="volunteer-text-subheading fs42 fw7 lh48 mb24 fc1">
                  Creating Lasting Social Impact with IACF
                </h2>
                <p className="volunteer-text-subtext fw5 lh30 mb24 fc11">
                  Discover how Indo-American Charity Foundation's social impact
                  initiatives are addressing key societal challenges, promoting
                  inclusivity, equality, and social justice for all.
                </p>
              </div>
            </div>
            <div className="volunteer-img flx50 df">
              <div className="volunteer-box mlr12 df">
                <img
                  src="images/social-impact.jpg"
                  alt="spread-awareness"
                  className="br4 w100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="spread ptb48">
        <div className="spread-section wrapper2 ptb48">
          <div className="spread-container df fww">
            <div className="spread-img flx50 df">
              <div className="spread-box mlr12 df">
                <img
                  src="images/partnerships.jpg"
                  alt="spread-awareness"
                  className="br4 w100"
                />
              </div>
            </div>
            <div className="spread-text flx50 fc6 v-center">
              <div className="spread-box ml24">
                <span className="spread-text-heading fc1 bg3 fc12 ptb8 plr12 mb24 dib br4">
                  Strength in Unity
                </span>
                <h2 className="spread-text-subheading fs42 fw7 lh42 mb24">
                  Collaborating for Impact: IACF's Partnerships
                </h2>
                <p className="spread-text-subtext fw5 lh30 mb24">
                  Learn about Indo-American Charity Foundation's strategic
                  partnerships and collaborations with government agencies,
                  NGOs, corporate entities, and community stakeholders to
                  amplify impact and reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default whatiacfdoes;
