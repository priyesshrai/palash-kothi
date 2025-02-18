'use client'
import React from 'react'
import Fancybox from './Fancybox'


export default function Gallery() {

  const images = [
    {
      id: 1,
      image: "/img/gallery/gallery-01.jpg",
    },
    {
      id: 2,
      image: "/img/gallery/gallery-02.jpg",
    },
    {
      id: 3,
      image: "/img/gallery/gallery-03.jpg",
    },
    {
      id: 4,
      image: "/img/gallery/gallery-06.jpg",
    },
    {
      id: 5,
      image: "/img/gallery/gallery-07.jpg",
    },
    {
      id: 6,
      image: "/img/gallery/gallery-08.jpg",
    },
    {
      id: 7,
      image: "/img/gallery/gallery-09.jpg",
    },
    {
      id: 8,
      image: "/img/gallery/gallery-10.jpg",
    },
    {
      id: 9,
      image: "/img/gallery/gallery-11.jpg",
    },
    {
      id: 10,
      image: "/img/gallery/gallery-12.jpg",
    },
    // {
    //   id: 11,
    //   image: "/img/gallery/gallery-13.jpg",
    // },
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

        <Fancybox options={{ Carousel: { infinite: true } }}>
          {images.map((image) => (
            <div className="w-1/5 md:w-1/2 sm:w-1/1" key={image.id}>
              <a
                data-anim-child="img-right cover-white delay-2"
                data-fancybox="gallery"
                href={image.image}>
                <div className="ratio ratio-1:1">
                  <img src={image.image} alt="Gallery Image" className="img-ratio rounded-16" />
                </div>
              </a>
            </div>
          ))}
        </Fancybox>

      </div>
    </section>
  )
}
