import About from '@/components/AboutComponent/About'
import Benefits from '@/components/Benefit/Benefits'
import Experience from '@/components/Experience/Experience'
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
    <Testimonials/>
    </>
  )
}
