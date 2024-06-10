import * as React from "react";
import { useState, useEffect } from "react";
import styles from "./createRuangRapat.module.css";
import NavbarMenu from "../../navbar/Navbar";
import PemesananRuang from "../../sidebar/menu";
import ReservasiRuangRapat from "./reservasiRuangRapat";
import Link from "next/link";

// Define the timeSlots array
const timeSlots = Array.from({ length: 24 }, (_, i) => {
  const hour = String(i).padStart(2, "0");
  return `${hour}:00`;
});

// Dropdown component
const Dropdown = ({ isOpen, onSelect }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.dropdown}>
      {timeSlots.map((time, index) => (
        <div
          key={index}
          onClick={() => onSelect(time)}
          className={styles.dropdownItem}
        >
          {time}
        </div>
      ))}
    </div>
  );
};

function CreateRuangRapat() {
  const [currentDate, setCurrentDate] = useState("");
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isEndOpen, setIsEndOpen] = useState(false);
  const [startTime, setStartTime] = useState("08:00");
  const [endTime, setEndTime] = useState("09:00");
  const [showReservasiRuangRapat, setShowReservasiRuangRapat] = useState(false);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  const handleStartSelect = (time) => {
    setStartTime(time);
    setIsStartOpen(false);
  };

  const handleEndSelect = (time) => {
    setEndTime(time);
    setIsEndOpen(false);
  };

  const handleCancelClick = () => {
    setShowReservasiRuangRapat(true);
  };

  if (showReservasiRuangRapat) {
    return <ReservasiRuangRapat />;
  }

  return (
    <>
      <NavbarMenu />
      <PemesananRuang />
      <div className={styles.home}>
        <div className={styles.homeParent}>
          <Link href="/pages/dashboard" style={{ textDecoration: "none" }}>
            <div className={styles.pagination}>Home</div>
          </Link>
          <div className={styles.div30}>•</div>
          <Link href="/pages/umum" style={{ textDecoration: "none" }}>
            <div className={styles.pagination}>Umum</div>
          </Link>
          <div className={styles.div30}>•</div>
          <Link href="/pages/reservasiRuang" style={{ textDecoration: "none" }} onClick={handleCancelClick}>
            <div className={styles.pagination}>Pemesanan Ruang</div>
          </Link>
          <div className={styles.div30}>•</div>
          <Link href="/pages/umum" style={{ textDecoration: "none" }}>
            <div className={styles.pagination}>Reservasi Ruang Rapat</div>
          </Link>
          <div className={styles.div30}>•</div>
          <Link href="/pages/reservasiRuang" style={{ textDecoration: "none" }}>
            <div className={styles.pagination2}>Create</div>
          </Link>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameParent1}>
            <div className={styles.formReservasiRuangRapatWrapper}>
              <b className={styles.formReservasiRuang}>
                Form Reservasi Ruang Rapat
              </b>
            </div>
            <hr
              style={{
                marginTop: "60px",
                backgroundColor: "#AFB1B6",
                height: "1px",
                opacity: "50%",
              }}
            />
            <div className={styles.tanggalAwalParent}>
              <div className={styles.tanggalAwal}>Tanggal Awal</div>
              <div className={styles.september2022Wrapper}>
                <div>
                  <div className={styles.ruangRapatBesar} aria-disabled>
                    {currentDate}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.tanggalAkhirParent}>
              <div className={styles.tanggalAwal}>Tanggal Akhir</div>
              <div className={styles.september2022Wrapper}>
                <div className={styles.ruangRapatBesar}>{currentDate}</div>
              </div>
            </div>
            <div className={styles.lantaiTipeParent}>
              <div className={styles.tanggalAwal}>Lantai (Tipe)</div>
              <div className={styles.september2022Wrapper}>
                <div className={styles.ruangRapatBesar}>
                  5 (Ruang Rapat Besar)
                </div>
              </div>
            </div>
            <div className={styles.namaKegiatanParent}>
              <div className={styles.kegiatan}>
                <span>Nama Kegiatan</span>
                <span className={styles.span}>{` `}</span>
                <span className={styles.span1}>*</span>
              </div>
              <div className={styles.namaKegiatanGroup}>
                <input
                  type="text"
                  className={styles.inputField}
                  placeholder="Nama Kegiatan"
                />
                <img
                  className={styles.bxchevronDownIcon}
                  alt=""
                  src="/images/modulUmum/ReservasiRuangRapat/bxchevrondown.svg"
                />
              </div>
            </div>
            <div className={styles.picParent}>
              <div className={styles.tanggalAwal}>
                <span>{`PIC `}</span>
                <span className={styles.span1}>*</span>
              </div>
              <div className={styles.namaKegiatanGroup}>
                <input
                  type="text"
                  className={styles.inputField}
                  placeholder="PIC"
                />
                <img
                  className={styles.bxchevronDownIcon}
                  alt=""
                  src="/images/modulUmum/ReservasiRuangRapat/bxchevrondown.svg"
                />
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.cancelWrapper} onClick={handleCancelClick}>
                <div className={styles.cancel}>Cancel</div>
              </div>
              <div className={styles.submitWrapper}>
                <div className={styles.submit}>Submit</div>
              </div>
            </div>
            <div className={styles.waktuAwalParent}>
              <div className={styles.tanggalAwal}>
                <span>{`Waktu Awal `}</span>
                <span className={styles.span1}>*</span>
              </div>
              <div className={styles.timeParent}>
                <div
                  className={styles.parent}
                  onClick={() => setIsStartOpen(!isStartOpen)}
                >
                  <div className={styles.time}>{startTime}</div>
                  <img
                    className={styles.dropdownIcon}
                    alt=""
                    src="/images/modulUmum/ReservasiRuangRapat/bxchevrondown.svg"
                  />
                </div>
                <Dropdown isOpen={isStartOpen} onSelect={handleStartSelect} />
              </div>
            </div>
            <div className={styles.fasilitasRuanganParent}>
              <div className={styles.fasilitasRuanganContainer}>
                <span>{`Fasilitas Ruangan `}</span>
                <span className={styles.span1}>*</span>
              </div>
              <div className={styles.bxcheckboxParent}>
                <input
                  type="checkbox"
                  id="kapasitas"
                  className={styles.checkbox}
                />
                <label htmlFor="kapasitas" className={styles.label}>
                  Kapasitas 20 Orang
                </label>
              </div>
              <div className={styles.bxcheckboxParent}>
                <input
                  type="checkbox"
                  id="laptop"
                  className={styles.checkbox}
                />
                <label htmlFor="laptop" className={styles.label}>
                  Laptop + Proyektor
                </label>
              </div>
              <div className={styles.bxcheckboxParent}>
                <input
                  type="checkbox"
                  id="flipchart"
                  className={styles.checkbox}
                />
                <label htmlFor="flipchart" className={styles.label}>
                  Flipchart + Spidol
                </label>
              </div>
              <div className={styles.bxcheckboxParent}>
                <input
                  type="checkbox"
                  id="zoom"
                  className={styles.checkbox}
                />
                <label htmlFor="zoom" className={styles.label}>
                  Link Zoom Meeting
                </label>
              </div>
              <div className={styles.bxcheckboxParent}>
                <input
                  type="checkbox"
                  id="speaker"
                  className={styles.checkbox}
                />
                <label htmlFor="speaker" className={styles.label}>
                  Speaker Portable
                </label>
              </div>
            </div>
            <div className={styles.layoutRuanganWrapper}>
              <div className={styles.tanggalAwal}>
                <span>{`Layout Ruangan `}</span>
                <span className={styles.span1}>*</span>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.bxcheckboxParent}>
                <input
                  type="radio"
                  id="letter-u"
                  name="layout"
                  className={styles.radio}
                />
                <label htmlFor="letter-u" className={styles.label}>
                  Letter U
                </label>
              </div>
              <div className={styles.bxcheckboxParent}>
                <input
                  type="radio"
                  id="seminar"
                  name="layout"
                  className={styles.radio}
                />
                <label htmlFor="seminar" className={styles.label}>
                  Seminar
                </label>
              </div>
              <div className={styles.bxcheckboxParent}>
                <input
                  type="radio"
                  id="tanpa-meja"
                  name="layout"
                  className={styles.radio}
                />
                <label htmlFor="tanpa-meja" className={styles.label}>
                  Tanpa Meja / Kursi
                </label>
              </div>
              <div className={styles.bxcheckboxParent}>
                <input
                  type="radio"
                  id="custom"
                  name="layout"
                  className={styles.radio}
                />
                <label htmlFor="custom" className={styles.label}>
                  Custom
                </label>
              </div>
            </div>
            <div className={styles.waktuAkhirParent}>
              <div className={styles.tanggalAwal}>
                <span>{`Waktu Akhir `}</span>
                <span className={styles.span1}>*</span>
              </div>
              <div className={styles.timeParent}>
                <div
                  className={styles.parent}
                  onClick={() => setIsEndOpen(!isEndOpen)}
                >
                  <div className={styles.time}>{endTime}</div>
                  <img
                    className={styles.dropdownIcon}
                    alt=""
                    src="/images/modulUmum/ReservasiRuangRapat/bxchevrondown.svg"
                  />
                </div>
                <Dropdown isOpen={isEndOpen} onSelect={handleEndSelect} />
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <img
                className={styles.image1Icon}
                alt=""
                src="/images/modulUmum/ReservasiRuangRapat/image-1@2x.png"
              />
            </div>
            <div className={styles.keteranganTambahanParent}>
              <div className={styles.tanggalAwal}>Keterangan Tambahan</div>
              <div className={styles.keteranganTambahanGroup}>
                <textarea
                  className={styles.textarea}
                  placeholder="Keterangan Tambahan"
                />
                <img
                  className={styles.bxchevronDownIcon}
                  alt=""
                  src="/images/modulUmum/ReservasiRuangRapat/bxchevrondown.svg"
                />
              </div>
            </div>
            <i className={styles.terkaitPemakaianRuanganContainer}>
              <p
                className={styles.terkaitPemakaianRuangan}
              >{`*Terkait pemakaian ruangan di waktu sebelumnya, dibutuhkan waktu `}</p>
              <p className={styles.terkaitPemakaianRuangan}>
                15 Menit persiapan setelah waktu awal pemesanan. Harap
                dimaklumi.
              </p>
              <p className={styles.terkaitPemakaianRuangan}>Terima Kasih.</p>
            </i>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateRuangRapat;
