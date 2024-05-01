import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg1">
      <div className="footer-section wrapper2">
        <div className="footer-container df jcsb mb40">
          <div className="footer-content flx50 fc1 ptb48">
            <Link href="/" className="footer-logo ptb24">
              <img src="images/logo.png" alt="logo"></img>
            </Link>
            <p className="footer-text ptb32 lh30 fs18">
              We connect non-profits, donors & companies in the Greater Houston
              Community. We help other NGOs with resources & support they need
              to serve their communities.
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
                <a href="/about">About IACF</a>
              </li>
              <li className="footer-item-lists mb24 fc-h1 transit1">
                <a href="/events">Events</a>
              </li>
              <li className="footer-item-lists mb24 fc-h1 transit1">
                <a href="/whatiacfdoes">What IACF Does</a>
              </li>
              <li className="footer-item-lists mb24 fc-h1 transit1">
                <a href="/howyoucanhelp">How You Can Help</a>
              </li>
              <li className="footer-item-lists mb24 fc-h1 transit1">
                <a href="/contact">Contact</a>
              </li>
            </ul>
            <ul className="footer-social-link v-center pt24">
              <li>
                <Link href="/" className="social-links pr12">
                  <img src="images/svg-icon/facebook.svg" alt="facebook"></img>
                </Link>
              </li>
              <li>
                <Link href="/" className="social-links plr12">
                  <img src="images/svg-icon/youtube.svg" alt="youtube"></img>
                </Link>
              </li>
              <li>
                <Link href="/" className="social-links plr12">
                  <img
                    src="images/svg-icon/instagram.svg"
                    alt="instagram"
                  ></img>
                </Link>
              </li>
              <li>
                <Link href="/" className="social-links plr12">
                  <img src="images/svg-icon/twitter.svg" alt="twitter"></img>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="botom-footer ptb24 fc11 pt40 fc12">
          Indo-America Charity Foundation
          <span className="mlr8">
            ©2024 - All Rights Reserved - Powerd by Genesis .
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
