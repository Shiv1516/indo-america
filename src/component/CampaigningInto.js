import Link from "next/link";
import React from "react";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const CampaigningInto = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition =
        document.getElementById("scrollContainer").offsetTop + 300;
      if (scrollPosition > elementPosition) {
        setIsVisible(true);
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        });
      } else {
        setIsVisible(false);
        controls.start({
          opacity: 0,
          y: 50,
          transition: { duration: 0.5 },
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);
  return (
    <section
      className="campaigning-intro ptb72 w100 ofh bg6"
      id="scrollContainer"
    >
      <div className="campaigning wrapper df ptb72">
        <motion.div
          className="campaigning-img flx50 pr"
          initial={{ opacity: 0, y: 350 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.img
            src="images/campaigning-img-01.jpg"
            alt="campaigning-img-01"
            className="campaigning-01 pa br8"
            initial={{ opacity: 0, x: -350 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          />
          <img
            src="images/campaigning-img.jpg"
            alt="campaigning"
            className="campaigning-02 pa br8"
          />
          <motion.img
            src="images/campaigning-img-02.jpg"
            alt="campaigning-img-02"
            className="campaigning-03 pa br8"
            initial={{ opacity: 0, rotate: -15, x: -150 }}
            animate={isVisible ? { opacity: 1, rotate: 10, x: 0 } : {}}
            transition={{ duration: 1.2 }}
          />
        </motion.div>
        <div className="campaigning-content flx50 fc6 plr32">
          <motion.h2
            className="campaiging-heading fs42 fw7 lh48 mb24"
            initial={{ opacity: 0, x: 250 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="ff2 fc2 fs36 db"
              initial={{ opacity: 0, x: 250 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
            >
              We Live Here, We Give Here :<br />
            </motion.span>
            Indo-American Charity Foundation Empowering Houston's Community
          </motion.h2>
          <p className="campaiging-subtext lh24">
            Transforming lives in Greater Houston through{" "}
            <span className="fw7 fs18 ff2 fc2">EFGH -</span> education, family,
            general welfare, and healthcare.{" "}
            <Link href="/" className="ff2 fw7 fc2 tdhu">
              Join us in making a difference
            </Link>
            .
          </p>
          <ul className="campaiging-icons ptb24">
            <li className="campaiging-icon v-center mb12">
              <MdOutlineRadioButtonChecked className=" mr8 fc5 fs28 fw5" />
              Offer financial aid and volunteer assistance to Houston
              communities.
            </li>
            <li className="campaiging-icon v-center mb12">
              <MdOutlineRadioButtonChecked className="mr8 fc5 fs28 fw5" />
              Support education through scholarships and STEM programs.
            </li>
            <li className="campaiging-icon v-center mb12">
              <MdOutlineRadioButtonChecked className=" mr8 fc5 fs28 fw5" />
              Cultivate a community where basic needs are met, enriching lives.{" "}
            </li>
          </ul>
          <Link href="/">
            <div className="supporting-btn transit2 h48 box-center br8 bg5 fc1 p32 fw7">
              Learn More
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CampaigningInto;
