import "./HeroImgStyle.css";
import React from 'react'
import IntroImg from '../assets/showcase.jpg';
// import { Link } from "react-router-dom";6

const Heroimg = () => {
  return (
    <section className="hero" id="home">
      <div className="showcase">
          <div className="mask">
              <img className="into-img" src={IntroImg} alt="Background"/>
          </div>
          <div className="content">
            <p>HI, I'M A DEVELOPER</p>
            <h1>Frontend Developer</h1>
            <div>
              {/* <Link to="/project" className="btn">Projects</Link>  */}
              <a href={"#work"} className="btn">Project</a>
              {/* <Link to="/contact" className="btn btn-light">Contact</Link> */}
              <a href={"#form"} className="btn btn-light">Contact</a>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Heroimg