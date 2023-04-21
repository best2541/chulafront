import React, { useEffect, useState } from 'react'
import infoIcon from '../images/work-create/ic-i.svg'
import closeIcon from '../images/work-create/ic-close.svg'
import location2Icon from "../images/login/location2-ic.svg"
import categoryIcon from "../images/login/category-ic.svg"
import eyeIcon from "../images/login/eye.svg"
import { apiGet, apiPost } from '@/api/api'
import timeArray from './time'
import Link from 'next/link'

const AdminOrder = ({ api }) => {
    const [filter, setFilter] = useState('Orders.createdAt')
    const [orderBy, setOrderBy] = useState('asc')
    const [datas, setDatas] = useState([])
    const inputChange = (event, func) => {
        const { name, value } = event.target
        func(prev => (
            {
                ...prev,
                [name]: value
            }
        ))
    }
    const OnOff = (id, status) => {
        apiPost(`${api}/index/news/update/${id}`, { status: status })
            .then(result => {
                if (!result.data.err) {
                    loadData()
                } else
                    alert('ไม่สำเร็จ')
            })
    }

    const loadData = () => {
        apiGet(`${api}/index/getallnews`)
            .then(result => {
                if (!result.data.err) {
                    setDatas(result.data.news)
                    console.log(result.data.news)
                } else
                    console.log('err', result.data.err)
            })
    }
    const renderOrders = datas?.map((data, index) => {
        return (
            <>
                <div class="box-detailwork-recipient">
                    <div class="row d-flex align-items-center justify-content-between">
                        <div class="col-lg-8 col-md-8 col-sm-7 col-6">
                            <a class="text-work text-start" href="">
                                <span>
                                    <img class="icon-detailwork-recipient" src={location2Icon} alt="" />
                                </span>
                                ลำดับที่{index + 1}
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-5 col-6">
                            <p class="text-work text-end">
                                {index === 0 &&
                                    <>
                                        ข่าวหลัก
                                    </>
                                }
                            </p>
                        </div>
                    </div>
                    <hr class="hr-work" />
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="">
                            <a class="btn btn-see-detail-recipient" href={`/newsdetail/${data.id}`}>
                                <span>
                                    <img class="icon-detailwork-recipient" src={eyeIcon} alt="" />
                                </span>
                                ดูรายละเอียด
                            </a>
                        </div>
                        <div class="">
                            <p class='text-work text-start'>
                                {data.status ?
                                    <>
                                        <button class='btn box-status-pass' onClick={() => OnOff(data.id, 0)}>
                                            เปิด
                                        </button>
                                    </>
                                    :
                                    <button class='btn box-status-fail' onClick={() => OnOff(data.id, 1)}>
                                        ปิด
                                    </button>
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    })

    useEffect(() => {
        loadData()
    }, [filter, orderBy])
    return (
        <>
            <section class="sec-bigbox-detail">
                <div class="container">
                    <div class="bigbox-detail scroll-vertical">
                        {renderOrders}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminOrder