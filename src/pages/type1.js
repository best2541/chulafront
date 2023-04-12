import Head from 'next/head'
import { useState } from 'react'

export default function Type1(props) {
  const [type, setType] = useState()

  const submitClick = () => {
    window.location.href = `/register/?role=1&sub_role=${type}`
  }
  return (
    <>
      <Head>
        <title>สร้างบัญชีผู้ใช้</title>
        <meta name="description" content="เพื่อการจัดการขยะที่ยั่งยืน" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="robot" content="index, follow" />
        <meta name='copyright' content='Orange Technology Solution co.,ltd.' />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link type="text/css" rel="stylesheet" href="css/layout.css" />
        <link rel="stylesheet" href="css/jquery-ui.css" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.css"
          integrity="sha512-WIWddQW7bHfs1gwICYIoXuifLb8gCPkE7Z/gq7QHk3pKuxjNs0E68Rn5c7Ig4cWguZW5CIvRroTj2GrSxsvUZQ=="
          crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="css/flexslider.css" />
        <link rel="stylesheet" href="css/flexslider-rtl.css" />
        <link rel="stylesheet" href="css/flexslider-rtl-min.css" />

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
        <script src="js/jquery.flexslider.js"></script>
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/jquery-ui.js"></script>
        <script src="js/modernizr.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.theme.default.min.css" rel="stylesheet" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="container py-5">

        <div class="box-headtext d-flex justify-content-center">
          <p>
            เลือกบทบาทของตนเอง
          </p>
        </div>

        <div class="wrapbox-type">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12 mb-4">
              <div class="button bt-select-type d-flex justify-content-center">
                <input type="radio" id="a25" name="check-substitution-2" onClick={() => setType(1)} />
                <label class="btn btn-default" for="a25"><img img class="img-type" src="./images/type1/type1-1.png" alt="" />
                  <p class="text-type">ตลาด</p>
                </label>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12 mb-4">
              <div class="button bt-select-type d-flex justify-content-center">
                <input type="radio" id="a50" name="check-substitution-2" onClick={() => setType(2)} />
                <label class="btn btn-default" for="a50"><img class="img-type" src="./images/type1/type1-2.png" alt="" />
                  <p class="text-type">ซุปเปอร์มาเก็ต</p>
                </label>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12 mb-4">
              <div class="button bt-select-type d-flex justify-content-center">
                <input type="radio" id="a75" name="check-substitution-2" onClick={() => setType(3)} />
                <label class="btn btn-default" for="a75"><img class="img-type" src="./images/type1/type1-3.png" alt="" />
                  <p class="text-type">โรงเรียน</p>
                </label>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12 mb-4">
              <div class="button bt-select-type d-flex justify-content-center">
                <input type="radio" id="a100" name="check-substitution-2" onClick={() => setType(4)} />
                <label class="btn btn-default" for="a100"><img class="img-type" src="./images/type1/type1-4.png" alt="" />
                  <p class="text-type">วัด</p>
                </label>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12 mb-4">
              <div class="button bt-select-type d-flex justify-content-center">
                <input type="radio" id="a125" name="check-substitution-2" onClick={() => setType(5)} />
                <label class="btn btn-default" for="a125"><img class="img-type" src="./images/type1/type1-5.png" alt="" />
                  <p class="text-type">หน่วยงานราชการ</p>
                </label>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12 mb-4">
              <div class="button bt-select-type d-flex justify-content-center">
                <input type="radio" id="a150" name="check-substitution-2" onClick={() => setType(6)} />
                <label class="btn btn-default" for="a150"><img class="img-type" src="./images/type1/type1-6.png" alt="" />
                  <p class="text-type">คอนโด/หมู่บ้าน</p>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="wraper-textform d-flex flex-column mx-auto align-items-center">
          <button class="btn bg-green text-white w-100 rounded-pill" data-bs-toggle="modal" data-bs-target="#myModal" disabled={!type} onClick={submitClick}>ยืนยัน</button>
        </div>

      </div>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      api: process.env.API,
    },
  }
}