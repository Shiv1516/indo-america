import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const Wwd = () => {
  return (
    <section className="wwd bg6 ptb48">
      <div className="wwd-intro wrapper2 ptb48">
        <div className="wwd-heading-box h-center mb24">
          <div className="wwd-heading-section tac w75">
            <h4 className="wwd-subheading ttu bg1 dib fc1 fs14 fw5 br4 plr16 ptb8 mb24">
              What we do
            </h4>
            <h2 className="wwd-heading fs42 lh48 fc6 fw7 mb24">
              Fostering Change: Our Comprehensive Philanthropic Work in Greater
              Houston{" "}
            </h2>
            <p className="wwd-text lh30">
              We provide scholarships, support STEM education, aid abused
              women/children, offer healthcare services, and organize community
              events to enrich lives
            </p>
          </div>
        </div>
        <div className="wwd-card-container df jcsb ptb24">
          <div className="wwd-cards flx25 mb24 df">
            <div className="wwd-card w100 transit2 pr fc1 df jcc mr24 aft pr ofh w100">
              <img
                src="images/scholarship-program-img.jpg"
                alt="scholarship-program-img"
                className="br8 w100 ofc"
              />
              <div className="wwe-icon pa mb12 p8 zi3">
                <img
                  src="images/svg-icon/cold-storage-area.svg"
                  alt="cold-storage-area"
                />
              </div>
              <h4 className="wwe-card-text transit2 pa fw7 fs24 cp lh30 tac w75 zi3">
                <span className="fc9">Education </span>
              </h4>
              <Link
                href="/"
                className="wwe-explore transit2 v-center fw7 pa zi3"
              >
                Explore More
                <GoArrowRight className="material-symbols-outlined ml8" />
              </Link>
            </div>
          </div>
          <div className="wwd-cards flx25 mb24 df">
            <div className="wwd-card w100 transit2 pr fc1 df jcc mr24 aft pr ofh">
              <img
                src="images/waca-img.jpg"
                alt="stemsa-img"
                className="br8 w100 ofc aft"
              />
              <div className="wwe-icon pa mb12 p8 zi3">
                <img
                  src="images/svg-icon/cold-storage-area.svg"
                  alt="cold-storage-area"
                />
              </div>
              <h4 className="wwe-card-text transit2 pa fw7 fs22 cp lh30 tac w75 zi3">
                <span className="fc9">Family Support</span>
              </h4>
              <Link
                href="/"
                className="wwe-explore transit2 v-center fw7 pa zi3"
              >
                Explore More
                <GoArrowRight className="material-symbols-outlined ml8" />
              </Link>
            </div>
          </div>
          <div className="wwd-cards flx25 mb24 df">
            <div className="wwd-card w100 transit2 pr fc1 df jcc mr24 aft pr ofh">
              <img
                src="images/stemsa-img.jpg"
                alt="waca-img"
                className="br8 w100 ofc"
              />
              <div className="wwe-icon pa mb12 p8 zi3">
                <img
                  src="images/svg-icon/cold-storage-area.svg"
                  alt="cold-storage-area"
                />
              </div>
              <h4 className="wwe-card-text transit2 pa fw7 fs22 cp lh30 tac w75 zi3">
                <span className="fc9">General Wellfare</span>
              </h4>
              <Link
                href="/"
                className="wwe-explore transit2 v-center fw7 pa zi3"
              >
                Explore More
                <GoArrowRight className="material-symbols-outlined ml8" />
              </Link>
            </div>
          </div>
          <div className="wwd-cards flx25 mb24 df">
            <div className="wwd-card w100 transit2 pr fc1 df jcc mr24 aft pr ofh">
              <img
                src="images/hsce-img.jpg"
                alt="wwe"
                className="br8 w100 ofc"
              />
              <div className="wwe-icon pa mb12 p8 zi3">
                <img
                  src="images/svg-icon/cold-storage-area.svg"
                  alt="cold-storage-area"
                />
              </div>
              <h4 className="wwe-card-text transit2 pa fw7 fs22 cp lh30 tac w75 zi3">
                <span className="fc9">Healthcare </span>
              </h4>
              <Link
                href="/"
                className="wwe-explore transit2 v-center fw7 pa zi3"
              >
                Explore More
                <GoArrowRight className="material-symbols-outlined ml8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wwd;
