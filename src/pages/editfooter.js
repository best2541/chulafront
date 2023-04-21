import Head from 'next/head'
import { apiGet, apiPost } from '@/api/api'
import { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import EditFooterDetail from '../../components/EditFooterDetail';
import EditFooter from '../../components/EditFooter';

export default function Account(props) {
  const role = typeof window !== 'undefined' ? window?.localStorage.getItem('role') : ''
  const [datas, setDatas] = useState({})
  const [input, setInput] = useState({})
  const [edit, setEdit] = useState(true)
  const [report, setReport] = useState({})

  const inputChange = (event) => {
    const { name, value } = event.target
    setInput({
      ...datas,
      [name]: value
    })
  }
  const reportChange = (event) => {
    const { name, value } = event.target
    setReport({
      ...report,
      [name]: value
    })
  }
  const saveClick = () => {
    apiPost(`${props.api}/auth/update`, input)
      .then(result => {
        if (!result.data.err) {
          alert('ok')
        } else
          setInput(datas)

        setEdit(false)
      })
  }
  const sendEmail = () => {
    apiPost(`${props.api}/setting/sendmail`, { email: 'test@gmail.com', report: 'test' })
      .then(result => {
        if (!result.data.err) {
          alert('ok')
        } else
          console.log(result.data)
      })
  }
  useEffect(() => {
    apiGet(`${props.api}/auth/get_user`).then(result => (setDatas(result.data), setInput(result.data)))
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
      {role == 3 &&
        <>
          <EditFooter />
          <EditFooterDetail datas={input} setDatas={inputChange} cancle={() => setInput(datas)} saveClick={saveClick} edit={edit} setEdit={setEdit} sendEmail={sendEmail} reportChange={reportChange} api={props.api} />
        </>
      }
      <Footer api={props.api} />
    </>
  )
}
export async function getStaticProps(context) {
  return {
    props: {
      api: process.env.API
    },
  }
}