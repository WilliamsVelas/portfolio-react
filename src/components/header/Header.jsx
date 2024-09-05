import React from 'react'
import './header.css'
import CTA from "./CTA"
import ME2 from '../../assets/file.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Williams Velasquez</h1>
        <h5 className="text-light">
          Front-End and Android Developer
        </h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME2} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header