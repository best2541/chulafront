import React, { useEffect, useState } from 'react'
import infoIcon from '../images/work-create/ic-i.svg'
import closeIcon from '../images/work-create/ic-close.svg'
import location2Icon from "../images/login/location2-ic.svg"
import categoryIcon from "../images/login/category-ic.svg"
import eyeIcon from "../images/login/eye.svg"
import { apiPost } from '@/api/api'
import timeArray from './time'
import Link from 'next/link'
import month from './month'

const AdminAll = ({ api }) => {
    const [input, setInput] = useState({})
    const [datas, setDatas] = useState([])

    const renderMonth = month?.map((m, index) => (
        <option value={index}>{m}</option>
    ))

    let renderYear = []
    for (let y = new Date().getFullYear(); new Date().getFullYear() - 20 < y; y--) {
        renderYear.push(y)
    }

    const inputChange = (event) => {
        const { name, value } = event.target
        setInput({
            ...input,
            [name]: value
        })
    }
    const loadData = (event) => {
        event.preventDefault()
        console.log(input)
        // apiPost(`${api}/order/getallorder`, input)
        //     .then(result => {
        //         if (!result.data.err) {
        //             setDatas(result.data.orders)
        //             console.log(result.data.orders)
        //         } else
        //             console.log('err', result.data.err)
        //     })
    }

    return (
        <>
            <section class="sec-bigbox-detail">
                <div class="container">
                    <div class="bigbox-detail">
                        <form onSubmit={loadData}>
                            <div class="box-tabs-work">
                                <div class="row d-flex">
                                    <div class="col-4">
                                        <Link href="/neworder">
                                            <div class="btn btn-select-cancel w-100">ล่าสุด</div>
                                        </Link>
                                    </div>
                                    <div class="col-4">
                                        <Link href="/showtable">
                                            <div class="btn btn-select-cancel w-100">ร้านค้า</div>
                                        </Link>
                                    </div>
                                    <div class="col-4">
                                        <Link href="/showall">
                                            <div class="btn btn-select-confirm w-100">ทั้งหมด</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <hr class="hr-bigbox-work" />
                            <div class="row d-flex justify-content-center">
                                <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                                    <select id="filter-work-recipientOne" class="form-select filter-select pad-bot" aria-label="Default select example" name='category' onChange={inputChange} required>
                                        <option selected>เลือกประเภทขยะอาหาร</option>
                                        <option value="1">อาหารใกล้หมดอายุ</option>
                                        <option value="2">เศษอาหาร </option>
                                        <option value="3">เศษผักผลไม้</option>
                                        <option value="4">เศษเนื้อสัตว์</option>
                                    </select>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                                    <select id="filter-work-recipientTwo" class="form-select filter-select pad-bot" aria-label="Default select example" name='month' onChange={inputChange} required>
                                        <option selected>เลือกเดือน</option>
                                        {renderMonth}
                                    </select>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                                    <select id="filter-work-recipientThree" class="form-select filter-select pad-bot" aria-label="Default select example" name='year' onChange={inputChange} required>
                                        <option selected>เลือกปี</option>
                                        {renderYear.map(y => (
                                            <option>{y}</option>
                                        ))}
                                    </select>
                                </div>
                                <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                                    <button type="submit" class="btn btn-select-confirm">ค้นหา</button>
                                </div>
                            </div>
                        </form>
                        <hr class="hr-bigbox-work" />
                        <div class="box-create-detail">
                            <div class="row d-flex align-items-center">
                                <div class="col-6 d-flex align-items-center">
                                    <p class="text-work text-start">
                                        อาหารใกล้หมดอายุ
                                    </p>
                                </div>
                                <div class="col-6">
                                    <div class="col d-flex align-items-center justify-content-end">
                                        <span class="">
                                            <p class="text-work-data">น้ำหนัก</p>
                                        </span>
                                        <div class="boxtext-kg">
                                            <div class="boxwork-weight-data">20</div>
                                        </div>
                                        <span class="">
                                            <p class="text-work-data">กก.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="hr-bigbox-work" />

                        <div class="box-create-detail">
                            <div class="row d-flex align-items-center">
                                <div class="col-6 d-flex align-items-center">
                                    <p class="text-work text-start">
                                        เศษอาหาร
                                    </p>
                                </div>
                                <div class="col-6">
                                    <div class="col d-flex align-items-center justify-content-end">
                                        <span class="">
                                            <p class="text-work-data">น้ำหนัก</p>
                                        </span>
                                        <div class="boxtext-kg">
                                            <div class="boxwork-weight-data">20</div>
                                        </div>
                                        <span class="">
                                            <p class="text-work-data">กก.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="hr-bigbox-work" />

                        <div class="box-create-detail">
                            <div class="row d-flex align-items-center">
                                <div class="col-6 d-flex align-items-center">
                                    <p class="text-work text-start">
                                        เศษผักผลไม้
                                    </p>
                                </div>
                                <div class="col-6">
                                    <div class="col d-flex align-items-center justify-content-end">
                                        <span class="">
                                            <p class="text-work-data">น้ำหนัก</p>
                                        </span>
                                        <div class="boxtext-kg">
                                            <div class="boxwork-weight-data">20</div>
                                        </div>
                                        <span class="">
                                            <p class="text-work-data">กก.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="hr-bigbox-work" />

                        <div class="box-create-detail">
                            <div class="row d-flex align-items-center">
                                <div class="col-6 d-flex align-items-center">
                                    <p class="text-work text-start">
                                        เศษเนื้อสัตว์
                                    </p>
                                </div>
                                <div class="col-6">
                                    <div class="col d-flex align-items-center justify-content-end">
                                        <span class="">
                                            <p class="text-work-data">น้ำหนัก</p>
                                        </span>
                                        <div class="boxtext-kg">
                                            <div class="boxwork-weight-data">20</div>
                                        </div>
                                        <span class="">
                                            <p class="text-work-data">กก.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="hr-bigbox-work" />

                        <button type="button" class="btn btn-prince">พิมพ์</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminAll