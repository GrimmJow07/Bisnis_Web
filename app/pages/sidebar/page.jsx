"use client"
import React, { Fragment } from 'react'
import SidebarMenu from "../../../components/sidebar/page";
import styles from "./sidebarPages.module.css"

function SidebarPage() {
  return (
    <div className={styles.home}>
        <SidebarMenu />
    </div>
)
}

export default SidebarPage