import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const banners = [
  {
    image: "banner-01.jpg",
    title: "Elevating Lives, Enriching Communities:",
    subtitle: "Our Commitment to Greater Houston Communities",
    description:
      "Empowering Greater Houston Communities through education, family support, wellfare, and healthcare since 1988.",
    buttonText: "Learn More",
    buttonLink: "/",
  },
  {
    image: "banner-02.jpg",
    title: "Transforming Lives, Enriching Futures: ",
    subtitle: "Scholarships Empowering Tomorrow's Leaders.",
    description:
      "Empowering future leaders of greater Huston ISDs with $50k in scholarships.",
    buttonText: "Learn More",
    buttonLink: "/",
  },
  {
    image: "banner-03.jpg",
    title: "Empowering Initiatives:",
    subtitle: "Grants for Emerging NGOs Fueling Change.",
    description:
      "Fostering progress through grants to small and startup NGOs, igniting community-driven impact.",
    buttonText: "Learn More",
    buttonLink: "/",
  },
];
const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      // Add a class to the slider to trigger the dissolve effect
      const slider = document.querySelector(".slick-slider");
      slider.classList.add("transitioning");
    },
    afterChange: () => {
      // Remove the transition class after the slide change is complete
      const slider = document.querySelector(".slick-slider");
      slider.classList.remove("transitioning");
    },
  };

  return (
    <div className="hero-section">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div className="banner aft pr" key={index}>
            <img
              src={`images/${banner.image}`}
              alt={banner.title}
              className="hero-image-sec w100 df"
            />
            <div className="banner-data-wrap pa t0 b0 df jcc aie aft pr pb32 w100">
              <div className="banner-content tac pb48 zi99">
                <h2 className="hero-sub-heading fs16 br24 plr24 ttu dif plr16 ptb8 bg11 fc1  mb16 ls1">
                  {banner.title}
                </h2>
                <h3 className="hero-heading lh54 fs46 fc1 fw7 mb16 ls1">
                  {banner.subtitle}
                </h3>
                <p class="hero-subtext fs20 fw5 mb24 fc9 lh30 plr32">
                  {banner.description}
                </p>
                <Link href="#">
                  <div class="supporting-btn transit2 h48 box-center br8 bg10 fc6 fw7 p32 fs18">
                    {banner.buttonText}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
