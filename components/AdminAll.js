import React, { useEffect, useState } from 'react'
import infoIcon from '../images/work-create/ic-i.svg'
import closeIcon from '../images/work-create/ic-close.svg'
import location2Icon from "../images/login/location2-ic.svg"
import categoryIcon from "../images/login/category-ic.svg"
import eyeIcon from "../images/login/eye.svg"
import { apiGet, apiGetExcel, apiPost } from '@/api/api'
import timeArray from './time'
import Link from 'next/link'
import month from './month'

const AdminAll = ({ api }) => {
    const [input, setInput] = useState({})
    const [datas, setDatas] = useState([])
    const [food, setFood] = useState(0)
    const [meat, setMeat] = useState(0)
    const [fruit, setFruit] = useState(0)
    const [expFood, setExpFood] = useState(0)
    let monthExcel;
    switch (input.month) {
        case "1":
            monthExcel = "01"
            break;
        case "2":
            monthExcel = "02"
            break;
        case "3":
            monthExcel = "03"
            break;
        case "4":
            monthExcel = "04"
            break;
        case "5":
            monthExcel = "05"
            break;
        case "6":
            monthExcel = "06"
            break;
        case "7":
            monthExcel = "07"
            break;
        case "8":
            monthExcel = "08"
            break;
        case "9":
            monthExcel = "09"
            break;
        case "10":
            monthExcel = "10"
            break;
        case "11":
            monthExcel = "11"
            break;
        case "12":
            monthExcel = "12"
            break;
    }

    const renderMonth = month?.map((m, index) => (
        <option value={index + 1}>{m}</option>
    ))

    let renderYear = []
    for (let y = new Date().getFullYear(); new Date().getFullYear() - 20 < y; y--) {
        renderYear.push(y + 543)
    }

    const inputChange = (event) => {
        const { name, value } = event.target
        setInput({
            ...input,
            [name]: value
        })
    }


    const loadData = (event) => {
        // console.log(input)
        const sumCategory = input.year && monthExcel && input.category == "เลือกประเภทขยะอาหาร" ? `${api}/setting/sum_category?year=${input.year - 543}&month=${monthExcel}` :
                            input.year && monthExcel && input.category ? `${api}/setting/sum_category?year=${input.year - 543}&month=${monthExcel}&category=${input.category}` :
                            input.year && input.category ? `${api}/setting/sum_category?year=${input.year - 543}&category=${input.category}` :
                            input.year && monthExcel ? `${api}/setting/sum_category?year=${input.year - 543}&month=${monthExcel}` :
                            `${api}/setting/sum_category?year=${input.year - 543}`
        apiGet(sumCategory)
            .then(result => {
                // setFood(result.data.sum_category[0][0].weight)
                // console.log(food)
                // console.log(result.data.sum_category[0].length)


                setFood(0)
                setExpFood(0)
                setFruit(0)
                setMeat(0)

                for (let index = 0; index < result.data.sum_category[0].length; index++) {

                    switch (result.data.sum_category[0][index].category_name) {
                        case 'อาหารใกล้หมดอายุ':
                            setExpFood(result.data.sum_category[0][index].weight)
                            break;
                        case 'เศษอาหาร':
                            setFood(result.data.sum_category[0][index].weight)
                            break;
                        case 'เศษเนื้อสัตว์':
                            setMeat(result.data.sum_category[0][index].weight)
                            break;
                        case 'เศษผักผลไม้':
                            setFruit(result.data.sum_category[0][index].weight)
                            break;
                    }

                }
                // if(result.data.sum_category[0][0].weight = 'เศษผักผลไม้' ){

                // }
            })
    }
    const printExcel = async (event) => {
        event.preventDefault()
        // console.log(input.month)

        // console.log(monthExcel)

        const apiExcel =input.year && monthExcel && input.category == "เลือกประเภทขยะอาหาร" ? `${api}/setting/excel?year=${input.year - 543}&month=${monthExcel}` :
         input.year && monthExcel && input.category ? `${api}/setting/excel?year=${input.year - 543}&month=${monthExcel}&category=${input.category}` :
            input.year && input.category ? `${api}/setting/excel?year=${input.year - 543}&category=${input.category}` :
                input.year && monthExcel ? `${api}/setting/excel?year=${input.year - 543}&month=${monthExcel}` :
                    `${api}/setting/excel?year=${input.year - 543}`
        await apiGetExcel(apiExcel)
            // apiGetExcel(`${api}/setting/excel?year=2023&month=04&category=เศษอาหาร`, input)
            .then(result => {
                if (!result.data.err) {
                    // setDatas(result.data)
                    // console.log(input.year)

                    // let headerLine = result.headers['content-disposition'];
                    // let startFileNameIndex = headerLine.indexOf('"') + 1
                    // let endFileNameIndex = headerLine.lastIndexOf('"')
                    // let filename = headerLine.substring(startFileNameIndex, endFileNameIndex)
                    const url = window.URL.createObjectURL(new Blob([result.data],
                        { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
                    const link = document.createElement('a');

                    link.href = url;
                    link.setAttribute('download', 'report');
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                } else
                    console.log('err', result.data.err)
            })
    }

    return (
        <>
            <section class="sec-bigbox-detail">
                <div class="container">
                    <div class="bigbox-detail">
                        <form >
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
                                        <option value="อาหารใกล้หมดอายุ">อาหารใกล้หมดอายุ</option>
                                        <option value="เศษอาหาร">เศษอาหาร </option>
                                        <option value="เศษผักผลไม้">เศษผักผลไม้</option>
                                        <option value="เศษเนื้อสัตว์">เศษเนื้อสัตว์</option>
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
                                    <button type='button' class="btn btn-select-confirm" onClick={loadData}>ค้นหา</button>
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
                                            <div class="boxwork-weight-data" >{expFood}</div>
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
                                            <div class="boxwork-weight-data">{food}</div>
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
                                            <div class="boxwork-weight-data">{fruit}</div>
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
                                            <div class="boxwork-weight-data">{meat}</div>
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminAll