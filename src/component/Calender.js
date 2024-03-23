import React from "react";
import Slider from "react-slick";
import calendarData from "../data/calenderData.json";

const Calender = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Change this value according to your requirement
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="calender ptb48 bg6">
      <div className="calender-container wrapper2">
        <div className="happening-heading-text tac h-center ptb24">
          <h2 className="heed-help-ocean-heading fs52 lh60 fw7 w50 plr24 fc6">
            What's Happening<span className="ff2 fw5"> Right Now</span>{" "}
          </h2>
        </div>
        <Slider
          {...sliderSettings}
          className="calender-card-container df fww mt24"
        >
          {calendarData.map((event, index) => (
            <div className="calender-card" key={index}>
              <div className="calender-cards transit2 mlr16 br8 ofh bg2 plr24 ptb32">
                <img
                  src={event.icon}
                  alt="Event Icon"
                  className="calender-card-img p8 br4 bs3 mb32"
                />
                <h2 className="calender-card-heading fs20 lh24 fc6 fw7 mb16">
                  {event.title}
                </h2>
                <h5 className="calender-card-date fs14 mb16 fc4">
                  {event.date}
                </h5>
                <p className="calender-card-subtext lh24 fc7">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Calender;
