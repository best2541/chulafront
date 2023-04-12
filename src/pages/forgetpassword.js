import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import { apiGet, apiPost } from '@/api/api'

export default function ForgetPassword(props) {
  const [input, setInput] = useState({ objective: '' })
  const [validate, setValidate] = useState({})

  const inputChange = (event) => {
    const { name, value } = event.target
    setInput({
      ...input,
      [name]: name == 'password' || name == 'confirmpassword' ? value.trim() : value
    })
  }

  const submitClick = (e) => {
    e.preventDefault()
    apiPost(`${props.api}/forgot_password`, { ...input }).then(result => {
      if (!result.data.err) {
        alert(result.data)
      } else {
        alert(result)
      }
    }).catch(() => alert('ไม่สำเร็จ'))
  }
  return (
    <>
      <Head>
        <title>ลืมรหัสผ่าน</title>
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

      <div class="container py-lg-5 pt-md-3 pb-md-5 pt-5 pb-5">

        <div class="box-headtext d-flex justify-content-center">
          <p>
            ลืมรหัสผ่าน
          </p>
        </div>
        <form onSubmit={submitClick}>
          <div class="wraper-textform d-flex flex-column mx-auto align-items-center">

            <div class="input-group mb-3">
              <span class={`input-group-text border-start-radius ${validate.isEmailExist && 'border border-danger'}`}><img src="./images/login/Message-icon.png" alt="" /></span>
              <input type="email" class={`form-control border-end-radius ${validate.isEmailExist && 'border border-danger'}`} placeholder="อีเมล" name='email' onChange={inputChange} required />
            </div>

            <button type='submit' class="btn bg-green text-white w-100 rounded-pill" disabled={!input.email}>ส่งอีเมล</button>
          </div>
        </form>

      </div >
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