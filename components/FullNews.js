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

function FullNews() {
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
                    <img class="img-bannernews-index d-block w-100" src="../images/index/news1.png" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img class="img-bannernews-index d-block w-100" src="../images/index/news2.png" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img class="img-bannernews-index d-block w-100" src="./images/index/news3.png" alt="..." />
                  </div>
                </Slider>
              </div>
            </div>
          </div>

          <p class="texthead-news-index mt-4">
            หลักสูตรสหสาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม บัณฑิตวิทยาลัย จุฬาฯ ได้เข้าร่วมงาน “Chula Sustainability Fest 2022”
          </p>

          <p class="">
            เมื่อวันที่ 2-4 กันยายน 2565 ณ อุทยาน 100 ปี จุฬาลงกรณ์
            มหาวิทยาลัย ซึ่งหลักสูตรฯ ได้ร่วมนำเสนอผลงานวิจัยในรูปแบบ
            โปสเตอร์ผ่านสื่อดิจิทัล ในหัวข้อ “ความปลอดภัย อาชีวอนามัย และสภาพแวดล้อมในการทำงาน” โดยมี รศ.ดร.นุตา ศุภคต รองผู้อำนวยการหลักสูตรสหสาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม เป็นอาจารย์ประจำภาควิชาวิทยาศาสตร์สิ่งแวดล้อม
            เมื่อวันที่ 2-4 กันยายน 2565 ณ อุทยาน 100 ปี จุฬาลงกรณ์
            มหาวิทยาลัย ซึ่งหลักสูตรฯ ได้ร่วมนำเสนอผลงานวิจัยในรูปแบบ
            โปสเตอร์ผ่านสื่อดิจิทัล ในหัวข้อ “ความปลอดภัย อาชีวอนามัย และสภาพแวดล้อมในการทำงาน” โดยมี รศ.ดร.นุตา ศุภคต รองผู้อำนวยการหลักสูตรสหสาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม เป็นอาจารย์ประจำภาควิชาวิทยาศาสตร์สิ่งแวดล้อม
            เมื่อวันที่ 2-4 กันยายน 2565 ณ อุทยาน 100 ปี จุฬาลงกรณ์
            มหาวิทยาลัย ซึ่งหลักสูตรฯ ได้ร่วมนำเสนอผลงานวิจัยในรูปแบบ
            โปสเตอร์ผ่านสื่อดิจิทัล ในหัวข้อ “ความปลอดภัย อาชีวอนามัย และสภาพแวดล้อมในการทำงาน” โดยมี รศ.ดร.นุตา ศุภคต รองผู้อำนวยการหลักสูตรสหสาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม เป็นอาจารย์ประจำภาควิชาวิทยาศาสตร์สิ่งแวดล้อม
            เมื่อวันที่ 2-4 กันยายน 2565 ณ อุทยาน 100 ปี จุฬาลงกรณ์
            มหาวิทยาลัย ซึ่งหลักสูตรฯ ได้ร่วมนำเสนอผลงานวิจัยในรูปแบบ
            โปสเตอร์ผ่านสื่อดิจิทัล ในหัวข้อ “ความปลอดภัย อาชีวอนามัย และสภาพแวดล้อมในการทำงาน” โดยมี รศ.ดร.นุตา ศุภคต รองผู้อำนวยการหลักสูตรสหสาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม เป็นอาจารย์ประจำภาควิชาวิทยาศาสตร์สิ่งแวดล้อม
            เมื่อวันที่ 2-4 กันยายน 2565 ณ อุทยาน 100 ปี จุฬาลงกรณ์
            มหาวิทยาลัย ซึ่งหลักสูตรฯ ได้ร่วมนำเสนอผลงานวิจัยในรูปแบบ
            โปสเตอร์ผ่านสื่อดิจิทัล ในหัวข้อ “ความปลอดภัย อาชีวอนามัย และสภาพแวดล้อมในการทำงาน” โดยมี รศ.ดร.นุตา ศุภคต รองผู้อำนวยการหลักสูตรสหสาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม เป็นอาจารย์ประจำภาควิชาวิทยาศาสตร์สิ่งแวดล้อม
            เมื่อวันที่ 2-4 กันยายน 2565 ณ อุทยาน 100 ปี จุฬาลงกรณ์
            มหาวิทยาลัย ซึ่งหลักสูตรฯ ได้ร่วมนำเสนอผลงานวิจัยในรูปแบบ
            โปสเตอร์ผ่านสื่อดิจิทัล ในหัวข้อ “ความปลอดภัย อาชีวอนามัย และสภาพแวดล้อมในการทำงาน” โดยมี รศ.ดร.นุตา ศุภคต รองผู้อำนวยการหลักสูตรสหสาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม เป็นอาจารย์ประจำภาควิชาวิทยาศาสตร์สิ่งแวดล้อม
            เมื่อวันที่ 2-4 กันยายน 2565 ณ อุทยาน 100 ปี จุฬาลงกรณ์
            มหาวิทยาลัย ซึ่งหลักสูตรฯ ได้ร่วมนำเสนอผลงานวิจัยในรูปแบบ
            โปสเตอร์ผ่านสื่อดิจิทัล ในหัวข้อ “ความปลอดภัย อาชีวอนามัย และสภาพแวดล้อมในการทำงาน” โดยมี รศ.ดร.นุตา ศุภคต รองผู้อำนวยการหลักสูตรสหสาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม เป็นอาจารย์ประจำภาควิชาวิทยาศาสตร์สิ่งแวดล้อม
            เมื่อวันที่ 2-4 กันยายน 2565 ณ อุทยาน 100 ปี จุฬาลงกรณ์
            มหาวิทยาลัย ซึ่งหลักสูตรฯ ได้ร่วมนำเสนอผลงานวิจัยในรูปแบบ
            โปสเตอร์ผ่านสื่อดิจิทัล ในหัวข้อ “ความปลอดภัย อาชีวอนามัย และสภาพแวดล้อมในการทำงาน” โดยมี รศ.ดร.นุตา ศุภคต รองผู้อำนวยการหลักสูตรสหสาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม เป็นอาจารย์ประจำภาควิชาวิทยาศาสตร์สิ่งแวดล้อม
            เมื่อวันที่ 2-4 กันยายน 2565 ณ อุทยาน 100 ปี จุฬาลงกรณ์
            มหาวิทยาลัย ซึ่งหลักสูตรฯ ได้ร่วมนำเสนอผลงานวิจัยในรูปแบบ
            โปสเตอร์ผ่านสื่อดิจิทัล ในหัวข้อ “ความปลอดภัย อาชีวอนามัย และสภาพแวดล้อมในการทำงาน” โดยมี รศ.ดร.นุตา ศุภคต รองผู้อำนวยการหลักสูตรสหสาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม เป็นอาจารย์ประจำภาควิชาวิทยาศาสตร์สิ่งแวดล้อม
            เมื่อวันที่ 2-4 กันยายน 2565 ณ อุทยาน 100 ปี จุฬาลงกรณ์
            มหาวิทยาลัย ซึ่งหลักสูตรฯ ได้ร่วมนำเสนอผลงานวิจัยในรูปแบบ
            โปสเตอร์ผ่านสื่อดิจิทัล ในหัวข้อ “ความปลอดภัย อาชีวอนามัย และสภาพแวดล้อมในการทำงาน” โดยมี รศ.ดร.นุตา ศุภคต รองผู้อำนวยการหลักสูตรสหสาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม เป็นอาจารย์ประจำภาควิชาวิทยาศาสตร์สิ่งแวดล้อม
          </p>
        </div>
      </div>
    </section>
  )
}

export default FullNews