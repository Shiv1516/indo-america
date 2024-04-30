import React from "react";
import { SlCalender } from "react-icons/sl";
import { MdOutlineAccessTime } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";

const Events = () => {
  return (
    <section className="events ptb48 aft pr bg-img-01">
      <div className="events-container wrapper2 df fww aic ptb40">
        <div className="events-contents flx50 plr24 zi2 fc1">
          <h2 className="events-heading fs42 fw7 lh48 mb24 ff2">
            I WALK & We CARE
          </h2>
          <p className="lh24 mb16">
            Celebrating 25 years of partnership with Indian Doctors Charity
            Clinic (IDCC), our commitment to caring and walking together remains
            unwavering. Join us in this meaningful journey.
          </p>
          <ul className="events-list mb24">
            <li className="events-points mb16 v-center">
              {" "}
              <SlCalender className="mr12 fc5 fw7 fs20" /> Saturday, April 13th
              2024
            </li>
            <li className="events-points mb16 v-center">
              {" "}
              <MdOutlineAccessTime className="mr12 fc5 fw7 fs20" /> 8 am to 1 pm
            </li>
            <li className="events-points mb16 v-center">
              {" "}
              <HiOutlineLocationMarker className="mr12 fc5 fw7 fs20" /> 3703
              Lost Creek Blvd, Sugar Land, TX 77479
            </li>
          </ul>
          <Link href="https://www.paypal.com/donate?token=fQKEOQs3go0wzRLWSPxfdOfsuolpqBzG5_a0XkaxZGXqK65kmyHfDMulU5_K3C-TEXU_fuqLIHluvRXt">
            <div className="supporting-btn transit2 h48 box-center br8 bg5 fc1 p32 fw7">
              Donate Now
            </div>
          </Link>
        </div>
        <div className="events-form flx50 p32 bs3 br4 zi2 bg6">
          <h2 className="form-title fs32 tac fw7 fc6 mb8">Register Now</h2>
          <p className="lh24 tac fc6 mb24 fw5">Join the 'I WALK & We CARE'!</p>

          <div className="flx1 df fdc mb24">
            <label htmlFor="fullName" className="pb8">
              Full Name:
            </label>
            <input
              type="text"
              className="flx100 brd1 p8"
              id="fullName"
              required
            />
          </div>
          <div className="flx1 df fdc mb24">
            <label htmlFor="email" className="pb8">
              Email:
            </label>
            <input
              type="email"
              className="flx100 brd1 p8"
              id="email"
              required
            />
          </div>
          <div className="flx1 df fdc mb24">
            <label htmlFor="phoneNumber" className="pb8">
              Phone Number:
            </label>
            <input
              type="tel"
              className="flx100 brd1 p8"
              id="phoneNumber"
              required
            />
          </div>
          <div className="flx1 df fdc mb24">
            <label htmlFor="membershipType" className="pb8">
              Membership Type:
            </label>
            <select id="membershipType" className="flx100 brd1 p8" required>
              <option value="">Select Membership Type</option>
              <option value="Regular">Regular</option>
              <option value="Premium">Premium</option>
              <option value="Lifetime">Lifetime</option>
            </select>
          </div>
          <div className="flx1 df fdc mb24">
            <label htmlFor="donationAmount" className="pb8">
              Preferred Donation Amount:
            </label>
            <input
              type="number"
              className="flx100 brd1 p8"
              id="donationAmount"
              required
            />
          </div>

          <label htmlFor="interest1" className="v-center mt24">
            <input
              type="checkbox"
              className="checkbox-m-form cp"
              id="interest1"

              //   onChange={(e) => {
              //     const value = e.target.value;
              //     setVolunteerInterests((prevState) =>
              //       prevState.includes(value)
              //         ? prevState.filter((item) => item !== value)
              //         : [...prevState, value]
              //     );
              //   }}
            />
            <span className="ml8">Volunteer Interests:</span>
          </label>

          <div className="popup-submit df jcc">
            <button
              type="submit"
              className="transit2 h48 box-center br8 bg5 fc1 p24 fw7 mt24 cp"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
