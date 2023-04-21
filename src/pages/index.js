import Head from 'next/head'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import IndexOtherNews from '../../components/IndexOtherNews';
import IndexNews from '../../components/IndexNews';
import Banner from '../../components/Banner';
import BannerButton from '../../components/BannerButton';
import Summaries from '../../components/Summaries';
import { apiGet } from '@/api/api';
import { useEffect, useState } from 'react';

export default function Login(props) {
  const [datas, setDatas] = useState({})
  useEffect(() => {
    apiGet(`${props.api}/index`)
      .then(result => {
        if (!result.data.err) {
          setDatas(result.data)
        }
      })
  }, [])
  return (
    <>
      <Head>
      </Head>

      <Header api={props.api} />
      <Banner api={props.api} banners={datas.banner} />
      <BannerButton />
      <Summaries datas={datas.summary} />
      <IndexNews api={props.api} datas={datas.news} />
      <IndexOtherNews api={props.api} datas={datas.news} />
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