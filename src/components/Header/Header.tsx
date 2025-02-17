'use client'
export default function Header() {
  return (
    <>
    <header
        className="header -h-110 -mx-60 -blur -border-bottom-3 js-header"
        data-add-bg="bg-light-1"
        data-x="header"
        data-x-toggle="-is-menu-opened"
      >
        <div className="header__container">
          <div className="headerMobile__left">
            <button
              className="d-none lg:d-flex items-center js-menuFullScreen-toggle"
            >
              <i className="icon-menu text-9"></i>
              <div className="text-15 uppercase ml-30 sm:d-none">Menu</div>
            </button>

            <div className="lg:d-none">
              <div className="desktopNav">
                <div className="desktopNav__item">
                  <a href="#"> Home <i className="icon-chevron-down"></i> </a>

                  {/* <div className="desktopNavSubnav">
                    <div className="desktopNavSubnav__content">
                      <div className="desktopNavSubnav__item">
                        <a href="index.html">Home 01</a>
                      </div>

                      <div className="desktopNavSubnav__item">
                        <a href="home-2.html">Home 02</a>
                      </div>

                      <div className="desktopNavSubnav__item">
                        <a href="home-3.html">Home 03</a>
                      </div>

                      <div className="desktopNavSubnav__item">
                        <a href="home-4.html">Home 04</a>
                      </div>

                      <div className="desktopNavSubnav__item">
                        <a href="home-5.html">Home 05</a>
                      </div>

                      <div className="desktopNavSubnav__item">
                        <a href="home-6.html">Home 06</a>
                      </div>

                      <div className="desktopNavSubnav__item">
                        <a href="home-7.html">Home 07</a>
                      </div>

                      <div className="desktopNavSubnav__item">
                        <a href="home-8.html">Home 08</a>
                      </div>

                      <div className="desktopNavSubnav__item">
                        <a href="home-9.html">Home 09</a>
                      </div>

                      <div className="desktopNavSubnav__item">
                        <a href="home-10.html">Home 10</a>
                      </div>
                    </div>
                  </div> */}
                </div>

                <div className="desktopNav__item">
                  <a href="#"> Rooms <i className="icon-chevron-down"></i> </a>

                  {/* <div className="desktopNavSubnav">
                    <div className="desktopNavSubnav__content -col-3">
                      <div>
                        <div className="desktopNavSubnav__item">
                          <a href="rooms-list-1.html">Rooms List v1</a>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <a href="rooms-list-2.html">Rooms List v2</a>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <a href="rooms-list-3.html">Rooms List v3</a>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <a href="rooms-list-4.html">Rooms List v4</a>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <a href="rooms-list-5.html">Rooms List v5</a>
                        </div>
                      </div>

                      <div>
                        <div className="desktopNavSubnav__item">
                          <a href="rooms-single-1.html">Rooms Single v1</a>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <a href="rooms-single-2.html">Rooms Single v2</a>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <a href="rooms-single-3.html">Rooms Single v3</a>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <a href="rooms-single-4.html">Rooms Single v4</a>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <a href="rooms-single-5.html">Rooms Single v5</a>
                        </div>
                      </div>

                      <div>
                        <div className="desktopNavSubnav__item">
                          <a href="restaurant.html">Restaurant</a>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <a href="restaurant-single.html">Restaurant Single</a>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <a href="spa-wellness.html">Spa &amp; wellness</a>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <a href="meet-celebrate.html">Meet &amp; celebrate</a>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <a href="activities.html">Activities</a>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <a href="activities-single.html">Activities Single</a>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>

                <div className="desktopNav__item">
                  <a href="#"> Pages <i className="icon-chevron-down"></i> </a>


                  {/* <div className="desktopNavSubnav">
                    <div className="desktopNavSubnav__content">
                      <div className="desktopNavSubnav__item">
                        <a href="about.html">About</a>
                      </div>

                      <div className="desktopNavSubnav__item">
                        <a href="contact.html">Contact</a>
                      </div>

                      <div className="desktopNavSubnav__item">
                        <a href="booking.html">Booking</a>
                      </div>

                      <div className="desktopNavSubnav__item">
                        <a href="cart.html">Cart</a>
                      </div>

                      <div className="desktopNavSubnav__item">
                        <a href="checkout.html">Checkout</a>
                      </div>

                      <div className="desktopNavSubnav__item">
                        <a href="faq.html">FAQ</a>
                      </div>

                      <div className="desktopNavSubnav__item">
                        <a href="pricing.html">Pricing</a>
                      </div>

                      <div className="desktopNavSubnav__item">
                        <a href="terms.html">Terms</a>
                      </div>

                      <div className="desktopNavSubnav__item">
                        <a href="invoice.html">Invoice</a>
                      </div>

                      <div className="desktopNavSubnav__item">
                        <a href="404.html">404 page</a>
                      </div>
                    </div>
                  </div> */}
                </div>

                <div className="desktopNav__item">
                  <a href="#"> Blog <i className="icon-chevron-down"></i> </a>

                  {/* <div className="desktopNavSubnav">
                    <div className="desktopNavSubnav__content">
                      <div className="desktopNavSubnav__item">
                        <a href="blog-list-1.html">Blog list 1</a>
                      </div>

                      <div className="desktopNavSubnav__item">
                        <a href="blog-list-2.html">Blog list 2</a>
                      </div>

                      <div className="desktopNavSubnav__item">
                        <a href="blog-list-3.html">Blog list 3</a>
                      </div>

                      <div className="desktopNavSubnav__item">
                        <a href="blog-single.html">Blog single</a>
                      </div>
                    </div>
                  </div> */}
                </div>

                <div className="desktopNav__item">
                  <a href="contact.html"> Contact </a>
                </div>
              </div>
            </div>
          </div>

          <div className="header__center">
            <div className="header__logo">
              {/* <img src="img/general/logo-header-2.svg" alt="logo" /> */}
              <h1>Palash Kothi</h1>
            </div>
          </div>

          <div className="header__right d-flex items-center h-full">
            <button className="button mr-30 lg:d-none">
              <i className="icon-phone mr-15"></i>
              +41-96567-7854
            </button>

            {/* <button className="button mr-30 xl:mr-0">
              EN <i className="icon-chevron-down ml-15"></i>
            </button> */}

            <button className="button mr-30 xl:d-none">BOOK YOUR STAY</button>
          </div>
        </div>
      </header>

      <div className="menuFullScreen js-menuFullScreen">
      <div className="menuFullScreen__topMobile js-menuFullScreen-topMobile">
        <div className="d-flex items-center text-white js-menuFullScreen-toggle">
          <i className="icon-menu text-9"></i>
          <div className="text-15 uppercase ml-30 sm:d-none">Menu</div>
        </div>

        <div className="">
          <img src="img/general/logo-white.svg" alt="logo" />
        </div>

        <button className="button text-white mr-30 lg:mr-0">
          EN <i className="icon-chevron-down ml-15"></i>
        </button>
      </div>

      <div className="menuFullScreen__mobile__bg js-menuFullScreen-mobile-bg"></div>

      <div className="menuFullScreen__left">
        <div className="menuFullScreen__bg js-menuFullScreen-bg">
          <img src="img/menu/bg.png" alt="image" />
        </div>

        <button
          className="menuFullScreen__close js-menuFullScreen-toggle js-menuFullScreen-close-btn"
        >
          <span className="icon">
            <span></span>
            <span></span>
          </span>
          CLOSE
        </button>

        <div className="menuFullScreen-links js-menuFullScreen-links">
          <div
            className="menuFullScreen-links__item js-menuFullScreen-has-children"
          >
            <a href="#">
              HOME
              <i className="icon-arrow-right"></i>
              <i className="icon-chevron-right"></i>
            </a>

            <div className="menuFullScreen-links-subnav js-menuFullScreen-subnav">
              <div className="menuFullScreen-links-subnav__item">
                <a href="index.html">Home 1</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="home-2.html">Home 2</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="home-3.html">Home 3</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="home-4.html">Home 4</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="home-5.html">Home 5</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="home-6.html">Home 6</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="home-7.html">Home 7</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="home-8.html">Home 8</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="home-9.html">Home 9</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="home-10.html">Home 10</a>
              </div>
            </div>
          </div>

          <div
            className="menuFullScreen-links__item js-menuFullScreen-has-children"
          >
            <a href="#">
              ROOMS
              <i className="icon-arrow-right"></i>
              <i className="icon-chevron-right"></i>
            </a>

            <div className="menuFullScreen-links-subnav js-menuFullScreen-subnav">
              <div className="menuFullScreen-links-subnav__item">
                <a href="rooms-list-1.html">Rooms list 1</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="rooms-list-2.html">Rooms list 2</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="rooms-list-3.html">Rooms list 3</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="rooms-list-4.html">Rooms list 4</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="rooms-list-5.html">Rooms list 5</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="rooms-single-1.html">Rooms single 1</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="rooms-single-2.html">Rooms single 2</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="rooms-single-3.html">Rooms single 3</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="rooms-single-4.html">Rooms single 4</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="rooms-single-5.html">Rooms single 5</a>
              </div>
            </div>
          </div>

          <div
            className="menuFullScreen-links__item js-menuFullScreen-has-children"
          >
            <a href="#">
              BOOKING
              <i className="icon-arrow-right"></i>
              <i className="icon-chevron-right"></i>
            </a>

            <div className="menuFullScreen-links-subnav js-menuFullScreen-subnav">
              <div className="menuFullScreen-links-subnav__item">
                <a href="booking.html">Booking</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="cart.html">Cart</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="checkout.html">Checkout</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="restaurant.html">Restaurant</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="restaurant-single.html">Restaurant Single</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="spa-wellness.html">Spa &amp; wellness</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="meet-celebrate.html">Meet &amp; celebrate</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="activities.html">Activities</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="activities-single.html">Activities Single</a>
              </div>
            </div>
          </div>

          <div
            className="menuFullScreen-links__item js-menuFullScreen-has-children"
          >
            <a href="#">
              PAGES
              <i className="icon-arrow-right"></i>
              <i className="icon-chevron-right"></i>
            </a>

            <div className="menuFullScreen-links-subnav js-menuFullScreen-subnav">
              <div className="menuFullScreen-links-subnav__item">
                <a href="about.html">About</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="contact.html">Contact</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="faq.html">FAQ</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="pricing.html">Pricing</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="terms.html">Terms</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="404.html">404 page</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="invoice.html">Invoice</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="ui-elements.html">UI Elements</a>
              </div>
            </div>
          </div>

          <div
            className="menuFullScreen-links__item js-menuFullScreen-has-children"
          >
            <a href="#">
              BLOG
              <i className="icon-arrow-right"></i>
              <i className="icon-chevron-right"></i>
            </a>

            <div className="menuFullScreen-links-subnav js-menuFullScreen-subnav">
              <div className="menuFullScreen-links-subnav__item">
                <a href="blog-list-1.html">Blog list 1</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="blog-list-2.html">Blog list 2</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="blog-list-3.html">Blog list 3</a>
              </div>

              <div className="menuFullScreen-links-subnav__item">
                <a href="blog-single.html">Blog single</a>
              </div>
            </div>
          </div>

          <div className="menuFullScreen-links__item">
            <a href="contact.html"> CONTACT </a>
          </div>
        </div>
      </div>

      <div className="menuFullScreen__right js-menuFullScreen-right">
        <div className="text-center">
          <div className="mb-100">
            <img src="img/general/logo-black.svg" alt="image" />
          </div>

          <div className="text-sec lh-11 fw-500 text-40">
            Hotel & Spa Swiss<br />
            Resort
          </div>

          <div className="mt-40">
            <div className="text-30 text-sec fw-500">Location</div>
            <div className="mt-10">
              PO Box 16122 Collins Street West<br />
              Victoria 8007 Australia
            </div>
          </div>

          <div className="mt-40">
            <div className="text-30 text-sec fw-500">Phone Support</div>
            <div className="mt-10">
              <div>
                <a href="#">+ 01 345 647 745</a>
              </div>
              <div>
                <a href="#">info@swiss-resort.com</a>
              </div>
            </div>
          </div>

          <div className="mt-40">
            <div className="text-30 text-sec fw-500">Connect With Us</div>
            <div className="mt-10">
              <a href="#">+ 01 345 647 745</a>
            </div>
          </div>
        </div>
      </div>

      <div className="menuFullScreen__bottomMobile js-menuFullScreen-buttomMobile">
        <button className="button rounded-200 w-1/1 py-20 -light-1 bg-accent-2">
          BOOK YOUR STAY
        </button>

        <a href="#" className="d-flex items-center mt-40">
          <i className="icon-phone mr-10"></i>
          <span>+41-96567-7854</span>
        </a>

        <a href="#" className="d-flex mt-20">
          <i className="icon-map mr-10"></i>
          <span> PO Box 16122 Collins Street West, Australia </span>
        </a>

        <a href="#" className="d-flex items-center mt-20">
          <i className="icon-mail mr-10"></i>
          <span>info@swiss-resort.com</span>
        </a>
      </div>
    </div>
    </>
  )
}
