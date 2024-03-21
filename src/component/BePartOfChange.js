import Link from "next/link";
import React from "react";

const BePartOfChange = () => {
  return (
    <section className="be-part-of-change ptb72">
      <div className="be-part-of-change-container df ptb72">
        <div className="be-part-of-change-box flx50 jce df">
          <div className="be-part-of-change-content w75 tac mlr32">
            <h2 className="be-part-of-change-heading fs52 lh60 fc1 fw7 mb24">
              Join us in creating meaningful change
              <span className="fc6 fw7 ff2"> in Greater Houston.</span>
            </h2>
            <p className="be-part-of-change-subtext mb24 fc7 lh30">
              Sign-up for IACF Membership and become a catalyst for positive
              change in Greater Houston. With us, you'll empower communities
              through scholarships, STEM initiatives, women's support,
              healthcare services, and vibrant community events. Together, let's
              create a brighter future for all.
            </p>

            <Link href="/">
              <div className="supporting-btn transit2 h48 box-center br8 bg5 fc1 p32 fw7">
                Subscribe Now
              </div>
            </Link>
          </div>
        </div>
        <div className="be-part-img-section flx1 pr">
          <img
            src="images/be-part-of-change-img.jpg"
            alt="be-part-of-change"
            className="be-part-img w100 pa br-br-02"
          />
        </div>
      </div>
    </section>
  );
};

export default BePartOfChange;
