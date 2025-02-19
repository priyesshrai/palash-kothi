import Image from 'next/image'
import React from 'react'

export default function Benefits() {
  return (
    <>
      <section className="layout-pt-lg">
        <div className="container">
          <div data-anim-wrap className="row justify-center text-center">
            <div data-anim-child="slide-up delay-3" className="col-xl-7 col-lg-8">
              <div className="text-15 uppercase sm:mb-10">
                PALASH KOTHI RESORT
              </div>
              <h2 className="text-64 md:text-40">
                Exceptional gastronomy in beautiful spaces
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="layout-pt-lg" style={{ paddingTop: '100px' }}>
        <div className="container">
          <div data-anim-wrap className="row y-gap-30 items-center">
            <div data-anim-child="img-right cover-light-1 delay-2" className="col-md-6">
              <div className="ratio ratio-1:1">
                <Image width={575} height={300} src="/img/about/19/1.png" alt="image" className="img-ratio rounded-16" />
              </div>
            </div>

            <div className="col-lg-4 col-md-5 offset-md-1">
              <i data-anim-child="slide-up delay-5" className="d-block icon-restaurant text-30 mb-30"></i>
              <h3 data-anim-child="slide-up delay-6" className="text-40 md:text-30 lh-1">Heading -  Step Into Nature&apos;s Timeless Beauty</h3>
              <p data-anim-child="slide-up delay-7" className="text-17 lh-17 mt-30">I wandered lonely as a cloud
                That floats on high over vales and hills,
                When all at once I saw a crowd,
                A host, of golden daffodils;
              </p>

              <div data-anim-child="slide-up delay-8">
                <div className="text-17 fw-500 mt-50 md:mt-30">Open Daily: 7:00 pm - 24:00</div>
              </div>

              <div data-anim-child="slide-up delay-8">
                <button className="button -md -type-2 bg-accent-1 -white rounded-16 text-accent-2 mt-50 md:mt-30">DINING WITH US</button>
              </div>
              <div data-anim-child="slide-up delay-8">
                <button className="button -md -type-2 -outline-black text-black rounded-16 mt-50 md:mt-30">discover more</button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="layout-pt-lg">
        <div className="container">
          <div data-anim-wrap className="row y-gap-30 items-center">
            <div className="col-md-5">
              <i data-anim-child="slide-up delay-5" className="d-block icon-rocks text-30 mb-30"></i>
              <h3 data-anim-child="slide-up delay-6" className="text-40 md:text-30 lh-065">Spa & Wellness</h3>
              <p data-anim-child="slide-up delay-7" className="text-17 lh-17 mt-30">&quot;Tyger, Tyger, burning bright,
                In the forests of the night;
                What immortal hand or eye
                Could frame thy fearful symmetry?&quot;
              </p>

              <div data-anim-child="slide-up delay-8">
                <button className="button -md -type-2 -outline-black text-black rounded-16 mt-50 md:mt-30">discover more</button>
              </div>
            </div>

            <div data-anim-child="img-right cover-light-1 delay-2" className="col-md-6 offset-md-1">
              <div className="ratio ratio-1:1">
                <Image width={600} height={500} src="/img/about/19/2.png" alt="image" className="img-ratio rounded-16" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div data-anim-wrap className="row y-gap-30 items-center">
            <div data-anim-child="img-right cover-light-1 delay-2" className="col-md-6">
              <div className="ratio ratio-1:1">
                <Image width={600} height={500} src="/img/about/19/3.png" alt="image" className="img-ratio rounded-16" />
              </div>
            </div>

            <div className="col-lg-4 col-md-5 offset-md-1">
              <i data-anim-child="slide-up delay-5" className="d-block icon-gym text-30 mb-30"></i>
              <h3 data-anim-child="slide-up delay-6" className="text-40 md:text-30 lh-065">Fitness Center</h3>
              <p data-anim-child="slide-up delay-7" className="text-17 lh-17 mt-30">&quot;For oft, when on my couch I lie
                In vacant or in pensive mood,
                They flash upon that inward eye
                Which is the bliss of solitude;&quot;
              </p>

              <div data-anim-child="slide-up delay-8">
                <button className="button -md -type-2 -outline-black text-black rounded-16 mt-50 md:mt-30">discover more</button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}
