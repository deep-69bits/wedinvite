import React from 'react'
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import HomeGallery from '../components/HomeGallery'
import Footer from '../components/Footer'
import Video from '../components/Video'


const page3 = () => {
  
  return (
    <div>
     <Header/>
      <Video/>
      <section id='gallery'>
      <HomeGallery/>
      </section>
      <section id='about'>
      <AboutUs/>
      </section>
     <div className='bg-pink-500'>
     <Footer />
     </div>
    </div>
  )
}

export default page3