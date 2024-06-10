"use client";
//app/components/dashboard/page.js
import PostinganUser from "../posting/posting";
import HeaderIcon from "../header/header-icon";
import styles from "./Dasboard.module.css";
import NavbarMenu from "../navbar/Navbar";
import SidebarMenu from "../sidebar/page";
import EventComing from "../article/upcomingEvent/page";
import TodayArticle from "../article/todayArticle/page";
import TodayMoment from "../article/todayMoment/page";
import "animate.css";

const Dashboard = () => {
  return (
    <>
      <div>
        <div className={styles.home}>
          <NavbarMenu />
          <SidebarMenu />
          <div className="animate__animated animate__slideInRight">
            <TodayArticle />
            <TodayMoment />
          </div>
          <PostinganUser />
          <div className="animate__animated animate__slideInRight">
            <EventComing />
          </div>
          <HeaderIcon />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
