import React from 'react'
import burger from "../assets/images/burger2.jfif"
const About = () => {
  return (
    <>
    <section className='about' id='about'>
        <h1 className='heading'>
            <span>About</span> us
        </h1>
        <div className="row">
            <div className="image">
                <img src={burger} alt="" />
            </div>
            <div className="content">
                <h3>What makes our food so special?
                </h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nobis aliquid, quisquam ipsa excepturi dicta delen.
                Amet ab placeat, natus atque veniam nulla ipsum quam non voluptates. Error, odio magnam?
                </p>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing 
                it. Natus nobis aliquid, quisquam ipsa excepturi dicta  
                len.
                Amet ab placeat, natus atque veniam nulla ipsum quam non 
                voluptates. Error, odio magnam?
                </p>
                <a href="#" className='btn'>Learn more</a>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default About
