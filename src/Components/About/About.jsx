import React from 'react'
import "./About.css"
import theme_pattern from  "../../assets/theme_pattern.svg";
import about_profile from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id='about' className='about'>

       <div className="about-title">
            <h1>About Me</h1>
            <img src= {theme_pattern} alt="" />
        </div>   

        <div className="about-sections">
           
            <div className="about-left">
                  <img src= {about_profile} alt="" />
            </div>

             <div className="about-right">
                <div className="about-paragraph">
                    <p>I am an up and Coming Web Developer, Having Done Numerous Projects.</p>
                    <p className='about-paragraph-2'>My Passion for Front-end Development is Huge.</p>
                </div>

                  <div className="about-skills">
                       <div className="about-skill"> <p>HTML & CSS </p>  <hr style={{width: "50%"}} /> </div>
                       <div className="about-skill"> <p>React JS</p>  <hr style={{width: "70%"}} /> </div>
                       <div className="about-skill"> <p>JavaScript</p>  <hr style={{width: "60%"}} /> </div>
                       <div className="about-skill"> <p>Next JS</p>  <hr style={{width: "50%"}} /> </div>
                  </div>

             </div>

        </div>

        <div className="about-achievements">
            <div className="about-achievement">
                <h1> 2+ </h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>

            <hr className='achieve-hr' />

            <div className="about-achievement">
                <h1> 10+ </h1>
                <p>PROJECTS COMPLETED</p>
            </div>

            <hr className='achieve-hr'/>

            <div className="about-achievement">
                <h1> 5+ </h1>
                <p>HAPPY CLIENTS</p>
            </div>


        </div>
    </div>
  )
}

export default About;