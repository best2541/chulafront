import React, { useEffect, useState } from 'react'
import infoIcon from '../images/work-create/ic-i.svg'
import closeIcon from '../images/work-create/ic-close.svg'
import location2Icon from "../images/login/location2-ic.svg"
import categoryIcon from "../images/login/category-ic.svg"
import eyeIcon from "../images/login/eye.svg"
import { apiPost } from '@/api/api'
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
    const loadData = () => {
        apiPost(`${api}/order/getallorder`, { filter: filter, orderBy: orderBy })
            .then(result => {
                if (!result.data.err) {
                    setDatas(result.data.orders)
                    console.log(result.data.orders)
                } else
                    console.log('err', result.data.err)
            })
    }
    const renderOrders = datas?.map((data) => {
        return (
            <>
                <div class="box-detailwork-recipient">
                    <div class="row d-flex align-items-center justify-content-between">
                        <div class="col-lg-8 col-md-8 col-sm-7 col-6">
                            <a class="text-work text-start" href="">
                                <span>
                                    <img class="icon-detailwork-recipient" src={location2Icon} alt="" />
                                </span>
                                {data.name}
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-5 col-6">
                            <p class="text-work text-end">
                                <span>
                                    <img class="icon-detailwork-recipient" src={categoryIcon} alt="" />
                                </span>
                                {
                                    data.category == 1 ? 'อาหารใกล้หมดอายุ'
                                        : data.category == 2 ? 'เศษอาหาร'
                                            : data.category == 3 ? 'ผักผลไม้'
                                                : 'เศษเนื้อสัตว์'
                                }
                            </p>
                        </div>
                    </div>
                    <hr class="hr-work" />
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="">
                            <p class='text-work text-start'>
                                สถานะ :
                                <span class={`box-status-${data.status == 0 ? 'free' : data.status == 6 ? 'fail' : 'inprocess'}`}>
                                    {data.status == 0 ? 'ว่าง' : data.status == 6 ? 'ล้มเหลว' : 'อยู่ระหว่างดำเนินการ'}
                                </span>
                            </p>
                        </div>
                        <div class="">
                            <a class="btn btn-see-detail-recipient" href={`/orderdetail/${data.id}`}>
                                <span>
                                    <img class="icon-detailwork-recipient" src={eyeIcon} alt="" />
                                </span>
                                ดูรายละเอียด
                            </a>
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
                    <div class="bigbox-detail">

                        <div class="box-tabs-work">
                            <div class="row d-flex">
                                <div class="col-4">
                                    <Link href="/neworder">
                                        <div class="btn btn-select-confirm w-100">ล่าสุด</div>
                                    </Link>
                                </div>
                                <div class="col-4">
                                    <Link href="/showtable">
                                        <div class="btn btn-select-cancel w-100">ร้านค้า</div>
                                    </Link>
                                </div>
                                <div class="col-4">
                                    <Link href="/showall">
                                        <div class="btn btn-select-cancel w-100">ทั้งหมด</div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <hr class="hr-bigbox-work" />


                        <div class="row">
                            <div class="col-6">
                                <select id="filter-work-recipientOne" class="form-select filter-select" aria-label="Default select example" onChange={(event) => setFilter(event.target.value)}>
                                    <option value="Orders.createdAt">วันที่และเวลาสร้างงาน</option>
                                    <option value="Orders.status">สถานะ</option>
                                    <option value="Orders.category">ประเภทขยะ</option>
                                </select>
                            </div>
                            <div class="col-6">
                                <select id="filter-work-recipientTwo" class="form-select filter-select" aria-label="Default select example" onChange={(event) => setOrderBy(event.target.value)}>
                                    <option value="asc">A-Z | ก-ฮ</option>
                                    <option value="desc">Z-A | ฮ-ก</option>
                                </select>
                            </div>
                        </div>

                        <hr class="hr-bigbox-work" />
                        {renderOrders}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminOrder