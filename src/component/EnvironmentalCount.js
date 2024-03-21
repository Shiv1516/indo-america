import React from "react";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
import { FaIndustry } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

const EnvironmentalCount = () => {
  return (
    <section className="environmental-count ptb48">
      <div className="count-section wrapper df jcsb fww">
        <div className="count-card flx25 mb16 fww">
          <div className="count-cards transit2 df jcc">
            <MdOutlineVolunteerActivism className="material-symbols-outlined fs42 p16 bg9 fc1 br8 mr12" />
            <div className="count-content">
              <h2 className="count-number mb12 fs42 fc1 fw7">100000+</h2>
              <p className="cont-name fc7">Donations Received</p>
            </div>
          </div>
        </div>
        <div className="count-card flx25 mb16 fww">
          <div className="count-cards transit2 df jcc">
            <MdCurrencyExchange className="material-symbols-outlined fs42 p16 bg7 fc1 br8 mr12" />
            <div className="count-content">
              <h2 className="count-number mb12 fs42 fc1 fw7">$150M</h2>
              <p className="cont-name fc7">Funds Collected</p>
            </div>
          </div>
        </div>
        <div className="count-card flx25 mb16 fww">
          <div className="count-cards transit2 df jcc">
            <FaIndustry className="material-symbols-outlined fs42 p16 bg8 fc1 br8 mr12" />
            <div className="count-content">
              <h2 className="count-number mb12 fs42 fc1 fw7">1400+</h2>
              <p className="cont-name fc7">Active Campaingns</p>
            </div>
          </div>
        </div>
        <div className="count-card flx25 mb16 fww">
          <div className="count-cards transit2 df jcc">
            <FaRegCheckCircle className="material-symbols-outlined fs42 p16 bg5 fc1 br8 mr12" />
            <div className="count-content">
              <h2 className="count-number mb12 fs42 fc1 fw7">100%</h2>
              <p className="cont-name fc7">Goes To The Cause</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalCount;
