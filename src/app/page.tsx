import About from '@/components/AboutComponent/About'
import Benefits from '@/components/Benefit/Benefits'
import Contact from '@/components/Contact/Contact'
import Experience from '@/components/Experience/Experience'
import Gallery from '@/components/Gallery/Gallery'
import Hero from '@/components/Hero/Hero'
import Facilities from '@/components/HotelFacilities/Facilities'
import Rooms from '@/components/Rooms/Rooms'
import Testimonials from '@/components/Testimonials/Testimonials'
import View from '@/components/ViewExperience/View'
import React from 'react'

export default function page() {
  return (
    <>
    <Hero/>
    <View/>
    <About/>
    <Facilities/>
    <Experience/>
    <Rooms/>
    <Benefits/>
    <Gallery/>
    <Contact/>
    {/* <Testimonials/> */}
    </>
  )
}
