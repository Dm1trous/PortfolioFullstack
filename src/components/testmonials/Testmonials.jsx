import React from 'react'
import './testmonials.css'
import AVA1 from '../../assets/avatar1.jpg'
import AVA2 from '../../assets/avatar2.jpg'
import AVA3 from '../../assets/avatar3.jpg'
import AVA4 from '../../assets/avatar4.jpg'
import {  Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
    {
      id: 1,
      image: AVA1,
      client: 'Tina Shiw',
      text: 'Imaginary Cloud delivered the project on time and to the client expectations. The service provider ensured excellent project management and communication via email and virtual meetings. Their skill set, proactivity, and accommodating approach were key elements of their work.'
    },
    {
        id: 2,
        image: AVA2,
        client: 'Roberto Walle',
        text: 'Thanks to help, the new dashboard was completed on time. As a result, the client noticed an increase in terms of session time. The team seamlessly adapted to the clients workflow, allowing for a smooth and collaborative experience. They were also accessible, skilled, and reliable.'
      },
      {
        id: 3,
        image: AVA3,
        client: 'Elon Musk',
        text: 'The web app is currently under the final testing stages, but has already received positive feedback from the client. The team tracks and reports their progress via Google Sheets in real time. Overall, the team consists of highly-qualified experts that deliver quality results.'
      },
      {
        id: 4,
        image: AVA4,
        client: 'Brida Plumer',
        text: 'Development and coding work is efficient and reliable. Using Slack and Jira as their main tools, Imaginary Cloud leads a communicative and proactive process. The client also highly praises their ability to commit to their promises and deliver upon them.'
      },
  ]  

const Testmonials = () => {
  return (
    <section id='testmonials'>
        <h5 className='title__gray'>Review from client</h5>
        <h2>Testimonials</h2>
        <Swiper className='container testimonials__container'
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {
        data.map(({id, image, client, text}) => {
            return (
            <SwiperSlide key={id} className='client'>
                <div className='client__avatar'>
                    <img src={image} alt={client} />
                </div>
                <h5 className='client__name'>{client}</h5>
                <div className='client__review'>
                    <p>{text}</p>
                </div>
            </SwiperSlide>
            )
        })
        }
        </Swiper>
    </section>
  )
}

export default Testmonials