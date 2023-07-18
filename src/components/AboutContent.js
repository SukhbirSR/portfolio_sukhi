import "./AboutContentStyles.css";
import React from 'react'
// import { Link } from "react-router-dom";
import aboutImg from "../assets/about.png";

const AboutContent = () => {
  return (
    <section className="about" id="about">
        
        <div className="about-intro">
            <h1>About</h1>
        </div>
        
        <div className="about-container">
            <div className="left">
                <div className="img-container">
                    <img src={aboutImg} alt="project" className="img"/>
                </div>
            </div>
            <div className="right">
                <h1>Hi There</h1>
                
                <p className="info">My name is Sukhbir and I am a frontend developer in Kitchener, Canada.
                    My passion for designing helps me to create websites and web applications. 
                    This includes designing the front-end portion of the website, developing 
                    new user-facing features, building reusable codes, and determining the 
                    structure and design of web pages.
                </p>
                
                <div className='icon1'>
                    <label className="label">Phone</label>
                    <h4><a href="tel:+19053918813">+1 (905)-391-8813</a></h4>
                </div>
                <div className='icon2'>
                    <label className="label">Email</label>
                    <h4><a href="mailto:rs.sukhbirsingh@gmail.com"> rs.sukhbirsingh@gmail.com</a></h4>
                </div>
                    
                <hr/>
                
                {/* <Link to="/contact" className="btn">Contact Me</Link> */}
                <a href={"#form"} className="btn btn-ct">Contact</a>
                <a href="https://drive.google.com/uc?export=download&id=1l8J0N98AYPRVZWsSQL9rGcdqWtNtaJRr"><button className="btn btn-light">Download CV</button></a>
         

            </div>
        </div>

    </section>
  )
}

export default AboutContent