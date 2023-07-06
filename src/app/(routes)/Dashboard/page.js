"use client"
import LatestHits from '@/app/components/Charts/LatestHits/LatestHits'
import Footer from '@/app/components/Footer/Footer'
import Navbar from '@/app/components/Navbar/Navbar'
import React from 'react'
import styles from './page1.module.css'
import Performance from '@/app/components/Charts/Performance/Performance'


const page = () => {
  return<>
    <Navbar active ={true}/>
    <div className={styles.dashboardWrapper}>
      <LatestHits/>
      <Performance/>

    </div>
    <Footer/>
  </>
}

export default page