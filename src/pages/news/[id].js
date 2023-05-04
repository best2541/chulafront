import Head from 'next/head'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import OrderDetail from '../../../components/OrderDetail';
import Header from '../../../components/Header2';
import Footer from '../../../components/Footer';
import { useRouter } from 'next/router'
import FullNews from '../../../components/FullNews';
import IndexOtherNews2 from '../../../components/IndexOtherNews2';
import { useEffect, useState } from 'react';
import { apiGet } from '@/api/api';

export default function NewOrder(props) {
  const [datas, setDatas] = useState([])
  const router = useRouter()
  const { id } = router.query
  useEffect(() => {
    apiGet(`${props.api}/index/getallnews`)
      .then(result => {
        if (!result.data.err) {
          setDatas(result.data.news)
        }
      })
  }, [])
  return (
    <>
      <Head>
        <title>นครนนท์โมเดล</title>
        <meta name="description" content="เพื่อการจัดการขยะที่ยั่งยืน" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="robot" content="index, follow" />
        <meta name='copyright' content='Orange Technology Solution co.,ltd.' />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link type="text/css" rel="stylesheet" href="css/layout.css" />
        <link type="stylesheet" rel="stylesheet" href="css/carousel.css" />
        <link type="image/ico" rel="shortcut icon" href="images/favicon.ico" />

        <link rel="stylesheet" href="css/jquery-ui.css" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.css" integrity="sha512-WIWddQW7bHfs1gwICYIoXuifLb8gCPkE7Z/gq7QHk3pKuxjNs0E68Rn5c7Ig4cWguZW5CIvRroTj2GrSxsvUZQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="css/flexslider.css" />
        <link rel="stylesheet" href="css/flexslider-rtl.css" />
        <link rel="stylesheet" href="css/flexslider-rtl-min.css" />


        <script src="js/jquery.flexslider.js"></script>
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/jquery-ui.js"></script>
        <script src="js/modernizr.js"></script>


        <link type="image/ico" rel="shortcut icon" href="images/favicon.ico" />
        <link rel="stylesheet" href="css/jquery-ui.css" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.css" />
        <link type="image/ico" rel="icon" href="images/iconlogo-pl2.png" />


        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/jquery-ui.js"></script>
        <script src="js/modernizr.js"></script>
        <script src="js/owl.carousel.min.js"></script>

        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <Header api={props.api} />
      <FullNews data={datas.filter((data,index) => data.id == id)} api={props.api} />
      <IndexOtherNews2 datas={datas.filter(data => data.id != id)} api={props.api} />
      <Footer api={props.api} />
    </>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      api: process.env.API,
      prevUrl: context.req.headers.referer
    },
  }
}