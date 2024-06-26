import React, { useState, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsPersonFillAdd } from "react-icons/bs";
import MembershipForm from "../component/MembershipForm";
import HamburgerMenu from "../component/HamburgerMenu";
import Link from "next/link";
import { FaDonate } from "react-icons/fa";
import DonateButton from "./DonateButton";

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
  const [isPopupOpenD, setIsPopupOpenD] = useState(false);

  const openPopupD = () => {
    setIsPopupOpenD(true);
  };

  const closePopupD = () => {
    setIsPopupOpenD(false);
  };

  const paypalClientId =
    "AQ9XdVRBUsAfEvwBACKHEYlmHRE2yObZzpN_s-en7CuzZkOWopdHSpf-fJrbyuRjDFnk5F80SzNpQiDX";

  return (
    <>
      <MembershipForm isOpen={isPopupOpenM} onClose={closePopupM} />
      <DonateButton
        isOpen={isPopupOpenD}
        onClose={closePopupD}
        clientId={paypalClientId}
      />
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
                    <Link href="/iwalkicare">We WALK - We CARE</Link>
                  </li>
                  <li className="nav-item-dd transit2 p16 brd-b2 fc-h1">
                    <Link href="/grantnight">Event Night</Link>
                  </li>
                  <li className="nav-item-dd transit2 p16 brd-b2 fc-h1">
                    <Link href="/liveinhouston">Live in Houston</Link>
                  </li>
                </ul>
              </li>
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
            {/* <Link
              href="https://www.paypal.com/ncp/payment/WQ9YGPQSPFNXN"
              target="_blank"
              className="popup-d-btn transit2 br4 plr16 h48 fc1 cp bg1 ml32 v-center"
            >
              <FaDonate className="mr8 fs24" />
              Donate Now
            </Link> */}
            <button
              onClick={openPopupD}
              className="popup-d-btn transit2 br4 plr16 h48 fc1 cp bg1 ml32 v-center"
            >
              <FaDonate className="mr8 fs24" />
              Donate Now
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
