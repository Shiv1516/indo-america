import Link from "next/link";
import React from "react";

const Happening = () => {
  return (
    <section className="happening">
      <div className="happening-section wrapper2 ptb48">
        <div className="happening-heading-text tac h-center ptb24">
          <h2 className="heed-help-ocean-heading fs52 lh60 fw7 w50 plr24 fc6">
            Accomplishments
          </h2>
        </div>
        <div className="happening-card-container df fww mtb24">
          <div className="happening-card flx50">
            <div className="happening-cards ofh br8 mr32 mb24">
              <img
                src="images/covid-relief.jpg"
                alt="happening"
                className="w100 df"
              />
              <div
                className="card-category ttu bg5 bg-h1 fs12 transit2 cp fc1 plr8
                      ptb12 dib mb24 fw7 ls2 br-br-01"
              >
                Fundraising
              </div>
              <h2 className="card-text fs28 fc6 fw7 mb24 lh30 transit2 fc-h1">
                IACF's Covid Relief: Donates 10 ICU Beds to Indian Hospitals
              </h2>
              <div className="card-tag-marks v-center">
                <div className="card-detail v-center lh30 fs14">
                  {" "}
                  <span className="material-symbols-outlined mr8 fw5">
                    pace{" "}
                  </span>
                  January 20, 2024
                </div>
                <div className="card-detail ml8 lh30">
                  By <span className="fc2 ml4">cmsmasters</span>
                </div>
              </div>
            </div>
          </div>
          <div className="happening-card flx50">
            <div className="happening-cards ofh br8 mr32 mb24">
              <img
                src="images/iacf-scholars-empowering.jpg"
                alt="happening"
                className="w100 df"
              />
              <div
                className="card-category ttu bg5 bg-h1 fs12 transit2 cp fc1 plr8
                      ptb12 dib mb24 fw7 ls2 br-br-01"
              >
                Fundraising
              </div>
              <h2 className="card-text fs28 fc6 fw7 mb24 lh30 transit2 fc-h1">
                IACF Scholars: Empowering Tomorrow's Leaders Through Education{" "}
              </h2>
              <div className="card-tag-marks v-center">
                <div className="card-detail v-center lh30 fs14">
                  {" "}
                  <span className="material-symbols-outlined mr8 fw5">
                    pace{" "}
                  </span>
                  January 20, 2024
                </div>
                <div className="card-detail ml8 lh30">
                  By <span className="fc2 ml4">cmsmasters</span>
                </div>
              </div>
            </div>
          </div>
          <div className="happening-card flx50">
            <div className="happening-cards ofh br8 mr32 mb24">
              <img
                src="images/contribution-supporting.jpg"
                alt="happening"
                className="w100 df"
              />
              <div
                className="card-category ttu bg5 bg-h1 fs12 transit2 cp fc1 plr8
                      ptb12 dib mb24 fw7 ls2 br-br-01"
              >
                Fundraising
              </div>
              <h2 className="card-text fs28 fc6 fw7 mb24 lh30 transit2 fc-h1">
                IACF's $200K Contribution: Supporting Houston Mayor's
                Hurricane&nbsp;Harvey&nbsp;Relief
              </h2>
              <div className="card-tag-marks v-center">
                <div className="card-detail v-center lh30 fs14">
                  {" "}
                  <span className="material-symbols-outlined mr8 fw5">
                    pace{" "}
                  </span>
                  January 20, 2024
                </div>
                <div className="card-detail ml8 lh30">
                  By <span className="fc2 ml4">cmsmasters</span>
                </div>
              </div>
            </div>
          </div>
          <div className="happening-card flx50">
            <div className="happening-cards ofh br8 mr32 mb24">
              <img
                src="images/happening.jpg"
                alt="happening"
                className="w100 df"
              />
              <div
                className="card-category ttu bg5 bg-h1 fs12 transit2 cp fc1 plr8
                      ptb12 dib mb24 fw7 ls2 br-br-01"
              >
                Fundraising
              </div>
              <h2 className="card-text fs28 fc6 fw7 mb24 lh30 transit2 fc-h1">
                Starting a Fundraiser? How to Ask for Donations in 5 Easy Steps
              </h2>
              <div className="card-tag-marks v-center">
                <div className="card-detail v-center lh30 fs14">
                  {" "}
                  <span className="material-symbols-outlined mr8 fw5">
                    pace{" "}
                  </span>
                  January 20, 2024
                </div>
                <div className="card-detail ml8 lh30">
                  By <span className="fc2 ml4">cmsmasters</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link href="/" className="supporting-btn-section h-center df mb32">
          <div className="supporting-btn transit2 h48 box-center br8 bg5 fc1 p32 fw7">
            View More Article
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Happening;
