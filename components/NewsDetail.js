import React, { useEffect, useState } from 'react'
import { apiGet, apiPost } from '@/api/api'
import minuteForm from './minuteForm'
import month from './month'

const NewsDetail = ({ api, id, role, prev }) => {
    const [datas, setDatas] = useState({})
    const loadData = () => {
        apiGet(`${api}/index/getnews/${id}`)
            .then(result => {
                if (!result.data.err) {
                    setDatas({ ...result.data.news })
                } else
                    console.log('err')
            })
    }
    const inputChange = (event) => {
        const { name, value } = event.target
        setDatas({ ...datas, [name]: value })
    }
    const approveClick = () => {
        apiPost(`${api}/index/news/update/${id}`, datas)
            .then(result => {
                if (!result.data.err) {
                    window.location.reload()
                } else
                    alert('ไม่สำเร็จ')
            })
    }
    const uploadImg = (event, name, img) => {
        let formData = new FormData
        formData.append('name', name)
        formData.append('file', event.target.files[0])
        apiPost(`${api}/index/news/uploadimg`, formData)
            .then(result => {
                if (!result.data.err) {
                    setDatas({ ...datas, [img]: result.data })
                } else
                    alert('ไม่สำเร็จ')
            })
    }
    useEffect(() => {
        loadData()
    }, [])
    return (
        <>
            <section class="sec-boxhead-work">
                <div class="container">
                    <div class="boxhead-work text-center">
                        <p class="texthead-work">
                            แก้ไขข่าว
                        </p>
                    </div>
                </div>
            </section>

            <section class="sec-bigbox-detail">
                <div class="container">
                    <div class="bigbox-detail">

                        <p class="texthead-work text-center">
                            รายละเอียด
                        </p>



                        <div class="box-create-detail">
                            <div class="row d-flex align-items-center">
                                <div class="col-3 d-flex align-items-center">
                                    <p class="text-work text-start">
                                        หัวข้อ
                                    </p>
                                </div>
                                <div class="col-9">
                                    {/* <div class="col d-flex align-items-center justify-content-end"> */}
                                    <div class="boxtext-kg">
                                        <input type='text' class="boxwork-weight-data" style={{ width: '100%' }} name='title' value={datas.title} onChange={inputChange} />
                                    </div>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                        <div class="box-create-detail">
                            <p class="text-work text-start">
                                รูปภาพประกอบและคำอธิบาย
                            </p>
                            <div class="box-upload-detail">
                                <div class="row">
                                    <div class="col-6">

                                        <div className="box-image-upload d-flex justify-content-center align-items-center">
                                            {datas.img1
                                                ?
                                                <label className="label-box-image-upload d-flex flex-column justify-content-center align-items-center pointer" for="img-upload1">
                                                    <img style={{ 'maxWidth': '100%', 'maxHeight': '110px', 'objectFit': 'cover' }} src={`${api}/img/${datas.img1}`} alt="" />
                                                </label>
                                                :
                                                <label className="label-box-image-upload d-flex flex-column justify-content-center align-items-center pointer" for="img-upload1">
                                                    <img className="icon-img-upload" src="../images/work-create/ic-img-upload.svg" alt="" />
                                                    <p className="texthead-work text-center text-limit">เพิ่มรูปภาพ</p>
                                                </label>
                                            }
                                            <input type="file" name="" id="img-upload1" accept="image/*" className="d-none" onChange={(event) => uploadImg(event, `demo1-${id}`, 'img1')} />
                                        </div>

                                    </div>
                                    <div class="col-6">

                                        <div className="box-image-upload d-flex justify-content-center align-items-center">
                                            {datas.img2
                                                ?
                                                <label className="label-box-image-upload d-flex flex-column justify-content-center align-items-center pointer" for="img-upload2">
                                                    <img style={{ 'maxWidth': '100%', 'maxHeight': '110px', 'objectFit': 'cover' }} src={`${api}/img/${datas.img2}`} alt="" />
                                                </label>
                                                :
                                                <label className="label-box-image-upload d-flex flex-column justify-content-center align-items-center pointer" for="img-upload2">
                                                    <img className="icon-img-upload" src="../images/work-create/ic-img-upload.svg" alt="" />
                                                    <p className="texthead-work text-center text-limit">เพิ่มรูปภาพ</p>
                                                </label>
                                            }
                                            <input type="file" name="" id="img-upload2" accept="image/*" className="d-none" onChange={(event) => uploadImg(event, `demo2-${id}`, 'img2')} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <p class="text-work text-start">
                                คำอธิบาย
                            </p>
                            <textarea className="box-inputtext-description-detail" style={{ width: '100%' }} name='detail' value={datas.detail} onChange={inputChange} />
                        </div>
                        <hr class="hr-bigbox-work" />
                        <div class="bigbox-receive">
                            <div class="row">
                                <div class='col-6'>
                                    <a class="btn btn-undo-detail" href={prev}>
                                        ย้อนกลับ
                                    </a>
                                </div>
                                <div class='col-6'>
                                    <button type="button" class="btn btn-create-work w-100" data-bs-toggle="modal" data-bs-target="popup-confirm-receive" onClick={() => document.getElementById('popup-confirm-receive').style.display = 'block'}>
                                        บันทึก
                                    </button>
                                </div>
                                <div class="modal" id="popup-confirm-receive" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="btn-close btn-popup-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => document.getElementById('popup-confirm-receive').style.display = 'none'}>
                                                    <img src="../images/work-create/ic-close.svg" alt="" />
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <p class="texthead-confirm-create text-center">
                                                    ยืนยันการรับขยะ
                                                </p>
                                                <div class="box-select-confirm d-flex justify-content-evenly  align-items-center">
                                                    <div class="col-btn-select-confirm">
                                                        <button type="button" class="btn btn-select-cancel" data-bs-dismiss="modal" onClick={() => document.getElementById('popup-confirm-receive').style.display = 'none'}>ยกเลิก</button>
                                                    </div>
                                                    <div class="col-btn-select-confirm">
                                                        <button type="button" class="btn btn-select-confirm" onClick={approveClick}>ยืนยัน</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsDetail