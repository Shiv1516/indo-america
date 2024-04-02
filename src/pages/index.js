import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import Hero from "@/component/Hero";
import Wwd from "@/component/Wwd";
import Elementor from "@/component/Elementor";
import CampaigningInto from "@/component/CampaigningInto";
import OurApproach from "@/component/OurApproach";
import BePartOfChange from "@/component/BePartOfChange";
import SupportingMission from "@/component/SupportingMission";
import KeepItUp from "@/component/KeepItUp";
import NeedHelpOcean from "@/component/NeedHelpOcean";
import EnvironmentalCount from "@/component/EnvironmentalCount";
import MovementSection from "@/component/MovementSection";
import Happening from "@/component/Happening";
import Calender from "@/component/Calender";
import Events from "@/component/Events";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>iacfhouston</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&family=Fuzzy+Bubbles:wght@400;700&family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <div>
          <Hero />
          <Elementor />
          <CampaigningInto />
          <Events />
          <Wwd />
          <OurApproach />
          <BePartOfChange />
          <SupportingMission />
          <KeepItUp />
          <NeedHelpOcean />
          <EnvironmentalCount />
          {/* <MovementSection /> */}
          <Happening />
          <Calender />
        </div>
      </main>
    </>
  );
}
