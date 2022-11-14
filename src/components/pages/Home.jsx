import React from 'react'
import Hero from '../section/Hero';
import HeroFooter from '../section/Hero-footer';
import About from '../section/About';
import Skills from '../section/Skills';
import Portfolio from '../section/Portfolio';
import Contact from '../section/Contact';
 function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default Home;
