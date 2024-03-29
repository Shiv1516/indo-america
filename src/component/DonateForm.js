import React, { useState } from "react";
import { ImCross } from "react-icons/im";

const DonateForm = ({ isOpen, onClose }) => {
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhoneNumber, setDonorPhoneNumber] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [donationInterests, setDonationInterests] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      donorName,
      donorEmail,
      donorPhoneNumber,
      donationAmount,
      donationInterests,
    });

    resetForm();
  };

  const resetForm = () => {
    setDonorName("");
    setDonorEmail("");
    setDonorPhoneNumber("");
    setDonationAmount("");
    setDonationInterests([]);
  };

  return (
    <div className={`donate-form pf t0 b0 w100 ${isOpen ? "open-d-form" : ""}`}>
      <form
        onSubmit={handleSubmit}
        className="m-form ofh br8 bg2 p24 pr fs15 fc6"
      >
        <ImCross
          className="pa r0 t0 mr24 mt24 fs16 box-center cp"
          onClick={onClose}
        />
        <h2 className="form-title fs24 tac fw6">Donate Form</h2>

        <label htmlFor="donorName">Your Name:</label>
        <input
          type="text"
          id="donorName"
          value={donorName}
          onChange={(e) => setDonorName(e.target.value)}
          required
        />

        <label htmlFor="donorEmail">Email:</label>
        <input
          type="email"
          id="donorEmail"
          value={donorEmail}
          onChange={(e) => setDonorEmail(e.target.value)}
          required
        />

        <label htmlFor="donorPhoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="donorPhoneNumber"
          value={donorPhoneNumber}
          onChange={(e) => setDonorPhoneNumber(e.target.value)}
          required
        />

        <label htmlFor="donationAmount">Donation Amount:</label>
        <input
          type="number"
          id="donationAmount"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          required
        />

        <label htmlFor="donationInterests" className="v-center mt24">
          <input
            type="checkbox"
            className="checkbox-m-form"
            id="donationInterest1"
            value="Education"
            checked={donationInterests.includes("Education")}
            onChange={(e) => {
              const value = e.target.value;
              setDonationInterests((prevState) =>
                prevState.includes(value)
                  ? prevState.filter((item) => item !== value)
                  : [...prevState, value]
              );
            }}
          />
          <span className="ml8">Education</span>
        </label>
        {/* Add more donation interest checkboxes as needed */}

        <div className="popup-submit df jcc">
          <button
            type="submit"
            onClick={onClose}
            className="transit2 h48 box-center br8 bg5 fc1 p24 fw7 mt24"
          >
            Donate Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonateForm;
