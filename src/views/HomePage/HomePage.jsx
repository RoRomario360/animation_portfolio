import s from "./HomePage.module.scss";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";
import Container from "../../components/Container/Container";
import SliderMobile from "../../components/SliderMobile/SliderMobile";

import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg";
import HeroMobileNew from "../../assets/hero/hero_mob.mp4";
import Contacts from "../../components/Contacts/Contacts";
import ModalVideo from "../../components/ModalVideo/ModalVideo";
import { useState } from "react";

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={s.homePageContent}>
      {openModal && (
        <ModalVideo openModal={openModal} setOpenModal={setOpenModal} />
      )}
      <HeaderMobile />
      <section className={s.heroSection}>
        {/*<Container>*/}
        <div className={s.heroContent}>
          <video
            src={HeroMobileNew}
            autoPlay
            playsInline
            width="100%"
            type="video/mp4"
            muted
            loop="true"
            preload="auto"
            // height="200px"
          ></video>
        </div>
        {/*</Container>*/}
      </section>
      <section className={s.portfolioSection}>
        <Container>
          <div className={s.portfolioContent}>
            <h2 className={s.sectionTitle}>Portfolio</h2>
            <SliderMobile openModal={openModal} setOpenModal={setOpenModal} />
          </div>
        </Container>
      </section>
      <section className={s.section}>
        <Container>
          <div className={s.aboutContent}>
            <h2 className={s.sectionTitle}>About This Gig</h2>
            <ul className={s.aboutDescText}>
              <li>
                Do you have your own unique logo? Would you like to make it work
                in a new way? Brand mark animation is the latest word in video
                marketing. I know exactly how to make your logo animation
                recognizable.
              </li>
              <li>
                You can use it for Instagram and Facebook videos and on your
                YouTube channel to highlight your brand identity. All I need is
                a logo in .ai format vectors files. If you don't have one,
                that's not a problem. I can additionally convert it from .jpg or
                .png. I also need to hear the wishes and expectations of the
                result. So, I will ask a few questions to understand the work's
                specifics better. Mutual communication is the way to success!
              </li>
              <li>
                It is easy to order: choose the right package and contact me.
                After a short preview and discussion of essential details, I
                will proceed to work. In the end, I will send you the finished
                video in .mov and .mp4 format for confirmation. You can make
                edits or accept this version.
              </li>
              <li>
                You will receive the animation and all the source files in one
                package when the work is done. So, do not waste your time and
                contact me for an animated logo and increase brand awareness,
                stand out from the crowd, and extend your audience!
              </li>
            </ul>
          </div>
        </Container>
      </section>
      <section className={s.section}>
        <Container>
          <div>
            <h2 className={s.sectionTitle}>Store</h2>
            <div className={s.storeWrapper}>
              <div className={s.vectorItem}>
                <div className={s.vectorLeft}>Vector clipart</div>
                <div className={s.vectorRight}>
                  <PlayIcon />
                </div>
              </div>
              <div className={s.soundsItem}>
                <div className={s.soundsLeft}>Sounds</div>
                <div className={s.soundsRight}>
                  <PlayIcon />
                </div>
              </div>
              <div className={s.trackItem}>
                <div className={s.trackLeft}>Soundtrack</div>
                <div className={s.trackRight}>
                  <PlayIcon />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className={s.contactsContent}>
            <h2 className={s.sectionTitle}>Contacts</h2>
            <Contacts />
          </div>
        </Container>
      </section>
      <footer>
        <p>&copy; 2023 All rights reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;
