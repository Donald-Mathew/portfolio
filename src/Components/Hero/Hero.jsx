import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
import hero from '../../assets/hero.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src= {profile_img} alt=""  />
        <h1> <span> I am Donald </span>, a Front-End Developer Based in the USA</h1>
        <p>I have done multiple projects that I have on my GitHub and now I am Seeking Development Opportunities</p>
        <div className="hero-action">
            <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With Me</AnchorLink></div>
            <div className='hero-resume'>My Resume</div>
        </div>
    </div>
  )
}

export default Hero