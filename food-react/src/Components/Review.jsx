import React from 'react'
import {review} from "../Data"
import qouteImg from "../assets/images/quote-img.png"

const Review = () => {
  return (
    <section className='review'>
        <h1 className='heading'>customer'<span> review</span>
        </h1>
        <div className='box-container'>
        {
            review.map((item,index) => (
                <div className="box" key={index}>
                    <img src={qouteImg} alt="" className='quote' />
                    <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Sint ducimus eos molestias, esse ex culpa debitis tempora consequatur commodi explicabo iusto qui itaque 
                    bland maiores dicta?
                    </p>
                    <img src={item.img} alt="" className='user' />
                    <h3>john deo</h3>
                    <div className="stars">
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star-half-alt'></i>
                       </div>
                    </div>
           )) }
           </div>
    </section>

      
        );
};

export default Review
