import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Slider from "react-slick";
import { PrevBtn, NextBtn } from '../components/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

var settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevBtn />,
  nextArrow: <NextBtn />
};

function Banner({ banners, api }) {
  return (
    <>
      <section id="banner-slide-index" class="my-5">
        <div class="container">
          {/* <div id="carouselbanner-index" class="carousel slide"> */}
          {/* <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselbanner-index" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselbanner-index" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselbanner-index" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div> */}
          {/* <div class="carousel-inner"> */}
          <Slider {...settings} className='banner'>
            {banners?.filter(banner => banner.redirect == 1).map(banner => {
              return (
                <div class="carousel-item">
                  {banner.link.trim() != ''
                    ?
                    <a href={banner.link} target='_blank'><img class="img-banner-index" src={`${api}/img/${banner.img}`} alt="..." /></a>
                    :
                    <img class="img-banner-index" src={`${api}/img/${banner.img}`} alt="..." />
                  }
                </div>
              )
            })}
          </Slider>
          {/* </div> */}
          {/* </div> */}
        </div>

      </section>
    </>
  )
}

export default Banner