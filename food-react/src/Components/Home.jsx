import React from 'react'
import burger5 from "../assets/images/burger5.png"


const Home = () => {


  return (
    <>

    <section className="home" id="home">
   <div className='img'>
       <div className="content">
           <h3>fresh <span>food in the </span> morning</h3>
           <p>Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. 
           Placeat
           Lahore ,sint demin jacket Cupitate goat footing Tempora Rebout.
           </p>
            <a href="#" className='btn'>
            get yours now
            </a>
        </div>
       <div className='main'>
    <img src={burger5} alt="" className='img1' />
    </div></div>
    </section>
    </>
  );
};

export default Home;
