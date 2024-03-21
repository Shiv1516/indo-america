import Link from "next/link";
import React from "react";
import { GoCheckCircle } from "react-icons/go";

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
              <p className="who-we-are-subtext mb16 lh30">
                For 32 years, IACF has appealed to the philanthropic spirit of
                the Indo-American community in Houston to target four key areas:
                Education, Family, General Welfare and Healthcare. Having our
                motto “we live here, we give here”, our mission is to act as a
                bridge between the Indo-American community and mainstream
                causes.
              </p>
              <p className="who-we-are-subtext mb16 lh30">
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

      <section className="our-goal ptb48">
        <div className="our-goal-section wrapper2 df fww ptb40">
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

      <section className="our-volunteers pb230 bg9">
        <div className="our-volunteers-section wrapper2 df ptb72 aic">
          <div className="our-volunteers-main-content flx33 mb24">
            <div className="our-volunteers-title fc1 mlr24">
              <h2 className="our-volunteers-heading fs42 fw7 mb32">
                Our Board of Directors
              </h2>
              <p className="our-volunteers-subtext mb24 lh30">
                No, Silicon Valley – bugs are not features. Reach out about a
                technical issue, share your feedback or ask us about our
                favorite lunch spot in Miami. We’re here no matter what.
              </p>
              <Link href="/">
                <div className="supporting-btn transit2 h48 box-center br8 bg10 fc6 p32 fw7">
                  Join Our Team
                </div>
              </Link>
            </div>
          </div>
          <div className="our-volunteers-contents flx1 fc1 df fww mb24">
            <div className="team-img flx33 tac mb32">
              <img
                src="images/team-member-01.jpg"
                alt="team-member-01"
                className="w100 mb16"
              />
              <h2 className="team-member-name fs22 fw7">Sylvia Noles</h2>
            </div>
            <div className="team-img flx33 tac mb32">
              <img
                src="images/team-member-01.jpg"
                alt="team-member-01"
                className="w100 mb16"
              />
              <h2 className="team-member-name fs22 fw7">Sylvia Noles</h2>
            </div>
            <div className="team-img flx33 tac mb32">
              <img
                src="images/team-member-01.jpg"
                alt="team-member-01"
                className="w100 mb16"
              />
              <h2 className="team-member-name fs22 fw7">Sylvia Noles</h2>
            </div>
            <div className="team-img flx33 tac mb32">
              <img
                src="images/team-member-01.jpg"
                alt="team-member-01"
                className="w100 mb16"
              />
              <h2 className="team-member-name fs22 fw7">Sylvia Noles</h2>
            </div>
            <div className="team-img flx33 tac mb32">
              <img
                src="images/team-member-01.jpg"
                alt="team-member-01"
                className="w100 mb16"
              />
              <h2 className="team-member-name fs22 fw7">Sylvia Noles</h2>
            </div>
            <div className="team-img flx33 tac mb32">
              <img
                src="images/team-member-01.jpg"
                alt="team-member-01"
                className="w100 mb16"
              />
              <h2 className="team-member-name fs22 fw7">Sylvia Noles</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="wwa-support-our-work pa w100">
        <div className="wwa-support-card wrapper2 df aisc br8 ofh bg10 aic">
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

      <section className="wwa-join-us pt230 bg6 pt72">
        <div className="wwa-join-us-section wrapper2 ptb72 jcc df">
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
