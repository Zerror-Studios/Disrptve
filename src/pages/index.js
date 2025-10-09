import Clients from '@/components/Home/Clients'
import Hero from '@/components/Home/Hero'
import ImagePop from '@/components/Home/ImagePop'
import Projects from '@/components/Home/Projects'
import Services from '@/components/Home/Services'
import ShowReel from '@/components/Home/ShowReel'
import LaserFlow from '@/components/ui/LaserFlow'
import React from 'react'

const index = () => {
  return (
    <>
      <Hero />
      <Services/>
      <Projects/>
      <Clients/>
      <ImagePop/>
    </>
  )
}

export default index