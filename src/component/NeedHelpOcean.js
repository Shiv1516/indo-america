import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const NeedHelpOcean = () => {
  return (
    <section className="need-help-ocean bg9 ptb72">
      <div className="need-help-ocean-section wrapper2">
        <div className="need-help-ocean-heading-text h-center tac ptb24">
          <h2 className="need-help-ocean-heading fs52 lh60 fw7 w50 fc8">
            Our
            <span className="ff2 fc1"> Supporters</span>
          </h2>
        </div>
        <div className="donors-container df fww mt32 df aisc">
          <div className="donors-cards flx33  mb24 df">
            <div className="donors-card w100 bg2 tac brd1 p32 br8 mr24">
              <div className="donors-logo mb24">
                <img
                  src="images/ngo-partner/yldp-logo.jpg"
                  alt="yldp-logo"
                  className="w100 transit2"
                />
              </div>
              <h2 className="donors-name mb16 fc7 fw7 fs24 lh30">
                Youth Leadership Development Program
              </h2>
              <p className="donors-date mb16 fs14 fc2">January 10, 2023</p>
              <h4 className="donors-ammount lh30">
                YLDP cultivates Indo-American youth leaders through skill
                development and community engagement.
              </h4>
              <div className="card-btn">
                <Link
                  href="http://www.yldphouston.org/"
                  className="card-cta v-center jcc ttu fc3 fs14 ptb8 mt8"
                >
                  <span className="card-cta-text">Browse our Webpage.</span>
                  <GoArrowRight className="card-cta-icon material-symbols-outlined fs24 fc3 ml8 transit1" />
                </Link>
              </div>
            </div>
          </div>
          <div className="donors-cards flx33  mb24 df">
            <div className="donors-card w100 bg2 tac brd1 p32 br8 mr24">
              <div className="donors-logo mb24 df">
                <img
                  src="images/ngo-partner/Reach-Logo-Horiz_FNL1.png"
                  alt="Reach-Unlimited"
                  className="w100 transit2"
                />
              </div>
              <h2 className="donors-name mb16 fc7 fw7 fs24 lh30">
                Reach Unlimited
              </h2>
              <p className="donors-date mb16 fs14 fc2">March 4, 2023</p>
              <h4 className="donors-ammount lh30">
                Reach provides a safe, caring environment for individuals with
                intellectual and developmental disabilities to thrive.
              </h4>
              <div className="card-btn">
                <Link
                  href="/"
                  className="card-cta v-center jcc ttu fc3 fs14 ptb8 mt8"
                >
                  <span className="card-cta-text">Browse our Webpage.</span>
                  <GoArrowRight className="card-cta-icon material-symbols-outlined fs24 fc3 ml8 transit1" />
                </Link>
              </div>
            </div>
          </div>
          <div className="donors-cards flx33  mb24 df">
            <div className="donors-card w100 bg2 tac brd1 p32 br8 mr24">
              <div className="donors-logo mb24 df">
                <img
                  src="images/ngo-partner/casa.jpg"
                  alt="ngo-partner"
                  className="w100 transit2"
                />
              </div>
              <h2 className="donors-name mb16 fc7 fw7 fs24 lh30">
                Casa De Esperanza
              </h2>
              <p className="donors-date mb16 fs14 fc2">January 4, 2023</p>
              <h4 className="donors-ammount lh30">
                Casa de Esperanza breaks the cycle of child abuse by providing
                comprehensive support for at-risk families
              </h4>
              <div className="card-btn">
                <Link
                  href="/"
                  className="card-cta v-center jcc ttu fc3 fs14 ptb8 mt8"
                >
                  <span className="card-cta-text">Browse our Webpage.</span>
                  <GoArrowRight className="card-cta-icon material-symbols-outlined fs24 fc3 ml8 transit1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="supporting-btn-section tac pt40">
          <Link href="/">
            <div className="supporting-mission-btn transit2 h48 box-center br8 bg8 fc1 p32 fw7">
              View all Companies{" "}
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NeedHelpOcean;
