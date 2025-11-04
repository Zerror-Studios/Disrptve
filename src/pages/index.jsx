import Clients from '@/components/Home/Clients'
import Hero from '@/components/Home/Hero'
import ImagePop from '@/components/Home/ImagePop'
import Projects from '@/components/Home/Projects'
import Services from '@/components/Home/Services'
import SeoHeader from '@/components/seo/SeoHeader'
import React from 'react'

const Home = ({ meta }) => {

  return (
    <>
      <SeoHeader meta={meta} />
      <Hero />
      <Services />
      <Projects />
      <Clients />
      <ImagePop />
    </>
  )
}

export default Home


export async function getStaticProps() {
  const meta = {
    title: "DISRPTVE - Strategy-Led Marketing Agency | Brand Growth",
    description:
      "We build brands that earn attention back, with interest. Full-service marketing agency specializing in brand strategy, digital marketing & creative excellence.",
    canonical: "https://disrptve.com/",
    og: {
      title: "DISRPTVE - Strategy-Led Marketing Agency | Brand Growth",
      description:
        "We build brands that earn attention back, with interest. Full-service marketing agency specializing in brand strategy, digital marketing & creative excellence.",
      image: "https://disrptve.com/logo-og.png",
      url: "https://disrptve.com/",
      type: "website",
      site_name: "DISRPTVE",
    },
    twitter: {
      card: "summary_large_image",
      title: "DISRPTVE - Strategy-Led Marketing Agency | Brand Growth",
      description:
        "We build brands that earn attention back, with interest. Full-service marketing agency specializing in brand strategy, digital marketing & creative excellence.",
      image: "https://disrptve.com/logo-og.png",
      site: "@disrptve",
    },
    robots: "index,follow",
    keywords:
      "marketing agency, digital marketing agency, brand strategy, creative agency Mumbai, full-service marketing, strategy-led marketing",
    author: "DISRPTVE",
    viewport: "width=device-width, initial-scale=1.0",
    themeColor: "#000000",
  };

  return {
    props: { meta },
  };
}

