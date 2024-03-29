import { GoCheckCircle } from "react-icons/go";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { VscArrowCircleRight } from "react-icons/vsc";
import { fetchBannerData } from "../pages/api/aboutBanner.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const events = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBannerData();
      setBanners(data);
    };
    fetchData();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="about-hero-section">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div className="about-banner" key={index}>
              <img
                src={`images/${banner.image}`}
                alt={banner.title}
                className="w100"
              />
              <div className="banner-data-wrap pa t0 b0 df jcs aie aft pr">
                <div className="banner-content tac pb48 zi99">
                  <h2 className="hero-sub-heading fs16 br24 plr24 ttu dif plr16 ptb8 bg11 fc1  mb16 ls1">
                    {banner.title}
                  </h2>
                  <h3 className="hero-heading lh30 fs32 fc1 fw7 mb16 ls1">
                    {banner.subtitle}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <section className="events bg5 ptb48">
        <div className="events-section wrapper2 df aic fww ptb40">
          <div className="events-content plr24 flx50 fc1">
            <h2 className="events-heading fs52 fw7 mb24">
              IACF Annual Gala 2023
            </h2>
            <p className="events-subtext mb16 lh30">
              Join us for our annual fundraiser "Casino Night - Play for
              Charity" at 6:30 PM on Saturday, September 9, 2023 as we celebrate
              over 34 years of service and support to Houston area charity
              organizations and special needs. By pooling together our combined
              funds we are able to make a greater impact in the lives of those
              we reach.
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
          </div>
          <div className="contact-us-img flx50">
            <div className="contact-us-img-box">
              <img
                src="images/contact-us.jpg"
                alt="contact-us"
                className="w100 br8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="message ptb48">
        <div className="message-container wrapper2 ptb40">
          <div className="message-heading-box h-center mb40">
            <div className="message-heading-section tac w75">
              <h2 className="message-heading fs52 lh48 fc6 fw7 mb24">
                Purchase tickets ahead of time{" "}
              </h2>
              <p className="message-text lh30 fs18">
                Kindly choose the suitable Sponsorship/Individual Tickets and
                securely complete the purchase via PayPal.
              </p>
            </div>
          </div>
          <div className="message-providers df fww ptb24">
            <div className="provider flx50 mb24">
              <div className="provider-box mr24 df fww ofh br8 bg12">
                <div className="provider-img flx50 df">
                  <img
                    src="images/team-member-01.jpg"
                    alt=""
                    className="w100"
                  />
                </div>
                <div className="provider-content flx50 fc6 p24">
                  <h2 className="provider-heading fs20 fw7 mb8">
                    Rajesh Dikonda
                  </h2>
                  <h4 className="provider-degignation fs14 mb16">
                    (President)
                  </h4>
                  <p className="provider-about lh24 mb16">
                    Our esteemed President, a beacon of leadership, guiding us
                    with vision and dedication towards a brighter future for
                    all.
                  </p>
                  <Link href="#" className="provider-mail it lh24 fc-h1 fw5">
                    Email: IACFpresident@gmail.com
                  </Link>
                </div>
              </div>
            </div>
            <div className="provider flx50 mb24">
              <div className="provider-box mr24 df fww ofh br8 bg12">
                <div className="provider-content flx50 fc6 p24">
                  <h2 className="provider-heading fs20 fw7 mb8">Pankaj Rana</h2>
                  <h4 className="provider-degignation fs14 mb16">
                    (2024 President Elect)
                  </h4>
                  <p className="provider-about lh24 mb16">
                    Our esteemed President, a beacon of leadership, guiding us
                    with vision and dedication towards a brighter future for
                    all.
                  </p>
                  <Link href="#" className="provider-mail it lh24 fc-h1 fw5">
                    Email: iacftreasurer@gmail.com
                  </Link>
                </div>
                <div className="provider-img flx50 df">
                  <img
                    src="images/team-member-01.jpg"
                    alt=""
                    className="w100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ticket ptb48">
        <div className="ticket-container wrapper2 ptb40">
          <div className="ticket-heading-box h-center mb40">
            <div className="ticket-heading-section tac w75">
              <h2 className="ticket-heading fs52 lh48 fc6 fw7 mb24">
                Individual Gala Ticket{" "}
              </h2>
              <p className="ticket-text lh30 fs18">
                Secure Your Seat for the Spectacular Gala Evening.
              </p>
            </div>
          </div>
          <div className="df aisc fww">
            <div className="ticket-card flx50 df jcc mb24">
              <div className="ticket-cards mr24 fc6 bg6 p24 br8">
                <h3 className="ticket-category fw7 mb12">Pearl Level - $500</h3>
                <p className="ticket-status ml8 mb16 v-center">
                  <VscArrowCircleRight className="mr8 fs24 fc5 lh24" />
                  One Premium Gala Ticket
                </p>
                <h3 className="ticket-category fw7 mb12">
                  General Seat - $250
                </h3>
                <p className="ticket-status ml8 mb16 v-center mb24">
                  <VscArrowCircleRight className="mr8 fs24 fc5 lh24" />
                  One General Gala Ticket
                </p>
                <Link href="/">
                  <div class="supporting-btn transit2 h48 box-center br8 bg10 fc6 p32 fw7">
                    Donate Now
                  </div>
                </Link>
              </div>
            </div>
            <div className="ticket-card flx50 df jcc mb24">
              <div className="ticket-cards mr24 fc6 bg6 p24 br8">
                <h3 className="ticket-category fw7 mb12 lh24">
                  {" "}
                  Supporter/Table Sponsor Levels
                </h3>
                <p className="ticket-status ml8 mb16 v-center">
                  <VscArrowCircleRight className="mr8 fs24 fc5" />
                  Sponsorship Level
                </p>
                <Link href="/">
                  <div class="supporting-btn transit2 h48 box-center br8 bg10 fc6 p32 fw7">
                    Donate Now
                  </div>
                </Link>
              </div>
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
              <div className="support-cards mr32 fc6 fw5 bg12 plr12 br8 brd-b1 ptb32">
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
              <div className="support-cards mr32 fc6 fw5 bg12 plr12 br8 brd-b1 ptb32">
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
              <div className="support-cards mr32 fc6 fw5 bg12 plr12 br8 brd-b1 ptb32">
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
              <div className="support-cards mr32 fc6 fw5 bg12 plr12 br8 brd-b1 ptb32">
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
              <div className="support-cards mr32 fc6 fw5 bg12 plr12 br8 brd-b1 ptb32">
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
              <div className="support-cards mr32 fc6 fw5 bg12 plr12 br8 brd-b1 ptb32">
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

export default events;
