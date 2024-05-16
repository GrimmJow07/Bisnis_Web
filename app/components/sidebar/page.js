import React from "react";
import styles from "./sidebar.module.css";

const SidebarMenu = () => {
  return (
    <div className="animate__animated animate__bounceInLeft">
      <div className={styles.frameParent2}>
        <div className={styles.frameParent3}>
          <img
            className={styles.rectangleWrapper}
            alt=""
            src="/images/dasboardImages/homeIcon.svg"
          />
          <div className={styles.username}>Home</div>
        </div>
        <div className={styles.frameParent3}>
          {/* User Side Bar */}
          <div className={styles.rectangleWrapper}>
            <img
              className={styles.frameChild3}
              alt=""
              src="/images/avatars/avatar.jpg"
            />
          </div>
          <div className={styles.username}>Username</div>
        </div>
        <div className={styles.lineDiv} />
        <div className={styles.frameParent3}>
          <img
            className={styles.rectangleWrapper}
            alt=""
            src="/images/dasboardImages/menuIcon.svg"
          />
          <div className={styles.username}>Menu</div>
        </div>
        <div className={styles.frameParent3}>
          <img
            className={styles.rectangleWrapper}
            alt=""
            src="/images/dasboardImages/sdmIcon.svg"
          />
          <div className={styles.username}>SDM</div>
        </div>
        <div className={styles.frameParent3}>
          <img
            className={styles.rectangleWrapper}
            alt=""
            src="/images/dasboardImages/umumIcon.svg"
          />
          <div className={styles.username}>Umum</div>
        </div>
        <div className={styles.frameParent3}>
          <img
            className={styles.rectangleWrapper}
            alt=""
            src="/images/dasboardImages/hukumIcon.svg"
          />
          <div className={styles.username}>Hukum</div>
        </div>
        <div className={styles.frameParent3}>
          <img
            className={styles.rectangleWrapper}
            alt=""
            src="/images/dasboardImages/simoIcon.svg"
          />
          <div className={styles.username}>SIMO</div>
        </div>
        <div className={styles.frameParent3}>
          <img
            className={styles.rectangleWrapper}
            alt=""
            src="/images/dasboardImages/keuanganIcon.svg"
          />
          <div className={styles.username}>Keuangan</div>
        </div>
        <div className={styles.frameParent3}>
          <img
            className={styles.rectangleWrapper}
            alt=""
            src="/images/dasboardImages/akuntingIcon.svg"
          />
          <div className={styles.username}>Akunting</div>
        </div>
        <div className={styles.privacyParent}>
          <div className={styles.whatsOnYour}>Privacy</div>
          <div className={styles.whatsOnYour}>•</div>
          <div className={styles.whatsOnYour}>Terms</div>
          <div className={styles.whatsOnYour}>•</div>
          <div className={styles.whatsOnYour}>Language</div>
        </div>
        <div className={styles.copyright2022Container}>
          <p className={styles.allRightReserved}>Copyright © 2022</p>
          <p className={styles.allRightReserved}>
            All Right Reserved by Bisnis Indonesia Group
          </p>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
