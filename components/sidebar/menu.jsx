import React, { useState } from "react";
import styles from "./pemesananRuang.module.css";

const PemesananRuang = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [activeDropdown, setActiveDropdown] = useState("");

  const toggleDropdown = () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
      setActiveMenu("");
      setActiveDropdown("");
    } else {
      setIsDropdownOpen(true);
      setActiveMenu("pemesananRuang");
    }
  };

  const handleDropdownItemClick = (item) => {
    setActiveDropdown(item);
    if (item === "reservasi") {
      window.location.href = "/pages/reservasiRuang";
    }
  };

  const handleHomeClick = () => {
    window.location.href = "/pages/dashboard";
  };

  return (
    <>
      <div className="animate__animated animate__slideInLeft">
        <div className={styles.frameParent}>
          <div className={styles.frameGroup} onClick={handleHomeClick}>
            <img
              className={styles.frameChild}
              alt=""
              src="/images/modulUmum/frame-43.svg"
            />
            <div className={styles.frameChild}>
              <img
                className={styles.frameItem}
                alt="Home Icon"
                src="/images/avatars/avatar.jpg"
              />
            </div>
            <div className={styles.frameInner} />
            <img
              className={styles.frameChild}
              alt=""
              src="/images/modulUmum/frame-45.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="/images/modulUmum/frame-46.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="/images/modulUmum/frame-37.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="/images/modulUmum/frame-47.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="/images/modulUmum/frame-46.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="/images/modulUmum/frame-49.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="/images/modulUmum/frame-50.svg"
            />
          </div>
          <div className={styles.umumParent}>
            <b className={styles.umum}>Umum</b>
            <div
              className={`${styles.iconParkeveryUserParent} ${
                activeMenu === "pemesananRuang" ? styles.active : ""
              }`}
              onClick={toggleDropdown}
            >
              <img
                className={styles.iconParkeveryUser}
                alt=""
                src="/images/modulUmum/iconparkeveryuser.svg"
              />
              <div className={styles.pemesananRuang}>Pemesanan Ruang</div>
            </div>
            <div
              className={`${styles.dropdownMenu} ${
                isDropdownOpen ? styles.dropdownOpen : ""
              }`}
            >
              <div className={styles.frameContainer}>
                <div
                  className={`${styles.tutorialPesemesananRuangWrapper} ${
                    activeDropdown === "tutorial" ? styles.active : ""
                  }`}
                  onClick={() => handleDropdownItemClick("tutorial")}
                >
                  <div className={styles.reservasiRuangRapat}>
                    Tutorial Pemesanan Ruang
                  </div>
                </div>
                <div className={styles.rectangleDiv} />
              </div>
              <div className={styles.frameDiv}>
                <div
                  className={`${styles.reservasiRuangRapatWrapper} ${
                    activeDropdown === "reservasi" ? styles.active : ""
                  }`}
                  onClick={() => handleDropdownItemClick("reservasi")}
                >
                  <div className={styles.reservasiRuangRapat}>
                    Reservasi Ruang Rapat
                  </div>
                </div>
                <div className={styles.frameChild7} />
              </div>
            </div>
            <div
              className={`${styles.iconParkcarParent} ${
                activeMenu === "pemesananKendaraan" ? styles.active : ""
              }`}
              onClick={() => {
                if (activeMenu === "pemesananKendaraan") {
                  setActiveMenu("");
                } else {
                  setActiveMenu("pemesananKendaraan");
                }
              }}
            >
              <img
                className={styles.iconPemesananKendaraan}
                alt=""
                src="/images/modulUmum/iconparkcar.svg"
              />
              <div className={styles.pemesananKendaraan}>
                Pemesanan Kendaraan
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.privacyParent}>
            <div>Privacy</div>
            <div>•</div>
            <div>Terms</div>
            <div>•</div>
            <div>Language</div>
          </div>
          <div className={styles.copyright2022Container}>
            <p className={styles.allRightReserved}>Copyright © 2022</p>
            <p className={styles.allRightReserved}>
              All Right Reserved by Bisnis Indonesia Group
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PemesananRuang;
