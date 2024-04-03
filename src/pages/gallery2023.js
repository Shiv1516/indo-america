import Link from "next/link";
import React from "react";
import { FaRegFolderOpen } from "react-icons/fa";

const gallery2023 = () => {
  return (
    <section className="gallery ptb40 bg6 ptb48">
      <div className="gallery-container wrapper df fww">
        <div className="gallery-section df fww flx1">
          <div className="gallery-img flx100 df p12">
            <img
              src="images/gallery/gallery-img-06.jpg"
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
          <div className="p24 fs18 fw6 brd1 bg2 mt12 br4">
            <h2 className="category tac mb24 fs20 fc6 ttu">category</h2>
            <h2>
              <Link
                href="/photo"
                className="category-list mb24 p12 bg1 fc1 df br4"
              >
                Photos
              </Link>
            </h2>
            <h3 className="category-list mb24 p12 bg1 fc1 df br4">Archive</h3>
            <ul className="category-item fs16 fw5 ml24">
              <li className="category-item-list df mb16 tdhu">
                <Link href="/gallery2024" className="">
                  <FaRegFolderOpen className="fs14 fc6 mr8" />
                  2024
                </Link>
              </li>
              <li className="category-item-list df mb16 tdhu">
                <Link href="/gallery2023" className="">
                  <FaRegFolderOpen className="fs14 fc6 mr8" />
                  2023
                </Link>
              </li>
              <li className="category-item-list df mb16 tdhu">
                <Link href="/gallery2022" className="">
                  <FaRegFolderOpen className="fs14 fc6 mr8" />
                  2022
                </Link>
              </li>
              <li className="category-item-list df mb16 tdhu">
                <Link href="/gallery2021" className="">
                  <FaRegFolderOpen className="fs14 fc6 mr8" />
                  2021
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default gallery2023;
