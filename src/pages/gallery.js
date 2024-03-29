import Link from "next/link";
import React from "react";
import { GoDotFill } from "react-icons/go";

const gallery = () => {
  return (
    <section className="gallery ptb40 bg6 ptb48">
      <div className="gallery-container wrapper df fww">
        <div className="gallery-section df fww flx1">
          <div className="gallery-img flx33 df p12">
            <img
              src="images/gallery/gallery-img-01.jpg"
              alt="gallery-img"
              className="w100"
            />
          </div>
          <div className="gallery-img flx33 df p12">
            <img
              src="images/gallery/gallery-img-02.jpg"
              alt="gallery-img"
              className="w100"
            />
          </div>
          <div className="gallery-img flx33 df p12">
            <img
              src="images/gallery/gallery-img-07.jpg"
              alt="gallery-img"
              className="w100"
            />
          </div>
          <div className="gallery-img flx100 df p12">
            <img
              src="images/gallery/gallery-img-06.jpg"
              alt="gallery-img"
              className="w100"
            />
          </div>
          <div className="gallery-img flx33 df p12">
            <img
              src="images/gallery/gallery-img-03.jpg"
              alt="gallery-img"
              className="w100"
            />
          </div>
          <div className="gallery-img flx33 df p12">
            <img
              src="images/gallery/gallery-img-04.jpg"
              alt="gallery-img"
              className="w100"
            />
          </div>
          <div className="gallery-img flx33 df p12">
            <img
              src="images/gallery/gallery-img-05.jpg"
              alt="gallery-img"
              className="w100"
            />
          </div>
        </div>
        <div className="gallery-category flx25 pl24">
          <div className="p24 fs18 fw6 brd1 bg2 mt12 br4 bs3">
            <h2>
              <Link href="#" className="category-list mb16 p12 bg1 fc1 df br4">
                Photos
              </Link>
            </h2>
            <h3>
              <Link href="#" className="category-list mb16 p12 bg1 fc1 df br4">
                Archive
              </Link>
            </h3>
            <ul className="category-item fs16 fw5 ml16">
              <li className="category-item-list df mb12">
                <Link href="#" className="">
                  <GoDotFill className="fs14 fc6 mr8" />
                  2021
                </Link>
              </li>
              <li className="category-item-list df mb12">
                <Link href="#" className="">
                  <GoDotFill className="fs14 fc6 mr8" />
                  2022
                </Link>
              </li>
              <li className="category-item-list df mb12">
                <Link href="#" className="">
                  <GoDotFill className="fs14 fc6 mr8" />
                  2023
                </Link>
              </li>
              <li className="category-item-list df mb12">
                <Link href="#" className="">
                  <GoDotFill className="fs14 fc6 mr8" />
                  2024
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default gallery;
