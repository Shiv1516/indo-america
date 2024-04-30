import React from "react";
import Slider from "react-slick";

const calendarData = [
  {
    title: "Walkathon Drive",
    date: "April 13 or 20",
    description:
      "Join our Walkathon Drive and take strides toward a healthier, more active lifestyle. Embrace fitness with our community!",
    icon: "images/svg-icon/membership-icon.svg",
  },
  {
    title: "Scholarship",
    date: "May 10",
    description:
      "Apply for our Scholarship program and unlock opportunities for academic excellence. Invest in your future with our support and pave the way to success.",
    icon: "images/svg-icon/scholarship-icon.svg",
  },
  {
    title: "Donor Appreciation",
    date: "June 15",
    description:
      "Grateful for the generous donors whose support fuels our mission and brings positive change to communities, we express our heartfelt thanks.",
    icon: "images/svg-icon/donor-icon.svg",
  },
  {
    title: "Grants",
    date: "Aug 10",
    description:
      "Empowering initiatives and fostering innovation through financial grants that drive positive impact and sustainable change in communities.",
    icon: "images/svg-icon/grants-icon.svg",
  },
  {
    title: "Gala",
    date: "Sept 7 or 14",
    description:
      "Elevate your impact: Join our prestigious Gala event, celebrating philanthropy and community support, to make a difference in empowering positive change.",
    icon: "images/svg-icon/gala-icon.svg",
  },
];

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
