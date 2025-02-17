import React from 'react'

export default function View() {
  return (
    <section className="layout-pt-lg">
      <div data-anim-wrap className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-10 col-lg-12">
            <div data-split='lines' data-anim-child="split-lines delay-2">
              <div className="text-15 uppercase mb-30 sm:mb-10">
                PALASH KOTHI RESORT
              </div>
              <h2 className="text-64 md:text-40 capitalize">
                Palash Kothi, Bandhavgarh - A Peaceful Stay in the <br className="lg:d-none" />
                Heart of Nature.
              </h2>
            </div>

            <div data-anim-child="slide-up delay-4" className="row justify-center">
              <div className="col-lg-10">
                <p className="mt-40 md:mt-20">
                  Nestled among jasmine beds and fragrant Rajnigandha flowers, Palash Kothi offers a peaceful retreat where nature and serenity come together. Named after the ‘Flame of the Forest’ tree (Palash), this grand dwelling reflects elegance and charm. The Palash tree, sacred in Indian culture, symbolizes divinity and blessings. At Palash Kothi, experience the magic of nature, tradition, and luxury in a serene, forest-inspired setting.
                </p>
              </div>
            </div>

            <div data-anim-child="slide-up delay-5">
              <button className="button -type-1 mx-auto mt-50 md:mt-30">
                <i className="-icon">
                  <svg width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.8 28.0924C43.3451 28.0924 49.4616 21.9759 49.4616 14.4308C49.4616 6.88577 43.3451 0.769287 35.8 0.769287C28.255 0.769287 22.1385 6.88577 22.1385 14.4308C22.1385 21.9759 28.255 28.0924 35.8 28.0924Z" stroke="#122223" />
                    <path d="M33.4808 10.2039L32.9985 10.8031L37.2931 14.2623H0.341553V15.0315H37.28L33.0008 18.4262L33.4785 19.0285L39 14.6492L33.4808 10.2039Z" fill="#122223" />
                  </svg>
                </i>
                Book now
              </button>
            </div>
          </div>
        </div>

        <div className="row x-gap-50 y-gap-30 pt-100 sm:pt-50">
          <div className="col-lg-4 col-sm-6">
            <div data-anim-child="img-right cover-light-1 delay-2" className="rounded-16">
              <img src="/img/about/view-01.jpg" alt="image" className="rounded-16 col-12" />
            </div>
            {/* <div data-anim-child="fade delay-5" className="text-17 mt-30">A Sanctuary For The Senses</div> */}
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="pt-100 md:pt-0">
              <div data-anim-child="img-right cover-light-1 delay-3" className="rounded-16">
                <img src="/img/about/view-02.jpg" alt="image" className="rounded-16 col-12" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div data-anim-child="img-right cover-light-1 delay-4" className="rounded-16">
              <img src="/img/about/view-03.jpg" alt="image" className="rounded-16 col-12" />
            </div>
            {/* <div data-anim-child="fade delay-5" className="text-17 mt-30">2023 Mountain Travelers Choice</div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
