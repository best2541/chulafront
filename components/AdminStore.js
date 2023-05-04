import React, { useEffect, useState } from 'react'
import location2Icon from "../images/login/location2-ic.svg"
import { useRouter } from 'next/router'
import { apiGet, apiPost } from '@/api/api'
import timeArray from './time'
import Link from 'next/link'
import month from './month'

const AdminStore = ({ api }) => {
    const router = useRouter()
    const [datas, setDatas] = useState([])
    const [input, setInput] = useState({})
    const [loading, setLoading] = useState(true)

    const renderMonth = month?.map((m, index) => (
        <option value={index + 1}>{m}</option>
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
        setLoading(true)
        apiPost(`${api}/setting/gettotalall?email=${router.query.id}`, input)
            .then(result => {
                if (!result.data.err) {
                    setDatas(result.data.total)
                } else
                    console.log('err', result.data.err)
            })
            .finally(() => setLoading(false))
    }
    const printExcel = (event) => {
        apiGet(`${api}/setting/excelstore?year=${input.year}&month=${input.month}&email=${router.query.id}&category=${input.category}`, { responseType: 'blob' })
            .then(result => {
                console.log(result)
                if (!result.data.err) {
                    const href = URL.createObjectURL(result.data);
                    const link = document.createElement('a');
                    link.href = href;
                    link.setAttribute('download', 'demo.xlsx'); //or any other extension
                    document.body.appendChild(link);
                    link.click();

                    // clean up "a" element & remove ObjectURL
                    document.body.removeChild(link);
                    URL.revokeObjectURL(href);
                }
            })
    }
    const renderOrders = datas?.map((data) => {
        return (
            <>
                <div class="box-detailwork-recipient">
                    <a class="text-work text-start" href="detailwork-inspector-origin.php">
                        <span>
                            <img class="icon-detailwork-recipient" src={location2Icon} alt="" />
                        </span>
                        {data.name}
                    </a>
                </div>
            </>
        )
    })
    return (
        <>
            <section class="sec-bigbox-detail">
                <div class="container">
                    <div class="bigbox-detail">

                        <div class="box-tabs-work">
                            <div class="row d-flex">
                                <div class="col-4">
                                    <Link href="/neworder">
                                        <div class="btn btn-select-cancel w-100">ล่าสุด</div>
                                    </Link>
                                </div>
                                <div class="col-4">
                                    <Link href="/showtable">
                                        <div class="btn btn-select-confirm w-100">ร้านค้า</div>
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
                        <form onSubmit={loadData}>
                            <div class="row d-flex justify-content-center">
                                <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                                    <select id="filter-work-recipientOne" class="form-select filter-select pad-bot" aria-label="Default select example" name='category' onChange={inputChange} required>
                                        <option selected>เลือกประเภทขยะอาหาร</option>
                                        <option value='%'>ทั้งหมด</option>
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
                                            <option value={y}>{y + 543}</option>
                                        ))}
                                    </select>
                                </div>
                                <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                                    <button type="submit" class="btn btn-select-confirm">ค้นหา</button>
                                </div>
                            </div>
                        </form>
                        {loading == false &&
                            <>
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
                                                    <div class="boxwork-weight-data">{datas?.filter(d => d.category == 1).reduce((prev, curr) => prev + curr.weight, 0)}</div>
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
                                                    <div class="boxwork-weight-data">{datas?.filter(d => d.category == 2).reduce((prev, curr) => prev + curr.weight, 0)}</div>
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
                                                    <div class="boxwork-weight-data">{datas?.filter(d => d.category == 3).reduce((prev, curr) => prev + curr.weight, 0)}</div>
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
                                                    <div class="boxwork-weight-data">{datas?.filter(d => d.category == 4).reduce((prev, curr) => prev + curr.weight, 0)}</div>
                                                </div>
                                                <span class="">
                                                    <p class="text-work-data">กก.</p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr class="hr-bigbox-work" />

                                <button type="button" class="btn btn-prince" onClick={printExcel}>พิมพ์</button>
                            </>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminStore