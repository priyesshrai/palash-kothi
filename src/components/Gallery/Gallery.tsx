import React from 'react'

export default function Gallery() {
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

      <div className="row y-gap-30 pt-100 sm:pt-50">
        <div className="w-1/5 md:w-1/2 sm:w-1/1">
          <div data-anim-child="img-right cover-white delay-2">
            <a href="#" className="ratio ratio-1:1">
              <img
                src="img/inst/1/1.png"
                alt="image"
                className="img-ratio rounded-16"
              />
            </a>
          </div>
        </div>

        <div className="w-1/5 md:w-1/2 sm:w-1/1">
          <div data-anim-child="img-right cover-white delay-4">
            <a href="#" className="ratio ratio-1:1">
              <img
                src="img/inst/1/2.png"
                alt="image"
                className="img-ratio rounded-16"
              />
            </a>
          </div>
        </div>

        <div className="w-1/5 md:w-1/2 sm:w-1/1">
          <div data-anim-child="img-right cover-white delay-6">
            <a href="#" className="ratio ratio-1:1">
              <img
                src="img/inst/1/3.png"
                alt="image"
                className="img-ratio rounded-16"
              />
            </a>
          </div>
        </div>

        <div className="w-1/5 md:w-1/2 sm:w-1/1">
          <div data-anim-child="img-right cover-white delay-8">
            <a href="#" className="ratio ratio-1:1">
              <img
                src="img/inst/1/4.png"
                alt="image"
                className="img-ratio rounded-16"
              />
            </a>
          </div>
        </div>

        <div className="w-1/5 md:w-1/2 sm:w-1/1">
          <div data-anim-child="img-right cover-white delay-10">
            <a href="#" className="ratio ratio-1:1">
              <img
                src="img/inst/1/5.png"
                alt="image"
                className="img-ratio rounded-16"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
