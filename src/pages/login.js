import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { apiPost } from '@/api/api'
import { useRef, useState } from 'react'


export default function Login(props) {
  const [input, setInput] = useState()
  const [err, setErr] = useState(false)
  const [text, setText] = useState('เข้าสู่ระบบ')
  const passwordRef = useRef()

  const inputChange = (event) => {
    const { name, value } = event.target
    setInput({
      ...input,
      [name]: value
    })
  }
  const togglePassword = (button, icon) => {
    if (button.getAttribute('type') === "password") {
      button.setAttribute("type", "text")
    } else {
      button.setAttribute("type", "password")
    }
    icon.target.classList.toggle("bi-eye")
  }
  const submitClick = (event) => {
    event.preventDefault()
    setErr(false)
    setText('เข้าสู่ระบบ...')
    apiPost(`${props.api}/auth/login`, input).then(result => {
      setText('เข้าสู่ระบบ')
      if (result.data.err) {
        setErr(result.data.err)
      } else {
        window.localStorage.setItem('token', result.data[0])
        window.localStorage.setItem('role', result.data[1])
        window.location.href = '/'
      }
    })
  }
  return (
    <>
      <Head>
        <title>นครนนท์โมเดล</title>
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

      <div class="container py-lg-5 pt-md-3 pb-md-5 pt-2 pb-4">

        <div class="brand d-flex justify-content-center">

          {/* <span>
            <img src="./images/login/สิ่งแวดล้อม-จุฬาฯ1.png" alt="" />
          </span>
          <span>
            <img src="./images/login/วช1.png" alt="" />
          </span>
          <span>
            <img src="./images/login/เทศบาล1.png" alt="" />
          </span> */}

        </div>
        <form onSubmit={submitClick}>
          <div class="wraper-textform d-flex flex-column mx-auto align-items-center">

            <div class="logo d-flex justify-content-center">
              <Image src="/images/login/logo.png" alt="" width={200} height={200} />
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text border-end-0 border-start-radius"><Image src="/images/login/Message-icon.png" alt="" width={18} height={18} /></span>
              <input type="text" class="form-control border-start-0" placeholder="อีเมล" name='email' required onChange={inputChange} />
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text border-end-0 border-start-radius"><Image src="/images/login/Lock-icon.png" alt="" width={18} height={18} /></span>
              <input ref={passwordRef} type="password" id="password" class="form-control border-start-0" placeholder="รหัสผ่าน" name='password' required onChange={inputChange} />
              <span class="input-group-text border-start-0 border-end-radius"><i class="bi bi-eye-slash" id="togglePassword" onClick={(event) => togglePassword(passwordRef.current, event)}></i></span>
            </div>
            {err &&
              <p className='text-danger'>{err}</p>
            }
            <div class="text-login mb-4">
              <div class="row">
                <div class="col-6 text-start">
                  <Link href='/sign-up'>สร้างบัญชีผู้ใช้</Link>
                </div>
                <div class="col-6 text-end">
                  <Link href='/forgetpassword'>ลืมรหัสผ่าน</Link>
                </div>
              </div>
            </div>
            <button type='submit' class="btn bg-green text-white w-100 rounded-pill">เข้าสู่ระบบ</button>
          </div>
        </form>
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