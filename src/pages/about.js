import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const advoiserData = [
  {
    id: 1,
    name: "Ramesh Cherivirala",
    role: "Advisor",
    image: "/images/iach-member/ramesh-cheru.jpg",
    alt: "ramesh-cheru",
  },
  {
    id: 2,
    name: "Prem Cholia",
    role: "Advisor",
    image: "/images/iach-member/person.jpg",
    alt: "person",
  },
  {
    id: 3,
    name: "Kamala Raghavan",
    role: "Advisor",
    image: "/images/iach-member/person.jpg",
    alt: "person",
  },
  {
    id: 4,
    name: "Nanda Vura",
    role: "Advisor",
    image: "/images/iach-member/nanda-varu.jpg",
    alt: "nanda-varu",
  },
  {
    id: 5,
    name: "Mahesh Wadhwa",
    role: "Advisor",
    image: "/images/iach-member/mahesh-vadhwa.jpg",
    alt: "mahesh-vadhwa",
  },
  {
    id: 6,
    name: "Venkat Iyer",
    role: "Advisor",
    image: "/images/iach-member/vanket-lyer.jpg",
    alt: "vanket-lyer",
  },
  {
    id: 7,
    name: "Dr Sushovan Guha",
    role: "Advisor",
    image: "/images/iach-member/person.jpg",
    alt: "person",
  },
  {
    id: 8,
    name: "Ellankil Joseph",
    role: "Advisor",
    image: "/images/iach-member/person.jpg",
    alt: "person",
  },
];

const membersData = [
  {
    id: 1,
    name: "Pankaj Rana",
    role: "President",
    image: "/images/iach-member/pankaj-sir.jpg",
    alt: "pankaj-sir",
  },
  {
    id: 2,
    name: "Hasu D Patel",
    role: "President-Elect",
    image: "/images/iach-member/hashu-bhai-patel.jpg",
    alt: "hashu-bhai-patel",
  },
  {
    id: 3,
    name: "Rosh Rajan",
    role: "Secretary",
    image: "/images/iach-member/rosh-rajan.jpg",
    alt: "rosh-rajan",
  },
  {
    id: 4,
    name: "Dr Prasun Jallal",
    role: "Treasurer",
    image: "/images/iach-member/person.jpg",
    alt: "person",
  },
  {
    id: 5,
    name: "Venkat Bontha",
    role: "Communications Directorr",
    image: "/images/iach-member/person.jpg",
    alt: "person.jpg",
  },
  {
    id: 6,
    name: "Rajesh Dikonda",
    role: "Past President",
    image: "/images/iach-member/rajesh-sir.jpg",
    alt: "rajesh-sir",
  },
  {
    id: 7,
    name: "Shobana Muratee",
    role: "Director",
    image: "/images/iach-member/sobhna-murati.jpg",
    alt: "sobhna-murati",
  },
  {
    id: 8,
    name: "Shephali Kadia",
    role: "Director",
    image: "/images/iach-member/sefali-kandia.jpg",
    alt: "sefali-kandia",
  },
  {
    id: 9,
    name: "Babu Thomas",
    role: "Director",
    image: "/images/iach-member/babu-thomas.jpg",
    alt: "babu-thomas",
  },
  {
    id: 10,
    name: "Ven Bontha",
    role: "Director",
    image: "/images/iach-member/ven-bontha.jpg",
    alt: "ven-bontha",
  },
  {
    id: 11,
    name: "Ramesh Maddi",
    role: "Director",
    image: "/images/iach-member/ramesh-maddi.jpg",
    alt: "ramesh-maddi",
  },
];

const about = () => {
  return (
    <>
      <section className="who-we-are bg3 ptb48">
        <div className="who-we-are-section wrapper2 df aic ptb40">
          <div className="who-we-are-container flx50">
            <div className="who-we-are-content fc1 pr32">
              <h2 className="who-we-are-heading fs42 fw7 mb24">About Us</h2>
              <p className="who-we-are-subtext mb16 lh30 fc11">
                Indo-American Charity Foundation (IACF) was founded in 1988 by a
                group of Houstonians of Indian origin (Indo- American) compelled
                by an altruistic desire to give back to their local community.
                Their mission to help the underprivileged originated with the
                effort to fight hunger, and has now developed into a
                multi-faceted philanthropic endeavor to help those in need in
                the Greater Houston Area.{" "}
              </p>
              <p className="who-we-are-subtext mb16 lh30 fc11">
                For 32 years, IACF has appealed to the philanthropic spirit of
                the Indo-American community in Houston to target four key areas:
                Education, Family, General Welfare and Healthcare. Having our
                motto “we live here, we give here”, our mission is to act as a
                bridge between the Indo-American community and mainstream
                causes.
              </p>
              <p className="who-we-are-subtext mb16 lh30 fc11">
                Part of the funding is allotted for grants to non-profit
                organizations for specific projects and to provide scholarships
                to graduating meritorious high school students from
                underprivileged backgrounds. Recently, we were able to
                contribute $200,000.00 towards the Houston Mayor’s Harvey Relief
                Fund.
              </p>
              <a href="/">
                <div className="supporting-btn transit2 h48 box-center br8 bg10 fc6 p32 fw7">
                  Take Action
                </div>
              </a>
            </div>
          </div>
          <div className="who-we-are-img-box flx50 mb24">
            <img
              src="images/wwa-about-us-01.jpg"
              alt="wwa-about-us"
              className="w100 br8"
            />
          </div>
        </div>
      </section>

      <section className="wwa-about-us ptb72">
        <div className="wwa-section wrapper2 df fww">
          <div className="wwa-img-box flx50 df">
            <img
              src="images/keep-it-up-bg-img.jpg"
              alt="keep-it-up-img"
              className="w100 ofc br8"
            />
          </div>
          <div className="wwa-content flx50 pl32">
            <h4 className="wwa-subheading ttu bg10 dib fc6 br4 fs14 p8 mb16">
              About Us
            </h4>
            <h2 className="wwa-heading fs42 lh48 fw7 mb24 fc6">What We Do</h2>
            <p className="wwa-subtext lh30 mb16">
              IACF has given millions of dollars in funding over the past 30
              years to Houston non-profits such as Houston Food Bank, Search
              Homeless Services and Reach Unlimited to name a few. Some examples
              of the ground work that has been accomplished by IACF includes;
              parent-child educational workshops for students in inner city
              schools, provided meals and volunteer servers for family dinner
              nights at a pre-school for homeless children and providing free
              flu shots to the elderly homeless population.
            </p>
            <p className="wwa-subtext lh30">
              We are a 100% volunteer organization, run by a dedicated group of
              board members and volunteers. This helps to keep our costs low and
              maximize the funding that we are able to distribute annually.
            </p>
          </div>
        </div>
      </section>

      <section className="our-goal pt48 pb230">
        <div className="our-goal-section wrapper2 df fww ptb72">
          <div className="our-goal-main-content flx50 fc1 pr32">
            <h2 className="our-goal-heading fs42 lh48 fw7 mb24">
              IACF MISSION
            </h2>
            <p className="our-goal-subtext mb24 lh30 fc11">
              Indo-American Charity Foundation is a non-profit charitable
              organization that helps the underprivileged and needy with
              monetary and volunteer work contributions through established and
              emerging organizations [501(c)3] in the Greater Houston Area.
            </p>
            <Link href="/">
              <div className="movement-btn transit2 h48 box-center br8 bg10 fc6 p32 fw7">
                View More
              </div>
            </Link>
          </div>
          <div className="our-goal-img flx50">
            <img
              src="images/mission.jpg"
              alt="mission"
              className="w100 df br8"
            />
          </div>
        </div>
      </section>

      <section className="wwa-support-our-work pa w100">
        <div className="wwa-support-card wrapper2 df  br8 ofh bg10">
          <div className="wwa-support-card-img df flx50">
            <img
              src="images/support-our-work.jpg"
              alt="support-our-word"
              className="w100"
            />
          </div>
          <div className="wwa-support-card-content flx50 ma">
            <div className="plr32">
              <h4 className="support-our-word-subheading ttu bg5 dib fc1 br4 plr16 fs14 ptb8 mb32">
                IACF VISION
              </h4>
              <h2 className="wwa-support-card-heading fs32 fc6 fw7 mb16 lh36">
                Community Empowerment Initiative
              </h2>
              <p className="wwa-subtext lh30 mb32 fc6 fs18">
                Foster a local community whose basic needs are met and where
                everyone could lead enriched lives through better health,
                education and growth opportunities.
              </p>
              <Link href="/">
                {" "}
                <div className="supporting-btn transit2 h48 box-center br8 bg5 fc1 p32 fw7">
                  Donate Now
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="Board-of-director pb48 pt230 bg6">
        <div className="director-section wrapper2 pt72 pb40">
          <div className="directore-heading h-center pt40">
            <div class="directore-heading-section tac w75">
              <h4 class="directore-subheading ttu bg1 dib fc1 fs14 fw5 br4 plr16 ptb8 mb24">
                Board of Members
              </h4>
              <h2 class="directore-heading fs42 lh48 fc6 fw7 mb24">
                Meet Our <span class="ff2 fc2">Dedicated Team</span>
              </h2>
              <p class="directore-text lh30">
                Our board comprises talented individuals committed to guiding
                our organization towards excellence. Get to know the faces
                behind our strategic decisions and vision for the future.
              </p>
            </div>
          </div>
          <div className="board-members df fww mt48">
            {membersData.map((member, index) => (
              <div className="membership-card flx25 mb16">
                <div className="member-cards pr jcc aisc ofh brd1 mr16 pt12 br4">
                  <div className="members-img df jcc">
                    <img
                      src={member.image}
                      alt={member.alt}
                      className="member-img w100 df transit1"
                    />
                    <IoIosArrowRoundForward className="side-icon pa p8 bg2 fs24 br50 fc6" />
                  </div>
                  <div className="mem-card-text p12 transit2 mt16 tac">
                    <h2 className="mem-card-name fc6 fs18 mb8 fw7">
                      {member.name}
                    </h2>
                    <p className="mem-card-degig fs14">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="Board-of-advoiser ptb48 bg8">
        <div className="advoiser-container wrapper2 ptb40">
          <div className="advoiser-heading h-center">
            <div class="advoiser-heading-section tac w75">
              <h4 class="advoiser-subheading ttu bg5 dib fc1 fs14 fw5 br4 plr16 ptb8 mb24">
                Board of Advisers
              </h4>
              <h2 class="advoiser-heading fs42 lh48 fc1 fw7 mb24">
                Expert Guidance for{" "}
                <span class="ff2 fc8">Strategic Decisions</span>
              </h2>
              <p class="advoiser-text lh30 fc9">
                Meet our esteemed board of advisers, a team of industry experts
                and thought leaders offering invaluable insights and strategic
                direction to drive our organization forward.
              </p>
            </div>
          </div>
          <div className="advoiser-members df fww pt32 fc9">
            {advoiserData.map((member, index) => (
              <div className="membership-card flx25 mb16">
                <div className="member-cards pr jcc aisc ofh brd4 mr16 pt12 br4">
                  <div className="members-img df jcc">
                    <img
                      src={member.image}
                      alt={member.alt}
                      className="member-img w100 df transit1"
                    />
                    <IoIosArrowRoundForward className="side-icon pa p8 bg2 fs24 br50 fc6" />
                  </div>
                  <div className="mem-card-text p12 transit2 mt32 tac">
                    <h2 className="mem-card-name fs18 mb8 fw7">
                      {member.name}
                    </h2>
                    <p className="mem-card-degig fs14">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wwa-join-us bg6 ptb48">
        <div className="wwa-join-us-section wrapper2 ptb40 jcc df">
          <div className="wwa-join-us-container tac">
            <h2 className="wwa-join-us-heading fs42 lh36 fc6 fw7 mb24">
              Join Us Right Now!
            </h2>
            <p className="wwa-join-us-subtext mb24 fc3 lh30">
              No, Silicon Valley – bugs are not features. Reach out about a
              technical issue, share your feedback or ask us about our favorite
              lunch spot in Miami. We’re here no matter what.
            </p>
            <form className="newsletter-form v-center">
              <input
                type="text"
                placeholder="Email*"
                className="newsletter-input h48 fs16 fc4 br4 plr24 mr12 flx1"
                required
              />
              <button
                type="submit"
                className="newsletter-btn h48 plr24 bg8 br4 fw7 fc6 transit1 cp flx16"
              >
                Join Us
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
