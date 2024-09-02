import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

export const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com/in/williams-velasquez-19258a261" target="_blank"> <BsLinkedin /> </a>
            <a href="https://github.com" target="_blank"> <BsGithub />  </a>
            <a href="https://gmail.com" target="_blank"> <BiLogoGmail /> </a>
        </div>
    )
}

export default HeaderSocials
