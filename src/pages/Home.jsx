import React from 'react'
import OneCikanlar from '../components/Home/OneCikanlar'
import KampanyalıAraclar from '../components/Home/KampanyalıAraclar'
import Footer from '../components/Footer'
import AvantajlarBanner from '../components/Home/AvantajlarBanner'
import HomeNavBan from '../components/Navbar/HomeNavBan'

const Home = () => {
  return (
    <div>
       <HomeNavBan/>
       <AvantajlarBanner/>
       <OneCikanlar/>
       <KampanyalıAraclar/>
       <Footer/>
    </div>
  )
}

export default Home
