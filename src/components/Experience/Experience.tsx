import React from 'react'

export default function Experience() {
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

              <div className="swiper-slide">
                <a href="#" data-anim-child="img-right cover-light-1 delay-2" className="baseCard -type-1 -hover-image-scale">
                  <div className="baseCard__image ratio ratio-33:45 rounded-16">
                    <div className="-hover-image-scale__image">
                      <img src="img/cards/1/1.png" alt="image" className="img-ratio" />
                    </div>
                  </div>
                  <div className="baseCard__content d-flex flex-column justify-end text-center">
                    <h4 className="text-30 md:text-25 text-white">Bike Rides</h4>
                    <div className="text-white mt-10">$280/Person</div>
                  </div>
                </a>
              </div>

              <div className="swiper-slide">
                <a href="#" data-anim-child="img-right cover-light-1 delay-4" className="baseCard -type-1 -hover-image-scale">
                  <div className="baseCard__image ratio ratio-33:45 rounded-16">
                    <div className="-hover-image-scale__image">
                      <img src="img/cards/1/2.png" alt="image" className="img-ratio" />
                    </div>
                  </div>
                  <div className="baseCard__content d-flex flex-column justify-end text-center">
                    <h4 className="text-30 md:text-25 text-white">Golf</h4>
                    <div className="text-white mt-10">$280/Person</div>
                  </div>
                </a>
              </div>

              <div className="swiper-slide">
                <a href="#" data-anim-child="img-right cover-light-1 delay-6" className="baseCard -type-1 -hover-image-scale">
                  <div className="baseCard__image ratio ratio-33:45 rounded-16">
                    <div className="-hover-image-scale__image">
                      <img src="img/cards/1/3.png" alt="image" className="img-ratio" />
                    </div>
                  </div>
                  <div className="baseCard__content d-flex flex-column justify-end text-center">
                    <h4 className="text-30 md:text-25 text-white">Snowsports</h4>
                    <div className="text-white mt-10">$280/Person</div>
                  </div>
                </a>
              </div>

              <div className="swiper-slide">
                <a href="#" data-anim-child="img-right cover-light-1 delay-8" className="baseCard -type-1 -hover-image-scale">
                  <div className="baseCard__image ratio ratio-33:45 rounded-16">
                    <div className="-hover-image-scale__image">
                      <img src="img/cards/1/4.png" alt="image" className="img-ratio" />
                    </div>
                  </div>
                  <div className="baseCard__content d-flex flex-column justify-end text-center">
                    <h4 className="text-30 md:text-25 text-white">Climbing</h4>
                    <div className="text-white mt-10">$280/Person</div>
                  </div>
                </a>
              </div>

              <div className="swiper-slide">
                <a href="#" data-anim-child="img-right cover-light-1 delay-10" className="baseCard -type-1 -hover-image-scale">
                  <div className="baseCard__image ratio ratio-33:45 rounded-16">
                    <div className="-hover-image-scale__image">
                      <img src="img/cards/1/5.png" alt="image" className="img-ratio" />
                    </div>
                  </div>
                  <div className="baseCard__content d-flex flex-column justify-end text-center">
                    <h4 className="text-30 md:text-25 text-white">Bike Rides</h4>
                    <div className="text-white mt-10">$280/Person</div>
                  </div>
                </a>
              </div>

              <div className="swiper-slide">
                <a href="#" data-anim-child="img-right cover-light-1 delay-12" className="baseCard -type-1 -hover-image-scale">
                  <div className="baseCard__image ratio ratio-33:45 rounded-16">
                    <div className="-hover-image-scale__image">
                      <img src="img/cards/1/6.png" alt="image" className="img-ratio" />
                    </div>
                  </div>
                  <div className="baseCard__content d-flex flex-column justify-end text-center">
                    <h4 className="text-30 md:text-25 text-white">Golf</h4>
                    <div className="text-white mt-10">$280/Person</div>
                  </div>
                </a>
              </div>

              <div className="swiper-slide">
                <a href="#" data-anim-child="img-right cover-light-1 delay-14" className="baseCard -type-1 -hover-image-scale">
                  <div className="baseCard__image ratio ratio-33:45 rounded-16">
                    <div className="-hover-image-scale__image">
                      <img src="img/cards/1/7.png" alt="image" className="img-ratio" />
                    </div>
                  </div>
                  <div className="baseCard__content d-flex flex-column justify-end text-center">
                    <h4 className="text-30 md:text-25 text-white">Snowsports</h4>
                    <div className="text-white mt-10">$280/Person</div>
                  </div>
                </a>
              </div>

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
