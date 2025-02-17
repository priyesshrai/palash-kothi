import React from 'react'

export default function Footer() {
  return (
    <footer className="footer -type-1 -bg-1 relative text-white">
      <div className="footer__bg -type-1">
        <div className="bg-accent-2"></div>
        <div className="bg-accent-1"></div>
      </div>

      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            <div className="">
              <h4 className="text-30 fw-500 text-white">About Us</h4>

              <div className="text-white-60 text-15 lh-17 mt-60 md:mt-20">
                Duis vitae nulla at nisl finibus pharetra Nunc porttitor
                sapien quis euismod.
              </div>
            </div>

            <div className="">
              <h4 className="text-30 fw-500 text-white">Contact</h4>

              <div className="d-flex flex-column mt-60 md:mt-20">
                <div className="">
                  <a className="d-block text-15 text-white-60 lh-17" href="#">
                    PO Box 16122 Collins StreetWest Victoria 8007 Australia
                  </a>
                </div>
                <div className="mt-25">
                  <a className="d-block text-15 text-white-60" href="#">
                    info@swiss-resort.com
                  </a>
                </div>
                <div className="mt-10">
                  <a className="d-block text-15 text-white-60" href="#">
                    +61 3 8376 6284
                  </a>
                </div>
              </div>
            </div>

            <div className="">
              <h4 className="text-30 fw-500 text-white">Links</h4>

              <div className="row x-gap-50 y-gap-15">
                <div className="col-sm-6">
                  <div className="y-gap-15 text-15 text-white-60 mt-60 md:mt-20">
                    <a className="d-block" href="#"> About Hotel </a>

                    <a className="d-block" href="#"> Our Rooms </a>

                    <a className="d-block" href="#"> Restaurant &amp; Bar </a>

                    <a className="d-block" href="#"> Spa &amp; Wellness </a>

                    <a className="d-block" href="#"> Contact </a>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="y-gap-15 text-15 text-white-60 mt-60 md:mt-20">
                    <a className="d-block" href="#"> Privacy Policy </a>

                    <a className="d-block" href="#"> Terms &amp; Conditions </a>

                    <a className="d-block" href="#"> Get Directions </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <h4 className="text-30 fw-500 text-white">Newsletter Sign Up</h4>

              <p className="text-15 text-white-60 mt-60 md:mt-20">
                Sign up for our news, deals and special offers.
              </p>

              <div className="footer__newsletter mt-30">
                <input type="Email" placeholder="Your email address" />
                <button>
                  <i className="icon-arrow-right text-white text-20"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <div
            className="row y-gap-30 justify-between md:justify-center items-center"
          >
            <div className="col-sm-auto">
              <div className="text-15 text-center text-white-60">
                Copyright © 2025 by Wizards
              </div>
            </div>

            <div className="col-sm-auto">
              <div className="footer__bottom_center">
                <div className="d-flex justify-center">
                  {/* <img src="img/general/logo-white.svg" alt="logo" /> */}
                  <h1>PALASH KOTHI</h1>
                </div>
              </div>
            </div>

            <div className="col-sm-auto">
              <div className="row x-gap-25 y-gap-10 items-center justify-center">
                <div className="col-auto">
                  <a href="#" className="d-block text-white-60">
                    <i className="icon-facebook text-11"></i>
                  </a>
                </div>

                <div className="col-auto">
                  <a href="#" className="d-block text-white-60">
                    <i className="icon-twitter text-11"></i>
                  </a>
                </div>

                <div className="col-auto">
                  <a href="#" className="d-block text-white-60">
                    <i className="icon-instagram text-11"></i>
                  </a>
                </div>

                <div className="col-auto">
                  <a href="#" className="d-block text-white-60">
                    <i className="icon-linkedin text-11"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
