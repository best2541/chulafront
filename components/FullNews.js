import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Slider from "react-slick";
import { PrevBtn, NextBtn } from '../components/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

var settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevBtn />,
  nextArrow: <NextBtn />
};

function FullNews({ api, data }) {
  return (
    <section id="show-news" class="my-5">
      <div class="container">
        <div class="box-text-headline">
          <p class="text-headline">
            ข่าวสาร
          </p>
        </div>
        <div class="news-index">
          <div class="boxslide-news-index">
            <div id="carouselbanner-news-index" class="carousel slide">
              <div class="">
                <Slider {...settings}>
                  <div class="carousel-item active">
                    <img class="img-bannernews-index d-block w-100" src={`${api}/img/${data[0]?.img1}`} alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img class="img-bannernews-index d-block w-100" src={`${api}/img/${data[0]?.img2}`} alt="..." />
                  </div>
                </Slider>
              </div>
            </div>
          </div>

          <p class="texthead-news-index mt-4">
            {data[0]?.title}
          </p>

          <p class="">
            {data[0]?.detail}
          </p>
        </div>
      </div>
    </section>
  )
}

export default FullNews