import React, { useState } from 'react'
import infoIcon from '../images/work-create/ic-i.svg'
import closeIcon from '../images/work-create/ic-close.svg'
import { apiPost } from '@/api/api'
import timeArray from './time'

const NewOrder = ({ api }) => {
    const [outcome, setOutcome] = useState('เรียบร้อย')
    const [input1, setInput1] = useState({ weight: 0 })
    const [input2, setInput2] = useState({ weight: 0 })
    const [input3, setInput3] = useState({ weight: 0 })
    const [input4, setInput4] = useState({ weight: 0 })
    const [date, setDate] = useState({
        sinceDate: null,
        sinceTime: null,
        toDate: null,
        toTime: null
    })
    let tomorrow = new Date()
    tomorrow.setDate(new Date().getDate() + 1)
    let time = []
    let hour = new Date().getHours()
    let minutes = new Date().getMinutes()
    for (let i = 0; hour <= 24; hour++, i++) {
        if (i === 0 && minutes < 30) {
            if (minutes < 30)
                time.push([hour, '30'])
        }
        else if (hour == 24)
            time.push([24, '00'])
        else {
            time.push([hour, '00'])
            time.push([hour, '30'])
        }
    }
    const renderTime = time.map(ti => {
        return <option>{`${ti[0]}:${ti[1]}`}</option>
    })
    const renderTimeSet = timeArray.map(timeA => (
        <option>{timeA}</option>
    ))
    const inputChange = (event, func) => {
        const { name, value } = event.target
        func(prev => (
            {
                ...prev,
                [name]: value
            }
        ))
    }
    const submitClick = async () => {
        setOutcome('เรียบร้อย')
        let formData1 = new FormData
        let formData2 = new FormData
        let formData3 = new FormData
        let formData4 = new FormData
        const sinceDate = new Date(date.sinceDate)
        sinceDate.setHours(date.sinceTime.split(':')[0], date.sinceTime.split(':')[1], 0)
        const toDate = new Date(date.toDate)
        toDate.setHours(date.toTime.split(':')[0], date.toTime.split(':')[1], 0)
        // console.log(date.toTime.split(':')[0])
        if (input1.weight != 0) {
            await formData1.append('file', input1.image1 && input1.image1[0])
            await formData1.append('file', input1.image2 && input1.image2[0])
            await formData1.append('category', 1)
            await formData1.append('weight', input1.weight)
            // formData1.append('image2', input1.image2)
            await formData1.append('start_date', sinceDate)
            await formData1.append('end_date', toDate)
            await formData1.append('description', input1.description)
            apiPost(`${api}/order/add`, formData1)
                .then(result => {
                    if (!result.data.err) {
                        console.log('ok')
                    } else {
                        setOutcome('ไม่สำเร็จ')
                    }
                })
        }
        if (input2.weight != 0) {
            await formData2.append('file', input2.image1 && input2.image1[0])
            await formData2.append('file', input2.image2 && input2.image2[0])
            await formData2.append('category', 2)
            await formData2.append('weight', input2.weight)
            // formData1.append('image2', input1.image2)
            await formData2.append('start_date', sinceDate)
            await formData2.append('end_date', toDate)
            await formData2.append('description', input2.description)
            apiPost(`${api}/order/add`, formData2)
                .then(result => {
                    if (!result.data.err) {
                        console.log('ok')
                    } else {
                        setOutcome('ไม่สำเร็จ')
                    }
                })
        }
        if (input3.weight != 0) {
            await formData3.append('file', input3.image1 && input3?.image1[0])
            await formData3.append('file', input3.image2 && input3?.image2[0])
            await formData3.append('category', 3)
            await formData3.append('weight', input3.weight)
            // formData1.append('image2', input1.image2)
            await formData3.append('start_date', sinceDate)
            await formData3.append('end_date', toDate)
            await formData3.append('description', input3.description)
            apiPost(`${api}/order/add`, formData3)
                .then(result => {
                    if (!result.data.err) {
                        console.log('ok')
                    } else {
                        setOutcome('ไม่สำเร็จ')
                    }
                })
        }
        if (input4.weight != 0) {
            await formData4.append('file', input4.image1 && input4?.image1[0])
            await formData4.append('file', input4.image2 && input4?.image2[0])
            await formData4.append('category', 4)
            await formData4.append('weight', input4.weight)
            await formData4.append('start_date', sinceDate)
            await formData4.append('end_date', toDate)
            await formData4.append('description', input4.description)
            apiPost(`${api}/order/add`, formData4)
                .then(result => {
                    if (!result.data.err) {
                        console.log('ok')
                    } else {
                        setOutcome('ไม่สำเร็จ')
                    }
                })
        }
        document.getElementById('popup-confirm-create').style.display = 'none'
        document.getElementById('popup-confirm-ok').style.display = 'block'
    }
    return (
        <>
            <section className="sec-boxhead-work">
                <div className="container">
                    <div className="boxhead-work text-center">
                        <p className="texthead-work">
                            เจ้าหน้าที่ร้านค้า
                        </p>
                    </div>
                </div>
            </section>

            <section className="sec-bigbox-detail">
                <div className="container">
                    <div className="bigbox-detail">

                        <p className="texthead-work text-center">
                            กรอกข้อมูลขยะอาหาร
                        </p>

                        <hr className="hr-bigbox-work" />

                        <div className="box-create-detail">
                            <div className="row d-flex align-items-center">
                                <div className="col-6 d-flex align-items-center">
                                    <p className="text-work text-start">อาหารใกล้หมดอายุ
                                        <span>
                                            <button type="button" className="btn btn-popup-description" data-bs-toggle="modal" data-bs-target="#popup-description-example" onClick={() => document.getElementById('popup-description-example').style.display = 'block'}>
                                                <img src={infoIcon} alt="" />
                                            </button>
                                            <div className="modal" id="popup-description-example" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                <div className="modal-dialog  modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <button type="button" className="btn-close btn-popup-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => document.getElementById('popup-description-example').style.display = 'none'}>
                                                                <img src={closeIcon} alt="" />
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <p className="texthead-work text-center">
                                                                อาหารใกล้หมดอายุ
                                                            </p>

                                                            <div className="box-upload">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <img className="box-image-description-example " src="../images/work-create/img-popup-01.png" alt="" />
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <img className="box-image-description-example " src="../images/work-create/img-popup-02.png" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="texthead-work">
                                                                คำอธิบาย
                                                            </p>
                                                            <div className="box-inputtext-description-example">
                                                                <p>
                                                                    อาหารที่ขายไม่หมด หรือใกล้หมดอายุแต่ยังสามารถรับประทานได้อยู่ เช่น แกงที่ตักใส่ถุงแล้ว อาหารกล่อง ขนม ผักผลไม้สภาพดี
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </p>
                                </div>
                                <div className="col-6">
                                    <div className="col d-flex align-items-center justify-content-end">
                                        <span className="">
                                            <p className="text-work-data">น้ำหนัก</p>
                                        </span>
                                        <div className="boxtext-kg">
                                            <input type="number" name='weight' min={0} className="form-control boxwork-weight-data" id="col-boxwork-weight-data" placeholder="" onChange={(event) => inputChange(event, setInput1)} />
                                        </div>
                                        <span className="">
                                            <p className="text-work-data">กก.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <hr className="hr-work" />
                            <p className="text-recommend">*หากไม่มีให้กรอก 0 กิโลกรัม</p>
                        </div>
                        <div className="box-create-detail">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-6 col-md-6 col-8">
                                    <p className="text-work">
                                        รูปภาพประกอบและคำอธิบาย
                                    </p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-4 d-flex justify-content-end">
                                    <button type="button" className="btn  button-add" data-bs-toggle="modal" data-bs-target="#popup-description" onClick={() => document.getElementById('popup-description').style.display = 'block'}>
                                        เพิ่ม
                                    </button>
                                    <div className="modal" id="popup-description" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div className="modal-dialog  modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="btn-close btn-popup-close" data-bs-dismiss="modal" aria-label="Close">
                                                        <img src={closeIcon} alt="" onClick={() => document.getElementById('popup-description').style.display = 'none'} />
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <p className="texthead-work text-center">
                                                        อาหารใกล้หมดอายุ
                                                    </p>

                                                    <div className="box-upload">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="box-image-upload d-flex justify-content-center align-items-center">
                                                                    <input type="file" name="" id="img-upload1" accept="image/*" className="d-none" onChange={(event) => setInput1({ ...input1, 'image1': event.target.files })} />
                                                                    <label className="label-box-image-upload d-flex flex-column justify-content-center align-items-center pointer" for="img-upload1">
                                                                        <img className="icon-img-upload" src="./images/work-create/ic-img-upload.svg" alt="" />
                                                                        <p className="texthead-work text-center text-limit">{input1?.image1 ? input1.image1[0].name : 'เพิ่มรูปภาพ'}</p>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="box-image-upload d-flex justify-content-center align-items-center">
                                                                    <input type="file" name="" id="img-upload2" accept="image/*" className="d-none" onChange={(event) => setInput1({ ...input1, 'image2': event.target.files })} />
                                                                    <label className="label-box-image-upload d-flex flex-column justify-content-center align-items-center pointer" for="img-upload2">
                                                                        <img className="icon-img-upload" src="./images/work-create/ic-img-upload.svg" alt="" />
                                                                        <p className="texthead-work text-center text-limit">{input1?.image2 ? input1.image2[0].name : 'เพิ่มรูปภาพ'}</p>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="texthead-work">
                                                        คำอธิบาย
                                                    </p>
                                                    <div className="">
                                                        <textarea className="form-control form-inputtext-description" id="inputtext-description" rows="8" name='description' onChange={(event) => inputChange(event, setInput1)}></textarea>
                                                    </div>
                                                    <hr className="hr-bigbox-work" />

                                                    <a className="btn btn-create-popup w-100" onClick={() => document.getElementById('popup-description').style.display = 'none'}>ยืนยัน</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="hr-bigbox-work" />

                        <div className="box-create-detail">
                            <div className="row d-flex align-items-center">
                                <div className="col-6 d-flex align-items-center">
                                    <p className="text-work">เศษอาหาร
                                        <span>
                                            <button type="button" className="btn btn-popup-description" data-bs-toggle="modal" data-bs-target="#popup-description-example2" onClick={() => document.getElementById('popup-description-example2').style.display = 'block'}>
                                                <img src={infoIcon} alt="" />
                                            </button>
                                            <div className="modal" id="popup-description-example2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                <div className="modal-dialog  modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <button type="button" className="btn-close btn-popup-close" data-bs-dismiss="modal" aria-label="Close">
                                                                <img src={closeIcon} alt="" onClick={() => document.getElementById('popup-description-example2').style.display = 'none'} />
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <p className="texthead-work text-center">
                                                                เศษอาหาร
                                                            </p>

                                                            <div className="box-upload">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <img className="box-image-description-example " src="./images/work-create/img-popup-01.png" alt="" />
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <img className="box-image-description-example " src="./images/work-create/img-popup-02.png" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="texthead-work">
                                                                คำอธิบาย
                                                            </p>
                                                            <div className="box-inputtext-description-example">
                                                                <p>
                                                                    อาหารที่ขายไม่หมด หรือใกล้หมดอายุแต่ยังสามารถรับประทานได้อยู่ เช่น แกงที่ตักใส่ถุงแล้ว อาหารกล่อง ขนม ผักผลไม้สภาพดี
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </p>
                                </div>
                                <div className="col-6">
                                    <div className="col d-flex align-items-center justify-content-end">
                                        <span className="">
                                            <p className="text-work-data">น้ำหนัก</p>
                                        </span>
                                        <div className="boxtext-kg">
                                            <input type="number" name='weight' min={0} className="form-control boxwork-weight-data" id="col-boxwork-weight-data" placeholder="" onChange={(event) => inputChange(event, setInput2)} />
                                        </div>
                                        <span className="">
                                            <p className="text-work-data">กก.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <hr className="hr-work" />
                            <p className="text-recommend">*หากไม่มีให้กรอก 0 กิโลกรัม</p>
                        </div>
                        <div className="box-create-detail">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-6 col-md-6 col-8">
                                    <p className="text-work">
                                        รูปภาพประกอบและคำอธิบาย
                                    </p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-4 d-flex justify-content-end">
                                    <button type="button" className="btn  button-add" data-bs-toggle="modal" data-bs-target="#popup-description2" onClick={() => document.getElementById('popup-description2').style.display = 'block'}>
                                        เพิ่ม
                                    </button>
                                    <div className="modal" id="popup-description2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div className="modal-dialog  modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="btn-close btn-popup-close" data-bs-dismiss="modal" aria-label="Close">
                                                        <img src={closeIcon} alt="" onClick={() => document.getElementById('popup-description2').style.display = 'none'} />
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <p className="texthead-work text-center">
                                                        เศษอาหาร
                                                    </p>

                                                    <div className="box-upload">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="box-image-upload d-flex justify-content-center align-items-center">
                                                                    <input type="file" name="" id="img-upload2-1" accept="image/*" className="d-none" onChange={(event) => setInput2({ ...input2, 'image1': event.target.files })} />
                                                                    <label className="label-box-image-upload d-flex flex-column justify-content-center align-items-center" for="img-upload2-1">
                                                                        <img className="icon-img-upload" src="./images/work-create/ic-img-upload.svg" alt="" />
                                                                        <p className="texthead-work text-center text-limit">{input2?.image1 ? input2?.image1[0].name : 'เพิ่มรูปภาพ'}</p>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="box-image-upload d-flex justify-content-center align-items-center">
                                                                    <input type="file" name="" id="img-upload2-2" accept="image/*" className="d-none" onChange={(event) => setInput2({ ...input2, 'image2': event.target.files })} />
                                                                    <label className="label-box-image-upload d-flex flex-column justify-content-center align-items-center" for="img-upload2-2">
                                                                        <img className="icon-img-upload" src="./images/work-create/ic-img-upload.svg" alt="" />
                                                                        <p className="texthead-work text-center text-limit">{input2?.image2 ? input2?.image2[0].name : 'เพิ่มรูปภาพ'}</p>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="texthead-work">
                                                        คำอธิบาย
                                                    </p>
                                                    <div className="">
                                                        <textarea className="form-control form-inputtext-description" id="inputtext-description2" rows="8" name='description' onChange={(event) => inputChange(event, setInput2)}></textarea>
                                                    </div>
                                                    <hr className="hr-bigbox-work" />

                                                    <a className="btn btn-create-popup w-100" onClick={() => document.getElementById('popup-description2').style.display = 'none'}>ยืนยัน</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="hr-bigbox-work" />

                        <div className="box-create-detail">
                            <div className="row d-flex align-items-center">
                                <div className="col-6 d-flex align-items-center">
                                    <p className="text-work">เศษผักผลไม้
                                        <span>
                                            <button type="button" className="btn btn-popup-description3" data-bs-toggle="modal" data-bs-target="#popup-description-example3" onClick={() => document.getElementById('popup-description-example3').style.display = 'block'}>
                                                <img src={infoIcon} alt="" />
                                            </button>
                                            <div className="modal" id="popup-description-example3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                <div className="modal-dialog  modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <button type="button" className="btn-close btn-popup-close" data-bs-dismiss="modal" aria-label="Close">
                                                                <img src={closeIcon} alt="" onClick={() => document.getElementById('popup-description-example3').style.display = 'none'} />
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <p className="texthead-work text-center">
                                                                เศษผักผลไม้
                                                            </p>

                                                            <div className="box-upload">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <img className="box-image-description-example " src="./images/work-create/img-popup-01.png" alt="" />
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <img className="box-image-description-example " src="./images/work-create/img-popup-02.png" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="texthead-work">
                                                                คำอธิบาย
                                                            </p>
                                                            <div className="box-inputtext-description-example">
                                                                <p>
                                                                    อาหารที่ขายไม่หมด หรือใกล้หมดอายุแต่ยังสามารถรับประทานได้อยู่ เช่น แกงที่ตักใส่ถุงแล้ว อาหารกล่อง ขนม ผักผลไม้สภาพดี
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </p>
                                </div>
                                <div className="col-6">
                                    <div className="col d-flex align-items-center justify-content-end">
                                        <span className="">
                                            <p className="text-work-data">น้ำหนัก</p>
                                        </span>
                                        <div className="boxtext-kg">
                                            <input type="number" name='weight' min={0} className="form-control boxwork-weight-data" id="col-boxwork-weight-data" placeholder="" onChange={(event) => inputChange(event, setInput3)} />
                                        </div>
                                        <span className="">
                                            <p className="text-work-data">กก.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <hr className="hr-work" />
                            <p className="text-recommend">*หากไม่มีให้กรอก 0 กิโลกรัม</p>
                        </div>
                        <div className="box-create-detail">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-6 col-md-6 col-8">
                                    <p className="text-work">
                                        รูปภาพประกอบและคำอธิบาย
                                    </p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-4 d-flex justify-content-end">
                                    <button type="button" className="btn  button-add" data-bs-toggle="modal" data-bs-target="#popup-description3" onClick={() => document.getElementById('popup-description3').style.display = 'block'}>
                                        เพิ่ม
                                    </button>
                                    <div className="modal" id="popup-description3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div className="modal-dialog  modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="btn-close btn-popup-close" data-bs-dismiss="modal" aria-label="Close">
                                                        <img src={closeIcon} alt="" onClick={() => document.getElementById('popup-description3').style.display = 'none'} />
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <p className="texthead-work text-center">
                                                        เศษผักผลไม้
                                                    </p>

                                                    <div className="box-upload">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="box-image-upload d-flex justify-content-center align-items-center">
                                                                    <input type="file" name="" id="img-upload3-1" accept="image/*" className="d-none" onChange={(event) => setInput3({ ...input3, 'image1': event.target.files })} />
                                                                    <label className="label-box-image-upload d-flex flex-column justify-content-center align-items-center" for="img-upload3-1">
                                                                        <img className="icon-img-upload" src="./images/work-create/ic-img-upload.svg" alt="" />
                                                                        <p className="texthead-work text-center text-limit">{input3?.image1 ? input3?.image1[0].name : 'เพิ่มรูปภาพ'}</p>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="box-image-upload d-flex justify-content-center align-items-center">
                                                                    <input type="file" name="" id="img-upload3-2" accept="image/*" className="d-none" onChange={(event) => setInput3({ ...input3, 'image2': event.target.files })} />
                                                                    <label className="label-box-image-upload d-flex flex-column justify-content-center align-items-center" for="img-upload3-2">
                                                                        <img className="icon-img-upload" src="./images/work-create/ic-img-upload.svg" alt="" />
                                                                        <p className="texthead-work text-center text-limit">{input3?.image2 ? input3?.image2[0].name : 'เพิ่มรูปภาพ'}</p>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="texthead-work">
                                                        คำอธิบาย
                                                    </p>
                                                    <div className="">
                                                        <textarea className="form-control form-inputtext-description" id="inputtext-description3" rows="8" name='description' onChange={(event) => inputChange(event, setInput3)}></textarea>
                                                    </div>
                                                    <hr className="hr-bigbox-work" />

                                                    <a className="btn btn-create-popup w-100" onClick={() => document.getElementById('popup-description3').style.display = 'none'}>ยืนยัน</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="hr-bigbox-work" />

                        <div className="box-create-detail">
                            <div className="row d-flex align-items-center">
                                <div className="col-6 d-flex align-items-center">
                                    <p className="text-work">เศษเนื้อสัตว์
                                        <span>
                                            <button type="button" className="btn btn-popup-description" data-bs-toggle="modal" data-bs-target="#popup-description-example4" onClick={() => document.getElementById('popup-description-example4').style.display = 'block'}>
                                                <img src={infoIcon} alt="" />
                                            </button>
                                            <div className="modal" id="popup-description-example4" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                <div className="modal-dialog  modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <button type="button" className="btn-close btn-popup-close" data-bs-dismiss="modal" aria-label="Close">
                                                                <img src={closeIcon} alt="" onClick={() => document.getElementById('popup-description-example4').style.display = 'none'} />
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <p className="texthead-work text-center">
                                                                เศษเนื้อสัตว์
                                                            </p>

                                                            <div className="box-upload">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <img className="box-image-description-example " src="./images/work-create/img-popup-01.png" alt="" />
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <img className="box-image-description-example " src="./images/work-create/img-popup-02.png" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="texthead-work">
                                                                คำอธิบาย
                                                            </p>
                                                            <div className="box-inputtext-description-example">
                                                                <p>
                                                                    อาหารที่ขายไม่หมด หรือใกล้หมดอายุแต่ยังสามารถรับประทานได้อยู่ เช่น แกงที่ตักใส่ถุงแล้ว อาหารกล่อง ขนม ผักผลไม้สภาพดี
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </p>
                                </div>
                                <div className="col-6">
                                    <div className="col d-flex align-items-center justify-content-end">
                                        <span className="">
                                            <p className="text-work-data">น้ำหนัก</p>
                                        </span>
                                        <div className="boxtext-kg">
                                            <input type="number" name='weight' min={0} className="form-control boxwork-weight-data" id="col-boxwork-weight-data" placeholder="" onChange={(event) => inputChange(event, setInput4)} />
                                        </div>
                                        <span className="">
                                            <p className="text-work-data">กก.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <hr className="hr-work" />
                            <p className="text-recommend">*หากไม่มีให้กรอก 0 กิโลกรัม</p>
                        </div>
                        <div className="box-create-detail">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-6 col-md-6 col-sm-7 col-7">
                                    <p className="text-work">
                                        รูปภาพประกอบและคำอธิบาย
                                    </p>
                                </div>
                                <div className="col col-lg-6 col-md-6 col-sm-5 col-5 d-flex justify-content-end">
                                    <button type="button" className="btn  button-add" data-bs-toggle="modal" data-bs-target="#popup-description4" onClick={() => document.getElementById('popup-description4').style.display = 'block'}>
                                        เพิ่ม
                                    </button>
                                    <div className="modal" id="popup-description4" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div className="modal-dialog  modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="btn-close btn-popup-close" data-bs-dismiss="modal" aria-label="Close">
                                                        <img src={closeIcon} alt="" onClick={() => document.getElementById('popup-description4').style.display = 'none'} />
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <p className="texthead-work text-center">
                                                        เศษเนื้อสัตว์
                                                    </p>

                                                    <div className="box-upload">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="box-image-upload d-flex justify-content-center align-items-center">
                                                                    <input type="file" name="" id="img-upload4-1" accept="image/*" className="d-none" onChange={(event) => setInput4({ ...input4, 'image1': event.target.files })} />
                                                                    <label className="label-box-image-upload d-flex flex-column justify-content-center align-items-center" for="img-upload4-1">
                                                                        <img className="icon-img-upload" src="./images/work-create/ic-img-upload.svg" alt="" />
                                                                        <p className="texthead-work text-center text-limit">{input4?.image1 ? input4.image1[0].name : 'เพิ่มรูปภาพ'}</p>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="box-image-upload d-flex justify-content-center align-items-center">
                                                                    <input type="file" name="" id="img-upload4-2" accept="image/*" className="d-none" onChange={(event) => setInput4({ ...input4, 'image2': event.target.files })} />
                                                                    <label className="label-box-image-upload d-flex flex-column justify-content-center align-items-center" for="img-upload4-2">
                                                                        <img className="icon-img-upload" src="./images/work-create/ic-img-upload.svg" alt="" />
                                                                        <p className="texthead-work text-center text-limit">{input4?.image2 ? input4.image2[0].name : 'เพิ่มรูปภาพ'}</p>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="texthead-work">
                                                        คำอธิบาย
                                                    </p>
                                                    <div className="">
                                                        <textarea className="form-control form-inputtext-description" id="inputtext-description4" rows="8" name='description' onChange={(event) => inputChange(event, setInput4)}></textarea>
                                                    </div>
                                                    <hr className="hr-bigbox-work" />

                                                    <a className="btn btn-create-popup w-100" onClick={() => document.getElementById('popup-description4').style.display = 'none'}>ยืนยัน</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="hr-bigbox-work" />

                        <p className="texthead-work">
                            เลือกวัน/เวลาที่จะให้เข้ามารับขยะ
                        </p>

                        <div className="box-select-time">
                            <p className="text-work">
                                ระหว่างวัน/เวลา
                            </p>
                            <div className="row">
                                <div className="col-6">
                                    <select type="date" id="select-date-1" name='sinceDate' className="form-control input-select-time" onChange={(event) => inputChange(event, setDate)}>
                                        <option value={null}>กำหนดวัน</option>
                                        <option value={new Date()}>วันนี้</option>
                                        <option value={tomorrow}>พรุ่งนี้</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <select type="time" id="select-time-1" name='sinceTime' className="form-control input-select-time" placeholder="" onChange={(event) => inputChange(event, setDate)}>
                                        <option value={null}>กำหนดเวลา</option>
                                        {new Date(date.sinceDate).getDate() == new Date().getDate() ? renderTime : renderTimeSet}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="box-select-time">
                            <p className="text-work">
                                ระหว่างวัน/เวลา
                            </p>
                            <div className="row">
                                <div className="col-6">
                                    <select type="date" id="select-date-1" name='toDate' className="form-control input-select-time" onChange={(event) => inputChange(event, setDate)} disabled={date?.sinceDate == null}>
                                        <option value={null}>กำหนดวัน</option>
                                        {date.toDate == new Date() &&
                                            <option value={new Date()}>วันนี้</option>
                                        }
                                        <option value={tomorrow}>พรุ่งนี้</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <select type="time" id="select-time-1" name='toTime' className="form-control input-select-time" placeholder="" onChange={(event) => inputChange(event, setDate)} disabled={date?.sinceDate == null || date?.sinceTime == null}>
                                        <option value={null}>กำหนดเวลา</option>
                                        {new Date(date.toDate).getDate() == tomorrow.getDate() ? renderTimeSet : renderTime}
                                    </select>
                                </div>
                            </div>
                        </div>


                        <hr className="hr-bigbox-work" />

                        <div className="warp-btn-create">

                            <button type="button" className="btn btn-create-work w-100" data-bs-toggle="modal" data-bs-target="#popup-confirm-create" onClick={() => document.getElementById('popup-confirm-create').style.display = 'block'}>
                                สร้างงาน
                            </button>
                            <div className="modal" id="popup-confirm-create" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog  modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="btn-close btn-popup-close" data-bs-dismiss="modal" aria-label="Close">
                                                <img src="./images/work-create/ic-close.svg" alt="" onClick={() => document.getElementById('popup-confirm-create').style.display = 'none'} />
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <p className="texthead-confirm-create text-center">
                                                ยืนยันการสร้างงาน
                                            </p>
                                            <div className="box-select-confirm d-flex justify-content-evenly  align-items-center">
                                                <div className="col-btn-select-confirm">
                                                    <button type="button" className="btn btn-select-cancel" data-bs-dismiss="modal" onClick={() => document.getElementById('popup-confirm-create').style.display = 'none'}>ยกเลิก</button>
                                                </div>
                                                <div className="col-btn-select-confirm">
                                                    <button type="button" className="btn btn-select-confirm" onClick={() => submitClick()}>ยืนยัน</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="modal" id="popup-confirm-ok" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog  modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="btn-close btn-popup-close" data-bs-dismiss="modal" aria-label="Close">
                                            <img src="./images/work-create/ic-close.svg" alt="" onClick={() => document.getElementById('popup-confirm-ok').style.display = 'none'} />
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p id='popup-ok' className="texthead-confirm-create text-center">
                                            {outcome}
                                        </p>
                                        <div className="box-select-confirm d-flex justify-content-evenly  align-items-center">
                                            <div className="col-btn-select-confirm">
                                                <button type="button" className="btn btn-select-cancel" data-bs-dismiss="modal" onClick={() => document.getElementById('popup-confirm-ok').style.display = 'none'}>ปิด</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div >
            </section >
        </>
    )
}

export default NewOrder