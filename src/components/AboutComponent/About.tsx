import React from 'react'

export default function About() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div data-anim-wrap className="container">
        <div className="row y-gap-50 items-center justify-between">
          <div className="col-lg-5 col-md-9">
            <div
              data-anim-child="slide-up delay-1"
              className="text-15 uppercase mb-30 sm:mb-10"
            >
              PALASH KOTHI RESORT
            </div>
            <h2
              data-anim-child="slide-up delay-2"
              className="text-64 md:text-40 capitalize"
            >
              Palash Kothi – Escape to Luxury
            </h2>
            <p
              data-anim-child="slide-up delay-3"
              className="lh-18 pr-60 lg:pr-0 mt-40 md:mt-30"
            >
              Palash Kothi features a welcoming ground floor with the Reception, Front Office, Back Office, Lobby, Bar, and Restaurant. The spacious, luxurious rooms are located on the first floor. For relaxation, an open-air theatre and activity centre offer the perfect space to unwind and enjoy.
            </p>
            <div
              data-anim-child="slide-up delay-4"
              className="d-flex mt-50 md:mt-40"
            >
              <button className="button -type-1">
                <i className="-icon">
                  <svg
                    width="50"
                    height="30"
                    viewBox="0 0 50 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.8 28.0924C43.3451 28.0924 49.4616 21.9759 49.4616 14.4308C49.4616 6.88577 43.3451 0.769287 35.8 0.769287C28.255 0.769287 22.1385 6.88577 22.1385 14.4308C22.1385 21.9759 28.255 28.0924 35.8 28.0924Z"
                      stroke="#122223"
                    />
                    <path
                      d="M33.4808 10.2039L32.9985 10.8031L37.2931 14.2623H0.341553V15.0315H37.28L33.0008 18.4262L33.4785 19.0285L39 14.6492L33.4808 10.2039Z"
                      fill="#122223"
                    />
                  </svg>
                </i>
                READ MORE
              </button>
            </div>

            <div
              data-anim-child="slide-up delay-5"
              className="row y-gap-30 pt-40 md:pt-0"
            >
              <div className="col-sm-4 col-auto">
                <div className="text-92 sm:text-60 text-sec fw-500">23</div>
                <div className="text-17 fw-500 uppercase">ROOMS</div>
              </div>

              <div className="col-sm-4 col-auto">
                <div className="text-92 sm:text-60 text-sec fw-500">1</div>
                <div className="text-17 fw-500 uppercase">Organic Farms & Gaushala </div>
              </div>

              <div className="col-sm-4 col-auto">
                <div className="text-92 sm:text-60 text-sec fw-500">1</div>
                <div className="text-17 fw-500 uppercase">Theme Garden & Nakshtra Van</div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div data-anim-child="img-right cover-white delay-2">
              <div className="imageGrid -type-3">
                <img src="/img/about/about-outer-04.jpg" alt="image" width="375px" height="455px" />
                <img src="/img/about/about-outer-02.jpg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
