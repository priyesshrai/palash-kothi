'use client'
import React from 'react'

export default function Experience() {
  const experience = [
    {
      id: 1,
      title: 'Bike Rides',
      price: '$280/Person',
      img: '/img/cards/experience/experience-01.jpg',
    },
    {
      id: 2,
      title: 'Bike Rides',
      price: '$280/Person',
      img: '/img/cards/experience/experience-02.jpg',
    },
    {
      id: 3,
      title: 'Bike Rides',
      price: '$280/Person',
      img: '/img/cards/experience/experience-03.jpg',
    },
    {
      id: 4,
      title: 'Bike Rides',
      price: '$280/Person',
      img: '/img/cards/experience/experience-04.jpg',
    },
    {
      id: 5,
      title: 'Bike Rides',
      price: '$280/Person',
      img: '/img/cards/experience/experience-05.jpg',
    },
    {
      id: 6,
      title: 'Bike Rides',
      price: '$280/Person',
      img: '/img/cards/experience/experience-06.jpg',
    },
    {
      id: 7,
      title: 'Bike Rides',
      price: '$280/Person',
      img: '/img/cards/experience/experience-07.jpg',
    }
  ]
  return (
    <section className="layout-pt-lg">
      <div data-anim-wrap className="container">
        <div className="row justify-center text-center">
          <div data-split='lines' data-anim-child="split-lines delay-2" className="col-auto">
            <div className="text-15 uppercase mb-30 sm:mb-10">Experience Nature Like Never Before</div>
            <h2 className="text-64 md:text-40">Unforgettable Experience</h2>
          </div>
        </div>

        <div className="pt-100 sm:pt-50">
          <div className="relative js-section-slider" data-gap="30" data-slider-cols="xl-4 lg-4 md-3 sm-2 base-1" data-nav-prev="js-slider4-prev" data-nav-next="js-slider4-next">
            <div className="swiper-wrapper">

              {
                experience.map((exp) => (
                  <div key={exp.id} className="swiper-slide">
                    <a href="#" data-anim-child="img-right cover-light-1 delay-2" className="baseCard -type-1 -hover-image-scale">
                      <div className="baseCard__image ratio ratio-33:45 rounded-16">
                        <div className="-hover-image-scale__image">
                          <img src={exp.img} alt="image" className="img-ratio" />
                        </div>
                      </div>
                      {/* <div className="baseCard__content d-flex flex-column justify-end text-center">
                        <h4 className="text-30 md:text-25 text-white">{exp.title}</h4>
                        <div className="text-white mt-10">{exp.price}</div>
                      </div> */}
                    </a>
                  </div>
                ))
              }

            </div>

            <div className="navAbsolute -type-4">
              <button className="size-80 flex-center bg-accent-1-50 blur-1 rounded-full js-slider4-prev">
                <i className="icon-arrow-left text-24 text-white"></i>
              </button>

              <button className="size-80 flex-center bg-accent-1-50 blur-1 rounded-full js-slider4-next">
                <i className="icon-arrow-right text-24 text-white"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
