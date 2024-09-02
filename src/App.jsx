import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Testimonials from './components/testimonials/Testimonials'
import Experience from './components/experience/Experience'
import Portfolio from './components/portafolio/Portfolio'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Services from './components/services/Services'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App