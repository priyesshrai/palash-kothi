'use client'
import React from 'react'
import Fancybox from './Fancybox'


export default function Gallery() {

  const images = [
    {
      id: 1,
      image: "/img/cards/rooms/room-01.jpg",
    },
    {
      id: 2,
      image: "/img/cards/rooms/room-02.jpg",
    },
    {
      id: 3,
      image: "/img/cards/rooms/room-03.jpg",
    },
    {
      id: 4,
      image: "/img/cards/rooms/room-04.jpg",
    },
    {
      id: 5,
      image: "/img/cards/rooms/room-05.jpg",
    },
  ]



  return (
    <section className="layout-pb-lg">
      <div data-anim-wrap className="px-60 md:px-20">
        <div className="row justify-center text-center">
          <div
            data-split="lines"
            data-anim-child="split-lines delay-1"
            className="col-auto"
          >
            <div className="text-15 uppercase mb-30 sm:mb-10">@palash_kothi</div>
            <h2 className="text-64 md:text-40">Follow us on Instagram</h2>
          </div>
        </div>

          <Fancybox options={{
            Carousel: {
              infinite: true,
            },
          }} >
            {
              images.map((image) => (
                <div className="w-1/5 md:w-1/2 sm:w-1/1" key={image.id}>
                  <div data-anim-child="img-right cover-white delay-2" data-fancybox="gallery" href={image.image}>
                    <a href="#" className="ratio ratio-1:1" >
                      <img
                        src={image.image}
                        alt="image"
                        className="img-ratio rounded-16"
                      />
                    </a>
                  </div>
                </div>
              ))
            }
          </Fancybox>
      </div>
    </section>
  )
}
