'use client'
import React from 'react'

export default function Rooms() {
    const roomData = [
        {
            id: 1,
            image: "/img/cards/rooms/room-01.jpg",
            price: "$499 / NIGHT",
            title: "Luxury Suite",
            guest: "2 GUEST",
            bed: "1 BED",
            bath: "1 BATH",
            uri: ""
        },
        {
            id: 2,
            image: "/img/cards/rooms/room-02.jpg",
            price: "$499 / NIGHT",
            title: "Double Room",
            guest: "2 GUEST",
            bed: "1 BED",
            bath: "1 BATH",
            uri: ""
        },
        {
            id: 3,
            image: "/img/cards/rooms/room-03.jpg",
            price: "$499 / NIGHT",
            title: "Deluxe Suite",
            guest: "2 GUEST",
            bed: "1 BED",
            bath: "1 BATH",
            uri: ""
        },
        {
            id: 4,
            image: "/img/cards/rooms/room-04.jpg",
            price: "$499 / NIGHT",
            title: " Luxury Suite",
            guest: "2 GUEST",
            bed: "1 BED",
            bath: "1 BATH",
            uri: ""
        },
        {
            id: 5,
            image: "/img/cards/rooms/room-05.jpg",
            price: "$499 / NIGHT",
            title: "Double Room",
            guest: "2 GUEST",
            bed: "1 BED",
            bath: "1 BATH",
            uri: ""
        },
    ]
    return (
        <section className="layout-pt-lg">
            <div data-anim-wrap className="container">
                <div
                    data-anim-child="slide-up delay-2"
                    className="row y-gap-30 justify-between items-end"
                >
                    <div className="col-auto">
                        <div className="text-15 uppercase mb-30 sm:mb-10">EXPLORE</div>
                        <h2 className="text-64 md:text-40 lh-065">Rooms & Suites</h2>
                    </div>

                    <div className="col-auto">
                        <button className="button -type-1">
                            <i className="-icon icon-arrow-circle-right text-30"></i>
                            VIEW ALL MORE
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div
                        className="overflow-hidden mt-100 sm:mt-50 js-section-slider"
                        data-gap="30"
                        data-slider-cols="xl-3 lg-3 md-2 sm-1 base-1"
                        data-nav-prev="js-slider2-prev"
                        data-nav-next="js-slider2-next"
                    >
                        <div className="swiper-wrapper">

                            {
                                roomData.map((room) => (
                                    <div className="swiper-slide" key={room.id}>
                                        <a
                                            href={room.uri}
                                            className="roomCard -type-2 -hover-button-center"
                                        >
                                            <div data-anim-child="img-right cover-white delay-2">
                                                <div
                                                    className="roomCard__image ratio ratio-45:54 -hover-button-center__wrap"
                                                >
                                                    <img
                                                        src={room.image}
                                                        alt="image"
                                                        className="img-ratio rounded-16"
                                                    />

                                                    <div
                                                        className="roomCard__price text-15 fw-500 bg-white text-accent-1"
                                                    >
                                                        {room.price}
                                                    </div>

                                                    <div
                                                        className="-hover-button-center__button flex-center size-130 rounded-full bg-accent-1-50 blur-1 border-white-10"
                                                    >
                                                        <span className="text-15 fw-500 text-white"
                                                        >BOOK NOW</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                data-anim-child="slide-up delay-3"
                                                className="roomCard__content mt-30"
                                            >
                                                <div className="d-flex justify-between items-end">
                                                    <h3 className="roomCard__title lh-065 text-40 md:text-24">
                                                        {room.title}
                                                    </h3>
                                                </div>

                                                <div className="row x-gap-30 y-gap-10 pt-30">

                                                    <div className="col-auto">
                                                        <div className="d-flex items-center text-accent-1">
                                                            <i className="icon-guest text-20 mr-10"></i>
                                                            {room.guest}
                                                        </div>
                                                    </div>

                                                    <div className="col-auto">
                                                        <div className="d-flex items-center text-accent-1">
                                                            <i className="icon-bed-2 text-20 mr-10"></i>
                                                            {room.bed}
                                                        </div>
                                                    </div>

                                                    <div className="col-auto">
                                                        <div className="d-flex items-center text-accent-1">
                                                            <i className="icon-bath text-20 mr-10"></i>
                                                            {room.bath}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="navAbsolute -type-2">
                        <button
                            className="button -outline-accent-1 size-80 md:size-60 flex-center rounded-full js-slider2-prev"
                        >
                            <i className="icon-arrow-left text-24 md:text-19"></i>
                        </button>

                        <button
                            className="button -outline-accent-1 size-80 md:size-60 flex-center rounded-full js-slider2-next"
                        >
                            <i className="icon-arrow-right text-24 md:text-19"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
