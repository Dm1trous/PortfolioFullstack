import React from 'react'
import './experience.css'
import { FaCheckCircle } from "react-icons/fa"

const Experience = () => {
  return (
    <section id='experience'>
        <h5 className='title__gray'>What Skill I Have</h5>
        <h2>My Experience</h2>
        <div className='container experience__container'>
            <div className='experience__cards'>
                <div className='experience__card'>
                    <h3 className='experience__card-title'>Fronend Development</h3>
                    <div className='experience__cards-mini'>
                        <div className='experience__card-mini'>
                            <div className='experience__card-mini1'>
                                <FaCheckCircle className='experience__icon'/>
                            </div>
                            <div className='experience__card-mini2'>
                                <p className='experience__card-mini-text'>HTML</p>
                                <p className='experience__card-mini-text2'>Experienced</p>
                            </div>
                        </div>
                        <div className='experience__card-mini'>
                            <div className='experience__card-mini1'>
                                <FaCheckCircle className='experience__icon'/>
                            </div>
                            <div className='experience__card-mini2'>
                                <p className='experience__card-mini-text'>CSS</p>
                                <p className='experience__card-mini-text2'>Intermediate</p>
                            </div>
                        </div>
                        <div className='experience__card-mini'>
                            <div className='experience__card-mini1'>
                                <FaCheckCircle className='experience__icon'/>
                            </div>
                            <div className='experience__card-mini2'>
                                <p className='experience__card-mini-text'>JavaScript</p>
                                <p className='experience__card-mini-text2'>Experienced</p>
                            </div>
                        </div>
                        <div className='experience__card-mini'>
                            <div className='experience__card-mini1'>
                                <FaCheckCircle className='experience__icon'/>
                            </div>
                            <div className='experience__card-mini2'>
                                <p className='experience__card-mini-text'>Bootstrap</p>
                                <p className='experience__card-mini-text2'>Experienced</p>
                            </div>
                        </div>
                        <div className='experience__card-mini'>
                            <div className='experience__card-mini1'>
                                <FaCheckCircle className='experience__icon'/>
                            </div>
                            <div className='experience__card-mini2'>
                                <p className='experience__card-mini-text'>Tailwind</p>
                                <p className='experience__card-mini-text2'>Experienced</p>
                            </div>
                        </div>
                        <div className='experience__card-mini'>
                            <div className='experience__card-mini1'>
                                <FaCheckCircle className='experience__icon'/>
                            </div>
                            <div className='experience__card-mini2'>
                                <p className='experience__card-mini-text'>React</p>
                                <p className='experience__card-mini-text2'>Experienced</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='experience__card'>
                    <h3 className='experience__card-title'>Backend Development</h3>
                    <div className='experience__cards-mini'>
                    <div className='experience__card-mini'>
                            <div className='experience__card-mini1'>
                                <FaCheckCircle className='experience__icon'/>
                            </div>
                            <div className='experience__card-mini2'>
                                <p className='experience__card-mini-text'>Node JS</p>
                                <p className='experience__card-mini-text2'>Intermediate</p>
                            </div>
                    </div>
                    <div className='experience__card-mini'>
                            <div className='experience__card-mini1'>
                                <FaCheckCircle className='experience__icon'/>
                            </div>
                            <div className='experience__card-mini2'>
                                <p className='experience__card-mini-text'>MongoDB</p>
                                <p className='experience__card-mini-text2'>Experienced</p>
                            </div>
                    </div>
                    <div className='experience__card-mini'>
                            <div className='experience__card-mini1'>
                                <FaCheckCircle className='experience__icon'/>
                            </div>
                            <div className='experience__card-mini2'>
                                <p className='experience__card-mini-text'>PHP</p>
                                <p className='experience__card-mini-text2'>Basic</p>
                            </div>
                    </div>
                    <div className='experience__card-mini'>
                            <div className='experience__card-mini1'>
                                <FaCheckCircle className='experience__icon'/>
                            </div>
                            <div className='experience__card-mini2'>
                                <p className='experience__card-mini-text'>MySQL</p>
                                <p className='experience__card-mini-text2'>Intermediate</p>
                            </div>
                    </div>
                    <div className='experience__card-mini'>
                            <div className='experience__card-mini1'>
                                <FaCheckCircle className='experience__icon'/>
                            </div>
                            <div className='experience__card-mini2'>
                                <p className='experience__card-mini-text'>Django</p>
                                <p className='experience__card-mini-text2'>Intermediate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience