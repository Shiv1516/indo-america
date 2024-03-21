import Link from "next/link";
import React from "react";

const MovementSection = () => {
  return (
    <section className="movement-section ptb72">
      <div className="movement-container wrapper2 mtb48 pr df">
        <div className="movement-box h-center v-center jcc">
          <div className="movement-section tac w75">
            <img
              src="images/movement-img-01.jpg"
              alt="movement-img-01"
              className="movement-img-01 pa br8"
            />
            <h4 className="movement-subheading ttu bg10 dib fc6 fw5 br4 fs14 plr16 ptb8 mb16">
              JOIN THE MOVEMENT
            </h4>
            <h2 className="movement fs42 lh48 fc1 fw7 mb32">
              With your support we can change the system and protect the future
              of people and planet.
            </h2>
            <div className="movement-btns df jcc fw7">
              <Link href="/">
                <div className="supporting-mission-btn transit2 h48 box-center br8 bg5 fc1 p32 mr16 mb12">
                  Donate Now
                </div>
              </Link>
              <Link href="/">
                <div className="movement-btn transit2 h48 box-center br8 bg8 fc6 p32 mb12">
                  Become a Volunteer
                </div>
              </Link>
              <img
                src="images/movement-img-02.jpg"
                alt="movement-img-01"
                className="movement-img-02 pa br8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovementSection;
