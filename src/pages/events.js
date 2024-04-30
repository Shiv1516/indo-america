import { FaArrowRightLong } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { VscArrowCircleRight } from "react-icons/vsc";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const banners = [
  {
    image: "events-img-01.png",
    title: "Events",
    subtitle: "Donor Appreciation",
  },
  {
    image: "events-img-02.png",
    title: "Events",
    subtitle: "IACF Scholarshiop 2023",
  },
];

const events = () => {
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
        <div className="events-section wrapper2 df aic fww ptb40 h-center">
          <div class="message-heading-section tac w75 fc1">
            <h2 class="message-heading fs52 lh48 fw7 mb24">
              Experience Our Events{" "}
            </h2>
            <p class="message-text lh30 fs18">
              Explore our calendar of exciting events, from galas to workshops,
              designed to inspire and engage our community.
            </p>
          </div>
          <div className="services-cards df fww mt32 aisc">
            <div className="services-card flx50 df">
              <div className="services-card-box m16 df br4 m24 ofh bg6 fww">
                <div className="service-card-img h-center aisc ofh flx50">
                  <img src="images/gala-event.jpg" alt="gala-event" />
                </div>
                <div className="service-card-text p16 ma flx50">
                  <h3 className="card-heading ff2 fs20 fc6 fw6 mb16">
                    Gala Event
                  </h3>
                  <p className="card-subtext lh24 mb16">
                    Join us at our Gala Event for a night of elegance,
                    entertainment, and fundraising in support of our charitable
                    endeavors.
                  </p>
                  <div className="card-btn">
                    <Link
                      href="#"
                      className="card-cta v-center ttu fs15 fw6 ptb8 mt8"
                    >
                      <span className="card-cta-text">View More</span>
                      <FaArrowRightLong className="ml8" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="services-card flx50 df">
              <div className="services-card-box m16 df br4 m24 ofh bg6 fww">
                <div className="service-card-img h-center aisc ofh flx50">
                  <img src="images/gala-event.jpg" alt="gala-event" />
                </div>
                <div className="service-card-text p16 ma flx50">
                  <h3 className="card-heading ff2 fs20 fc6 fw6 mb16">
                    I WALK & We CARE
                  </h3>
                  <p className="card-subtext lh24 mb16">
                    Participate in 'I Walk - I Care' event, uniting for health
                    and compassion, commemorating 25 years of impactful medical
                    service.
                  </p>
                  <div className="card-btn">
                    <Link
                      href="#"
                      className="card-cta v-center ttu fs15 fw6 ptb8 mt8"
                    >
                      <span className="card-cta-text">View More</span>
                      <FaArrowRightLong className="ml8" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="services-card flx50 df">
              <div className="services-card-box m16 df br4 m24 ofh bg6 fww">
                <div className="service-card-img h-center aisc ofh flx50">
                  <img src="images/grand-night.jpg" alt="grand-night" />
                </div>
                <div className="service-card-text p16 ma flx50">
                  <h3 className="card-heading ff2 fs20 fc6 fw6 mb16">
                    Event Night
                  </h3>
                  <p className="card-subtext lh24 mb16">
                    Join us for a memorable Event Night, celebrating generosity
                    and philanthropy, contributing to meaningful projects for
                    societal upliftment.
                  </p>
                  <div className="card-btn">
                    <Link
                      href="#"
                      className="card-cta v-center ttu fs15 fw6 ptb8 mt8"
                    >
                      <span className="card-cta-text">View More</span>
                      <FaArrowRightLong className="ml8" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="services-card flx50 df">
              <div className="services-card-box m16 df br4 m24 ofh bg6 fww">
                <div className="service-card-img h-center aisc ofh flx50">
                  <img src="images/live-in-houston.jpg" alt="live-in-houston" />
                </div>
                <div className="service-card-text p16 ma flx50">
                  <h3 className="card-heading ff2 fs20 fc6 fw6 mb16">
                    Live in Houston
                  </h3>
                  <p className="card-subtext lh24 mb16">
                    Experience the vibrant culture of Houston in our Live in
                    Houston event, featuring music, food, and festivities for
                    all.
                  </p>
                  <div className="card-btn">
                    <Link
                      href="#"
                      className="card-cta v-center ttu fs15 fw6 ptb8 mt8"
                    >
                      <span className="card-cta-text">View More</span>
                      <FaArrowRightLong className="ml8" />
                    </Link>
                  </div>
                </div>
              </div>
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
              <div className="provider-box mlr12 df fww ofh br8 bg12">
                <div className="provider-img flx50 df">
                  <img
                    src="images/iach-member/pankaj-sir.jpg"
                    alt="pankaj-sir"
                    className="w100"
                  />
                </div>
                <div className="provider-content flx50 fc6 p24">
                  <h2 className="provider-heading fs20 fw7 mb8">Pankaj Rana</h2>
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
              <div className="provider-box mlr12 df fww ofh br8 bg12">
                <div className="provider-content flx50 fc6 p24">
                  <h2 className="provider-heading fs20 fw7 mb8">
                    Hasu D Patel
                  </h2>
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
                    src="images/iach-member/hashu-bhai-patel.jpg"
                    alt="hashu-bhai-patel"
                    className="w100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="donate ptb48 bg6">
        <div className="donate-section wrapper2 ptb40">
          <div className="donate-container df fww">
            <div className="donate-text flx50 fc6 v-center">
              <div className="donate-box mr24">
                <span className="donate-text-heading fc1 bg7 fc12 ptb8 plr12 mb24 dib br4">
                  Explore Our Events
                </span>
                <h2 className="donate-text-subheading fs42 fw7 lh42 mb24">
                  Engage with Meaningful Experiences
                </h2>
                <p className="donate-text-subtext fw5 lh30 mb24">
                  Discover a range of enriching events tailored to inspire,
                  educate, and empower. Join us in making a difference today.
                </p>
                <Link href="https://www.paypal.com/donate?token=fQKEOQs3go0wzRLWSPxfdOfsuolpqBzG5_a0XkaxZGXqK65kmyHfDMulU5_K3C-TEXU_fuqLIHluvRXt">
                  <div className="supporting-btn transit2 h48 box-center br8 bg8 fc1 p32 fw7">
                    Donate Now
                  </div>
                </Link>
              </div>
            </div>
            <div className="contact-form df fww flx50 aic pr32">
              <div className="who-we-are-content fc6 bg2 p32 br4 bs3">
                <h2 className="who-we-are-heading fs36 lh48 fw6 mb12 tac">
                  Event Registration Form
                </h2>
                <p className="who-we-are-subtext mb24 lh30 tac">
                  Complete the form below to register for the selected event.
                  Secure your spot and join us for an unforgettable experience!
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
                      Purpose
                    </label>
                    <input
                      type="text"
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
                    Submit
                  </button>
                </div>
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
      </section>

      <section className="events ptb48 bg7">
        <div className="message-heading-box h-center ptb40">
          <div className="message-heading-section tac fc1 w75">
            <h2 className="message-heading fs52 lh48 fw7 mb24">
              Latest Events{" "}
            </h2>
            <p className="message-text lh30 fs18">
              Stay updated with our latest events! Explore opportunities to
              learn, engage, and make a difference in our community.
            </p>
          </div>
        </div>
        <div className="event-container wrapper2 pt24">
          <div className="events-img df flx100 p12">
            <img
              src="images/gallery/iacf-flyer.jpg"
              alt="iacf-flyer"
              className="w100 br4"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default events;
