import React from 'react';
import styles from './Hero.module.css'; // Ensure you have a CSS module for styling

const Hero = () => {
  return (
    <div className={styles.hero}>
      {/* <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome to Palash Kothi</h1>
        <p className={styles.heroSubtitle}>Experience luxury like never before</p>
      </div> */}
      <section data-anim-wrap className="hero -type-2">
        <div
          data-anim-child="img-right cover-white"
          className="hero__bg bg-accent-2"
        ></div>

        <div className="row">
          <div className="col-12">
            <div className="hero__content">
              <div className="container">
                <h1
                  data-anim-child="slide-up delay-3"
                  className="hero__title text-center"
                >
                 Welcome to Palash Kothi
                </h1>
                <p data-anim-child="slide-up delay-4" className={styles.heroSubtitle}>Experience luxury like never before</p>
                <div
                  data-anim-child="slide-up delay-4"
                  className="hero__filterButtonMobile"
                >
                  <button
                    className="filterButtonMobile button -accent-1 bg-light-1 col-12 mt-30"
                  >
                    Book your Stay
                  </button>
                </div>

                <div data-anim-child="slide-up delay-5" className="hero__filter">
                  <div className="searchForm -type-1 bg-white rounded-200">
                    <div className="searchForm__form">
                      <div
                        className="searchFormItem js-select-control js-form-dd js-calendar"
                      >
                        <div
                          className="searchFormItem__button"
                          data-x-click="calendar"
                        >
                          <div>
                            <span className="js-first-date"
                              >Check In - Check Out</span>
                            <span className="js-last-date"></span>
                          </div>
                          <i className="icon-arrow-down ml-10"></i>
                        </div>

                        <div
                          className="searchFormItemDropdown -calendar"
                          data-x="calendar"
                          data-x-toggle="is-active"
                        >
                          <div className="searchFormItemDropdown__container">
                            <div
                              className="searchMenu-date -searchForm js-form-dd js-calendar-el"
                            >
                              <div
                                className="searchMenu-date__field shadow-2"
                                data-x-dd="searchMenu-date"
                                data-x-dd-toggle="-is-active"
                              >
                                <div className="rounded-4">
                                  <div
                                    className="elCalendar js-calendar-el-calendar"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="searchFormItem js-select-control js-form-dd">
                        <div
                          className="searchFormItem__button"
                          data-x-click="rooms"
                        >
                          <div className="js-select-control-chosen">Rooms</div>
                          <i className="icon-arrow-down ml-10"></i>
                        </div>
                        <div
                          className="searchFormItemDropdown -counter"
                          data-x="rooms"
                          data-x-toggle="is-active"
                        >
                          <div className="searchFormItemDropdown__container">
                            <div className="searchFormItemDropdown__list">
                              <div
                                className="searchFormItemDropdown__item js-select-control-counter"
                              >
                                <div className="fw-500 js-search-title">Rooms</div>
                                <div className="d-flex fw-500 js-search-counter">
                                  <div
                                    className="cursor-pointer size-40 flex-center js-remove"
                                  >
                                    <i className="custom-icon-minus">
                                      <span></span>
                                    </i>
                                  </div>

                                  <div className="size-40 flex-center js-number">
                                    0
                                  </div>

                                  <div
                                    className="cursor-pointer size-40 flex-center js-add"
                                  >
                                    <i className="custom-icon-plus">
                                      <span></span>
                                      <span></span>
                                    </i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="searchFormItem js-select-control js-form-dd">
                        <div
                          className="searchFormItem__button"
                          data-x-click="guests"
                        >
                          <div className="js-select-control-chosen">Guests</div>
                          <i className="icon-arrow-down ml-10"></i>
                        </div>
                        <div
                          className="searchFormItemDropdown -counter"
                          data-x="guests"
                          data-x-toggle="is-active"
                        >
                          <div className="searchFormItemDropdown__container">
                            <div className="searchFormItemDropdown__list">
                              <div
                                className="searchFormItemDropdown__item js-select-control-counter"
                              >
                                <div className="fw-500 js-search-title">Adults</div>
                                <div className="d-flex fw-500 js-search-counter">
                                  <div
                                    className="cursor-pointer size-40 flex-center js-remove"
                                  >
                                    <i className="custom-icon-minus">
                                      <span></span>
                                    </i>
                                  </div>

                                  <div className="size-40 flex-center js-number">
                                    0
                                  </div>

                                  <div
                                    className="cursor-pointer size-40 flex-center js-add"
                                  >
                                    <i className="custom-icon-plus">
                                      <span></span>
                                      <span></span>
                                    </i>
                                  </div>
                                </div>
                              </div>

                              <div
                                className="searchFormItemDropdown__item js-select-control-counter"
                              >
                                <div className="fw-500 js-search-title">
                                  Children
                                </div>
                                <div className="d-flex fw-500 js-search-counter">
                                  <div
                                    className="cursor-pointer size-40 flex-center js-remove"
                                  >
                                    <i className="custom-icon-minus">
                                      <span></span>
                                    </i>
                                  </div>

                                  <div className="size-40 flex-center js-number">
                                    0
                                  </div>

                                  <div
                                    className="cursor-pointer size-40 flex-center js-add"
                                  >
                                    <i className="custom-icon-plus">
                                      <span></span>
                                      <span></span>
                                    </i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="searchForm__button">
                      <button
                        className="button -accent-2 bg-accent-1 text-white px-30 rounded-200"
                      >
                        Check Availability
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div data-anim-child="slide-up delay-7" className="hero-slider">
                <div
                  className="hero-slider__images relative overflow-hidden js-section-slider"
                  data-gap="0"
                  data-slider-cols="xl-1 lg-1 md-1 sm-1 base-1"
                  data-pagination="js-slider1-pagination"
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img
                        src="img/hero/2/1.png"
                        alt="image"
                        className="hero-slider__image rounded-16"
                      />
                    </div>

                    <div className="swiper-slide">
                      <img
                        src="img/hero/2/2.png"
                        alt="image"
                        className="hero-slider__image rounded-16"
                      />
                    </div>

                    <div className="swiper-slide">
                      <img
                        src="img/hero/2/3.png"
                        alt="image"
                        className="hero-slider__image rounded-16"
                      />
                    </div>

                    <div className="swiper-slide">
                      <img
                        src="img/hero/2/4.png"
                        alt="image"
                        className="hero-slider__image rounded-16"
                      />
                    </div>
                  </div>

                  <div className="hero-slider__nav">
                    <button className="size-80 flex-center rounded-full js-prev">
                      <i className="icon-arrow-left text-24 text-white"></i>
                    </button>

                    <button className="size-80 flex-center rounded-full js-next">
                      <i className="icon-arrow-right text-24 text-white"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__arrow">
          <button className="size-70 flex-center rounded-full">
            <i className="icon-arrow-down text-24"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
