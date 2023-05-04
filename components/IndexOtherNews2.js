import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

var settings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
};

function IndexOtherNews2({ api, datas }) {
  return (
    <section id="other-news" class="mt-5 py-5">
      <div class="container">
        <div class="box-text-headline">
          <p class="text-headline">
            ข่าวอื่นๆ เพิ่มเติม
          </p>
        </div>
        {datas?.length > 0 &&
          <Slider {...settings}>
            {datas?.map(data => (
              <div class="item">
                <div class="box-main-news">
                <img src={`${api}/img/${data.img1}`} alt="" style={{ width: '100%' }} />
                  <div class="box-text-main-news">
                    <p class="text-calendar">
                      <span>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.75 16.5C3.3375 16.5 2.98425 16.3533 2.69025 16.0598C2.39675 15.7658 2.25 15.4125 2.25 15V4.5C2.25 4.0875 2.39675 3.7345 2.69025 3.441C2.98425 3.147 3.3375 3 3.75 3H4.5V1.5H6V3H12V1.5H13.5V3H14.25C14.6625 3 15.0158 3.147 15.3098 3.441C15.6033 3.7345 15.75 4.0875 15.75 4.5V15C15.75 15.4125 15.6033 15.7658 15.3098 16.0598C15.0158 16.3533 14.6625 16.5 14.25 16.5H3.75ZM3.75 15H14.25V7.5H3.75V15ZM3.75 6H14.25V4.5H3.75V6ZM9 10.5C8.7875 10.5 8.6095 10.428 8.466 10.284C8.322 10.1405 8.25 9.9625 8.25 9.75C8.25 9.5375 8.322 9.35925 8.466 9.21525C8.6095 9.07175 8.7875 9 9 9C9.2125 9 9.39075 9.07175 9.53475 9.21525C9.67825 9.35925 9.75 9.5375 9.75 9.75C9.75 9.9625 9.67825 10.1405 9.53475 10.284C9.39075 10.428 9.2125 10.5 9 10.5ZM6 10.5C5.7875 10.5 5.60925 10.428 5.46525 10.284C5.32175 10.1405 5.25 9.9625 5.25 9.75C5.25 9.5375 5.32175 9.35925 5.46525 9.21525C5.60925 9.07175 5.7875 9 6 9C6.2125 9 6.39075 9.07175 6.53475 9.21525C6.67825 9.35925 6.75 9.5375 6.75 9.75C6.75 9.9625 6.67825 10.1405 6.53475 10.284C6.39075 10.428 6.2125 10.5 6 10.5ZM12 10.5C11.7875 10.5 11.6095 10.428 11.466 10.284C11.322 10.1405 11.25 9.9625 11.25 9.75C11.25 9.5375 11.322 9.35925 11.466 9.21525C11.6095 9.07175 11.7875 9 12 9C12.2125 9 12.3905 9.07175 12.534 9.21525C12.678 9.35925 12.75 9.5375 12.75 9.75C12.75 9.9625 12.678 10.1405 12.534 10.284C12.3905 10.428 12.2125 10.5 12 10.5ZM9 13.5C8.7875 13.5 8.6095 13.428 8.466 13.284C8.322 13.1405 8.25 12.9625 8.25 12.75C8.25 12.5375 8.322 12.3595 8.466 12.216C8.6095 12.072 8.7875 12 9 12C9.2125 12 9.39075 12.072 9.53475 12.216C9.67825 12.3595 9.75 12.5375 9.75 12.75C9.75 12.9625 9.67825 13.1405 9.53475 13.284C9.39075 13.428 9.2125 13.5 9 13.5ZM6 13.5C5.7875 13.5 5.60925 13.428 5.46525 13.284C5.32175 13.1405 5.25 12.9625 5.25 12.75C5.25 12.5375 5.32175 12.3595 5.46525 12.216C5.60925 12.072 5.7875 12 6 12C6.2125 12 6.39075 12.072 6.53475 12.216C6.67825 12.3595 6.75 12.5375 6.75 12.75C6.75 12.9625 6.67825 13.1405 6.53475 13.284C6.39075 13.428 6.2125 13.5 6 13.5ZM12 13.5C11.7875 13.5 11.6095 13.428 11.466 13.284C11.322 13.1405 11.25 12.9625 11.25 12.75C11.25 12.5375 11.322 12.3595 11.466 12.216C11.6095 12.072 11.7875 12 12 12C12.2125 12 12.3905 12.072 12.534 12.216C12.678 12.3595 12.75 12.5375 12.75 12.75C12.75 12.9625 12.678 13.1405 12.534 13.284C12.3905 13.428 12.2125 13.5 12 13.5Z" fill="#A8A8A8" />
                        </svg>
                      </span>
                      {new Date(data.createdAt).toLocaleDateString('th')}
                    </p>
                    <p class="txt-item">{data.title}</p>
                    <a class="btn btn-readmore-boxmain w-100" href={`/news/${data.id}`} target='_blank'>
                      อ่านเพิ่มเติม
                    </a>
                  </div>
                </div>
              </div>
            ))}

          </Slider>
        }
      </div>
      {/* <div class="box-howto owl-carousel owl-theme my-5">
            <div class="item">
              <div class="box-main-news">
                <img src="../images/index/news1.png" alt="" />
                <div class="box-text-main-news">
                  <p class="text-calendar">
                    <span>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.75 16.5C3.3375 16.5 2.98425 16.3533 2.69025 16.0598C2.39675 15.7658 2.25 15.4125 2.25 15V4.5C2.25 4.0875 2.39675 3.7345 2.69025 3.441C2.98425 3.147 3.3375 3 3.75 3H4.5V1.5H6V3H12V1.5H13.5V3H14.25C14.6625 3 15.0158 3.147 15.3098 3.441C15.6033 3.7345 15.75 4.0875 15.75 4.5V15C15.75 15.4125 15.6033 15.7658 15.3098 16.0598C15.0158 16.3533 14.6625 16.5 14.25 16.5H3.75ZM3.75 15H14.25V7.5H3.75V15ZM3.75 6H14.25V4.5H3.75V6ZM9 10.5C8.7875 10.5 8.6095 10.428 8.466 10.284C8.322 10.1405 8.25 9.9625 8.25 9.75C8.25 9.5375 8.322 9.35925 8.466 9.21525C8.6095 9.07175 8.7875 9 9 9C9.2125 9 9.39075 9.07175 9.53475 9.21525C9.67825 9.35925 9.75 9.5375 9.75 9.75C9.75 9.9625 9.67825 10.1405 9.53475 10.284C9.39075 10.428 9.2125 10.5 9 10.5ZM6 10.5C5.7875 10.5 5.60925 10.428 5.46525 10.284C5.32175 10.1405 5.25 9.9625 5.25 9.75C5.25 9.5375 5.32175 9.35925 5.46525 9.21525C5.60925 9.07175 5.7875 9 6 9C6.2125 9 6.39075 9.07175 6.53475 9.21525C6.67825 9.35925 6.75 9.5375 6.75 9.75C6.75 9.9625 6.67825 10.1405 6.53475 10.284C6.39075 10.428 6.2125 10.5 6 10.5ZM12 10.5C11.7875 10.5 11.6095 10.428 11.466 10.284C11.322 10.1405 11.25 9.9625 11.25 9.75C11.25 9.5375 11.322 9.35925 11.466 9.21525C11.6095 9.07175 11.7875 9 12 9C12.2125 9 12.3905 9.07175 12.534 9.21525C12.678 9.35925 12.75 9.5375 12.75 9.75C12.75 9.9625 12.678 10.1405 12.534 10.284C12.3905 10.428 12.2125 10.5 12 10.5ZM9 13.5C8.7875 13.5 8.6095 13.428 8.466 13.284C8.322 13.1405 8.25 12.9625 8.25 12.75C8.25 12.5375 8.322 12.3595 8.466 12.216C8.6095 12.072 8.7875 12 9 12C9.2125 12 9.39075 12.072 9.53475 12.216C9.67825 12.3595 9.75 12.5375 9.75 12.75C9.75 12.9625 9.67825 13.1405 9.53475 13.284C9.39075 13.428 9.2125 13.5 9 13.5ZM6 13.5C5.7875 13.5 5.60925 13.428 5.46525 13.284C5.32175 13.1405 5.25 12.9625 5.25 12.75C5.25 12.5375 5.32175 12.3595 5.46525 12.216C5.60925 12.072 5.7875 12 6 12C6.2125 12 6.39075 12.072 6.53475 12.216C6.67825 12.3595 6.75 12.5375 6.75 12.75C6.75 12.9625 6.67825 13.1405 6.53475 13.284C6.39075 13.428 6.2125 13.5 6 13.5ZM12 13.5C11.7875 13.5 11.6095 13.428 11.466 13.284C11.322 13.1405 11.25 12.9625 11.25 12.75C11.25 12.5375 11.322 12.3595 11.466 12.216C11.6095 12.072 11.7875 12 12 12C12.2125 12 12.3905 12.072 12.534 12.216C12.678 12.3595 12.75 12.5375 12.75 12.75C12.75 12.9625 12.678 13.1405 12.534 13.284C12.3905 13.428 12.2125 13.5 12 13.5Z" fill="#A8A8A8" />
                      </svg>
                    </span>
                    1/3/23
                  </p>
                  <p class="txt-item">หลักสูตรสหสาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม บัณฑิตวิทยาลัย จุฬาฯ ได้เข้าร่วมงาน “Chula Sustainability Fest 2022”</p>
                  <a class="btn btn-readmore-boxmain w-100" href={`/news/1`} target='_blank'>
                    อ่านเพิ่มเติม
                  </a>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="box-main-news">
                <img src="../images/index/news2.png" alt="" />
                <div class="box-text-main-news">
                  <p class="text-calendar">
                    <span>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.75 16.5C3.3375 16.5 2.98425 16.3533 2.69025 16.0598C2.39675 15.7658 2.25 15.4125 2.25 15V4.5C2.25 4.0875 2.39675 3.7345 2.69025 3.441C2.98425 3.147 3.3375 3 3.75 3H4.5V1.5H6V3H12V1.5H13.5V3H14.25C14.6625 3 15.0158 3.147 15.3098 3.441C15.6033 3.7345 15.75 4.0875 15.75 4.5V15C15.75 15.4125 15.6033 15.7658 15.3098 16.0598C15.0158 16.3533 14.6625 16.5 14.25 16.5H3.75ZM3.75 15H14.25V7.5H3.75V15ZM3.75 6H14.25V4.5H3.75V6ZM9 10.5C8.7875 10.5 8.6095 10.428 8.466 10.284C8.322 10.1405 8.25 9.9625 8.25 9.75C8.25 9.5375 8.322 9.35925 8.466 9.21525C8.6095 9.07175 8.7875 9 9 9C9.2125 9 9.39075 9.07175 9.53475 9.21525C9.67825 9.35925 9.75 9.5375 9.75 9.75C9.75 9.9625 9.67825 10.1405 9.53475 10.284C9.39075 10.428 9.2125 10.5 9 10.5ZM6 10.5C5.7875 10.5 5.60925 10.428 5.46525 10.284C5.32175 10.1405 5.25 9.9625 5.25 9.75C5.25 9.5375 5.32175 9.35925 5.46525 9.21525C5.60925 9.07175 5.7875 9 6 9C6.2125 9 6.39075 9.07175 6.53475 9.21525C6.67825 9.35925 6.75 9.5375 6.75 9.75C6.75 9.9625 6.67825 10.1405 6.53475 10.284C6.39075 10.428 6.2125 10.5 6 10.5ZM12 10.5C11.7875 10.5 11.6095 10.428 11.466 10.284C11.322 10.1405 11.25 9.9625 11.25 9.75C11.25 9.5375 11.322 9.35925 11.466 9.21525C11.6095 9.07175 11.7875 9 12 9C12.2125 9 12.3905 9.07175 12.534 9.21525C12.678 9.35925 12.75 9.5375 12.75 9.75C12.75 9.9625 12.678 10.1405 12.534 10.284C12.3905 10.428 12.2125 10.5 12 10.5ZM9 13.5C8.7875 13.5 8.6095 13.428 8.466 13.284C8.322 13.1405 8.25 12.9625 8.25 12.75C8.25 12.5375 8.322 12.3595 8.466 12.216C8.6095 12.072 8.7875 12 9 12C9.2125 12 9.39075 12.072 9.53475 12.216C9.67825 12.3595 9.75 12.5375 9.75 12.75C9.75 12.9625 9.67825 13.1405 9.53475 13.284C9.39075 13.428 9.2125 13.5 9 13.5ZM6 13.5C5.7875 13.5 5.60925 13.428 5.46525 13.284C5.32175 13.1405 5.25 12.9625 5.25 12.75C5.25 12.5375 5.32175 12.3595 5.46525 12.216C5.60925 12.072 5.7875 12 6 12C6.2125 12 6.39075 12.072 6.53475 12.216C6.67825 12.3595 6.75 12.5375 6.75 12.75C6.75 12.9625 6.67825 13.1405 6.53475 13.284C6.39075 13.428 6.2125 13.5 6 13.5ZM12 13.5C11.7875 13.5 11.6095 13.428 11.466 13.284C11.322 13.1405 11.25 12.9625 11.25 12.75C11.25 12.5375 11.322 12.3595 11.466 12.216C11.6095 12.072 11.7875 12 12 12C12.2125 12 12.3905 12.072 12.534 12.216C12.678 12.3595 12.75 12.5375 12.75 12.75C12.75 12.9625 12.678 13.1405 12.534 13.284C12.3905 13.428 12.2125 13.5 12 13.5Z" fill="#A8A8A8" />
                      </svg>
                    </span>
                    1/3/23
                  </p>
                  <p class="txt-item">หลักสูตรสหสาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม บัณฑิตวิทยาลัย จุฬาฯ ได้เข้าร่วมงาน “Chula Sustainability Fest 2022”</p>
                  <a class="btn btn-readmore-boxmain w-100" href={`/news/1`} target='_blank'>
                    อ่านเพิ่มเติม
                  </a>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="box-main-news">
                <img src="../images/index/news3.png" alt="" />
                <div class="box-text-main-news">
                  <p class="text-calendar">
                    <span>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.75 16.5C3.3375 16.5 2.98425 16.3533 2.69025 16.0598C2.39675 15.7658 2.25 15.4125 2.25 15V4.5C2.25 4.0875 2.39675 3.7345 2.69025 3.441C2.98425 3.147 3.3375 3 3.75 3H4.5V1.5H6V3H12V1.5H13.5V3H14.25C14.6625 3 15.0158 3.147 15.3098 3.441C15.6033 3.7345 15.75 4.0875 15.75 4.5V15C15.75 15.4125 15.6033 15.7658 15.3098 16.0598C15.0158 16.3533 14.6625 16.5 14.25 16.5H3.75ZM3.75 15H14.25V7.5H3.75V15ZM3.75 6H14.25V4.5H3.75V6ZM9 10.5C8.7875 10.5 8.6095 10.428 8.466 10.284C8.322 10.1405 8.25 9.9625 8.25 9.75C8.25 9.5375 8.322 9.35925 8.466 9.21525C8.6095 9.07175 8.7875 9 9 9C9.2125 9 9.39075 9.07175 9.53475 9.21525C9.67825 9.35925 9.75 9.5375 9.75 9.75C9.75 9.9625 9.67825 10.1405 9.53475 10.284C9.39075 10.428 9.2125 10.5 9 10.5ZM6 10.5C5.7875 10.5 5.60925 10.428 5.46525 10.284C5.32175 10.1405 5.25 9.9625 5.25 9.75C5.25 9.5375 5.32175 9.35925 5.46525 9.21525C5.60925 9.07175 5.7875 9 6 9C6.2125 9 6.39075 9.07175 6.53475 9.21525C6.67825 9.35925 6.75 9.5375 6.75 9.75C6.75 9.9625 6.67825 10.1405 6.53475 10.284C6.39075 10.428 6.2125 10.5 6 10.5ZM12 10.5C11.7875 10.5 11.6095 10.428 11.466 10.284C11.322 10.1405 11.25 9.9625 11.25 9.75C11.25 9.5375 11.322 9.35925 11.466 9.21525C11.6095 9.07175 11.7875 9 12 9C12.2125 9 12.3905 9.07175 12.534 9.21525C12.678 9.35925 12.75 9.5375 12.75 9.75C12.75 9.9625 12.678 10.1405 12.534 10.284C12.3905 10.428 12.2125 10.5 12 10.5ZM9 13.5C8.7875 13.5 8.6095 13.428 8.466 13.284C8.322 13.1405 8.25 12.9625 8.25 12.75C8.25 12.5375 8.322 12.3595 8.466 12.216C8.6095 12.072 8.7875 12 9 12C9.2125 12 9.39075 12.072 9.53475 12.216C9.67825 12.3595 9.75 12.5375 9.75 12.75C9.75 12.9625 9.67825 13.1405 9.53475 13.284C9.39075 13.428 9.2125 13.5 9 13.5ZM6 13.5C5.7875 13.5 5.60925 13.428 5.46525 13.284C5.32175 13.1405 5.25 12.9625 5.25 12.75C5.25 12.5375 5.32175 12.3595 5.46525 12.216C5.60925 12.072 5.7875 12 6 12C6.2125 12 6.39075 12.072 6.53475 12.216C6.67825 12.3595 6.75 12.5375 6.75 12.75C6.75 12.9625 6.67825 13.1405 6.53475 13.284C6.39075 13.428 6.2125 13.5 6 13.5ZM12 13.5C11.7875 13.5 11.6095 13.428 11.466 13.284C11.322 13.1405 11.25 12.9625 11.25 12.75C11.25 12.5375 11.322 12.3595 11.466 12.216C11.6095 12.072 11.7875 12 12 12C12.2125 12 12.3905 12.072 12.534 12.216C12.678 12.3595 12.75 12.5375 12.75 12.75C12.75 12.9625 12.678 13.1405 12.534 13.284C12.3905 13.428 12.2125 13.5 12 13.5Z" fill="#A8A8A8" />
                      </svg>
                    </span>
                    1/3/23
                  </p>
                  <p class="txt-item">หลักสูตรสหสาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม บัณฑิตวิทยาลัย จุฬาฯ ได้เข้าร่วมงาน “Chula Sustainability Fest 2022”</p>
                  <a class="btn btn-readmore-boxmain w-100" href={`/news/1`} target='_blank'>
                    อ่านเพิ่มเติม
                  </a>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="box-main-news">
                <img src="../images/index/banner.png" alt="" />
                <div class="box-text-main-news">
                  <p class="text-calendar">
                    <span>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.75 16.5C3.3375 16.5 2.98425 16.3533 2.69025 16.0598C2.39675 15.7658 2.25 15.4125 2.25 15V4.5C2.25 4.0875 2.39675 3.7345 2.69025 3.441C2.98425 3.147 3.3375 3 3.75 3H4.5V1.5H6V3H12V1.5H13.5V3H14.25C14.6625 3 15.0158 3.147 15.3098 3.441C15.6033 3.7345 15.75 4.0875 15.75 4.5V15C15.75 15.4125 15.6033 15.7658 15.3098 16.0598C15.0158 16.3533 14.6625 16.5 14.25 16.5H3.75ZM3.75 15H14.25V7.5H3.75V15ZM3.75 6H14.25V4.5H3.75V6ZM9 10.5C8.7875 10.5 8.6095 10.428 8.466 10.284C8.322 10.1405 8.25 9.9625 8.25 9.75C8.25 9.5375 8.322 9.35925 8.466 9.21525C8.6095 9.07175 8.7875 9 9 9C9.2125 9 9.39075 9.07175 9.53475 9.21525C9.67825 9.35925 9.75 9.5375 9.75 9.75C9.75 9.9625 9.67825 10.1405 9.53475 10.284C9.39075 10.428 9.2125 10.5 9 10.5ZM6 10.5C5.7875 10.5 5.60925 10.428 5.46525 10.284C5.32175 10.1405 5.25 9.9625 5.25 9.75C5.25 9.5375 5.32175 9.35925 5.46525 9.21525C5.60925 9.07175 5.7875 9 6 9C6.2125 9 6.39075 9.07175 6.53475 9.21525C6.67825 9.35925 6.75 9.5375 6.75 9.75C6.75 9.9625 6.67825 10.1405 6.53475 10.284C6.39075 10.428 6.2125 10.5 6 10.5ZM12 10.5C11.7875 10.5 11.6095 10.428 11.466 10.284C11.322 10.1405 11.25 9.9625 11.25 9.75C11.25 9.5375 11.322 9.35925 11.466 9.21525C11.6095 9.07175 11.7875 9 12 9C12.2125 9 12.3905 9.07175 12.534 9.21525C12.678 9.35925 12.75 9.5375 12.75 9.75C12.75 9.9625 12.678 10.1405 12.534 10.284C12.3905 10.428 12.2125 10.5 12 10.5ZM9 13.5C8.7875 13.5 8.6095 13.428 8.466 13.284C8.322 13.1405 8.25 12.9625 8.25 12.75C8.25 12.5375 8.322 12.3595 8.466 12.216C8.6095 12.072 8.7875 12 9 12C9.2125 12 9.39075 12.072 9.53475 12.216C9.67825 12.3595 9.75 12.5375 9.75 12.75C9.75 12.9625 9.67825 13.1405 9.53475 13.284C9.39075 13.428 9.2125 13.5 9 13.5ZM6 13.5C5.7875 13.5 5.60925 13.428 5.46525 13.284C5.32175 13.1405 5.25 12.9625 5.25 12.75C5.25 12.5375 5.32175 12.3595 5.46525 12.216C5.60925 12.072 5.7875 12 6 12C6.2125 12 6.39075 12.072 6.53475 12.216C6.67825 12.3595 6.75 12.5375 6.75 12.75C6.75 12.9625 6.67825 13.1405 6.53475 13.284C6.39075 13.428 6.2125 13.5 6 13.5ZM12 13.5C11.7875 13.5 11.6095 13.428 11.466 13.284C11.322 13.1405 11.25 12.9625 11.25 12.75C11.25 12.5375 11.322 12.3595 11.466 12.216C11.6095 12.072 11.7875 12 12 12C12.2125 12 12.3905 12.072 12.534 12.216C12.678 12.3595 12.75 12.5375 12.75 12.75C12.75 12.9625 12.678 13.1405 12.534 13.284C12.3905 13.428 12.2125 13.5 12 13.5Z" fill="#A8A8A8" />
                      </svg>
                    </span>
                    1/3/23
                  </p>
                  <p class="txt-item">หลักสูตรสหสาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม บัณฑิตวิทยาลัย จุฬาฯ ได้เข้าร่วมงาน “Chula Sustainability Fest 2022”</p>
                  <a class="btn btn-readmore-boxmain w-100" href={`/news/1`} target='_blank'>
                    อ่านเพิ่มเติม
                  </a>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="box-main-news">
                <img src="../images/index/news1.png" alt="" />
                <div class="box-text-main-news">
                  <p class="text-calendar">
                    <span>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.75 16.5C3.3375 16.5 2.98425 16.3533 2.69025 16.0598C2.39675 15.7658 2.25 15.4125 2.25 15V4.5C2.25 4.0875 2.39675 3.7345 2.69025 3.441C2.98425 3.147 3.3375 3 3.75 3H4.5V1.5H6V3H12V1.5H13.5V3H14.25C14.6625 3 15.0158 3.147 15.3098 3.441C15.6033 3.7345 15.75 4.0875 15.75 4.5V15C15.75 15.4125 15.6033 15.7658 15.3098 16.0598C15.0158 16.3533 14.6625 16.5 14.25 16.5H3.75ZM3.75 15H14.25V7.5H3.75V15ZM3.75 6H14.25V4.5H3.75V6ZM9 10.5C8.7875 10.5 8.6095 10.428 8.466 10.284C8.322 10.1405 8.25 9.9625 8.25 9.75C8.25 9.5375 8.322 9.35925 8.466 9.21525C8.6095 9.07175 8.7875 9 9 9C9.2125 9 9.39075 9.07175 9.53475 9.21525C9.67825 9.35925 9.75 9.5375 9.75 9.75C9.75 9.9625 9.67825 10.1405 9.53475 10.284C9.39075 10.428 9.2125 10.5 9 10.5ZM6 10.5C5.7875 10.5 5.60925 10.428 5.46525 10.284C5.32175 10.1405 5.25 9.9625 5.25 9.75C5.25 9.5375 5.32175 9.35925 5.46525 9.21525C5.60925 9.07175 5.7875 9 6 9C6.2125 9 6.39075 9.07175 6.53475 9.21525C6.67825 9.35925 6.75 9.5375 6.75 9.75C6.75 9.9625 6.67825 10.1405 6.53475 10.284C6.39075 10.428 6.2125 10.5 6 10.5ZM12 10.5C11.7875 10.5 11.6095 10.428 11.466 10.284C11.322 10.1405 11.25 9.9625 11.25 9.75C11.25 9.5375 11.322 9.35925 11.466 9.21525C11.6095 9.07175 11.7875 9 12 9C12.2125 9 12.3905 9.07175 12.534 9.21525C12.678 9.35925 12.75 9.5375 12.75 9.75C12.75 9.9625 12.678 10.1405 12.534 10.284C12.3905 10.428 12.2125 10.5 12 10.5ZM9 13.5C8.7875 13.5 8.6095 13.428 8.466 13.284C8.322 13.1405 8.25 12.9625 8.25 12.75C8.25 12.5375 8.322 12.3595 8.466 12.216C8.6095 12.072 8.7875 12 9 12C9.2125 12 9.39075 12.072 9.53475 12.216C9.67825 12.3595 9.75 12.5375 9.75 12.75C9.75 12.9625 9.67825 13.1405 9.53475 13.284C9.39075 13.428 9.2125 13.5 9 13.5ZM6 13.5C5.7875 13.5 5.60925 13.428 5.46525 13.284C5.32175 13.1405 5.25 12.9625 5.25 12.75C5.25 12.5375 5.32175 12.3595 5.46525 12.216C5.60925 12.072 5.7875 12 6 12C6.2125 12 6.39075 12.072 6.53475 12.216C6.67825 12.3595 6.75 12.5375 6.75 12.75C6.75 12.9625 6.67825 13.1405 6.53475 13.284C6.39075 13.428 6.2125 13.5 6 13.5ZM12 13.5C11.7875 13.5 11.6095 13.428 11.466 13.284C11.322 13.1405 11.25 12.9625 11.25 12.75C11.25 12.5375 11.322 12.3595 11.466 12.216C11.6095 12.072 11.7875 12 12 12C12.2125 12 12.3905 12.072 12.534 12.216C12.678 12.3595 12.75 12.5375 12.75 12.75C12.75 12.9625 12.678 13.1405 12.534 13.284C12.3905 13.428 12.2125 13.5 12 13.5Z" fill="#A8A8A8" />
                      </svg>
                    </span>
                    1/3/23
                  </p>
                  <p class="txt-item">หลักสูตรสหสาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม บัณฑิตวิทยาลัย จุฬาฯ ได้เข้าร่วมงาน “Chula Sustainability Fest 2022”</p>
                  <a class="btn btn-readmore-boxmain w-100" href={`/news/1`} target='_blank'>
                    อ่านเพิ่มเติม
                  </a>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="box-main-news">
                <img src="../images/index/news2.png" alt="" />
                <div class="box-text-main-news">
                  <p class="text-calendar">
                    <span>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.75 16.5C3.3375 16.5 2.98425 16.3533 2.69025 16.0598C2.39675 15.7658 2.25 15.4125 2.25 15V4.5C2.25 4.0875 2.39675 3.7345 2.69025 3.441C2.98425 3.147 3.3375 3 3.75 3H4.5V1.5H6V3H12V1.5H13.5V3H14.25C14.6625 3 15.0158 3.147 15.3098 3.441C15.6033 3.7345 15.75 4.0875 15.75 4.5V15C15.75 15.4125 15.6033 15.7658 15.3098 16.0598C15.0158 16.3533 14.6625 16.5 14.25 16.5H3.75ZM3.75 15H14.25V7.5H3.75V15ZM3.75 6H14.25V4.5H3.75V6ZM9 10.5C8.7875 10.5 8.6095 10.428 8.466 10.284C8.322 10.1405 8.25 9.9625 8.25 9.75C8.25 9.5375 8.322 9.35925 8.466 9.21525C8.6095 9.07175 8.7875 9 9 9C9.2125 9 9.39075 9.07175 9.53475 9.21525C9.67825 9.35925 9.75 9.5375 9.75 9.75C9.75 9.9625 9.67825 10.1405 9.53475 10.284C9.39075 10.428 9.2125 10.5 9 10.5ZM6 10.5C5.7875 10.5 5.60925 10.428 5.46525 10.284C5.32175 10.1405 5.25 9.9625 5.25 9.75C5.25 9.5375 5.32175 9.35925 5.46525 9.21525C5.60925 9.07175 5.7875 9 6 9C6.2125 9 6.39075 9.07175 6.53475 9.21525C6.67825 9.35925 6.75 9.5375 6.75 9.75C6.75 9.9625 6.67825 10.1405 6.53475 10.284C6.39075 10.428 6.2125 10.5 6 10.5ZM12 10.5C11.7875 10.5 11.6095 10.428 11.466 10.284C11.322 10.1405 11.25 9.9625 11.25 9.75C11.25 9.5375 11.322 9.35925 11.466 9.21525C11.6095 9.07175 11.7875 9 12 9C12.2125 9 12.3905 9.07175 12.534 9.21525C12.678 9.35925 12.75 9.5375 12.75 9.75C12.75 9.9625 12.678 10.1405 12.534 10.284C12.3905 10.428 12.2125 10.5 12 10.5ZM9 13.5C8.7875 13.5 8.6095 13.428 8.466 13.284C8.322 13.1405 8.25 12.9625 8.25 12.75C8.25 12.5375 8.322 12.3595 8.466 12.216C8.6095 12.072 8.7875 12 9 12C9.2125 12 9.39075 12.072 9.53475 12.216C9.67825 12.3595 9.75 12.5375 9.75 12.75C9.75 12.9625 9.67825 13.1405 9.53475 13.284C9.39075 13.428 9.2125 13.5 9 13.5ZM6 13.5C5.7875 13.5 5.60925 13.428 5.46525 13.284C5.32175 13.1405 5.25 12.9625 5.25 12.75C5.25 12.5375 5.32175 12.3595 5.46525 12.216C5.60925 12.072 5.7875 12 6 12C6.2125 12 6.39075 12.072 6.53475 12.216C6.67825 12.3595 6.75 12.5375 6.75 12.75C6.75 12.9625 6.67825 13.1405 6.53475 13.284C6.39075 13.428 6.2125 13.5 6 13.5ZM12 13.5C11.7875 13.5 11.6095 13.428 11.466 13.284C11.322 13.1405 11.25 12.9625 11.25 12.75C11.25 12.5375 11.322 12.3595 11.466 12.216C11.6095 12.072 11.7875 12 12 12C12.2125 12 12.3905 12.072 12.534 12.216C12.678 12.3595 12.75 12.5375 12.75 12.75C12.75 12.9625 12.678 13.1405 12.534 13.284C12.3905 13.428 12.2125 13.5 12 13.5Z" fill="#A8A8A8" />
                      </svg>
                    </span>
                    1/3/23
                  </p>
                  <p class="txt-item">หลักสูตรสหสาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม บัณฑิตวิทยาลัย จุฬาฯ ได้เข้าร่วมงาน “Chula Sustainability Fest 2022”</p>
                  <a class="btn btn-readmore-boxmain w-100" href={`/news/1`} target='_blank'>
                    อ่านเพิ่มเติม
                  </a>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="box-main-news">
                <img src="../images/index/news3.png" alt="" />
                <div class="box-text-main-news">
                  <p class="text-calendar">
                    <span>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.75 16.5C3.3375 16.5 2.98425 16.3533 2.69025 16.0598C2.39675 15.7658 2.25 15.4125 2.25 15V4.5C2.25 4.0875 2.39675 3.7345 2.69025 3.441C2.98425 3.147 3.3375 3 3.75 3H4.5V1.5H6V3H12V1.5H13.5V3H14.25C14.6625 3 15.0158 3.147 15.3098 3.441C15.6033 3.7345 15.75 4.0875 15.75 4.5V15C15.75 15.4125 15.6033 15.7658 15.3098 16.0598C15.0158 16.3533 14.6625 16.5 14.25 16.5H3.75ZM3.75 15H14.25V7.5H3.75V15ZM3.75 6H14.25V4.5H3.75V6ZM9 10.5C8.7875 10.5 8.6095 10.428 8.466 10.284C8.322 10.1405 8.25 9.9625 8.25 9.75C8.25 9.5375 8.322 9.35925 8.466 9.21525C8.6095 9.07175 8.7875 9 9 9C9.2125 9 9.39075 9.07175 9.53475 9.21525C9.67825 9.35925 9.75 9.5375 9.75 9.75C9.75 9.9625 9.67825 10.1405 9.53475 10.284C9.39075 10.428 9.2125 10.5 9 10.5ZM6 10.5C5.7875 10.5 5.60925 10.428 5.46525 10.284C5.32175 10.1405 5.25 9.9625 5.25 9.75C5.25 9.5375 5.32175 9.35925 5.46525 9.21525C5.60925 9.07175 5.7875 9 6 9C6.2125 9 6.39075 9.07175 6.53475 9.21525C6.67825 9.35925 6.75 9.5375 6.75 9.75C6.75 9.9625 6.67825 10.1405 6.53475 10.284C6.39075 10.428 6.2125 10.5 6 10.5ZM12 10.5C11.7875 10.5 11.6095 10.428 11.466 10.284C11.322 10.1405 11.25 9.9625 11.25 9.75C11.25 9.5375 11.322 9.35925 11.466 9.21525C11.6095 9.07175 11.7875 9 12 9C12.2125 9 12.3905 9.07175 12.534 9.21525C12.678 9.35925 12.75 9.5375 12.75 9.75C12.75 9.9625 12.678 10.1405 12.534 10.284C12.3905 10.428 12.2125 10.5 12 10.5ZM9 13.5C8.7875 13.5 8.6095 13.428 8.466 13.284C8.322 13.1405 8.25 12.9625 8.25 12.75C8.25 12.5375 8.322 12.3595 8.466 12.216C8.6095 12.072 8.7875 12 9 12C9.2125 12 9.39075 12.072 9.53475 12.216C9.67825 12.3595 9.75 12.5375 9.75 12.75C9.75 12.9625 9.67825 13.1405 9.53475 13.284C9.39075 13.428 9.2125 13.5 9 13.5ZM6 13.5C5.7875 13.5 5.60925 13.428 5.46525 13.284C5.32175 13.1405 5.25 12.9625 5.25 12.75C5.25 12.5375 5.32175 12.3595 5.46525 12.216C5.60925 12.072 5.7875 12 6 12C6.2125 12 6.39075 12.072 6.53475 12.216C6.67825 12.3595 6.75 12.5375 6.75 12.75C6.75 12.9625 6.67825 13.1405 6.53475 13.284C6.39075 13.428 6.2125 13.5 6 13.5ZM12 13.5C11.7875 13.5 11.6095 13.428 11.466 13.284C11.322 13.1405 11.25 12.9625 11.25 12.75C11.25 12.5375 11.322 12.3595 11.466 12.216C11.6095 12.072 11.7875 12 12 12C12.2125 12 12.3905 12.072 12.534 12.216C12.678 12.3595 12.75 12.5375 12.75 12.75C12.75 12.9625 12.678 13.1405 12.534 13.284C12.3905 13.428 12.2125 13.5 12 13.5Z" fill="#A8A8A8" />
                      </svg>
                    </span>
                    1/3/23
                  </p>
                  <p class="txt-item">หลักสูตรสหสาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม บัณฑิตวิทยาลัย จุฬาฯ ได้เข้าร่วมงาน “Chula Sustainability Fest 2022”</p>
                  <a class="btn btn-readmore-boxmain w-100" href={`/news/1`} target='_blank'>
                    อ่านเพิ่มเติม
                  </a>
                </div>
              </div>
            </div>
          </div> */}
    </section>
  )
}

export default IndexOtherNews2