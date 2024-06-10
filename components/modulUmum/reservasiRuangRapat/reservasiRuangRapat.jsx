"use client";
import { useState } from "react";
import NavbarMenu from "../../navbar/Navbar";
import PemesananRuang from "../../sidebar/menu";
import CreateRuangRapat from "./createRuangRapat";
import styles from "./reservasiRuangRapat.module.css";
import "animate.css";
import Link from "next/link";

const timeSlots = Array.from({ length: 24 }, (_, i) => {
  const hour = String(i).padStart(2, '0');
  return `${hour}:00`;
});

const Dropdown = ({ isOpen, onSelect }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.dropdown}>
      {timeSlots.map((time, index) => (
        <div key={index} onClick={() => onSelect(time)} className={styles.dropdownItem}>
          {time}
        </div>
      ))}
    </div>
  );
};

const ReservasiRuangRapat = () => {
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isEndOpen, setIsEndOpen] = useState(false);
  const [startTime, setStartTime] = useState("08:00");
  const [endTime, setEndTime] = useState("09:00");
  const [showCreateRuangRapat, setShowCreateRuangRapat] = useState(false);

  const handleStartSelect = (time) => {
    setStartTime(time);
    setIsStartOpen(false);
  };

  const handleEndSelect = (time) => {
    setEndTime(time);
    setIsEndOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTimeSlotClick = (isAvailable) => {
    if (isAvailable) {
      setShowCreateRuangRapat(true);
      scrollToTop();
    }
  };

  return (
    <>
      {showCreateRuangRapat ? (
        <CreateRuangRapat />
      ) : (
        <>
          <NavbarMenu />
          <PemesananRuang />
          <div className={styles.home}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.pemesananRuangRapatWrapper}>
                  <div className={styles.titleContainer}>
                    <div className={styles.title}>Pemesanan Ruang Rapat</div>
                  </div>
                </div>
                <hr style={{marginTop: "60px", backgroundColor: "#AFB1B6", height: "1px", opacity: "50%"}}/>
                <hr style={{marginTop: "117px", backgroundColor: "#AFB1B6", height: "1px",opacity: "50%"}}/>
                <div className={styles.tanggalAwalParent}>
                  <div className={styles.tanggalAwal}>Tanggal Awal</div>
                  <div className={styles.timeParent}>
                    <div className={styles.parent} onClick={() => setIsStartOpen(!isStartOpen)}>
                      <div className={styles.time}>{startTime}</div>
                      <img
                        className={styles.dropdownIcon}
                        alt=""
                        src="/Images/modulUmum/ReservasiRuangRapat/bxchevrondown.svg"
                      />
                    </div>
                  </div>
                  <Dropdown isOpen={isStartOpen} onSelect={handleStartSelect} />
                </div>
                <div className={styles.tanggalAkhirParent}>
                  <div className={styles.tanggalAwal}>Tanggal Akhir</div>
                  <div className={styles.timeParent}>
                    <div className={styles.parent} onClick={() => setIsEndOpen(!isEndOpen)}>
                      <div className={styles.time}>{endTime}</div>
                      <img
                        className={styles.dropdownIcon}
                        alt=""
                        src="/Images/modulUmum/ReservasiRuangRapat/bxchevrondown.svg"
                      />
                    </div>
                  </div>
                  <Dropdown isOpen={isEndOpen} onSelect={handleEndSelect} />
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.cancelWrapper}>
                    <div className={styles.cancel}>Cancel</div>
                  </div>
                  <div className={styles.searchWrapper}>
                    <button style={{border: 'none', textDecoration: 'none', backgroundColor: 'transparent'}}>
                      <div className={styles.search}>Search</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.image2Parent}>
                <img className={styles.image2Icon} alt="" src="/Images/modulUmum/ReservasiRuangRapat/image-2@2x.png" />
                <div className={styles.lantai5Ruang}>Lantai 5 (Ruang Rapat Besar)</div>
                <div className={styles.kapasitasParent}>
                  Kapasitas 20 orang • Laptop + Proyektor • Flipchart + Spidol
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameInner} />
                    <div style={{ backgroundColor: '#47FF47', width: '10px', height: '10px' }}></div>
                    <div className={styles.statusAvailable}>
                      Available
                    </div>
                  </div>
                  <div className={styles.rectangleParent}>
                    <div className={styles.rectangleDiv} />
                    <div style={{ backgroundColor: '#FF8585', width: '10px', height: '10px', marginLeft: '20px' }}></div>
                    <div className={styles.statusNotAvailable}>
                      Not Available
                    </div>
                  </div>
                </div>
                <div className={styles.frameChild} />
                <div className={styles.tanggalParent}>
                  <div className={styles.tanggal}>Tanggal</div>
                  <div className={styles.pemesananRuangRapat1}>14 November 2022</div>
                </div>
                <div className={styles.waktuWrapper}>
                  <div className={styles.tanggal}>Waktu</div>
                </div>
                <div className={styles.frameItem} />
                <div className={styles.frameDiv}>
                  <div className={styles.frameParent1}>
                    <div className={styles.wrapper} onClick={() => handleTimeSlotClick(true)}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanAvailable}>08:00 - 09:00</div>
                      </div>
                    </div>
                    <div className={styles.wrapper} onClick={() => handleTimeSlotClick(true)}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanAvailable}>09:00 - 10:00</div>
                      </div>
                    </div>
                    <div className={styles.wrapper} onClick={() => handleTimeSlotClick(true)}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanAvailable}>10:00 - 11:00</div>
                      </div>
                    </div>
                    <div className={styles.wrapper} onClick={() => handleTimeSlotClick(true)}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanAvailable}>11:00 - 12:00</div>
                      </div>
                    </div>
                    <div className={styles.wrapper2} onClick={() => handleTimeSlotClick(false)}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanNotAvailable}>12:00 - 13:00</div>
                      </div>
                    </div>
                    <div className={styles.wrapper2} onClick={() => handleTimeSlotClick(false)}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanNotAvailable}>13:00 - 14:00</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.wrapper} onClick={() => handleTimeSlotClick(true)}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanAvailable}>14:00 - 15:00</div>
                      </div>
                    </div>
                    <div className={styles.wrapper} onClick={() => handleTimeSlotClick(true)}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanAvailable}>15:00 - 16:00</div>
                      </div>
                    </div>
                    <div className={styles.wrapper} onClick={() => handleTimeSlotClick(true)}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanAvailable}>16:00 - 17:00</div>
                      </div>
                    </div>
                    <div className={styles.wrapper7} onClick={() => handleTimeSlotClick(true)}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanAvailable}>17:00 - 18:00</div>
                      </div>
                    </div>
                    <div className={styles.wrapper7} onClick={() => handleTimeSlotClick(false)}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanNotAvailable}>18:00 - 19:00</div>
                      </div>
                    </div>
                    <div className={styles.wrapper7} onClick={() => handleTimeSlotClick(false)}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanNotAvailable}>19:00 - 20:00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <img className={styles.image3Icon} alt="" src="/Images/modulUmum/ReservasiRuangRapat/image-3@2x.png" />
              </div>
              <div className={styles.lantai5RuangRapatKecilParent}>
                <div className={styles.lantai5Ruang1}>Lantai 5 (Ruang Rapat Kecil)</div>
                <div className={styles.kapasitasParent1}>
                  Kapasitas 10 orang • Televisi 32 Inch • Glassboard + Spidol
                </div>
                <div className={styles.frameChild} />
                <div className={styles.tanggalParent}>
                  <div className={styles.tanggal}>Tanggal</div>
                  <div className={styles.pemesananRuangRapat1}>14 November 2022</div>
                </div>
                <div className={styles.waktuWrapper}>
                  <div className={styles.tanggal}>Waktu</div>
                </div>
                <div className={styles.frameItem} />
                <div className={styles.frameDiv}>
                  <div className={styles.frameParent1}>
                    <div className={styles.wrapper} onClick={() => handleTimeSlotClick(true)}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanAvailable}>08:00 - 09:00</div>
                      </div>
                    </div>
                    <div className={styles.wrapper} onClick={() => handleTimeSlotClick(true)}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanAvailable}>09:00 - 10:00</div>
                      </div>
                    </div>
                    <div className={styles.wrapper} onClick={() => handleTimeSlotClick(true)}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanAvailable}>10:00 - 11:00</div>
                      </div>
                    </div>
                    <div className={styles.wrapper} onClick={() => handleTimeSlotClick(true)}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanAvailable}>11:00 - 12:00</div>
                      </div>
                    </div>
                    <div className={styles.wrapper2}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanNotAvailable}>12:00 - 13:00</div>
                      </div>
                    </div>
                    <div className={styles.wrapper2}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanNotAvailable}>13:00 - 14:00</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.wrapper} onClick={() => handleTimeSlotClick(true)}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanAvailable}>14:00 - 15:00</div>
                      </div>
                    </div>
                    <div className={styles.wrapper} onClick={() => handleTimeSlotClick(true)}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanAvailable}>15:00 - 16:00</div>
                      </div>
                    </div>
                    <div className={styles.wrapper} onClick={() => handleTimeSlotClick(true)}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanAvailable}>16:00 - 17:00</div>
                      </div>
                    </div>
                    <div className={styles.wrapper7} onClick={() => handleTimeSlotClick(true)}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanAvailable}>17:00 - 18:00</div>
                      </div>
                    </div>
                    <div className={styles.wrapper7} onClick={() => handleTimeSlotClick(true)}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanAvailable}>18:00 - 19:00</div>
                      </div>
                    </div>
                    <div className={styles.wrapper7} onClick={() => handleTimeSlotClick(true)}>
                      <div className={styles.pemesananRuangRapat}>
                        <div className={styles.statusPeminjamanAvailable}>19:00 - 20:00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameInner} />
                    <div style={{ backgroundColor: '#47FF47', width: '10px', height: '10px' }}></div>
                    <div className={styles.statusAvailable}>
                      Available
                    </div>
                  </div>
                  <div className={styles.rectangleParent}>
                    <div className={styles.rectangleDiv} />
                    <div style={{ backgroundColor: '#FF8585', width: '10px', height: '10px', marginLeft: '20px' }}></div>
                    <div className={styles.statusNotAvailable}>
                      Not Available
                    </div>
                  </div>
                </div>
                <img className={styles.image4Icon} alt="" src="/Images/modulUmum/ReservasiRuangRapat/image-4@2x.png" />
              </div>
              <div className={styles.homeParent} >
                <Link href="/pages/dashboard" style={{ textDecoration: 'none' }}>
                  <div className={styles.pagination}>Home</div>
                </Link>
                <div className={styles.div30}>•</div>
                <Link href="/pages/umum" style={{textDecoration: 'none'}}>
                  <div className={styles.pagination}>Umum</div>
                </Link>
                <div className={styles.div30}>•</div>
                <Link href="/pages/reservasiRuang" style={{ textDecoration: 'none' }}>
                  <div className={styles.pagination2}>Pemesanan Ruang</div>
                </Link>
              </div>
            </div>
            </div>
          </>
        )}
      </>
  );
};

export default ReservasiRuangRapat;
