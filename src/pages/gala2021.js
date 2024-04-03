import React from "react";
import { VscArrowCircleRight } from "react-icons/vsc";
import { FaRegFolderOpen } from "react-icons/fa";
import { GoCheckCircle } from "react-icons/go";
import Link from "next/link";

const gala2021 = () => {
  return (
    <>
      <section className="events bg5 ptb48">
        <div className="events-section wrapper df fww ptb40">
          <div className="flx1 df fww">
            <div className="events-content plr24 flx50 fc1">
              <h2 className="events-heading fs42 lh48 fw7 mb24">
                IACF Annual <span className="fc8">Gala Event 2021</span>
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
                  src="images/gala2021.jpg"
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
                  I Walk & I Care
                </Link>
              </h4>
              <h4>
                <Link
                  href="/grantnight"
                  className="category-list mb24 p12 bg1 fc1 df br4"
                >
                  Grant Night
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
    </>
  );
};

export default gala2021;
