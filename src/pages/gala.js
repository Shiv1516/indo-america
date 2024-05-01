import React from "react";
import { VscArrowCircleRight } from "react-icons/vsc";
import { FaRegFolderOpen } from "react-icons/fa";
import { GoCheckCircle } from "react-icons/go";
import Link from "next/link";

const gala = () => {
  return (
    <>
      <section className="events bg5 ptb48">
        <div className="events-section wrapper df fww ptb40">
          <div className="flx1 df fww">
            <div className="events-content plr24 flx50 fc1">
              <h2 className="events-heading fs42 lh48 fw7 mb24">
                IACF Annual <span className="fc8">Gala Event</span>
              </h2>
              <p className="events-subtext mb16 lh30">
                Join us for our annual fundraiser "Casino Night - Play for
                Charity" at 6:30 PM on Saturday, September 9, 2023 as we
                celebrate over 34 years of service and support to Houston area
                charity organizations and special needs. By pooling together our
                combined funds we are able to make a greater impact in the lives
                of those we reach.
              </p>
              <p className="events-subtext mb16 lh30">
                This year's fundraising gala details:
              </p>
              <ul className="events-points ml12 mb32">
                <li className="innner-points mb16 v-center">
                  <GoCheckCircle className="material-symbols-outlined mr8 fc5 fs24 fw5" />
                  Location: Stafford Centre, 10505 Cash Rd, Stafford, TX 77477
                </li>
                <li className="innner-points mb16 v-center">
                  <GoCheckCircle className="material-symbols-outlined mr8 fc5 fs24 fw5" />
                  Date: Saturday, September 9, 2023 at 6:30 PM.
                </li>
              </ul>
              <Link href="https://www.paypal.com/donate?token=fQKEOQs3go0wzRLWSPxfdOfsuolpqBzG5_a0XkaxZGXqK65kmyHfDMulU5_K3C-TEXU_fuqLIHluvRXt">
                <div className="supporting-btn transit2 h48 box-center br8 bg8 fc1 p32 fw7">
                  Donate Now
                </div>
              </Link>
            </div>
            <div className="contact-us-img flx50 df">
              <div className="contact-us-img-box df">
                <img
                  src="images/gala-event.jpg"
                  alt="gala-event"
                  className="w100 br8"
                />
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
              <ul className="category-item fs16 fw5 ml24 mb24">
                <li className="category-item-list df mb16 tdhu">
                  <Link href="/gala2024" className="">
                    <FaRegFolderOpen className="fs14 fc6 mr8" />
                    2024
                  </Link>
                </li>
                <li className="category-item-list df mb16 tdhu">
                  <Link href="/gala2023" className="">
                    <FaRegFolderOpen className="fs14 fc6 mr8" />
                    2023
                  </Link>
                </li>
                <li className="category-item-list df mb16 tdhu">
                  <Link href="/gala2022" className="">
                    <FaRegFolderOpen className="fs14 fc6 mr8" />
                    2022
                  </Link>
                </li>
                <li className="category-item-list df mb16 tdhu">
                  <Link href="/gala2021" className="">
                    <FaRegFolderOpen className="fs14 fc6 mr8" />
                    2021
                  </Link>
                </li>
              </ul>
              <h4>
                <Link
                  href="/iwalkicare"
                  className="category-list mb24 p12 bg1 fc1 df br4"
                >
                  We WALK - We CARE
                </Link>
              </h4>
              <h4>
                <Link
                  href="/grantnight"
                  className="category-list mb24 p12 bg1 fc1 df br4"
                >
                  Event Night
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
          <div className="support-container">
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
              src="images/gallery/event-img-01.png"
              alt="event-img"
              className="w100 br4"
            />
          </div>
          <div className="events-img df flx100 p12">
            <img
              src="images/gallery/event-img-02.png"
              alt="event-img"
              className="w100 br4"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default gala;
