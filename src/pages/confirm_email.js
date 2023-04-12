import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { apiGet, apiPost } from '@/api/api'

export default function ConfirmEmail(props) {
  const router = useRouter()
  const [status, setStatus] = useState(false)

  useEffect(() => {
    console.log(window.location)
    if (router.query.email && router.query.uuid) {
      apiGet(`${props.api}/auth/confirm_email?email=${router.query.email}&uuid${router.query.uuid}`)
        .then(result => {
          if (!result.data.err) {
            setStatus(true)
          } else {
            setStatus(true)
          }
        })
    }
  }, [router])
  return (
    <>
      <Head>
        <title>ยืนยันอีเมล</title>
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
      {status &&
        <div class="container py-lg-5 pt-md-3 pb-md-5 pt-5 pb-5">

          <div class="box-headtext d-flex justify-content-center">
            <p>
              ยืนยันอีเมลสำเร็จแล้ว
            </p>
          </div>
          <form>
            <div class="wraper-textform d-flex flex-column mx-auto align-items-center">
              <a href={`${window?.location?.protocol}//${window?.location?.host}/login`} class="btn bg-green text-white w-100 rounded-pill">กลับสู่หน้า Login</a>
            </div>
          </form>

        </div>
      }
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