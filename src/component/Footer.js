import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg1">
      <div className="footer-section wrapper2">
        <div className="footer-container df jcsb mb40">
          <div className="footer-content flx50 fc1 ptb48">
            <Link href="/" className="footer-logo ptb24">
              {/* <Image
                src="/be-part-of-change-img.jpg"
                alt="logo"
                height={200}
                weight={200}
              /> */}
              <img src="images/logo.png" alt="logo"></img>
            </Link>
            <p className="footer-text ptb32 lh30 fs18">
              We connect nonprofits, donors, and companies in nearly every
              country in the world. We help fellow nonprofits access the
              funding, tools, training, and support they need to serve their
              communities.
            </p>
            <h3 className="footer-form mb32 fw7 fs20">
              Sign Up For Our Newsletter ​*
            </h3>
            <form className="newsletter-form v-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="newsletter-input h48 br4 plr24 mr12 w50"
                required=""
              />
              <button
                type="submit"
                className="newsletter-btn h48 plr24 bg8 br4 fw7 fs18 fc6 transit1 cp"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="footer-item bg10 flx33 br-br-01 plr40 ptb40 mb40">
            <ul className="footer-item-list fc6 fw7 fs22 pt48">
              <li className="footer-item-lists mb24 fc-h1 transit1">
                <a href="/">Our Campaigns</a>
              </li>
              <li className="footer-item-lists mb24 fc-h1 transit1">
                <a href="/">Get Involved</a>
              </li>
              <li className="footer-item-lists mb24 fc-h1 transit1">
                <a href="/">Donate Now</a>
              </li>
              <li className="footer-item-lists mb24 fc-h1 transit1">
                <a href="/">Blog</a>
              </li>
              <li className="footer-item-lists mb24 fc-h1 transit1">
                <a href="/">Image Credits</a>
              </li>
            </ul>
            <ul className="footer-social-link v-center pt24">
              <li>
                <Link href="/" className="social-links pr12">
                  {/* <Image
                    src="/svg-icon/facebook.svg"
                    alt="facebook"
                    height={200}
                    width={200}
                  /> */}
                  <img src="images/svg-icon/facebook.svg" alt="facebook"></img>
                </Link>
              </li>
              <li>
                <Link href="/" className="social-links plr12">
                  {/* <Image
                    src="/svg-icon/instagram.svg"
                    alt="instagram"
                    height={200}
                    width={200}
                  /> */}
                  <img src="images/svg-icon/youtube.svg" alt="youtube"></img>
                </Link>
              </li>
              <li>
                <Link href="/" className="social-links plr12">
                  {/* <Image
                    src="/svg-icon/youtube.svg"
                    alt="youtube"
                    height={200}
                    width={200}
                  /> */}
                  <img
                    src="images/svg-icon/instagram.svg"
                    alt="instagram"
                  ></img>
                </Link>
              </li>
              <li>
                <Link href="/" className="social-links plr12">
                  {/* <Image
                    src="/svg-icon/twitter.svg"
                    alt="twitter"
                    height={200}
                    width={200}
                  /> */}
                  <img src="images/svg-icon/twitter.svg" alt="twitter"></img>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="botom-footer ptb24 fc4 pt40">
          <a href="/">cmsmasters</a>
          <span>©2024 - All Rights Reserved - This is a sample website.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
