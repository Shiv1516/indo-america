import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const SupportingMission = () => {
  return (
    <section className="supporting-mission bg5 pt72">
      <div className="supporting-section wrapper2 ptb72">
        <div className="supporting-heading-text tac v-center fdc pt48 pb24">
          <h2 className="supporting-heading fs52 lh60 fw7 w75 fc5">
            <span className="ff2 fc8">Our Partners: Together</span>, we uplift
            and empower our community
          </h2>
        </div>
        <div className="supporting-cards df fww jcsb ptb24 aisc df">
          <div className="card flx33 mb24 df">
            <div className="card-inner-content ofh br8 bg2 mlr12">
              <div className="card-img ofh">
                <img
                  src="images/ngo-partner/aada-logo.png"
                  alt="aada-logo"
                  className="w100 df transit2"
                />
              </div>
              <div className="card-content p32">
                <h2 className="card-text fs28 fc6 fw7 mb24 lh36 transit2">
                  AADA - Asians Against Domestic Abuse
                </h2>
                <p className="card-subtext fc3 lh30 mb24">
                  We offer specialized services tailored to the cultural and
                  linguistic needs of domestic abuse survivors within Houston's
                  Greater Asian community.
                </p>
                <div className="card-btn">
                  <Link
                    href="https://www.idcccharityclinic.org/"
                    className="card-cta v-center ttu fc3 fs14 ptb8 mt8"
                  >
                    <span className="card-cta-text">Browse our Webpage.</span>
                    <GoArrowRight className="card-cta-icon material-symbols-outlined fs24 fc3 ml8 transit1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card flx33 mb24 df">
            <div className="card-inner-content ofh br8 bg2 mlr12">
              <div className="card-img ofh">
                <img
                  src="images/ngo-partner/avance-logo.jpg"
                  alt="avance-logo"
                  className="w100 df transit2"
                />
              </div>
              <div className="card-content p32">
                <h2 className="card-text fs28 fc6 fw7 mb24 lh36 transit2">
                  AVANCE
                </h2>
                <p className="card-subtext fc3 lh30 mb24">
                  We utilize a two-generation approach combining early childhood
                  development and parenting education, along with resources for
                  college and workforce readiness.
                </p>
                <div className="card-btn">
                  <Link
                    href="https://www.idahouston.org/"
                    className="card-cta v-center ttu fc3 fs14 ptb8 mt8"
                  >
                    <span className="card-cta-text">Browse our Webpage.</span>
                    <GoArrowRight className="card-cta-icon material-symbols-outlined fs24 fc3 ml8 transit1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card flx33 mb24 df">
            <div className="card-inner-content ofh br8 bg2 mlr12">
              <div className="card-img ofh">
                <img
                  src="images/ngo-partner/daya-logo.png"
                  alt="daya-logo"
                  className="w100 df transit2"
                />
              </div>
              <div className="card-content p32">
                <h2 className="card-text fs28 fc6 fw7 mb24 lh36 transit2">
                  Daya
                </h2>
                <p className="card-subtext fc3 lh30 mb24">
                  Daya empowers South Asian survivors of domestic and sexual
                  violence through culturally specific services and community
                  education to end abuse.
                </p>
                <div className="card-btn">
                  <Link
                    href="http://www.dayahouston.org/"
                    className="card-cta v-center ttu fc3 fs14 ptb8 mt8"
                  >
                    <span className="card-cta-text">Browse our Webpage.</span>
                    <GoArrowRight className="card-cta-icon material-symbols-outlined fs24 fc3 ml8 transit1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link href="/" className="supporting-btn-section tac h-center">
          <div className="supporting-mission-btn transit2 h48 box-center br8 bg8 fc1 p32 fw7">
            View More Partners
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SupportingMission;
