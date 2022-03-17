import React from 'react'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import HomeBody from '../../components/HomeBody/HomeBody'
import Navbar from '../../components/Navbar/Navbar'

export default function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <HomeBody></HomeBody>
        <Footer></Footer>
    </div>
  )
}
