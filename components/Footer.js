import React, { useEffect, useState } from 'react'
import facebookIcon from "../images/footer/fb.svg"
import phoneIcon from "../images/footer/ic_phone.svg"
import emailIcon from "../images/footer/ic_email.svg"
import locationIcon from "../images/footer/ic_location.svg"
import lineIcon from "../images/footer/line.svg"
import igIcon from "../images/footer/ig.svg"
import inIcon from "../images/footer/in.svg"
import ytIcon from "../images/footer/yt.svg"
import Link from 'next/link'
import { apiGet, apiPost } from '@/api/api'

function Footer(api) {
    const [datas, setDatas] = useState({})
    useEffect(() => {
        apiGet(`${api.api}/index/getfooter`).then(result => {
            if (!result.data.err)
                setDatas(result.data.footer)
            console.log(result.data)
        })
    }, [])
    return (
        <section id="footer" class="pt-4 pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-12 text-start">
                        <a href="index.php">
                            <img class="logo-footer" src="./images/footer/logo-lg-white.png" alt="" />
                        </a>
                    </div>
                    <div class="col-lg-5 col-12">
                        <div class="box-contact-footer">
                            <ul>
                                <li>
                                    <p class="text-head-footer">{datas.title}</p>
                                </li>
                                <li>
                                    <a href="" class="text-footer">
                                        <span>
                                            <img class="icon-contact" src={locationIcon} alt="" />
                                            {datas.address}
                                        </span>
                                    </a>
                                </li>
                                {/* <li>
                                    <a href="" class="text-footer ms-4">
                                        ต.บางกระสอ อ.เมืองนนทบุรี จังหวัดนนทบุรี 11000
                                    </a>
                                </li> */}
                                <li>
                                    <a href="g" class="text-footer">
                                        <span>
                                            <img class="icon-contact" src={phoneIcon} alt="" />
                                            {datas.phone}
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" class="text-footer">
                                        <span>
                                            <img class="icon-contact" src={emailIcon} alt="" />
                                            {datas.email}
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-12">
                        <p class="text-head-footer">ช่องทางการติดตาม</p>
                        <div class="box-icon-follow">
                            <span>
                                <a href="">
                                    <img class="icon-follow" src={facebookIcon} alt="" />
                                </a>
                            </span>
                            <span>
                                <a href="">
                                    <img class="icon-follow" src={lineIcon} alt="" />
                                </a>
                            </span>
                            <span>
                                <a href="">
                                    <img class="icon-follow" src={igIcon} alt="" />
                                </a>
                            </span>
                            <span>
                                <a href="">
                                    <img class="icon-follow" src={inIcon} alt="" />
                                </a>
                            </span>
                            <span>
                                <a href="">
                                    <img class="icon-follow" src={ytIcon} alt="" />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer