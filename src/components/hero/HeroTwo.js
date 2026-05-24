import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Link from "next/link";
import { HeroTwoData } from '@/data/hero';

// brands slider setting
const setting = {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    spaceBetween: 30,
    pagination: {
        el: "#main-slider-pagination",
        type: "bullets",
        clickable: true
    },
    navigation: {
        nextEl: "#main-slider__swiper-button-next",
        prevEl: "#main-slider__swiper-button-prev"
    },
    autoplay: {
        delay: 5000
    },
};

const HeroTwo = () => {

    const [isLoop, setIsLoop] = useState(false);
    useEffect(() => {
        setIsLoop(true);

        if ($(".video-popup").length) {
            $(".video-popup").magnificPopup({
              type: "iframe",
              mainClass: "mfp-fade",
              removalDelay: 160,
              preloader: true,
        
              fixedContentPos: false
            });
          }
          
    }, []);

    return (
        <>
            <section className="main-slider main-slider-two">
                <Swiper {...setting}
                    loop={isLoop}
                    modules={[Pagination, Navigation]} 
                    className="swiper-container thm-swiper__slider">
                    <div className="swiper-wrapper">
                        {HeroTwoData.map((item, i) => (
                        <SwiperSlide key={i} className="swiper-slide">
                            <div className="image-layer" style={{backgroundImage: `url(${item.bg_img})`}}></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-7">
                                        <div className="main-slider__content">
                                            <h2>{item.heading}</h2>
                                            <p>{item.description}</p>
                                            <div className="main-slider__bottom">
                                                <Link href={item.button_url} className="thm-btn">{item.button_label}</Link>
                                                <div className="main-slider__video-link">
                                                    <a href={item.video_url}
                                                        className="video-popup">
                                                        <div className="main-slider__video-icon">
                                                            <span className="fa fa-play"></span>
                                                            <i className="ripple"></i>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        ))}
                    </div>

                    <div className="main-slider__nav">
                        <div className="swiper-button-prev" id="main-slider__swiper-button-next">
                            <i className="icon-right icon-left-arrow"></i>
                        </div>
                        <div className="swiper-button-next" id="main-slider__swiper-button-prev">
                            <i className="icon-right"></i>
                        </div>
                    </div>

                </Swiper>
            </section>
        </>
    )
}

export default HeroTwo;