import React from 'react'

export default function Facilities() {
  return (
    <section data-anim-wrap className="relative layout-pt-lg layout-pb-lg">
        <div
          data-anim-child="slide-up delay-2"
          className="sectionBg -mx-60 bg-light-1 rounded-16"
        ></div>

        <div className="container">
          <div className="row justify-center text-center">
            <div data-anim-child="slide-up delay-4" className="col-auto">
              <div className="text-15 uppercase mb-30 sm:mb-10">OUR SERVICES</div>
              <h2 className="text-64 md:text-40">Hotel Facilities</h2>
            </div>
          </div>

          <div className="row y-gap-30 justify-between pt-100 sm:pt-50">
            <div
              data-anim-child="slide-up delay-3"
              className="col-lg-auto col-md-4 col-6"
            >
              <div className="iconCard -type-1 -hover-1">
                <div className="iconCard__icon text-50">
                  <div className="iconCard__icon__circle bg-white"></div>
                  <i className="icon-wifi"></i>
                </div>
                <h4 className="text-24 text-center mt-20">Wifi &amp; Internet</h4>
              </div>
            </div>

            <div
              data-anim-child="slide-up delay-4"
              className="col-lg-auto col-md-4 col-6"
            >
              <div className="iconCard -type-1 -hover-1">
                <div className="iconCard__icon text-50">
                  <div className="iconCard__icon__circle bg-white"></div>
                  <i className="icon-bus"></i>
                </div>
                <h4 className="text-24 text-center mt-20">Airport Transfer</h4>
              </div>
            </div>

            <div
              data-anim-child="slide-up delay-5"
              className="col-lg-auto col-md-4 col-6"
            >
              <div className="iconCard -type-1 -hover-1">
                <div className="iconCard__icon text-50">
                  <div className="iconCard__icon__circle bg-white"></div>
                  <i className="icon-tv"></i>
                </div>
                <h4 className="text-24 text-center mt-20">Smart TV</h4>
              </div>
            </div>

            <div
              data-anim-child="slide-up delay-6"
              className="col-lg-auto col-md-4 col-6"
            >
              <div className="iconCard -type-1 -hover-1">
                <div className="iconCard__icon text-50">
                  <div className="iconCard__icon__circle bg-white"></div>
                  <i className="icon-bed"></i>
                </div>
                <h4 className="text-24 text-center mt-20">Breakfast in Bed</h4>
              </div>
            </div>

            <div
              data-anim-child="slide-up delay-7"
              className="col-lg-auto col-md-4 col-6"
            >
              <div className="iconCard -type-1 -hover-1">
                <div className="iconCard__icon text-50">
                  <div className="iconCard__icon__circle bg-white"></div>
                  <i className="icon-laundry"></i>
                </div>
                <h4 className="text-24 text-center mt-20">Laundry Services</h4>
              </div>
            </div>

            <div
              data-anim-child="slide-up delay-8"
              className="col-lg-auto col-md-4 col-6"
            >
              <div className="iconCard -type-1 -hover-1">
                <div className="iconCard__icon text-50">
                  <div className="iconCard__icon__circle bg-white"></div>
                  <i className="icon-housekeeper"></i>
                </div>
                <h4 className="text-24 text-center mt-20">Housekeeper Services</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
