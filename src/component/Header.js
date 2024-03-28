import Link from "next/link";
import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaDonate } from "react-icons/fa";
import MembershipForm from "../component/MembershipForm";

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <MembershipForm isOpen={isPopupOpen} onClose={closePopup} />
      <div className="top-navbar bg5">
        <ul className="v-center wrapper df jce fc1 fw7 pr24 fs14">
          <li className="top-nab-item transit2 p16 fc-h1">
            <Link href="/about">About IACF</Link>
          </li>
          <li className="top-nab-item transit2 p16 fc-h1">
            <Link href="/whatiacfdoes">What IACF Does</Link>
          </li>
          <li className="top-nab-item transit2 p16 fc-h1">
            <Link href="/whoyoucanhelp">How You Can Help</Link>
          </li>
          <li className="top-nab-item transit2 p16 fc-h1">
            <Link href="contact">Contact</Link>
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
          <div className="menu-btn w48 h48 cp box-center fdc ml32 p8">
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </div>
          <div className="navbar v-center fww fs18 fw7">
            <ul className="nav-list v-center cp fww fc3">
              <li className="nav-item transit2 p16 mlr4 fc-h1">
                <Link href="/events" className="df pr">
                  Events
                  <RiArrowDownSLine className="material-symbols-outlined ml4 fs22" />
                </Link>
                <ul className="nav-list-dd pa bg2 fc6">
                  <li className="nav-item-dd transit2 p16 brd-b2 fc-h1">
                    <Link href="#" className="">
                      Gala
                    </Link>
                  </li>
                  <li className="nav-item-dd transit2 p16 brd-b2 fc-h1">
                    <Link href="#" className="">
                      Walk & Care
                    </Link>
                  </li>
                  <li className="nav-item-dd transit2 p16 brd-b2 fc-h1">
                    <Link href="#" className="">
                      Grant Night
                    </Link>
                  </li>
                  <li className="nav-item-dd transit2 p16 brd-b2 fc-h1">
                    <Link href="#" className="">
                      Live in Houston
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item transit2 p16 mlr4 fc-h1">
                <Link href="/acknowledgement" className="df">
                  Acknowledgement
                  <RiArrowDownSLine className="material-symbols-outlined ml4 fs22" />
                </Link>
              </li>
              <li className="nav-item transit2 p16 mlr4 fc-h1">
                <Link href="/gallery">Gallery</Link>
              </li>
            </ul>
            <button
              onClick={openPopup}
              className="popup-btn transit2 br4 plr16 h48 bg4 fc1 cp brd3 ml32 v-center"
            >
              <BsPersonFillAdd className="mr8 fs24" />
              Membership
            </button>
            <button className="popup-btn transit2 br4 plr24 h48 fc1 cp bg1 ml32 v-center">
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
