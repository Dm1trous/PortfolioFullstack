import React from 'react'
import './services.css'
import { FaCheck } from "react-icons/fa";

const Services = () => {
  return (
    <section id='services'>
        <h5 className='title__gray'>What I Offer</h5>
        <h2>Services</h2>
        <div className='container services__container'>
            <div className='services__cards'>
                <div className='services__card'>
                    <h3 className='services__card-title'>UI/UX Design</h3>
                    <div className='services__card-items'>
                        <FaCheck className='services__card-icon'/>
                        <p>Mobile App Design</p>
                    </div>
                    <div className='services__card-items'>
                        <FaCheck className='services__card-icon'/>
                        <p>Brand & Visual Design</p>
                    </div>
                    <div className='services__card-items'>
                        <FaCheck className='services__card-icon'/>
                        <p>Logo Design</p>
                    </div>
                    <div className='services__card-items'>
                        <FaCheck className='services__card-icon'/>
                        <p>Interaction Design</p>
                    </div>
                </div>
                <div className='services__card'>
                    <h3 className='services__card-title'>Web Development</h3>
                    <div className='services__card-items'>
                        <FaCheck className='services__card-icon'/>
                        <p>eCommerce Web Development</p>
                    </div>
                    <div className='services__card-items'>
                        <FaCheck className='services__card-icon'/>
                        <p>Custom Website Development</p>
                    </div>
                    <div className='services__card-items'>
                        <FaCheck className='services__card-icon'/>
                        <p>Web App Development</p>
                    </div>
                    <div className='services__card-items'>
                        <FaCheck className='services__card-icon'/>
                        <p>MVP Development</p>
                    </div>
                    <div className='services__card-items'>
                        <FaCheck className='services__card-icon'/>
                        <p>PWA Development</p>
                    </div>
                </div>
                <div className='services__card'>
                    <h3 className='services__card-title'>Content Creation</h3>
                    <div className='services__card-items'>
                        <FaCheck className='services__card-icon'/>
                        <p>Image rendering</p>
                    </div>
                    <div className='services__card-items'>
                        <FaCheck className='services__card-icon'/>
                        <p>Copyright and rewrite</p>
                    </div>
                    <div className='services__card-items'>
                        <FaCheck className='services__card-icon'/>
                        <p>Creation of infographics</p>
                    </div>
                    <div className='services__card-items'>
                        <FaCheck className='services__card-icon'/>
                        <p>Animation creation</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services