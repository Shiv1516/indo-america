import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaDonate } from "react-icons/fa";
import MembershipForm from "../component/MembershipForm";
import HamburgerMenu from "../component/HamburgerMenu";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setNavbarOpen(!isNavbarOpen);

    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("open-nav", !isNavbarOpen);
  };

  const [isPopupOpenM, setIsPopupOpenM] = useState(false);

  const openPopupM = () => {
    setIsPopupOpenM(true);
  };

  const closePopupM = () => {
    setIsPopupOpenM(false);
  };

  return (
    <>
      <MembershipForm isOpen={isPopupOpenM} onClose={closePopupM} />
      <div className="top-navbar bg5">
        <ul className="v-center wrapper df jce fc1 fw7 pr24 fs14">
          <li className="top-nab-item transit2 p16">
            <Link href="/whatiacfdoes">What IACF Does</Link>
          </li>
          <li className="top-nab-item transit2 p16">
            <Link href="/howyoucanhelp">How You Can Help</Link>
          </li>
          <li className="top-nab-item transit2 p16">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <nav>
        <div className="header-content wrapper v-center jcsb ptb8">
          <Link href="/">
            <img
              src="images/logo.png"
              alt="company-logo"
              className="logo-img"
            />
          </Link>
          <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <div className="navbar v-center fww fs18 fw7">
            <ul className="nav-list v-center cp fww fc3">
              <li className="nav-item transit2 p16 mlr4 fc-h1 ass">
                <Link href="/about">About IACF</Link>
              </li>
              <li className="nav-item transit2 p16 mlr4 fc-h1 ass">
                <Link href="/events" className="df pr">
                  Events
                  <RiArrowDownSLine className="material-symbols-outlined ml4 fs22" />
                </Link>
                <ul className="nav-list-dd pa bg2 fc6">
                  <li className="nav-item-dd transit2 p16 brd-b2 fc-h1">
                    <Link href="/gala">Gala</Link>
                  </li>
                  <li className="nav-item-dd transit2 p16 brd-b2 fc-h1">
                    <Link href="/iwalkicare">I Walk & I Care</Link>
                  </li>
                  <li className="nav-item-dd transit2 p16 brd-b2 fc-h1">
                    <Link href="/grantnight">Grant Night</Link>
                  </li>
                  <li className="nav-item-dd transit2 p16 brd-b2 fc-h1">
                    <Link href="/liveinhouston">Live in Houston</Link>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item transit2 p16 mlr4 fc-h1">
                <Link href="/acknowledgement" className="df">
                  Acknowledgement
                  <RiArrowDownSLine className="material-symbols-outlined ml4 fs22" />
                </Link>
              </li> */}
              <li className="nav-item transit2 p16 mlr4 fc-h1 ass">
                <Link href="/gallery">Gallery</Link>
              </li>
            </ul>
            <button
              onClick={openPopupM}
              className="popup-m-btn transit2 br4 plr16 h48 bg4 fc1 cp brd3 ml32 v-center"
            >
              <BsPersonFillAdd className="mr8 fs24" />
              Membership
            </button>
            <Link
              href="https://www.paypal.com/donate?token=fQKEOQs3go0wzRLWSPxfdOfsuolpqBzG5_a0XkaxZGXqK65kmyHfDMulU5_K3C-TEXU_fuqLIHluvRXt"
              className="popup-d-btn transit2 br4 plr16 h48 fc1 cp bg1 ml32 v-center"
            >
              <FaDonate className="mr8 fs24" />
              Donate Now
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
