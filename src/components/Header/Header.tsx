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
                {/* <div className="desktopNav__item">
                  <a href="#"> Home</a>
                </div> */}

                <div className="desktopNav__item">
                  <a href="#"> About Us </a>
                </div>

                <div className="desktopNav__item">
                  <a href="#"> Accommodation  </a>
                </div>

                <div className="desktopNav__item">
                  <a href="#"> Activities & Experiences </a>
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
            <div className="desktopNav__item" style={{ padding: "8px 15px" }}>
              <a href="contact.html"> Contact Us </a>
            </div>
            <button className="button mr-30 lg:d-none">
              <i className="icon-phone mr-15"></i>
              +41-96567-7854
            </button>
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
            {/* <img src="img/general/logo-white.svg" alt="logo" /> */}
            <h1 style={{ color: "white" }}>Palash Kothi</h1>
          </div>

          {/* <button className="button text-white mr-30 lg:mr-0">
            EN <i className="icon-chevron-down ml-15"></i>
          </button> */}
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

          <div className="menuFullScreen-links">
            <div
              className="menuFullScreen-links__item "
            >
              <a href="/">
                HOME
              </a>
            </div>

            <div
              className="menuFullScreen-links__item"
            >
              <a href="#">
                About Us
              </a>
            </div>

            <div
              className="menuFullScreen-links__item"
            >
              <a href="#">
                Accommodation
              </a>
            </div>

            <div
              className="menuFullScreen-links__item"
            >
              <a href="#">
                Activities & Experiences
              </a>
            </div>


            <div className="menuFullScreen-links__item">
              <a href="contact.html"> Contact Us </a>
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
