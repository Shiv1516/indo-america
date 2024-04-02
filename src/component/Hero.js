import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import { fetchBannerData } from "../pages/api/bannerApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const HeroSection = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBannerData();
      setBanners(data);
    };
    fetchData();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="hero-section">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div className="banner aft pr" key={index}>
            <img
              src={`images/${banner.image}`}
              alt={banner.title}
              className="w100 df"
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
